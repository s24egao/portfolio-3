<script setup>
    useSeoMeta({
        title: 'Profile - 木白 SHOW',
        ogTitle: 'Profile - 木白 SHOW'
    })
</script>

<template>
    <section id="profile">
        <div>
            <img data-hide="true" src="/profile.png" alt="" width="200" style="image-rendering: pixelated;" draggable="false">
            <h1 data-hide="true">木白 SHOW</h1>
            <div data-hide="true">Illustrator • Developer</div>
            <p data-hide="true" :key="'profile'">
                2003 年出生<br>
                對於繪畫、遊戲創作領域很有興趣<br>
                接觸過視覺設計、3D 建模和寫程式<br><br>
                在探索的過程中發現網頁設計可以結合自己所學<br>
                透過 Coding 打造出好看又好玩的內容<br>
                因而踏上了學習開發網站的道路<br>
            </p>
            <NuxtLink data-hide="true" class="link" to="https://www.instagram.com/s24egao/" target="_blank">Instagram</NuxtLink>
            <NuxtLink data-hide="true" class="link" to="https://twitter.com/s24egao" target="_blank">Twitter</NuxtLink>
            <NuxtLink data-hide="true" class="link" to="https://www.pixiv.net/users/80929565" target="_blank">Pixiv</NuxtLink>
            <NuxtLink data-hide="true" class="link" to="https://github.com/s24egao" target="_blank">GitHub</NuxtLink>
        </div>
        <div>
            <h2 data-hide="true">時間軸</h2>
            <TimeLine title="2024" contents="還沒到"></TimeLine>
            <TimeLine title="2023" contents="做了現在這個網站/開始學 vue 和 nuxt/過生日"></TimeLine>
            <TimeLine title="2022" contents="好像其實也沒有幹嘛/過生日/運用過去所學的 HTML 製作了自己的個人頁面，並開始對 web 開發產生興趣"></TimeLine>
            <TimeLine title="2021" contents="過生日/學習 Blender/開始以木白的名義活動"></TimeLine>
        </div>
        <div></div>
    </section>
</template>

<style>
    #profile {
        padding: 0px 180px;
        margin: 60px 0px 180px 0px;
        color: var(--main-color);
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 120px 20px;
    }

    #profile h1 {
        font-size: 36px;
    }

    #profile h3 {
        font-size: 15px;
    }

    #profile p {
        font-size: 15px;
        margin: 60px 0px;
        line-height: 1.8;
    }

    .link {
        display: inline-block;
        padding: 6px;
        margin-right: 10px;
        color: var(--main-color);
    }

    @media (max-width: 800px) {
        #profile {
            padding: 30px 16px;
        }
    }
</style>