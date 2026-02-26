<?php
/**
 * Plugin Name:  Bulk Caption Upload for Presto Player
 * Description:  Adds a bulk VTT caption upload button to Presto Player video blocks in the block editor.
 * Version:      1.0.0
 * Requires PHP: 7.4
 * Text Domain:  bulk-caption-upload
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

add_action( 'enqueue_block_editor_assets', function () {
	$build = plugin_dir_path( __FILE__ ) . 'build/index.js';
	if ( ! file_exists( $build ) ) { return; }

	wp_enqueue_script(
		'bulk-caption-upload-editor',
		plugin_dir_url( __FILE__ ) . 'build/index.js',
		[ 'wp-hooks', 'wp-element', 'wp-components', 'wp-block-editor',
		  'wp-compose', 'wp-i18n', 'wp-data' ],
		filemtime( $build ),
		true
	);
} );
