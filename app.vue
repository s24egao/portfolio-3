<script setup>
    useSeoMeta({
        title: '木白 SHOW',
        ogTitle: '木白 SHOW',
        description: 'Illustrator • Developer',
        ogDescription: 'Illustrator • Developer',
        ogImage: 'https://s24egao.github.io/profile_resize.png',
        twitterCard: 'summary',
        twitterImage: 'https://s24egao.github.io/profile_resize.png'
    })

    useHead({
        htmlAttrs: {
            lang: 'zh-tw'
        },
        link: [
            { rel: 'icon', type: 'image', href: '/icon.png' },
            { rel: 'apple-touch-icon', href: '/icon.png' }
        ],
        script: [
            { src: 'https://unpkg.com/@rive-app/webgl@2.7.6' }
        ]
    })
</script>

<template>
    <div>
        <Top></Top>
        <NuxtPage></NuxtPage>
        <Bottom></Bottom>
        <ScrollTransition></ScrollTransition>
        <MouseEffect target="a, a *, #menu-button, #menu-close-button"></MouseEffect>
    </div>
</template>

<style>
    @font-face {
        font-family: 'Cubic 11';
        src: url(/Cubic_11_1.100_R.woff2);
    }

    .page-enter-active, .page-leave-active {
        transition: opacity 0.5s;
    }

    .page-enter-from, .page-leave-to {
        opacity: 0;
    }

    :root {
        font-family: 'Cubic 11';
        --main-color: black;
        --light-color: #d1d1d1;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    ::selection {
        background: var(--main-color);
        color: white;
    }

    html {
        background: white;
        scroll-behavior: smooth;
    }

    body {
        margin: 0px;
    }

    section {
        padding: 30px 90px;
        position: relative;
        width: 100%;
        box-sizing: border-box;
        overflow-x: clip;
    }

    h1, h2, h3, h4 {
        font-weight: 100;
    }

    p {
        letter-spacing: 2px;
    }

    .light {
        color: var(--light-color);
    }
    
    .back-button {
        display: block;
        margin-bottom: 20px;
        color: var(--main-color);
        font-size: 21px;
    }

    @media (max-width: 800px) {
        section {
            padding: 30px 16px;
        }
    }
</style>