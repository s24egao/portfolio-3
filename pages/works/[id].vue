<script setup>
    const route = useRoute()
    const work = await queryContent(`/works/${ route.params.id }`).findOne()

    useSeoMeta({
        title: work.name + ' - 木白 SHOW',
        ogTitle: work.name + ' - 木白 SHOW',
        description: work.info,
        ogDescription: work.info,
    })
</script>

<template>
    <section id="work-info">
        <NuxtLink data-hide="true" to='/works' class="back-button">&lt BACK</NuxtLink>
        <img data-hide="true" :src="work.image" alt="">
        <h1 data-hide="true">{{ work.name }}</h1>
        <h3 data-hide="true">{{ work.date }}</h3>
        <p data-hide="true">{{ work.description }}</p>
        <div style="width: 100%; display: flex; justify-content: flex-end; margin: 30px 0px;">
            <NuxtLink data-hide="true" :to="work.link" target="_blank">OPEN ></NuxtLink>
        </div>
    </section>
</template>

<style>
    #work-info {
        margin-bottom: 120px;
    }

    #work-info img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        border: solid 3px var(--light-color);
    }

    #work-info .back-button {
        display: block;
        margin-bottom: 20px;
    }

    #work-info a {
        color: var(--main-color);
        font-size: 21px;
    }
</style>