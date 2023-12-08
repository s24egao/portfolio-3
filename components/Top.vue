<script setup>
    const menuToggled = ref(false)

    onMounted(() => {
        for(let [index, e] of document.getElementById('menu').querySelectorAll('a').entries())
            e.style.transitionDelay = `${index * 0.1 + 0.1}s`
    })
</script>

<template>
    <div>
        <header>
            <NuxtLink to="/">
                <div>
                    <h1>木白 SHOW</h1>
                    <h2>Illustrator • Developer</h2>
                </div>
            </NuxtLink>
            <div id="menu-button" @click="menuToggled = 'true'">
                <div style="width: 30px; height: 2px; background: var(--main-color); margin-top: 10px;"></div>
                <div style="width: 30px; height: 2px; background: var(--main-color);"></div>
                <div>MENU</div>
            </div>
        </header>
        <div id="menu" :data-toggled="menuToggled">
            <h1>WEBSITE</h1>
            <div @click="menuToggled = 'false'">
                <MenuLink subtitle="首頁" link="/">MENU</MenuLink>
                <MenuLink subtitle="個人檔案" link="/profile">PROFILE</MenuLink>
                <MenuLink subtitle="作品" link="/works">WORKS</MenuLink>
                <MenuLink subtitle="畫廊" link="/gallery">GALLERY</MenuLink>
                <MenuLink subtitle="筆記" link="/notes">NOTES</MenuLink>
            </div>
            <h1>SOCIAL MEDIA LINKS</h1>
            <div @click="menuToggled = 'false'">
                <NuxtLink to="https://www.instagram.com/s24egao/" target="_blank">Instagram</NuxtLink>
                <NuxtLink to="https://twitter.com/s24egao" target="_blank">Twitter</NuxtLink>
                <NuxtLink to="https://www.pixiv.net/users/80929565" target="_blank">Pixiv</NuxtLink>
                <NuxtLink to="https://github.com/s24egao" target="_blank">GitHub</NuxtLink>
            </div>
            <h1>ABOUT THIS SITE</h1>
            <div>This is 木白's portfolio website made by himself.</div>
            <br>
            <div class="light">LAST UPDATE: 2023 / 12 / 09</div>
            <div id="menu-close-button" @click="menuToggled = 'false'">X</div>
        </div>
    </div>
</template>

<style>
    header {
        border-bottom: solid 1px var(--light-color);
        padding: 2px 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: sticky;
        top: 0px;
        margin-bottom: 30px;
        z-index: 2;
    }

    header h1 {
        font-size: 26px;
        font-weight: 100;
        margin: 6px;
    }

    header h2 {
        font-size: 15px;
        font-weight: 100;
        margin: 2px;
        color: var(--light-color)
    }

    #menu-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    }

    header a {
        color: var(--main-color);
        text-decoration: none;
    }

    #menu-button div {
        font-size: 12px;
    }

    #menu {
        background: #000000ff;
        color: white;
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        transition: 0.3s;
        box-sizing: border-box;
        padding: 30px 90px;
        z-index: 3;
        overflow: scroll;
    }

    #menu h1 {
        margin: 50px 0px;
    }

    #menu a {
        display: inline-block;
        margin-right: 100px;
        margin-bottom: 20px;
        color: white;
        transition: 0.3s;
    }

    #menu-close-button {
        position: absolute;
        font-size: 36px;
        top: 16px;
        right: 36px;
        cursor: pointer;
    }

    #menu[data-toggled='false'] {
        opacity: 0;
        transform: translate3d(200px, 0px, 0px);
        pointer-events: none;
    }

    #menu[data-toggled='false'] a {
        opacity: 0;
        transform: translateX(30px);
    }

    @media (max-width: 800px) {
        header {
            padding: 2px 10px;
        }

        #menu {
            padding: 30px 16px;
        }
    }
</style>