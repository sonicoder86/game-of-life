# Game of Life

Vue 3 implementation of [Conway's Game of Life](https://wikipedia.org/wiki/Conway%27s_Game_of_Life).
Play with it [here](https://vuesomedev.github.io/game-of-life).

![Showcase](public/showcase.gif)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Technologies

Project built with:

- [Vue 3](https://vuejs.org/) to build the user interface.
- [Vue Composition API](https://vuejs.org/api/composition-api-setup.html) to create components.
- [Vue Teleport](https://vuejs.org/guide/built-ins/teleport.html) to render the information modal.
- [Typescript](https://www.typescriptlang.org/) to have type safety.
- [Vite](https://vitejs.dev/) to run and build the application.
- [Vitest](https://vitest.dev/) to write tests and ensure everything works as intended.
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to ensure proper formatting.
- [Github Actions](https://docs.github.com/en/actions) to create continous integration and deployment.

## Project Setup and Run

```sh
npm install
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)

```sh
npm run lint
```
