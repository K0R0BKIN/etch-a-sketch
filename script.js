// Constants

const GRID_SIZE = 768;
const ROW_LIMIT = 100;

// Grid functions

function createGrid(rowCount = 16) {
    const grid = document.querySelector("#grid");
    populateGrid(grid, rowCount);
    grid.addEventListener("mouseover", handleGridHover);
}

function clearGrid(grid) {
    grid.replaceChildren();
}

function populateGrid(grid, rowCount) {
    const cellCount = rowCount**2;

    clearGrid(grid);
    for (let i = 0; i < cellCount; i++) {
        const cell = createCell(GRID_SIZE, rowCount);
        grid.appendChild(cell);
    }
}

// Cell functions

function createCell(gridSize, rowCount) {
    const cell = document.createElement("div");
    const size = gridSize / rowCount;

    cell.classList.add("cell");
    cell.style.width = `${size}px`;

    return cell;
}

// Event handlers

function handleGridHover({ target: cell }) {
    cell.classList.add("painted");
}

function handleButtonClick() {
    const msg = "How many pixels should each side have?";
    const rowCount = prompt(msg, ROW_LIMIT);

    if (rowCount > ROW_LIMIT) {
        alert(`You can't have more than ${ROW_LIMIT} rows!`);
        return;
    }

    const grid = document.querySelector("#grid");
    populateGrid(grid, rowCount);
}

// Initialize

createGrid();

const btn = document.querySelector("button");
btn.addEventListener("click", handleButtonClick)