<script setup>
    useSeoMeta({
        title: 'WORKS - 木白 SHOW',
        ogTitle: 'WORKS - 木白 SHOW'
    })
</script>

<template>
    <section id="works">
        <h1 data-hide="true">WORKS／作品</h1>
        <HorizontalScroll>
            <div id="project-list">
                <ContentList path="/works" :query="{ sort: [{ date: -1 }] }" v-slot="{ list }">
                    <div v-for="item in list" class="item">
                        <NuxtLink :to="item.page" draggable="false">
                            <img data-hide="true" :src="item.image" alt="" draggable="false">
                            <div>
                                <h3 data-hide="true">{{ item.name }}</h3>
                                <h4 data-hide="true">{{ item.date }}</h4>
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
        height: 75vh;
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .item {
        position: relative;
        flex-shrink: 0;
        width: 700px;
        max-width: calc(100% - 6px);
    }
    
    .item a {
        text-decoration: none;
        color: var(--main-color)
    }
    
    .item img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        border: solid 3px var(--light-color);
    }

    @media (max-width: 800px) {
        .item img {
            height: 35vh;
        }
    }
</style>