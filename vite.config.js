import path, {resolve} from 'node:path'
import { defineConfig } from 'vite'
import * as glob from 'glob'
import htmlPurge from 'vite-plugin-purgecss'
import handlebars from 'vite-plugin-handlebars'
import {ViteMinifyPlugin} from 'vite-plugin-minify'
import { getPageContext } from './data/index'

const pageContext = (pagePath) => {
    return getPageContext(pagePath)
}

const obtenerEntradas = () => {
    // Busca en la raíz del proyecto
    const entradas = glob.sync('./**/*.html', {
        ignore: [
            './dist/**',
            './node_modules/**'
        ]
    });

    if (entradas.length === 0) {
        throw new Error('No se encontraron archivos HTML para compilar. Verifica las rutas.');
    }

    return Object.fromEntries(
        entradas.map(file => [
            // Mantén la estructura de directorios relativa
            path.relative('./', file.slice(0, file.length - path.extname(file).length)),
            resolve(__dirname, file)
        ])
    );
}

export default defineConfig({
    appType: 'mpa',
    base: process.env.DEPLOY_BASE_URL ? `/${process.env.DEPLOY_BASE_URL.replace(/^\/|\/$/g, '')}/` : '/',
    build: {
        rollupOptions: {
            input: obtenerEntradas()
        },
        minify: true,
        emptyOutDir: true
    },
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'partials'),
            context: pageContext
        }),
        htmlPurge({}),
        ViteMinifyPlugin()
    ]
});