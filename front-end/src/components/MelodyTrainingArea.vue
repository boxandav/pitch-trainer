<script setup lang="ts">
import { ref, type Ref, onMounted } from "vue";
import { generateMelody } from "../utils/melody";
import RoundedButton from "./buttons/RoundedButton.vue";

const props = withDefaults(defineProps<{
    trainingNotes: string[] | null;
    melodyLength: number | null;
}>(), {
    trainingNotes: null,
    melodyLength: null
});

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

const currentMelody = ref<string[]>([]);

function getRandomNote(): string | null | undefined {
    return props.trainingNotes
  ? props.trainingNotes[Math.floor(Math.random() * props.trainingNotes.length)]
  : null;
}

function createMelody() {
    currentMelody.value = [];
    if (!props.melodyLength) {
        console.log("Melody length is null");
        return;
    }

    for (let i = 0; i < props.melodyLength; i++) {
        const randomNote = getRandomNote();
        if (randomNote) currentMelody.value.push(randomNote);
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

async function playMelody() {
    for (const note of currentMelody.value) {
        playNote(note);
        await new Promise(resolve => setTimeout(resolve, 500));
    }
}

onMounted(function() {
    createMelody();
});
</script>

<template>
    <div class="melody-training-area">
        <div class="note-buttons-wrapper">
            <RoundedButton
                inner-text="Play melody"
                @click="playMelody()"
            />
        </div>
    </div>
</template>

<style scoped>
.melody-training-area {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.note-buttons-wrapper {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: center;
    flex-wrap: wrap;
}
.note-buttons-wrapper rounded-button {
    display: inline-block;
    margin: 0.25rem;
}
</style>