<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps<{
    options?: { label: string; value: string }[],
    modelValue?: string
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const activeButton = ref(props.modelValue || props.options?.[0]?.value || "");

function setActive(value: string) {
    activeButton.value = value;
    emit("update:modelValue", value);
}

onMounted(function() {
    if (props.options && props.options.length >= 1) {
        activeButton.value = props.options[0]?.value || "";
    }
});
</script>

<template>
    <div class="button-bar">
        <div 
            v-for="option in props.options" 
            class="bar-button"
            :class="{ 'active': activeButton == option.value }"
            @click="setActive(option.value)"
        >
            {{ option.label }}
        </div>
    </div>
</template>

<style scoped>
.button-bar {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
}

.bar-button {
    padding: 1rem;
    flex: 1;
    font-weight: 600;
    border-radius: 0.75rem;
    transition: background-color 0.2s ease;
    cursor: pointer;
}
.bar-button.active {
    background-color: #42d3f2;
}
.bar-button:not(.active):hover {
    background-color: rgba(66,211,242,0.5);;
}
</style>