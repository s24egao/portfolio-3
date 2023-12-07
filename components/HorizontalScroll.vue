<script setup>
    const container = ref()
    const contents = ref()

    let scrollValue = 0
    let touchX = 0
    let velocity = ref(0)

    function scrollHorizontal(x) {
        let max = -contents.value.scrollWidth + container.value.clientWidth
        scrollValue = Math.max(max, Math.min(0, scrollValue - x))
        contents.value.style.transform = `translate3d(${scrollValue}px, 0px, 0px)`
    }

    function handleScroll(e) {
        e.preventDefault()
        scrollHorizontal(e.deltaX + e.deltaY)
    }

    function handleTouchStart(e) {
        touchX = e.touches[0].clientX
    }

    function handleTouchMove(e) {
        let movementX = touchX - e.touches[0].clientX
        if(Math.abs(movementX) > 10) {
            e.preventDefault()
            velocity.value += movementX * 0.2
        }
        touchX = e.touches[0].clientX
    }

    let lastTime = 0

    function updateScroll(time) {
        if(!contents.value) return
        requestAnimationFrame(updateScroll)
        scrollHorizontal(velocity.value)
        velocity.value *= Math.pow(0.95, (time - lastTime) / 20)
        lastTime = time
    }

    onMounted(() => {
        container.value.addEventListener('wheel', handleScroll, { passive: false })
        container.value.addEventListener('touchstart', handleTouchStart, { passive: false })
        addEventListener('touchmove', handleTouchMove, { passive: false })
        requestAnimationFrame(updateScroll)
    })

    onBeforeUnmount(() => {
        container.value.removeEventListener('wheel', handleScroll, { passive: false })
        container.value.removeEventListener('touchstart', handleTouchStart, { passive: false })
        removeEventListener('touchmove', handleTouchMove, { passive: false })
    })
</script>

<template>
    <div class="horizontal-scroll" ref="container">
        <div class="horizontal-scroll-contents" ref="contents">
            <slot />
        </div>
        <div class="scroll-hint" @click="velocity = 30">SCROLL ></div>
    </div>
</template>

<style>
    .horizontal-scroll {
        position: relative;
        width: 100%;
        overflow-x: hidden;
        touch-action: pan-y;
    }

    .scroll-hint {
        position: absolute;
        right: 0px;
        bottom: 0px;
        cursor: pointer;
    }
</style>