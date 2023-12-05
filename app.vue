<script setup>
    useSeoMeta({
        title: '木白 SHOW',
        ogTitle: '木白 SHOW',
        description: 'Illustrator • Developer',
        ogDescription: 'Illustrator • Developer',
        ogImage: '',
        twitterCard: 'summary'
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
        <SideLines></SideLines>
        <ScrollTransition></ScrollTransition>
    </div>
</template>

<style>
    @font-face {
        font-family: 'Cubic 11';
        src: url(/Cubic_11_1.100_R.woff2);
    }

    .page-enter-active, .page-leave-active {
        transition: opacity 0.5s, transform 0.5s;
    }

    .page-enter-from, .page-leave-to {
        position: absolute;
        width: 100%;
        opacity: 0;
        transform: translateY(60px);
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

    body::before {
        content: '';
        background-image: url(bg.png);
        background-size: cover;
        background-position: 50% 25%;
        position: fixed;
        width: 100%;
        height: 100%;
        opacity: 0.1;
    }

    section {
        padding: 30px 90px;
        position: relative;
    }

    @media (max-width: 800px) {
        section {
            padding: 30px 16px;
        }
    }
</style>