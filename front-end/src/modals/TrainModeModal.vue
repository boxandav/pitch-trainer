<script setup lang="ts">
import { ref } from "vue";
import BaseModal from "./BaseModal.vue";
import ButtonBar from "../components/buttons/ButtonBar.vue";
import RoundedButton from "../components/buttons/RoundedButton.vue";

const emit = defineEmits<{
    (e: "start", mode: string, notes: string[], length: number): void
}>();

const modeOptions = [
    { label: "Single Notes", value: "single-notes" },
    { label: "Melodies", value: "melodies" }
];

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "H"];

const selectedNotes = ref([]);
const melodyLength = ref(0);

const selectedMode = ref("single-notes");
</script>

<template>
    <BaseModal>
        <h1>Train Mode</h1>
        <div class="body-content">
            <ButtonBar :options="modeOptions" v-model="selectedMode"/>
            <div v-if="selectedMode == 'single-notes'" class="mode-section">
                <div class="settings-wrapper">
                    <div class="setting-line">
                        <input type="checkbox" disabled> <!-- disabled for now, more octaves will be added later -->
                        <label>Range across more octaves</label>
                    </div>
                </div>
            </div>
            <div v-if="selectedMode == 'melodies'" class="mode-section">
                <div class="settings-wrapper">
                    <div class="setting-line">
                        <div v-for="note in notes">
                            <input type="checkbox" :value="note" v-model="selectedNotes" />
                            <label>{{ note }}</label>
                        </div>
                    </div>
                    <div class="setting-line">
                        <label>Length of melody</label>
                        <input type="number" min="2" max="8" v-model="melodyLength" />
                    </div>
                </div>
            </div>
            <RoundedButton 
                inner-text="Start" 
                @click="emit('start', selectedMode, selectedNotes, melodyLength)"
            />
        </div>
    </BaseModal>
</template>

<style scoped>
.body-content {
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}

.settings-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1.5rem;
    gap: 0.5rem;
    width: 100%;
}
.settings-wrapper label {
    font-size: 0.9em;
}

.setting-line {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: center;
}
</style>