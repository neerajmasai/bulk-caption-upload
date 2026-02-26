/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/compose"
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["compose"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/hooks"
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
(module) {

module.exports = window["wp"]["hooks"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);








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
  bengali: 'Bengali'
};

// Overrides for ambiguous BCP 47 tags (e.g. zh variants)
const BCP47_OVERRIDE_MAP = {
  'zh-cn': {
    srcLang: 'zh-CN',
    label: 'Chinese (Simplified)'
  },
  'zh-tw': {
    srcLang: 'zh-TW',
    label: 'Chinese (Traditional)'
  },
  'zh-hk': {
    srcLang: 'zh-HK',
    label: 'Chinese (Traditional, HK)'
  },
  'zh-sg': {
    srcLang: 'zh-SG',
    label: 'Chinese (Simplified, SG)'
  }
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
function detectLanguageFromFilename(filename) {
  if (!filename) return {
    srcLang: '',
    label: ''
  };

  // Strip .vtt extension (case-insensitive)
  const withoutExt = filename.replace(/\.vtt$/i, '');

  // Split on dots, underscores, spaces.
  // Hyphenated tokens stay intact so BCP 47 codes like "de-DE", "fr-CA" remain one token.
  const tokens = withoutExt.split(/[._\s]+/).filter(Boolean);

  // Iterate right-to-left — language tag is almost always the last segment
  for (let i = tokens.length - 1; i >= 0; i--) {
    const token = tokens[i];
    const lower = token.toLowerCase();

    // Step 1: BCP 47 override map (handles zh-CN, zh-TW ambiguity etc.)
    if (BCP47_OVERRIDE_MAP[lower]) {
      return BCP47_OVERRIDE_MAP[lower];
    }

    // Step 2: Detect any generic BCP 47 pattern: 2–3 letter lang + hyphen + 2–4 letter region
    // Handles: de-DE, bg-BG, it-IT, uk-UA, fr-CA, en-US, pt-BR, es-MX, sr-Latn, ...
    const bcp47 = token.match(/^([a-zA-Z]{2,3})-([a-zA-Z]{2,4})$/);
    if (bcp47) {
      const langCode = bcp47[1].toLowerCase(); // "de", "fr", "uk"
      const regionCode = bcp47[2].toUpperCase(); // "DE", "CA", "UA"
      const langLabel = LANGUAGE_MAP[langCode];
      if (langLabel) {
        // When region == lang uppercased (de→DE, it→IT, bg→BG) no suffix needed
        const label = regionCode === langCode.toUpperCase() ? langLabel : `${langLabel} (${regionCode})`;
        return {
          srcLang: `${langCode}-${regionCode}`,
          label
        };
      }
    }

    // Step 3: Plain ISO 639-1 code or full English name
    const entry = LANGUAGE_MAP[lower];
    if (entry) {
      return {
        srcLang: lower,
        label: entry
      };
    }
  }
  return {
    srcLang: '',
    label: ''
  };
}

// ---------------------------------------------------------------------------
// BulkCaptionModal component
// ---------------------------------------------------------------------------

function BulkCaptionModal({
  attributes,
  setAttributes,
  onClose
}) {
  const [pendingFiles, setPendingFiles] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const [uploading, setUploading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  function addFilesToPending(files) {
    const vttFiles = Array.from(files).filter(f => f.name.toLowerCase().endsWith('.vtt') || f.type === 'text/vtt');
    const newItems = vttFiles.map(file => {
      const detected = detectLanguageFromFilename(file.name);
      return {
        file,
        srcLang: detected.srcLang,
        label: detected.label
      };
    });
    setPendingFiles(prev => [...prev, ...newItems]);
  }
  function handleDrop(event) {
    event.preventDefault();
    addFilesToPending(event.dataTransfer.files);
  }
  function handleDragOver(event) {
    event.preventDefault();
  }
  function handleFileInput(event) {
    addFilesToPending(event.target.files);
  }
  function updatePending(index, field, value) {
    setPendingFiles(prev => prev.map((item, i) => i === index ? {
      ...item,
      [field]: value
    } : item));
  }
  function removePending(index) {
    setPendingFiles(prev => prev.filter((_, i) => i !== index));
  }
  function handleApply() {
    setUploading(true);
    setError(null);
    const mediaUpload = wp.data.select('core/block-editor').getSettings().mediaUpload;
    const currentTracks = attributes.tracks || [];
    const results = new Array(pendingFiles.length).fill(null);
    let completedCount = 0;
    pendingFiles.forEach(({
      file,
      srcLang,
      label
    }, index) => {
      mediaUpload({
        allowedTypes: ['text/vtt'],
        filesList: [file],
        onFileChange: ([media]) => {
          const url = media && media.url;
          if (!url || url.startsWith('blob:')) return; // still uploading
          results[index] = {
            src: url,
            srcLang,
            label
          };
          completedCount++;
          if (completedCount === pendingFiles.length) {
            const validTracks = results.filter(Boolean);
            setAttributes({
              tracks: [...currentTracks, ...validTracks]
            });
            setUploading(false);
            onClose();
          }
        },
        onError: () => {
          results[index] = null;
          completedCount++;
          if (completedCount === pendingFiles.length) {
            const validTracks = results.filter(Boolean);
            if (validTracks.length) {
              setAttributes({
                tracks: [...currentTracks, ...validTracks]
              });
            }
            setError((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Some files failed to upload.', 'bulk-caption-upload'));
            setUploading(false);
          }
        }
      });
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Bulk Upload Captions', 'bulk-caption-upload'),
    onRequestClose: onClose,
    style: {
      maxWidth: '640px',
      width: '100%'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bcu-dropzone",
    onDragOver: handleDragOver,
    onDrop: handleDrop,
    style: {
      border: '2px dashed #ccc',
      borderRadius: '4px',
      padding: '24px',
      textAlign: 'center',
      marginBottom: '16px',
      backgroundColor: '#f9f9f9',
      cursor: 'pointer'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.FormFileUpload, {
    multiple: true,
    accept: ".vtt,text/vtt",
    onChange: handleFileInput,
    render: ({
      openFileDialog
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
      variant: "secondary",
      onClick: openFileDialog
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Drop .vtt files here, or click to browse', 'bulk-caption-upload'))
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      margin: '8px 0 0',
      color: '#757575',
      fontSize: '12px'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Accepts .vtt files only', 'bulk-caption-upload'))), pendingFiles.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '16px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    style: {
      textAlign: 'left',
      padding: '6px 8px',
      borderBottom: '1px solid #ddd',
      fontSize: '12px'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('File', 'bulk-caption-upload')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    style: {
      textAlign: 'left',
      padding: '6px 8px',
      borderBottom: '1px solid #ddd',
      fontSize: '12px'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Language Code', 'bulk-caption-upload')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    style: {
      textAlign: 'left',
      padding: '6px 8px',
      borderBottom: '1px solid #ddd',
      fontSize: '12px'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Label', 'bulk-caption-upload')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    style: {
      width: '32px',
      borderBottom: '1px solid #ddd'
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, pendingFiles.map((item, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    key: i
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    style: {
      padding: '4px 8px',
      fontSize: '13px',
      maxWidth: '180px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, item.file.name), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    style: {
      padding: '4px 8px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    value: item.srcLang,
    onChange: v => updatePending(i, 'srcLang', v),
    placeholder: "en",
    hideLabelFromVision: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Language Code', 'bulk-caption-upload'),
    style: {
      margin: 0
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    style: {
      padding: '4px 8px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    value: item.label,
    onChange: v => updatePending(i, 'label', v),
    placeholder: "English",
    hideLabelFromVision: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Label', 'bulk-caption-upload'),
    style: {
      margin: 0
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    style: {
      padding: '4px 8px',
      textAlign: 'center'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    isDestructive: true,
    variant: "link",
    onClick: () => removePending(i),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Remove', 'bulk-caption-upload')
  }, "\u2715")))))), error && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Notice, {
    status: "error",
    isDismissible: false,
    style: {
      marginBottom: '16px'
    }
  }, error), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '8px',
      marginTop: '8px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "secondary",
    onClick: onClose,
    disabled: uploading
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Cancel', 'bulk-caption-upload')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "primary",
    isBusy: uploading,
    disabled: !pendingFiles.length || uploading,
    onClick: handleApply
  }, pendingFiles.length === 0 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Upload & Apply', 'bulk-caption-upload') : `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Upload & Apply', 'bulk-caption-upload')} (${pendingFiles.length} ${pendingFiles.length !== 1 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('files', 'bulk-caption-upload') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('file', 'bulk-caption-upload')})`)));
}

// ---------------------------------------------------------------------------
// Higher-Order Component — injects toolbar button into Presto Player blocks
// ---------------------------------------------------------------------------

const withBulkCaptionUpload = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(BlockEdit => {
  return function BulkCaptionBlockEdit(props) {
    const [isModalOpen, setIsModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);

    // Only target Presto Player blocks that have a `tracks` attribute
    if (!props.name.startsWith('presto-player/') || !Array.isArray(props.attributes.tracks)) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
        ...props
      });
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToolbarButton, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Bulk Upload Captions', 'bulk-caption-upload'),
      icon: "media-code",
      onClick: () => setIsModalOpen(true)
    }))), isModalOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BulkCaptionModal, {
      attributes: props.attributes,
      setAttributes: props.setAttributes,
      onClose: () => setIsModalOpen(false)
    }));
  };
}, 'withBulkCaptionUpload');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'bulk-caption-upload/with-bulk-upload', withBulkCaptionUpload);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map