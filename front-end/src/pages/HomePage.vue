<script setup>
import { ref } from "vue";
import RoundedButton from "../components/RoundedButton.vue";
import TrainingArea from "../components/TrainingArea.vue";

const trainingStarted = ref(false);
</script>

<template>
    <div class="homepage-content">
        <div class="heading-wrapper">
            <h1>Pitch Trainer</h1>
        </div>
        <div class="main-wrapper">
            <p>On this page you can train your relative pitch hearing.</p>
            <p>You will be played two notes, a <b>base</b> note from which you will have to guess the <b>second</b> note.</p>
            <div class="main-button-wrapper">
                <RoundedButton 
                    inner-text="Train"
                    :disabled="trainingStarted"
                    @click="trainingStarted = true"
                />
                <RoundedButton
                    inner-text="Learn"
                    disabled="true"
                />
            </div>
        </div>
        <div v-if="trainingStarted" class="training-wrapper">
            <span>Training is currently going on</span>
            <TrainingArea />
        </div>
    </div>
</template>

<style scoped>
.homepage-content, .training-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    box-sizing: border-box;
    padding: 1rem;
}
.heading-wrapper {
    width: 100%;
    padding: 0.5rem;
    text-align: center;
}
.main-wrapper {
    width: 100%;
    max-width: 800px;
    padding: 0.5rem;
    text-align: center;
}
.main-button-wrapper {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: center;
    flex-wrap: wrap;
}

.main-button-wrapper rounded-button {
    display: inline-block;
    margin: 0.25rem;
}

@media (max-width: 600px) {
    .main-wrapper {
        padding: 0.5rem 0.75rem;
    }
    .main-button-wrapper {
        gap: 0.35rem;
    }
}
</style>