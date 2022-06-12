<script setup lang="ts">
import { Modal, Toolbar, Grid } from '@/components';
import { useGame, useModal } from '@/hooks';

const { onCell, onClear, onToggle, grid, generation, running, numCols } =
  useGame();
const { onClose, onInfo, showing } = useModal();
</script>

<template>
  <Toolbar
    :running="running"
    :generation="generation"
    @toggle="onToggle"
    @clear="onClear"
    @info="onInfo"
  />
  <Grid :num-cols="numCols" :grid="grid" @cell="onCell" />
  <Modal :showing="showing" @close="onClose" />
</template>

<style>
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  text-align: center;
}
</style>
