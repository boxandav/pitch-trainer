<script setup lang="ts">
import { ref, type Ref, onMounted } from "vue";
import RoundedButton from "./RoundedButton.vue";

const props = withDefaults(defineProps<{
    baseNote: string | null;
}>(), {
    baseNote: null
});

const correctGuesses = ref(0);
const totalGuesses = ref(0);

const allNotes = ref(["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "H"]);
const baseNote: Ref<string | undefined | null> = ref(null);
const currentNote: Ref<string | undefined | null> = ref(null);
const resultMessage: Ref<string | undefined | null> = ref(null);
const isCorrect: Ref<boolean | null> = ref(null);

function getRandomNote(): string | undefined {
    return allNotes.value[Math.floor(Math.random() * allNotes.value.length)];
}

function checkGuessedNote(guess: string) {
    if (guess == currentNote.value) {
        correctGuesses.value++;
        resultMessage.value = `Correct! The note was <b>${currentNote.value}</b>.`
        isCorrect.value = true;
    } else {
        resultMessage.value = `Oops! The note was <b>${currentNote.value}</b> <em>(you guessed <b>${guess}</b>)</em>.`;
        isCorrect.value = false;
    }

    totalGuesses.value++;
    currentNote.value = getRandomNote();
}

onMounted(function() {
    baseNote.value = getRandomNote();
    currentNote.value = getRandomNote();
});
</script>

<template>
    <div class="training-area">
        <span>Score: {{ correctGuesses }}/{{ totalGuesses }}</span>
        <span>Base note: <b>{{ baseNote }}</b></span>
        <span
            class="result-message"
            :class="{ 'correct': isCorrect, 'incorrect': !isCorrect }"
            v-if="resultMessage" 
            v-html="resultMessage"
        />
        <div class="training-note-buttons">
            <RoundedButton
                v-for="note in allNotes"
                :inner-text="note"
                :note-color="note.includes('#') ? 'black' : 'white'"
                @click="checkGuessedNote(note)"
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
.result-message.correct {
    color: green;
}
.result-message.incorrect {
    color: red;
}
</style>