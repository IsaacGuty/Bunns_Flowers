import path, { resolve } from 'node:path'
import { defineConfig } from 'vite'
import * as glob from 'glob'
import htmlPurge from 'vite-plugin-purgecss'
import handlebars from 'vite-plugin-handlebars'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import { getPageContext } from './data/index'

const pageContext = (pagePath) => {
    return getPageContext(pagePath)
}

const obtenerEntradas = () => {
    return Object.fromEntries(
        glob.sync(
            './pages/*/.html',
            {
                ignore: [
                    './dist/**',
                    './node_modules/**'
                ]
            }
        ).map((fileData) => {
            const entrada = path.relative('pages', fileData.slice(0, fileData.length - path.extname(fileData).length));
            return [
                entrada,
                resolve(__dirname, fileData)
            ];
        })
    );
}

export default defineConfig({
    appType: 'mpa',
    base: process.env.DEPLOY_BASE_URL,
    build: {
        rollupOptions: {
            input: obtenerEntradas()
        },
        minify: true
    },
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'partials'),
            context: pageContext,
            helpers: {
                firstLetter: (str) => str.charAt(0).toUpperCase()
            }
        }),
        htmlPurge({}),
        ViteMinifyPlugin()
    ]
});