<script setup>
    defineProps(['title', 'contents'])
</script>

<template>
    <div>
        <h2 data-hide="true">{{ title }}</h2>
        <div data-hide="true" class="timeline" v-for="year in contents">
            <div data-hide="true" class="year">{{ year.year }}</div>
            <div data-hide="true" class="event" v-for="event in year.events">
                <div class="event-line"></div>
                <div class="event-text">{{ event }}</div>
            </div>
        </div>
    </div>
</template>

<style>
    .timeline {
        margin-bottom: 60px;
        max-width: 300px;
    }

    .timeline > .event > .event-line {
        width: 2px;
        height: 20px;
        background: var(--light-color);
        margin: 6px;
    }
    
    .timeline > .event > .event-text {
        display: flex;
        align-items: center;
        color: var(--main-color);
    }

    .timeline > .event > .event-text::before {
        content: '';
        flex-shrink: 0;
        display: inline-block;
        width: 4px;
        height: 4px;
        background: var(--main-color);
        margin: 5px;
    }
</style>