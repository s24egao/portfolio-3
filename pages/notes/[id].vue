<script setup>
    const route = useRoute()
    const note = await queryContent(`/notes/${ route.params.id }`).findOne()

    const length = ref(0)
    
    useSeoMeta({
        title: note.title + ' - 木白 SHOW',
        ogTitle: note.title + ' - 木白 SHOW',
        description: note.description,
        ogDescription: note.description,
    })

    onMounted(() => {
        length.value = document.getElementById('note-content').textContent.length
    })
</script>

<template>
    <section id="note">
        <NuxtLink data-hide="true" to='/notes' class="back-button">&lt BACK</NuxtLink>
        <div style="width: 800px; max-width: 100%;">
            <h1 data-hide="true">{{ note.title }}</h1>
            <div id="note-info">
                <span data-hide="true">{{ note.date }}</span>
                <span data-hide="true">作者：<NuxtLink to="/profile">木白</NuxtLink></span>
                <span data-hide="true" class="light">{{ length }} 個字元</span>
            </div>
            <hr data-hide="true">
            <ContentDoc data-hide="true" id="note-content" />
        </div>
    </section>
</template>

<style>
    #note {
        margin-bottom: 120px;
        min-height: 800px;
    }
    
    #note .back-button {
        display: block;
        margin-bottom: 10px;
    }

    #note > div {
        max-width: 800px;
        margin: auto;
    }

    #note-info {
        margin-bottom: 30px;
        display: flex;
        flex-wrap: wrap;
        gap: 10px 50px;
    }

    #note-content img {
        width: 600px;
        max-width: 100%;
        pointer-events: none;
    }

    #note a {
        color: var(--main-color);
    }

    #note-content {
        line-height: 2;
    }

    #note-content p {
        margin: 30px 0px;
    }
</style>