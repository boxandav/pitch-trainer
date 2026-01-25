<script setup lang="ts">
const emit = defineEmits<{ (e: 'close'): void }>();

function close() {
  emit('close');
}
</script>

<template>
  <div class="modal-overlay" @click="close">
    <div class="modal-container" @click.stop>
      <button class="modal-close" aria-label="Close" @click="close">&times;</button>
      <div class="modal-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-container {
  position: relative;
  background: #ffffff;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 90%;
  max-width: 620px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.modal-close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  transition: color 0.2s ease;
}
.modal-close:hover {
    color: gray;
}

.modal-body {
  padding-top: 0.5rem;
}
</style>
