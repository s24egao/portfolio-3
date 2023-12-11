<script setup>
    defineProps(['title', 'date', 'description', 'image'])
</script>

<template>
    <article data-hide="true">
        <img :src="image || '/profile.png'" draggable="false">
        <div>
            <h2>{{ title }}</h2>
            <div class="light">{{ date }}</div>
            <div class="note-description">{{ description }}</div>
        </div>
    </article>
</template>

<style>
    #notes article {
        position: relative;
        border: solid 3px;
        padding: 20px;
        display: flex;
        gap: 20px;
        height: 160px;
    }

    #notes article img {
        width: 120px;
        height: 120px;
        object-fit: cover;
        image-rendering: pixelated;
        margin: auto 0px;
    }

    #notes a[href] article > div::after {
        content: 'MORE >';
        position: absolute;
        text-decoration: underline;
        right: 30px;
        bottom: 30px;
    }

    .note-description {
        height: 36px;
        overflow: hidden;
    }

    @media (max-width: 800px) {
        #notes article img {
            width: 100%;
        }

        #notes article {
            display: block;
            height: auto;
            padding-bottom: 50px;
        }
        
        #notes .container {
            grid-template-columns: 1fr;
        }
    }
</style>