<script setup lang="ts">
const props = withDefaults(defineProps<{
    innerText: string;
    disabled?: boolean;
    noteColor?: string | null;
}>(), {
    disabled: false,
    noteColor: null
});
</script>

<template>
    <button 
        class="rounded-button"
        :class="{ 'black': noteColor == 'black', 'white': noteColor == 'white' }" 
        :disabled="props.disabled"
    >
        {{ props.innerText }}
    </button>
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
    border: 0;
    font-size: 1em;
}
.rounded-button:hover {
    outline: 2px solid #53EAFD;
}
.rounded-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    outline: 2px solid transparent;
}
.rounded-button.white {
    background: linear-gradient(to right, #fafafa, #eaeaea);
}
.rounded-button.black {
    background: linear-gradient(to right, #050505, #151515);
    color: #fafafa;
}
</style>