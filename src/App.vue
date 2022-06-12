<script setup lang="ts">
import HeaderToolbar from '@/components/HeaderToolbar.vue';
import GameGrid from '@/components/GameGrid.vue';
import ModalPanel from '@/components/ModalPanel.vue';
import { useGame, useModal } from '@/hooks';

const { onCell, onClear, onToggle, grid, generation, running, numCols } =
  useGame();
const { onClose, onInfo, showing } = useModal();
</script>

<template>
  <HeaderToolbar
    :running="running"
    :generation="generation"
    @toggle="onToggle"
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
