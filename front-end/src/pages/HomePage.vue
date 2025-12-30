<script setup>
import RoundedButton from "../components/RoundedButton.vue";
</script>

<template>
    <div class="homepage-content">
        <div class="heading-wrapper">
            <h1>Pitch Trainer</h1>
        </div>
        <div class="main-wrapper">
            <p>On this page you can train your relative pitch hearing.</p>
            <p>You will be played two notes, a <b>base</b> note from which you will have to guess the <b>second</b> note.</p>
            <RoundedButton inner-text="Start"/>
        </div>
    </div>
</template>

<style scoped>
.homepage-content {
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
</style>