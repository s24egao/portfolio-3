<template>
    <section id="profile">
        <img data-hide="true" src="/profile.png" alt="" width="200" style="image-rendering: pixelated;" draggable="false">
        <h1 data-hide="true">木白 SHOW</h1>
        <h3 data-hide="true">Illustrator • Developer</h3>
        <div data-hide="true">
            <div>2003 年出生</div>
            <div>對於繪畫、遊戲創作領域很有興趣</div>
            <div>接觸過視覺設計、3D 建模和寫程式</div>
            <br>
            <div>在探索的過程中發現網頁設計可以結合自己所學</div>
            <div>透過 Coding 打造出好看又好玩的內容</div>
            <div>因而踏上了學習開發網站的道路</div>
        </div>
    </section>
</template>

<style>
    #profile {
        padding-left: 150px;
    }

    #profile h1 {
        font-size: 36px;
        font-weight: 100;
    }

    #profile h3 {
        font-size: 15px;
        font-weight: 100;
    }

    #profile > div {
        margin: 60px 0px;
        line-height: 1.8;
    }

    @media (max-width: 800px) {
        #profile {
            padding: 30px 16px;
        }
    }
</style>