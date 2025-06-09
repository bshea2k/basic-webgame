window.addEventListener("DOMContentLoaded", domLoaded);

const gameWindow = document.querySelector(".game-window");

let selecting = false;
let selectedPaws = [];

function domLoaded() {
    addPlayMenu();
}

// game event functions
function startGame() {
    clearGameWindow();

    addGameScreen();

    generatePaws();
}

function generatePaws() {
    const pawsContainer = document.querySelector(".game-screen__paws");

    for (let i = 0; i < 170; i++) {
        const paw = document.createElement("div");
        paw.classList.add("game-screen__paw");

        let randomNum = Math.floor(Math.random() * 9) + 1;
        paw.textContent = randomNum;

        // event listener for selection rectangle equaling 10?
        

        pawsContainer.appendChild(paw);
    }
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

const selectionBox = document.querySelector('.selection-box');
let startX, startY;

document.addEventListener('mousedown', (e) => {
  startX = e.clientX;
  startY = e.clientY;

  selectionBox.style.left = `${startX}px`;
  selectionBox.style.top = `${startY}px`;
  selectionBox.style.width = '0px';
  selectionBox.style.height = '0px';
  selectionBox.style.display = 'block';

  const onMouseMove = (e) => {
    const currentX = e.clientX;
    const currentY = e.clientY;

    const width = Math.abs(currentX - startX);
    const height = Math.abs(currentY - startY);
    const left = Math.min(currentX, startX);
    const top = Math.min(currentY, startY);

    selectionBox.style.left = `${left}px`;
    selectionBox.style.top = `${top}px`;
    selectionBox.style.width = `${width}px`;
    selectionBox.style.height = `${height}px`;

    const selectionRect = selectionBox.getBoundingClientRect();

    document.querySelectorAll(".game-screen__paw").forEach(paw => {
        const pawRect = paw.getBoundingClientRect();

        if (isColliding(selectionRect, pawRect)) {
            paw.classList.add("game-screen__paw--selected");
        } else {
            paw.classList.remove("game-screen__paw--selected");
        }
    });
  };

  const onMouseUp = () => {
    selectionBox.style.display = 'none';
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    document.querySelectorAll(".game-screen__paw").forEach(paw => { 
        paw.classList.remove("game-screen__paw--selected");
    });
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

function isColliding(rect1, rect2) {
    return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    );
}