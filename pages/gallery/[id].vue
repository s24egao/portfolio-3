<script setup>
    const route = useRoute()
    const gallery = await queryContent(`/gallery/${ route.params.id }`).findOne()

    useSeoMeta({
        title: gallery.name + ' - 木白 SHOW',
        ogTitle: gallery.name + ' - 木白 SHOW'
    })
</script>

<template>
    <section>
        <NuxtLink data-hide="true" to='/gallery' class="back-button">&lt BACK</NuxtLink>
        <h1 data-hide="true" style="margin-top: 60px;">{{ gallery.name }}</h1>
        <Gallery :media="gallery.images" scale="2.5"></Gallery>
    </section>
</template>

<style>
</style>