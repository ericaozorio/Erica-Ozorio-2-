<?php
/**
 * Plugin Name: Érica Ozorio Portfolio
 * Description: Integração do Portfólio React via Shortcode [portfolio_aura]
 * Version: 1.0
 * Author: Érica Ozorio Studio
 */

if (!defined('ABSPATH')) {
    exit; // Segurança: impede acesso direto
}

function erica_portfolio_enqueue_scripts() {
    // Só carrega os scripts se o shortcode estiver na página (opcional, para performance)
    global $post;
    if (is_a($post, 'WP_Post') && has_shortcode($post->post_content, 'portfolio_aura')) {
        
        $plugin_url = plugin_dir_url(__FILE__);
        $plugin_dir = plugin_dir_path(__FILE__);

        // Enfileira o CSS gerado pelo Vite
        // Nota: O nome do arquivo CSS pode variar se você não usar nomes fixos no vite.config
        // O glob abaixo tenta encontrar o arquivo CSS na pasta assets
        $css_files = glob($plugin_dir . 'dist/assets/*.css');
        if (!empty($css_files)) {
            $css_file = basename($css_files[0]);
            wp_enqueue_style('erica-portfolio-style', $plugin_url . 'dist/assets/' . $css_file, [], '1.0.0');
        }

        // Enfileira o Bundle JS
        wp_enqueue_script('erica-portfolio-js', $plugin_url . 'dist/assets/bundle.js', [], '1.0.0', true);

        // Passa variáveis do PHP para o JS (se necessário, ex: URLs de imagem)
        wp_localize_script('erica-portfolio-js', 'wpData', [
            'rootUrl' => get_site_url(),
            'themeUrl' => get_template_directory_uri()
        ]);
    }
}
add_action('wp_enqueue_scripts', 'erica_portfolio_enqueue_scripts');

// Cria o Shortcode [portfolio_aura]
function erica_portfolio_shortcode() {
    // Retorna a div onde o React vai ser montado
    return '<div id="erica-ozorio-portfolio" style="min-height: 100vh;"></div>';
}
add_shortcode('portfolio_aura', 'erica_portfolio_shortcode');
