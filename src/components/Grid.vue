<template>
  <div
    class="grid"
    :style="{
      gridTemplateColumns: `repeat(${numCols}, ${cellSize}px)`,
    }"
  >
    <GridLine
      v-for="(line, lineNumber) of grid"
      :line="line"
      :line-number="lineNumber"
      :key="lineNumber"
      @cell="onCell"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GridLine from './GridLine.vue';

const cellSize = 30;

export default defineComponent({
  name: 'Grid',
  props: ['numCols', 'grid'],
  emits: ['cell'],
  components: {
    GridLine,
  },
  setup(props, { emit }) {
    const onCell = (rowNumber: number, cellNumber: number) => {
      emit('cell', rowNumber, cellNumber);
    };

    return { cellSize, onCell };
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
