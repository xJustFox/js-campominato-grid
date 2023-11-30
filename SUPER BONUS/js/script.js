// FUNZIONE CHE CREA L'ELEMENTO <div>  CON CLASSE "cell"
function createCell(cells_in_row) {
    const element = document.createElement("div");
    element.classList.add("cell");
    element.style.width = `calc(100% / ${cells_in_row})`;
    element.style.height = `calc(100% / ${cells_in_row})`;

    return element;
}

// DEFINIZIONE DELLA FUNZIONE CHE CREA LA GRIGLIA
function createGrid(cells_number, cells_in_row) {
    for (let i = 1; i <= cells_number; i++) {
        let cell = createCell(cells_in_row);

        cell.innerText = i;

        // BONUS
        cell.addEventListener("click", function(){
            this.classList.add("bg-info")

            console.log(this.innerText)
        })
    
        grid.appendChild(cell);
    }
}

function createNewGame() {
    const grid = document.getElementById("grid");

    const difficulty = document.getElementById("difficulty");
    let level = parseInt(difficulty.value);

    let numCell;
    let cellForRow;
    console.log(level);
    
    switch (level) {
        case 1:
            numCell = 100;
            break;
        case 2:
            numCell = 81;
            break;
        case 3:
            numCell = 49;
            break;
        default:
            numCell= 0;
            break;
    }

    cellForRow = Math.sqrt(numCell);

    grid.innerHTML = "";

    createGrid(numCell, cellForRow);
}

// BOTTONE "Start Game"
const startButton = document.getElementById("startButton");

// ISTRUZIONE BOTTONE "Start Game"
startButton.addEventListener("click", function () {
    createNewGame();
})

