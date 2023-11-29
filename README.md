### Esercizio di oggi: Griglia Campo Minato
nome repo: `js-campominato-grid`
#### Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata (click su un pulsante... cosa dovrà essere chiamata? Quindi cosa dobbiamo definire prima?). <br>
Ogni cella ha un numero progressivo, da 1 a 100. <br>
Ci saranno quindi 10 caselle per ognuna delle 10 righe. <br>
#### BONUS
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
#### SUPER BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

#### Problem Solving
- 1 Definisci la funzione `createCell` che creerà un elemento `<div>` con classe `"cell"`;
- 2 Inizializza la costante `startButton`;
    - 2.1 Assegna alla costante `startButton` l'elemento `<button>` con id `"startButton"`;
- 3 Assegna l'evento click alla costante `startButton`;
    - 3.1 Inizzializza la costante `grid`;
        - 3.1.1 Assegna alla costante `grid` l'elemento `<div>` con id `"grid"`;
    - 3.2 Utilizza un `for` loop per generare i quadrati;
        - 3.2.1 Inizzializza la variabile `cell`;
            - Assegna alla variabile `cell` la funzione `createCell(i)` dandogli come valore `i`;
        - 3.2.2 Unisci alla costante `grid` la variabile `cell` attraverso `.appendChild(cell)`;