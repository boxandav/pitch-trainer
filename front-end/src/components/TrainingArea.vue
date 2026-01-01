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

const NOTES_MAPPING: { [key: string]: string } = {
    "C": "note_c.wav",
    "C#": "note_cs.wav",
    "D": "note_d.wav",
    "D#": "note_ds.wav",
    "E": "note_e.wav",
    "F": "note_f.wav",
    "F#": "note_fs.wav",
    "G": "note_g.wav",
    "G#": "note_gs.wav",
    "A": "note_a.wav",
    "A#": "note_as.wav",
    "H": "note_h.wav"
};
const NOTE_NAMES = Object.keys(NOTES_MAPPING);

const baseNote: Ref<string | undefined | null> = ref(null);
const currentNote: Ref<string | undefined | null> = ref(null);
const resultMessage: Ref<string | undefined | null> = ref(null);
const isCorrect: Ref<boolean | null> = ref(null);

const baseNoteChanging = ref(false);

function getRandomNote(): string | undefined {
    return NOTE_NAMES[Math.floor(Math.random() * NOTE_NAMES.length)];
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

    if (baseNoteChanging.value) {
        baseNote.value = getRandomNote();
    }
}

function playNote(note: string | null | undefined) {
    if (!note) return;
    const filename = NOTES_MAPPING[note];
    if (!filename) return;
    try {
        const audio = new Audio(new URL(`../assets/sounds/${filename}`, import.meta.url).href);
        void audio.play();
    } catch (e) {
        try {
            const audio = new Audio(`../assets/sounds/${filename}`);
            void audio.play();
        } catch (err) {
        }
    }
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
        <div class="note-buttons-wrapper">
            <RoundedButton 
                inner-text="Play base note" 
                @click="playNote(baseNote)"
            />
            <RoundedButton
                inner-text="Play target note"
                @click="playNote(currentNote)"
            />
        </div>
        <span
            class="result-message"
            :class="{ 'correct': isCorrect, 'incorrect': !isCorrect }"
            v-if="resultMessage" 
            v-html="resultMessage"
        />
        <div class="note-buttons-wrapper">
            <RoundedButton
                v-for="note in NOTE_NAMES"
                :inner-text="note"
                :note-color="note.includes('#') ? 'black' : 'white'"
                @click="checkGuessedNote(note)"
            />
        </div>
        <div class="settings-wrapper">
            <div class="setting-line">
                <input type="checkbox" v-model="baseNoteChanging">
                <label>Change base note after each guess</label>
            </div>
        </div>
    </div>
</template>

<style scoped>
.training-area {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.note-buttons-wrapper {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: center;
}

.result-message.correct {
    color: green;
}
.result-message.incorrect {
    color: red;
}

.settings-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
}
.settings-wrapper label {
    font-size: 0.9em;
}

.setting-line {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
}
</style>