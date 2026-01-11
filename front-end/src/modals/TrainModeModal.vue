<script setup lang="ts">
import { ref } from "vue";
import BaseModal from "./BaseModal.vue";
import ButtonBar from "../components/buttons/ButtonBar.vue";

const modeOptions = [
    { label: "Single Notes", value: "single-notes" },
    { label: "Melodies", value: "melodies" }
];

const selectedMode = ref("");
</script>

<template>
    <BaseModal>
        <h1>Train Mode</h1>
        <div class="body-content">
            <ButtonBar :options="modeOptions" v-model="selectedMode"/>
        </div>
    </BaseModal>
</template>

<style scoped>
.body-content {
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
}
</style>