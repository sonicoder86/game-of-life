<template>
  <Teleport to="#app">
    <div class="backdrop" v-if="showing" @click="onClose">
      <div class="modal">
        <h1 class="title">
          Game of Life,
          <br />
          with a&nbsp;
          <span class="green">t</span>
          <span class="blue">w</span>
          <span class="purple">i</span>
          <span class="pink">s</span>
          <span class="orange">t</span>
        </h1>
        <p class="subtitle">
          The Game of Life is a zero-player cellular automaton. How exciting,
          right? I promise you it is really cool, so please keep reading!
        </p>
        <hr class="divider" />
        <div class="rules">
          <p>
            Every cell interacts with its eight neighbours following these four
            simple rules:
          </p>
          <ul>
            <li>
              Live cells with fewer than two live neighbours die by
              underpopulation.
            </li>
            <li>
              Live cells with two or three live neighbours live to the next
              generation.
            </li>
            <li>
              Live cells with more than three live neighbours die by
              overpopulation.
            </li>
            <li>
              Dead cells with three live neighbours become a live cell by
              reproduction.
            </li>
          </ul>
        </div>
        <p class="rules">
          That's it! Click on cells to make them alive, then press Start to
          simulate the game. You can even click while it is running, or drag
          your cursor on multiple cells!
        </p>
        <p class="rules">
          What's the twist? For every generation a cell lives, it changes color,
          creating beautiful and mesmerizing patterns. Hope you like it!
        </p>
        <hr class="divider" />
        <p class="footer">
          To my fellow nerds, make sure to read the relative&nbsp;
          <a
            href="https://wikipedia.org/wiki/Conway%27s_Game_of_Life"
            rel="noopener noreferrer"
            target="_blank"
          >
            Wikipedia page
          </a>
          &nbsp;and check out the code on my&nbsp;
          <a
            href="https://github.com/vuesomedev/game-of-life"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub repository
          </a>
          .
        </p>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModalPanel',
  props: ['showing'],
  emits: ['close'],
  setup(props, { emit }) {
    const onClose = () => {
      emit('close');
    };

    return { onClose };
  },
});
</script>

<style>
.backdrop {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  width: 630px;
  height: 100%;
  overflow-y: auto;
  background-color: white;
  text-align: left;
  animation-name: slide-in;
  animation-duration: 200ms;
  animation-timing-function: ease-out;
}

@keyframes slide-in {
  0% {
    right: -100%;
  }
}

.title {
  margin: 42px 56px 42px 56px;
  line-height: 66px;
  font-size: 62px;
}

.green {
  color: #7ed957;
}

.blue {
  color: #5271ff;
}

.purple {
  color: #8c52ff;
}

.pink {
  color: #ff66c4;
}

.orange {
  color: #ff914d;
}

.subtitle {
  margin: 0 56px 0 56px;
  line-height: 32px;
  font-size: 24px;
}

.rules {
  margin: 0 56px 34px 56px;
  line-height: 32px;
  font-size: 24px;
}

li {
  margin-bottom: 14px;
  padding-left: 8px;
}

.footer {
  margin: 0 56px 42px 56px;
  line-height: 32px;
  font-size: 24px;
}

a {
  font-weight: 700;
  color: black;
}

.divider {
  margin: 34px 56px 44px 56px;
  height: 3px;
  border: none;
  background-color: black;
}
</style>
