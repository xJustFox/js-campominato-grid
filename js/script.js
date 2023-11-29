// FUNZIONE CHE CREA L'ELEMENTO <div>  CON CLASSE "cell"
function createCell() {
    const element = document.createElement("div");
    element.classList.add("cell");

    return element;
}

// BOTTONE "Start Game"
const startButton = document.getElementById("startButton");

// ISTRUZIONE BOTTONE "Start Game"
startButton.addEventListener("click", function (){
    const grid = document.getElementById("grid");
    
    // loop che genera i quadrati e gli inserisce nelle griglia
    for (let i = 1; i <= 100; i++) {
        let cell = createCell(i);

        cell.innerText = i;

        // BONUS
        cell.addEventListener("click", function(){
            this.classList.add("bg-info")

            console.log(this.innerText)
        })
    
        grid.appendChild(cell);
    }
})
