<script setup>
    useSeoMeta({
        title: 'WORKS - 木白 SHOW',
        ogTitle: 'WORKS - 木白 SHOW'
    })
</script>

<template>
    <section id="works">
        <h1>WORKS／作品</h1>
        <HorizontalScroll>
            <div id="project-list">
                <ContentList path="/works" :query="{ sort: [{ date: -1 }] }" v-slot="{ list }">
                    <div data-hide="true" v-for="item in list" class="item">
                        <NuxtLink :to="item.page" draggable="false">
                            <img :src="item.image" alt="" draggable="false">
                            <div>
                                <h3>{{ item.name }}</h3>
                                <h4>{{ item.date }}</h4>
                            </div>
                        </NuxtLink>
                    </div>
                </ContentList>
            </div>
        </HorizontalScroll>
    </section>
</template>

<style>
    #works h1 {
        margin: 10px 0px;
    }

    #project-list {
        height: 70vh;
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .item {
        position: relative;
        flex-shrink: 0;
        width: 700px;
        max-width: 100%;
    }
    
    .item a {
        text-decoration: none;
        color: var(--main-color)
    }
    
    .item img {
        width: 100%;
        height: 400px;
        object-fit: cover;
    }

    @media (max-width: 800px) {
        .item img {
            height: 35vh;
        }
    }
</style>