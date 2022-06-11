<template>
  <div
    v-for="(cell, cellNumber) of line"
    :key="cellNumber"
    :style="{
      width: `${cellSize}px`,
      height: `${cellSize}px`,
      backgroundColor: getCellColor(cell),
    }"
    @mousedown="onCell($event, cellNumber)"
    @mouseover="onCell($event, cellNumber)"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const cellSize = 30;
const cellColors = [
  'ffffff',
  '7ed957',
  '38b6ff',
  '5271ff',
  '8c52ff',
  'cb6ce6',
  'ff66c4',
  'ff914d',
  'ff5757',
  '000000',
];

export default defineComponent({
  name: 'GridLine',
  props: ['line', 'lineNumber'],
  emits: ['cell'],
  setup(props, { emit }) {
    const getCellColor = (cell: number) => {
      if (cell > 9) cell = 9;
      return `#${cellColors[cell]}`;
    };

    const onCell = (event: MouseEvent, cellNumber: number) => {
      if (event.buttons) {
        emit('cell', props.lineNumber, cellNumber);
      }
    };

    return { getCellColor, cellSize, onCell };
  },
});
</script>

<style>
.grid {
  border: 2px solid black;
  background-color: black;
  display: inline-grid;
  grid-gap: 2px;
  user-select: none;
}
</style>
