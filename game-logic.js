window.addEventListener("DOMContentLoaded", domLoaded);

const gameWindow = document.querySelector(".game-window");

function domLoaded() {

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