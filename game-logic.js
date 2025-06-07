window.addEventListener("DOMContentLoaded", domLoaded);

const gameWindow = document.querySelector(".game-window");

function domLoaded() {
    addPlayMenu();
}

// game event functions
function startGame() {
    clearGameWindow();

    addGameScreen();
}


// DOM manipulation functions
function clearGameWindow() {
    while (gameWindow.firstChild) {
        gameWindow.removeChild(gameWindow.firstChild);
    }
}

function addPlayMenu() {
    // create elements & assign classes
    const playMenu = document.createElement("div");
    playMenu.classList.add("play-menu");

    const header = document.createElement("h1");
    header.classList.add("play-menu__header");

    const button = document.createElement("button");
    button.classList.add("button");
    button.classList.add("button--large");
    button.setAttribute("id", "play-menu__start-game");
    button.setAttribute("onclick", "startGame()");

    // add content to elements
    header.textContent = "Husky Box";

    button.textContent = "Play";

    // append elements
    playMenu.appendChild(header);
    playMenu.appendChild(button);

    // attach
    gameWindow.appendChild(playMenu);
}

function addGameScreen() {
    // create elements & assign classes
    const gameScreen = document.createElement("div");
    gameScreen.classList.add("game-screen");

    const score = document.createElement("p");
    score.classList.add("game-screen__score");

    const paws = document.createElement("div");
    paws.classList.add("game-screen__paws");

    const resetButton = document.createElement("button");
    resetButton.classList.add("button");
    resetButton.classList.add("button--small");
    resetButton.setAttribute("id", "game-screen__reset-btn");
    resetButton.setAttribute("onclick", "startGame()");

    // add content to elements
    score.textContent = 0;

    resetButton.textContent = "Reset";

    // append elements
    gameScreen.appendChild(score);
    gameScreen.appendChild(paws);
    gameScreen.appendChild(resetButton);

    // attach
    gameWindow.appendChild(gameScreen);
}