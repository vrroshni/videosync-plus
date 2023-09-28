<script setup>
const {message}=defineProps(['message'])
</script>

<template>
<div class="h-9">
    <p class="text-red-500">{{ message }}</p>
</div>
</template>