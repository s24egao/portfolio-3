<script setup>
    useSeoMeta({
        title: 'Gallery - 木白 SHOW',
        ogTitle: 'Gallery - 木白 SHOW'
    })
</script>

<template>
    <section id="gallery">
        <ContentList path="/gallery" v-slot="{ list }">
            <div data-hide="true" v-for="topic in list" class="gallery-folder">
                <NuxtLink :to="topic.path">
                    <img :src="topic.image" alt="">
                    <h2>{{ topic.name }}</h2>
                    <div class="light">Amount: {{ topic.images.length }}</div>
                </NuxtLink>
            </div>
        </ContentList>
    </section>
</template>

<style>
    #gallery {
        min-height: 800px;
        display: grid;
	    grid-template-columns: repeat(auto-fit, 200px);
        gap: 60px;
        margin-bottom: 120px;
    }

    .gallery-folder img {
        width: 210px;
        height: 210px;
        object-fit: cover;
        border: solid 3px var(--light-color);
    }
    
    .gallery-folder a {
        color: var(--main-color);
        text-decoration: none;
    }
</style>