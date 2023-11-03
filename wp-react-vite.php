<?php

/**
 * Plugin Name: React Vite
 * Description: Create a react page in WordPress
 */

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('react-style', plugin_dir_url(__FILE__) . 'dist/assets/main.css');
    wp_enqueue_script('react-script', plugin_dir_url(__FILE__) . 'dist/assets/main.js', [], '1.0.1', true);
});

add_action('wp_head', function () {
    echo '<link rel="manifest" href="' . plugin_dir_url(__FILE__) . 'dist/manifest.json" />';
});

add_filter('script_loader_tag', 'add_type_attribute', 10, 3);
function add_type_attribute($tag, $handle, $src)
{
    if ('react-script' !== $handle) {
        return $tag;
    }

    $tag = '<script type="module" src="' . esc_url($src) . '"></script>';
    return $tag;
}
