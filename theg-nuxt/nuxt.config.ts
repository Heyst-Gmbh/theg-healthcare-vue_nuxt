import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
    vite: {
        resolve: {
            alias: {
                '@': '/src',
            },
        },
    },
    ssr: true,  // Server-side Rendering aktivieren
    css: [
        '~/assets/css/main.css'  // Globale SCSS-Datei
    ],
    plugins: [
        '~/plugins/pinia.js',  // Registriere das Pinia-Plugin
        '~/plugins/google-recaptcha.js'
    ],
    app: {
        pageTransition: { name: 'layout', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' },
        head: {
            link: [{ rel: 'icon', href: "/favicon.ico" }]
        }
    },
})
