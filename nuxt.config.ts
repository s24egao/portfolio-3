// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        pageTransition: { name: 'page' },
        head: {
            meta: [
                { name: 'theme-color', content: 'black' }
            ]
        }
    }
})
