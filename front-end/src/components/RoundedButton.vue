<script setup lang="ts">
const props = defineProps<{
    innerText: string
}>();
</script>

<template>
    <div class="rounded-button">
        {{ props.innerText }}
    </div>
</template>

<style scoped>
.rounded-button {
    border-radius: 1.5rem;
    padding: 0.5rem 1.5rem;
    font-weight: 600;
    background: linear-gradient(to right, #42D3F2, #05DF72);
    width: fit-content;
    outline: 2px solid transparent;
    transition: outline 0.3s ease;
    cursor: pointer;
    display: inline-block;
}
.rounded-button:hover {
    outline: 2px solid #53EAFD;
}
</style>