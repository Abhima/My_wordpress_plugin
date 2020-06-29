<?php
/**
 * @package MaskiaddPlugin
 */
/* 
Plugin Name: Maskiadd Plugin
Plugin URI: http://maskiadd.com/plugin
Description: This is a my first custom plugin for dekode test.
Version: 1.0.0
Author: Monika Shrestha
Author URL: http://monikashrestha.com
License: GPLv2 or later
Text Domain: maskiadd-plugin
*/

//Display message if accessed directly
defined( 'ABSPATH' ) || die( 'Sorry, you cannot access this file!' );

//Plugin starts here
function loadMyBlockFiles() {
    wp_enqueue_script(
      'my-super-unique-handle',
      plugin_dir_url(__FILE__) . 'maskiadd-block.js',
      array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'),
      true
    );
  }
add_action('enqueue_block_editor_assets', 'loadMyBlockFiles');


