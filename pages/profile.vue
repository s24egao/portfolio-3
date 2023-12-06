<template>
    <section id="profile">
        <img data-hide="true" src="/profile.png" alt="" width="200" style="image-rendering: pixelated;" draggable="false">
        <h1 data-hide="true">木白 SHOW</h1>
        <h3 data-hide="true">Illustrator • Developer</h3>
        <p data-hide="true" :key="'profile'">
            2003 年出生<br>
            對於繪畫、遊戲創作領域很有興趣<br>
            接觸過視覺設計、3D 建模和寫程式<br><br>
            在探索的過程中發現網頁設計可以結合自己所學<br>
            透過 Coding 打造出好看又好玩的內容<br>
            因而踏上了學習開發網站的道路<br>
        </p>
        <a data-hide="true" class="link" href="https://www.instagram.com/s24egao/" target="_blank">Instagram</a>
        <a data-hide="true" class="link" href="https://twitter.com/s24egao" target="_blank">Twitter</a>
        <a data-hide="true" class="link" href="https://www.pixiv.net/users/80929565" target="_blank">Pixiv</a>
        <a data-hide="true" class="link" href="https://github.com/s24egao" target="_blank">GitHub</a>
    </section>
</template>

<style>
    #profile {
        padding-left: 180px;
        margin-bottom: 120px;
        color: var(--main-color);
    }

    #profile h1 {
        font-size: 36px;
        font-weight: 100;
    }

    #profile h3 {
        font-size: 15px;
        font-weight: 100;
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