// Helper functions

function setSize(element, size) {
    element.style.width = `${size}px`;
    element.style.aspectRatio = "1/1";
}

// Grid functions

function createGrid(size = 768, rowCount = 16) {
    const grid = document.querySelector("#grid");
    
    setSize(grid, size);
    populateGrid(grid, rowCount);

    grid.addEventListener("mouseover", handleGridHover);
}

function clearGrid(grid) {
    grid.replaceChildren();
}

function populateGrid(grid, rowCount) {
    const gridSize = parseInt(grid.style.width);
    const cellCount = rowCount**2;

    clearGrid(grid);
    for (let i = 0; i < cellCount; i++) {
        const cell = createCell(gridSize, rowCount);
        grid.appendChild(cell);
    }
}

// Cell functions

function createCell(gridSize, rowCount) {
    const cell = document.createElement("div");
    const size = gridSize / rowCount;

    cell.classList.add("cell");
    setSize(cell, size);

    return cell;
}

// Event handlers

function handleGridHover(e) {
    if (e.target.classList.contains("cell")) {
        const cell = e.target;
        cell.classList.add("painted");
    }
}

function handleButtonClick() {
    const msg = "How many pixels should each side have?";
    const rowCount = prompt(msg, 512);

    const grid = document.querySelector("#grid");
    populateGrid(grid, rowCount);
}

// Main script

createGrid();

const btn = document.querySelector("button");
btn.addEventListener("click", handleButtonClick)