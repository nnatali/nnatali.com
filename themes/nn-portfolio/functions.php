<?php
/*
* Adding custom styles and scripts to my theme
 */
function nn_enqueue_styles() {

    wp_enqueue_style( 'nn-styles',  get_stylesheet_uri());

    wp_enqueue_script( 
		'nn-scripts',
		get_parent_theme_file_uri( 'script.js' ),
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);
}
add_action( 'wp_enqueue_scripts', 'nn_enqueue_styles' );

/**
 * Registers an editor stylesheet for the theme.
 */
function nn_enqueue_editor_styles() {
    add_editor_style( 'editor.css' );
}
add_action( 'admin_init', 'nn_enqueue_editor_styles' );

/**
 * Allowing SVG media type
 */
add_filter('upload_mimes', 'nn_svg_type');
function nn_svg_type($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
/**
 * Removing extra p tags in Contact Form 7
 */
add_filter('wpcf7_autop_or_not','__return_false');
?>