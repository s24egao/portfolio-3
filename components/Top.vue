<template>
    <header>
        <NuxtLink to="/">
            <div>
                <h1>木白 SHOW</h1>
                <h2>Illustrator • Developer</h2>
            </div>
        </NuxtLink>
        <NuxtLink to="/">
            <div id="menu-button">
                <div style="width: 30px; height: 2px; background: var(--main-color); margin-top: 10px;"></div>
                <div style="width: 30px; height: 2px; background: var(--main-color);"></div>
                <div>MENU</div>
            </div>
        </NuxtLink>
    </header>
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
        z-index: 1;
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
    }

    header a {
        color: var(--main-color);
        text-decoration: none;
        transition: 0.3s;
    }

    #menu-button div {
        font-size: 12px;
    }

    @media (max-width: 800px) {
        header {
            padding: 2px 10px;
        }
    }
</style>