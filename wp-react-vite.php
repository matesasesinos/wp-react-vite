<?php

/**
 * Plugin Name: React Vite
 * Description: Create a react page in WordPress
 */

require_once plugin_dir_path(__FILE__) . 'includes/class-wp-react-config.php';

add_action('plugins_loaded', function () {
    new WP_React_Config();
});
