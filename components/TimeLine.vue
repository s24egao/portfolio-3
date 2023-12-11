<script setup>
    defineProps(['title', 'contents'])
</script>

<template>
    <div class="timeline">
        <div data-hide="true" class="year">{{ title }}</div>
        <div>
            <div data-hide="true" class="event" v-for="event in contents.split('/')">{{ event }}</div>
        </div>
    </div>
</template>

<style>
    .timeline {
        margin: 30px 0px;
        max-width: 320px;
        display: flex;
        column-gap: 20px;
    }
    
    .event {
        position: relative;
        color: var(--main-color);
        padding-left: 16px;
        margin-bottom: 19px;
    }

    .event::before {
        content: '';
        position: absolute;
        height: 100%;
        border-left: solid 3px var(--main-color);
        left: 0px;
    }

    .event + .event::after {
        content: '';
        position: absolute;
        display: block;
        flex-shrink: 0;
        height: 3px;
        border-left: solid 3px var(--light-color);
        left: 0px;
        bottom: calc(100% + 8px);
    }
</style>