const container = document.querySelector(".container");
const playerTurn = document.getElementById("playerTurn");
const startScreen = document.querySelector(".startScreen");
const startButton = document.getElementById("start");
const message = document.getElementById("message");

let initialMatrix = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
];

let currentPlayer;

// Random Number Between Range
const generateRandomNumber = (min, max) => {
    Math.floor(Math.random() * (max - min)) + min;

    // Create Matrix
    const matrixCreator = () => {
        for (let innerArray in initialMatrix){
            let outerDiv = document.createElement("div");
            outerDiv.classList.add("grid-row");
            outerDiv.setAttribute("data-value", innerArray);
            for(let j in initialMatrix[initialArray]){
                // Set all matrix values to 0
                initialMatrix[initialArray][j] = [0];
            }
        }
    }
}