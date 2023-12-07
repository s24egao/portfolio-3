<script setup>
    const props = defineProps(['delay'])

    function findScrollPos(e) {
        if(e && e.offsetParent != document.body) return e.offsetTop + findScrollPos(e.offsetParent)
        else return e.offsetTop
    }

    function findScrollPosAll(elements) {
        for(let e of elements) e.dataset.scrollPos = findScrollPos(e)
    }

    onMounted(() => {
        let transitionElements = document.querySelectorAll(`*[data-hide='true']`)
        findScrollPosAll(transitionElements)

        new MutationObserver(() => {
            transitionElements = document.querySelectorAll(`*[data-hide='true']`)
            findScrollPosAll(transitionElements)
        }).observe(document.body, { childList: true, subtree: true })

        addEventListener('resize', () => findScrollPosAll(transitionElements))

        setInterval(() => {
            for(let e of transitionElements) if(e.dataset.scrollPos < scrollY + innerHeight - 100 && e.dataset.hide == 'true') {
                e.dataset.hide = 'false'
                break
            }
        }, props.delay || 100)
    })
</script>

<template>
    <div></div>
</template>

<style>
    *[data-hide] {
        transition: opacity 0.5s, transform 0.5s;
    }

    *[data-hide='true'] {
        opacity: 0;
        transform: translateX(30px);
    }
</style>