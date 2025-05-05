// Constants

const GRID_SIZE = 768;
const ROW_LIMIT = 100;

// Helper functions

function getRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
}

function getRandomColor() {
    return `rgb(${getRandomNumber(255)} ${getRandomNumber(255)} ${getRandomNumber(255)})`;
}

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
    const cellCount = rowCount ** 2;

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
    cell.style.opacity = `0`;

    return cell;
}

// Event handlers

function handleGridHover(event) {
    const cell = event.target.closest('.cell');
    if (!cell) return;
    
    cell.style.backgroundColor = getRandomColor();
    const opacity = parseFloat(cell.style.opacity);
    if (opacity < 1) {
        cell.style.opacity = (opacity + 0.1).toString();
    }
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
btn.addEventListener("click", handleButtonClick);