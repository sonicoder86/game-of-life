<script setup lang="ts">
import { ref } from 'vue';
import HeaderToolbar from '@/components/HeaderToolbar.vue';
import GameGrid from '@/components/GameGrid.vue';
import ModalPanel from '@/components/ModalPanel.vue';
import {
  getEmptyGrid,
  gridCopy,
  createNextGeneration,
} from '@/components/calculate';

const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

const resolution = 33;
const toolbarHeight = 99;

const numRows = Math.floor((windowHeight - toolbarHeight) / resolution);
const numCols = Math.floor(windowWidth / resolution);

const grid = ref(getEmptyGrid(numRows, numCols));
const generation = ref(0);
const running = ref(false);
const showing = ref(false);

const onCell = (rowNumber: number, cellNumber: number) => {
  const newGrid = gridCopy(grid.value);
  newGrid[rowNumber][cellNumber] = newGrid[rowNumber][cellNumber] ? 0 : 1;
  grid.value = newGrid;
};
const onStart = () => {
  grid.value = createNextGeneration(grid.value, numRows, numCols);
  generation.value++;
};
const onClear = () => {
  grid.value = getEmptyGrid(numRows, numCols);
  generation.value = 0;
};
const onClose = () => {
  showing.value = false;
};
const onInfo = () => {
  showing.value = true;
};
</script>

<template>
  <HeaderToolbar
    :running="running"
    :generation="generation"
    @start="onStart"
    @clear="onClear"
    @info="onInfo"
  />
  <GameGrid :num-cols="numCols" :grid="grid" @cell="onCell" />
  <ModalPanel :showing="showing" @close="onClose" />
</template>

<style>
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  text-align: center;
}
</style>
