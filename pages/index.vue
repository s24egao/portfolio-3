<script setup>
    const pages = [
        { display: 'PROFILE', path: '/profile' },
        { display: 'WORKS', path: '/works' },
        { display: 'GALLERY', path: '/gallery' }
    ]

    let r

    onMounted(() => {
		r = new rive.Rive({
			src: '/s24egao.riv',
			canvas: document.getElementById('character'),
			autoplay: true,
			stateMachines: 'State Machine 1',
			onLoad: () => {
				r.resizeDrawingSurfaceToCanvas()
			}
		})
    })

    onBeforeUnmount(() => {
        if(r) r.cleanup()
    })
</script>

<template>
    <section id="menu">
        <nav>
            <div v-for="page in pages" data-hide="true"><NuxtLink :to="page.path">{{ page.display }}</NuxtLink></div>
        </nav>
        <canvas id="character" data-hide="true"></canvas>
    </section>
</template>

<style>
    #menu {
        min-height: 800px;
    }

    #menu::before {
        content: '';
        background-image: url(/bg.png);
        background-size: cover;
        background-position: 50% 25%;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
    }

    nav {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 56px;
        gap: 30px;
        padding: 60px;
    }

    nav a {
        text-decoration: none;
        color: white;
    }

    nav div {
        display: inline-block;
        width: 300px;
        z-index: 1;
        mix-blend-mode: difference;
    }

    #character {
        width: calc(360px + 5vw);
        aspect-ratio: 0.5;
        max-width: 100%;
        position: absolute;
        top: -20px;
        right: 200px;
    }

    nav a:hover::after {
        content: ' <';
    }

    @media (max-width: 800px) {
        nav {
            font-size: 56px;
            gap: 30px;
            padding: 0px;
        }

        #character {
            right: 0px;
        }
    }
</style>