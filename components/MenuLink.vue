<script setup>
    defineProps(['subtitle', 'link'])
</script>

<template>
    <NuxtLink class="menu-link" :to="link">
        <div class="title"><slot /></div>
        <div class="subtitle">{{ subtitle }}</div>
    </NuxtLink>
</template>

<style>
    .menu-link .title {
        font-size: 50px;
    }

    .menu-link .subtitle {
        font-size: 20px;
        letter-spacing: 20px;
    }
</style>