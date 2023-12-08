<script setup>
    useSeoMeta({
        title: 'Notes - 木白 SHOW',
        ogTitle: 'Notes - 木白 SHOW'
    })
</script>

<template>
    <section id="notes">
        <h1 data-hide="true">Notes／筆記</h1>
        <div class="container">
            <ContentList path="/notes" :query="{ sort: [{ date: -1 }] }" v-slot="{ list }">
                <NuxtLink v-for="item in list" :to="item._path">
                    <NotePreview :title="item.title" :date="item.date" :description="item.description" :image="item.image"></NotePreview>
                </NuxtLink>
                <NotePreview title="???" date="???? / ?? / ??" description="敬啟期待更多文章～" image="/bg.png"></NotePreview>
            </ContentList>
        </div>
    </section>
</template>

<style>
    #notes {
        min-height: 800px;
    }

    #notes .container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(480px,1fr));
        gap: 20px;
    }

    #notes a {
        text-decoration: none;
        color: var(--main-color);
    }

    @media (max-width: 800px) {
        #notes .container {
            grid-template-columns: 1fr;
        }
    }
</style>