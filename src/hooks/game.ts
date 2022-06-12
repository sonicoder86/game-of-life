import { ref } from 'vue';

const neighbours: number[][] = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

export const getEmptyGrid = (rows: number, columns: number): number[][] => {
  return Array.from<number>({ length: rows }).map(() =>
    Array.from<number>({ length: columns }).fill(0)
  );
};

const countNeighbours = (
  grid: number[][],
  i: number,
  j: number,
  numRows: number,
  numCols: number
) => {
  let numNeighbours = 0;
  neighbours.forEach(([x, y]) => {
    const k = i + x;
    const l = j + y;
    if (k >= 0 && k < numRows && l >= 0 && l < numCols)
      numNeighbours += grid[k][l] ? 1 : 0;
  });

  return numNeighbours;
};

export const createNextGeneration = (
  grid: number[][],
  numRows: number,
  numCols: number
): number[][] => {
  const newGrid = gridCopy(grid);

  grid.forEach((row, i) =>
    row.forEach((cell, j) => {
      if (cell > 0) {
        newGrid[i][j] += 1;
      }

      const numNeighbours = countNeighbours(grid, i, j, numRows, numCols);
      if (numNeighbours < 2 || numNeighbours > 3) newGrid[i][j] = 0;
      else if (cell === 0 && numNeighbours === 3) newGrid[i][j] = 1;
    })
  );

  return newGrid;
};

export const gridCopy = (grid: number[][]): number[][] => {
  return grid.map((line) => [...line]);
};

export const useGame = () => {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  const resolution = 33;
  const toolbarHeight = 99;

  const numRows = Math.floor((windowHeight - toolbarHeight) / resolution);
  const numCols = Math.floor(windowWidth / resolution);

  const grid = ref(getEmptyGrid(numRows, numCols));
  const generation = ref(0);
  const running = ref(false);
  let timer: NodeJS.Timer;

  const onCell = (rowNumber: number, cellNumber: number) => {
    const newGrid = gridCopy(grid.value);
    newGrid[rowNumber][cellNumber] = newGrid[rowNumber][cellNumber] ? 0 : 1;
    grid.value = newGrid;
  };
  const onToggle = () => {
    if (running.value) {
      clearInterval(timer);
      running.value = false;
    } else {
      running.value = true;
      timer = setInterval(() => {
        grid.value = createNextGeneration(grid.value, numRows, numCols);
        generation.value++;
      }, 200);
    }
  };
  const onClear = () => {
    clearInterval(timer);
    running.value = false;
    grid.value = getEmptyGrid(numRows, numCols);
    generation.value = 0;
  };

  return {
    grid,
    generation,
    running,
    onCell,
    onToggle,
    onClear,
    numRows,
    numCols,
  };
};
