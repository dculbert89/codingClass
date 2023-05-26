// You now have a 3x3 grid. We want to configure this grid such that when the left 3 cells are clicked, the colors turn red, when the middle 3 cells are clicked, the color turns green, and when the last 3 cells are clicked, the color turns blue. 

const mainGrid = document.getElementById("main-grid")
const gridCell = mainGrid.querySelectorAll(".grid-cell")

for (let i = 0; i < gridCell.length; i++) {
    const gridCellIdx = gridCell[i];

    if(gridCellIdx.classList.contains("red")) {
        gridCellIdx.addEventListener('click', () => {
            gridCellIdx.style.backgroundColor = 'red'
        })
    }

    if(gridCellIdx.classList.contains("green")) {
        gridCellIdx.addEventListener('click', () => {
            gridCellIdx.style.backgroundColor = 'green'
        })
    }

    if(gridCellIdx.classList.contains("blue")) {
        gridCellIdx.addEventListener('click', () => {
            gridCellIdx.style.backgroundColor = 'blue'
        })
    }
    mainGrid.style.flexDirection = 'column';
}

// Write some JS code below such that event listeners are attached to all the correct elements following the specifications above.

// Hint: Some sort of loop may be helpful to you in this process!

