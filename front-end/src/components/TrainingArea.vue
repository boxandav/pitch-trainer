<script setup lang="ts">
import { ref } from "vue";
import RoundedButton from "./RoundedButton.vue";

const correctGuesses = ref(0);
const totalGuesses = ref(0);

const allNotes = ref(["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "H"]);
</script>

<template>
    <div class="training-area">
        <span>Score: {{ correctGuesses }}/{{ totalGuesses }}</span>
        <div class="training-note-buttons">
            <RoundedButton
                v-for="note in allNotes"
                :inner-text="note"
                :note-color="note.includes('#') ? 'black' : 'white'"
            />
        </div>
    </div>
</template>

<style scoped>
.training-area {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.training-note-buttons {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
}
</style>