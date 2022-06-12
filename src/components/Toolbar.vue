<template>
  <div class="toolbar">
    <button
      class="control"
      :style="{ backgroundColor: running ? '#ff5757' : '#7ed957' }"
      @click="onToggle"
    >
      {{ running ? 'Stop' : 'Start' }}
    </button>
    <button class="control" @click="onClear">Clear</button>
    <p class="generation">Generation: {{ generation }}</p>
    <h1 class="header">Game of Life</h1>
    <button class="info" @click="onInfo">i</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Toolbar',
  props: ['running', 'generation'],
  emits: ['toggle', 'clear', 'info'],
  setup(props, { emit }) {
    const onToggle = () => {
      emit('toggle');
    };
    const onClear = () => {
      emit('clear');
    };
    const onInfo = () => {
      emit('info');
    };

    return { onToggle, onClear, onInfo };
  },
});
</script>

<style>
.toolbar {
  padding: 12px 48px;
  display: flex;
  align-items: center;
}

button {
  margin: 8px;
  border: none;
  padding: 8px;
  font: inherit;
  font-weight: 700;
  color: white;
  font-size: 26px;
}

button:hover {
  transform: scale(98%);
  cursor: pointer;
}

.control {
  min-width: 110px;
  border-radius: 10px;
  background-color: #5271ff;
}

.info {
  min-width: 48px;
  border-radius: 24px;
  background-color: black;
}

.generation {
  margin: 0 48px;
  font-size: 26px;
  white-space: nowrap;
}

.header {
  margin: 8px 24px 8px auto;
  font-size: 48px;
  white-space: nowrap;
}
</style>
