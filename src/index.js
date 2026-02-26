import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment, useState } from '@wordpress/element';
import { BlockControls } from '@wordpress/block-editor';
import {
	ToolbarGroup,
	ToolbarButton,
	Modal,
	Button,
	TextControl,
	FormFileUpload,
	Notice,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

// ---------------------------------------------------------------------------
// Language detection data structures
// ---------------------------------------------------------------------------

const LANGUAGE_MAP = {
	// ISO 639-1 two-letter codes
	af: 'Afrikaans',
	ar: 'Arabic',
	bg: 'Bulgarian',
	bn: 'Bengali',
	ca: 'Catalan',
	cs: 'Czech',
	cy: 'Welsh',
	da: 'Danish',
	de: 'German',
	el: 'Greek',
	en: 'English',
	es: 'Spanish',
	et: 'Estonian',
	eu: 'Basque',
	fa: 'Persian',
	fi: 'Finnish',
	fr: 'French',
	ga: 'Irish',
	gl: 'Galician',
	gu: 'Gujarati',
	he: 'Hebrew',
	hi: 'Hindi',
	hr: 'Croatian',
	hu: 'Hungarian',
	hy: 'Armenian',
	id: 'Indonesian',
	is: 'Icelandic',
	it: 'Italian',
	ja: 'Japanese',
	ka: 'Georgian',
	kn: 'Kannada',
	ko: 'Korean',
	lt: 'Lithuanian',
	lv: 'Latvian',
	mk: 'Macedonian',
	ml: 'Malayalam',
	mr: 'Marathi',
	ms: 'Malay',
	mt: 'Maltese',
	nl: 'Dutch',
	no: 'Norwegian',
	pa: 'Punjabi',
	pl: 'Polish',
	pt: 'Portuguese',
	ro: 'Romanian',
	ru: 'Russian',
	sk: 'Slovak',
	sl: 'Slovenian',
	sq: 'Albanian',
	sr: 'Serbian',
	sv: 'Swedish',
	sw: 'Swahili',
	ta: 'Tamil',
	te: 'Telugu',
	th: 'Thai',
	tl: 'Filipino',
	tr: 'Turkish',
	uk: 'Ukrainian',
	ur: 'Urdu',
	vi: 'Vietnamese',
	zh: 'Chinese',
	zu: 'Zulu',

	// Common English full-name spellings
	english: 'English',
	spanish: 'Spanish',
	french: 'French',
	german: 'German',
	italian: 'Italian',
	portuguese: 'Portuguese',
	russian: 'Russian',
	japanese: 'Japanese',
	korean: 'Korean',
	chinese: 'Chinese',
	arabic: 'Arabic',
	hindi: 'Hindi',
	dutch: 'Dutch',
	polish: 'Polish',
	turkish: 'Turkish',
	swedish: 'Swedish',
	danish: 'Danish',
	norwegian: 'Norwegian',
	finnish: 'Finnish',
	greek: 'Greek',
	czech: 'Czech',
	romanian: 'Romanian',
	hungarian: 'Hungarian',
	ukrainian: 'Ukrainian',
	thai: 'Thai',
	vietnamese: 'Vietnamese',
	indonesian: 'Indonesian',
	malay: 'Malay',
	hebrew: 'Hebrew',
	persian: 'Persian',
	bengali: 'Bengali',
};

// Overrides for ambiguous BCP 47 tags (e.g. zh variants)
const BCP47_OVERRIDE_MAP = {
	'zh-cn': { srcLang: 'zh-CN', label: 'Chinese (Simplified)' },
	'zh-tw': { srcLang: 'zh-TW', label: 'Chinese (Traditional)' },
	'zh-hk': { srcLang: 'zh-HK', label: 'Chinese (Traditional, HK)' },
	'zh-sg': { srcLang: 'zh-SG', label: 'Chinese (Simplified, SG)' },
};

/**
 * Detect language from a VTT filename using BCP 47 heuristics.
 *
 * Examples:
 *   "captions.en.vtt"     → { srcLang: "en",    label: "English" }
 *   "video.de-DE.vtt"     → { srcLang: "de-DE", label: "German" }
 *   "zh-CN.vtt"           → { srcLang: "zh-CN", label: "Chinese (Simplified)" }
 *   "video_spanish.vtt"   → { srcLang: "es",    label: "Spanish" }
 *   "fr-CA.vtt"           → { srcLang: "fr-CA", label: "French (CA)" }
 *   "unlabeled.vtt"       → { srcLang: "",      label: "" }
 *
 * @param {string} filename
 * @returns {{ srcLang: string, label: string }}
 */
function detectLanguageFromFilename( filename ) {
	if ( ! filename ) return { srcLang: '', label: '' };

	// Strip .vtt extension (case-insensitive)
	const withoutExt = filename.replace( /\.vtt$/i, '' );

	// Split on dots, underscores, spaces.
	// Hyphenated tokens stay intact so BCP 47 codes like "de-DE", "fr-CA" remain one token.
	const tokens = withoutExt.split( /[._\s]+/ ).filter( Boolean );

	// Iterate right-to-left — language tag is almost always the last segment
	for ( let i = tokens.length - 1; i >= 0; i-- ) {
		const token = tokens[ i ];
		const lower = token.toLowerCase();

		// Step 1: BCP 47 override map (handles zh-CN, zh-TW ambiguity etc.)
		if ( BCP47_OVERRIDE_MAP[ lower ] ) {
			return BCP47_OVERRIDE_MAP[ lower ];
		}

		// Step 2: Detect any generic BCP 47 pattern: 2–3 letter lang + hyphen + 2–4 letter region
		// Handles: de-DE, bg-BG, it-IT, uk-UA, fr-CA, en-US, pt-BR, es-MX, sr-Latn, ...
		const bcp47 = token.match( /^([a-zA-Z]{2,3})-([a-zA-Z]{2,4})$/ );
		if ( bcp47 ) {
			const langCode = bcp47[ 1 ].toLowerCase(); // "de", "fr", "uk"
			const regionCode = bcp47[ 2 ].toUpperCase(); // "DE", "CA", "UA"
			const langLabel = LANGUAGE_MAP[ langCode ];
			if ( langLabel ) {
				// When region == lang uppercased (de→DE, it→IT, bg→BG) no suffix needed
				const label =
					regionCode === langCode.toUpperCase()
						? langLabel
						: `${ langLabel } (${ regionCode })`;
				return { srcLang: `${ langCode }-${ regionCode }`, label };
			}
		}

		// Step 3: Plain ISO 639-1 code or full English name
		const entry = LANGUAGE_MAP[ lower ];
		if ( entry ) {
			return { srcLang: lower, label: entry };
		}
	}

	return { srcLang: '', label: '' };
}

// ---------------------------------------------------------------------------
// BulkCaptionModal component
// ---------------------------------------------------------------------------

function BulkCaptionModal( { attributes, setAttributes, onClose } ) {
	const [ pendingFiles, setPendingFiles ] = useState( [] );
	const [ uploading, setUploading ] = useState( false );
	const [ error, setError ] = useState( null );

	function addFilesToPending( files ) {
		const vttFiles = Array.from( files ).filter(
			( f ) => f.name.toLowerCase().endsWith( '.vtt' ) || f.type === 'text/vtt'
		);
		const newItems = vttFiles.map( ( file ) => {
			const detected = detectLanguageFromFilename( file.name );
			return { file, srcLang: detected.srcLang, label: detected.label };
		} );
		setPendingFiles( ( prev ) => [ ...prev, ...newItems ] );
	}

	function handleDrop( event ) {
		event.preventDefault();
		addFilesToPending( event.dataTransfer.files );
	}

	function handleDragOver( event ) {
		event.preventDefault();
	}

	function handleFileInput( event ) {
		addFilesToPending( event.target.files );
	}

	function updatePending( index, field, value ) {
		setPendingFiles( ( prev ) =>
			prev.map( ( item, i ) =>
				i === index ? { ...item, [ field ]: value } : item
			)
		);
	}

	function removePending( index ) {
		setPendingFiles( ( prev ) => prev.filter( ( _, i ) => i !== index ) );
	}

	function handleApply() {
		setUploading( true );
		setError( null );

		const mediaUpload =
			wp.data.select( 'core/block-editor' ).getSettings().mediaUpload;
		const currentTracks = attributes.tracks || [];

		const results = new Array( pendingFiles.length ).fill( null );
		let completedCount = 0;

		pendingFiles.forEach( ( { file, srcLang, label }, index ) => {
			mediaUpload( {
				allowedTypes: [ 'text/vtt' ],
				filesList: [ file ],
				onFileChange: ( [ media ] ) => {
					const url = media && media.url;
					if ( ! url || url.startsWith( 'blob:' ) ) return; // still uploading
					results[ index ] = { src: url, srcLang, label };
					completedCount++;
					if ( completedCount === pendingFiles.length ) {
						const validTracks = results.filter( Boolean );
						setAttributes( {
							tracks: [ ...currentTracks, ...validTracks ],
						} );
						setUploading( false );
						onClose();
					}
				},
				onError: () => {
					results[ index ] = null;
					completedCount++;
					if ( completedCount === pendingFiles.length ) {
						const validTracks = results.filter( Boolean );
						if ( validTracks.length ) {
							setAttributes( {
								tracks: [ ...currentTracks, ...validTracks ],
							} );
						}
						setError(
							__(
								'Some files failed to upload.',
								'bulk-caption-upload'
							)
						);
						setUploading( false );
					}
				},
			} );
		} );
	}

	return (
		<Modal
			title={ __( 'Bulk Upload Captions', 'bulk-caption-upload' ) }
			onRequestClose={ onClose }
			style={ { maxWidth: '640px', width: '100%' } }
		>
			<div
				className="bcu-dropzone"
				onDragOver={ handleDragOver }
				onDrop={ handleDrop }
				style={ {
					border: '2px dashed #ccc',
					borderRadius: '4px',
					padding: '24px',
					textAlign: 'center',
					marginBottom: '16px',
					backgroundColor: '#f9f9f9',
					cursor: 'pointer',
				} }
			>
				<FormFileUpload
					multiple
					accept=".vtt,text/vtt"
					onChange={ handleFileInput }
					render={ ( { openFileDialog } ) => (
						<Button variant="secondary" onClick={ openFileDialog }>
							{ __(
								'Drop .vtt files here, or click to browse',
								'bulk-caption-upload'
							) }
						</Button>
					) }
				/>
				<p style={ { margin: '8px 0 0', color: '#757575', fontSize: '12px' } }>
					{ __( 'Accepts .vtt files only', 'bulk-caption-upload' ) }
				</p>
			</div>

			{ pendingFiles.length > 0 && (
				<table style={ { width: '100%', borderCollapse: 'collapse', marginBottom: '16px' } }>
					<thead>
						<tr>
							<th style={ { textAlign: 'left', padding: '6px 8px', borderBottom: '1px solid #ddd', fontSize: '12px' } }>
								{ __( 'File', 'bulk-caption-upload' ) }
							</th>
							<th style={ { textAlign: 'left', padding: '6px 8px', borderBottom: '1px solid #ddd', fontSize: '12px' } }>
								{ __( 'Language Code', 'bulk-caption-upload' ) }
							</th>
							<th style={ { textAlign: 'left', padding: '6px 8px', borderBottom: '1px solid #ddd', fontSize: '12px' } }>
								{ __( 'Label', 'bulk-caption-upload' ) }
							</th>
							<th style={ { width: '32px', borderBottom: '1px solid #ddd' } }></th>
						</tr>
					</thead>
					<tbody>
						{ pendingFiles.map( ( item, i ) => (
							<tr key={ i }>
								<td style={ { padding: '4px 8px', fontSize: '13px', maxWidth: '180px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }>
									{ item.file.name }
								</td>
								<td style={ { padding: '4px 8px' } }>
									<TextControl
										value={ item.srcLang }
										onChange={ ( v ) => updatePending( i, 'srcLang', v ) }
										placeholder="en"
										hideLabelFromVision
										label={ __( 'Language Code', 'bulk-caption-upload' ) }
										style={ { margin: 0 } }
									/>
								</td>
								<td style={ { padding: '4px 8px' } }>
									<TextControl
										value={ item.label }
										onChange={ ( v ) => updatePending( i, 'label', v ) }
										placeholder="English"
										hideLabelFromVision
										label={ __( 'Label', 'bulk-caption-upload' ) }
										style={ { margin: 0 } }
									/>
								</td>
								<td style={ { padding: '4px 8px', textAlign: 'center' } }>
									<Button
										isDestructive
										variant="link"
										onClick={ () => removePending( i ) }
										label={ __( 'Remove', 'bulk-caption-upload' ) }
									>
										✕
									</Button>
								</td>
							</tr>
						) ) }
					</tbody>
				</table>
			) }

			{ error && (
				<Notice status="error" isDismissible={ false } style={ { marginBottom: '16px' } }>
					{ error }
				</Notice>
			) }

			<div style={ { display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '8px' } }>
				<Button variant="secondary" onClick={ onClose } disabled={ uploading }>
					{ __( 'Cancel', 'bulk-caption-upload' ) }
				</Button>
				<Button
					variant="primary"
					isBusy={ uploading }
					disabled={ ! pendingFiles.length || uploading }
					onClick={ handleApply }
				>
					{ pendingFiles.length === 0
						? __( 'Upload & Apply', 'bulk-caption-upload' )
						: `${ __( 'Upload & Apply', 'bulk-caption-upload' ) } (${ pendingFiles.length } ${ pendingFiles.length !== 1 ? __( 'files', 'bulk-caption-upload' ) : __( 'file', 'bulk-caption-upload' ) })` }
				</Button>
			</div>
		</Modal>
	);
}

// ---------------------------------------------------------------------------
// Toolbar icon — Presto's CC icon with a "+" badge in the same SVG viewBox
// ---------------------------------------------------------------------------

const bulkUploadIcon = (
	<svg viewBox="0 0 38 25" fill="none" xmlns="http://www.w3.org/2000/svg">
		{ /* CC shape — identical to Presto's captionIcon */ }
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M17.5014 20.2854H28.6316V0.764648H0.110825V20.2854H11.241L14.3712 24.2854L17.5014 20.2854ZM14.3712 21.0401L16.5269 18.2854H26.6316V2.76465H2.11082V18.2854H12.2155L14.3712 21.0401Z"
		/>
		<path d="M10.4503 14.9446C9.56226 14.9446 8.76226 14.7606 8.05026 14.3926C7.33826 14.0166 6.77826 13.4966 6.37026 12.8326C5.97026 12.1606 5.77026 11.4006 5.77026 10.5526C5.77026 9.70464 5.97026 8.94864 6.37026 8.28464C6.77826 7.61264 7.33826 7.09264 8.05026 6.72464C8.76226 6.34864 9.56226 6.16064 10.4503 6.16064C11.2663 6.16064 11.9943 6.30464 12.6343 6.59264C13.2743 6.88064 13.8023 7.29664 14.2183 7.84064L12.4303 9.43664C11.9103 8.78064 11.2983 8.45264 10.5943 8.45264C10.0023 8.45264 9.52626 8.64464 9.16626 9.02864C8.80626 9.40464 8.62626 9.91264 8.62626 10.5526C8.62626 11.1926 8.80626 11.7046 9.16626 12.0886C9.52626 12.4646 10.0023 12.6526 10.5943 12.6526C11.2983 12.6526 11.9103 12.3246 12.4303 11.6686L14.2183 13.2646C13.8023 13.8086 13.2743 14.2246 12.6343 14.5126C11.9943 14.8006 11.2663 14.9446 10.4503 14.9446Z" />
		<path d="M19.2042 14.9446C18.3162 14.9446 17.5162 14.7606 16.8042 14.3926C16.0922 14.0166 15.5322 13.4966 15.1242 12.8326C14.7242 12.1606 14.5242 11.4006 14.5242 10.5526C14.5242 9.70464 14.7242 8.94864 15.1242 8.28464C15.5322 7.61264 16.0922 7.09264 16.8042 6.72464C17.5162 6.34864 18.3162 6.16064 19.2042 6.16064C20.0202 6.16064 20.7482 6.30464 21.3882 6.59264C22.0282 6.88064 22.5562 7.29664 22.9722 7.84064L21.1842 9.43664C20.6642 8.78064 20.0522 8.45264 19.3482 8.45264C18.7562 8.45264 18.2802 8.64464 17.9202 9.02864C17.5602 9.40464 17.3802 9.91264 17.3802 10.5526C17.3802 11.1926 17.5602 11.7046 17.9202 12.0886C18.2802 12.4646 18.7562 12.6526 19.3482 12.6526C20.0522 12.6526 20.6642 12.3246 21.1842 11.6686L22.9722 13.2646C22.5562 13.8086 22.0282 14.2246 21.3882 14.5126C20.7482 14.8006 20.0202 14.9446 19.2042 14.9446Z" />
		{ /* "+" indicator — two filled rounded rects forming a cross */ }
		<rect x="33.1" y="1.5" width="1.8" height="8" rx="0.7" />
		<rect x="30" y="4.6" width="8" height="1.8" rx="0.7" />
	</svg>
);

// ---------------------------------------------------------------------------
// Higher-Order Component — injects toolbar button into Presto Player blocks
// ---------------------------------------------------------------------------

const withBulkCaptionUpload = createHigherOrderComponent( ( BlockEdit ) => {
	return function BulkCaptionBlockEdit( props ) {
		const [ isModalOpen, setIsModalOpen ] = useState( false );

		// Only target Presto Player blocks that have a `tracks` attribute
		if (
			! props.name.startsWith( 'presto-player/' ) ||
			! Array.isArray( props.attributes.tracks )
		) {
			return <BlockEdit { ...props } />;
		}

		return (
			<Fragment>
				<BlockEdit { ...props } />
				<BlockControls>
					<ToolbarGroup>
						<ToolbarButton
							label={ __( 'Bulk Upload Captions', 'bulk-caption-upload' ) }
							icon={ bulkUploadIcon }
							onClick={ () => setIsModalOpen( true ) }
						/>
					</ToolbarGroup>
				</BlockControls>
				{ isModalOpen && (
					<BulkCaptionModal
						attributes={ props.attributes }
						setAttributes={ props.setAttributes }
						onClose={ () => setIsModalOpen( false ) }
					/>
				) }
			</Fragment>
		);
	};
}, 'withBulkCaptionUpload' );

addFilter(
	'editor.BlockEdit',
	'bulk-caption-upload/with-bulk-upload',
	withBulkCaptionUpload
);
