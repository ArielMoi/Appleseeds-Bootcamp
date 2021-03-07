const cardsDeck = ['<i class="fas fa-apple-alt fa-2x"></i>', '<i class="fab fa-angellist fa-2x"></i>', '<i class="fab fa-accusoft fa-2x"></i>',
    '<i class="fas fa-air-freshener fa-2x"></i>', '<i class="fas fa-arrow-alt-circle-down fa-2x"></i>', '<i class="fas fa-archive fa-2x"></i>',
    '<i class="fas fa-arrows-alt fa-2x"></i>', '<i class="fas fa-ankh fa-2x"></i>',
    '<i class="fas fa-american-sign-language-interpreting fa-2x"></i>', '<i class="fab fa-algolia"></i>'
]
const board = document.querySelector('.game-container');

const [newGameButton, difficultyButton, scoreBoardButton] = document.querySelectorAll('li');

const difficultyForm = document.querySelector('form');

const [difficultyEasy, difficultyMedium, difficultyHard] = document.querySelectorAll('button');

const winMessage = document.querySelector('.game-container h1');

let matchesRevealed = 0;
let countCardRevealing = 0;
let previousCard;
let timeOfGame = 0;

let amountOfCards = 12;

// function relevant to game play

function creatingDeck() {
    let cardsTmp = [...cardsDeck.slice(0, amountOfCards / 2), ...cardsDeck.slice(0, amountOfCards / 2)]; // slicing to fit the amount of cards
    for (let cardNum = 0; cardNum < amountOfCards; cardNum++) {
        let card = document.createElement('div'); // creating element for card
        let randomIndex = Math.floor(Math.random() * cardsTmp.length); // pulling a random card (by randomize index)
        card.innerHTML = cardsTmp[randomIndex]; // adding sign to card
        card.setAttribute('data-card', cardsTmp[randomIndex].slice(17, 27)); // identify card by setting data attribute
        cardsTmp.splice(randomIndex, 1); // removing the used card
        board.appendChild(card); // appending element to the DOM
    }
}

function revealCard(event) {
    if (event.target.classList.length < 1) {
        event.target.style.background = '#fff';
        event.target.style.transform = 'rotateY(180deg)';
        event.target.style.transition = 'all 1s'; // animation for the card
        if (++countCardRevealing == 2) { // check if it is the second card reveal
            board.removeEventListener('click', revealCard) // remove temporary event listener and letting user see the card for a sec
            if (!(event.target.dataset.card == previousCard.dataset.card)) { /// checks if correct
                setTimeout(() => {
                    event.target.style.background = 'black';
                    previousCard.style.background = 'black'; // hiding back the cards if not a match
                    board.addEventListener('click', revealCard) // brings back event listener
                }, 1300)
                countCardRevealing = 0; // reset timer count
            } else {
                board.addEventListener('click', revealCard) //brings back event listener
                matchesRevealed++; // adding to match revealed if correct guess
            }

            countCardRevealing = 0;

        } else {
            previousCard = event.target;
        }
    }
    checkIfUserWon(amountOfCards); // future creating input to chose amount of cards
}

function checkIfUserWon() {
    if (matchesRevealed == amountOfCards / 2) { // compare the amount of matches revealed to the amount of cards
        winMessage.style.visibility = 'visible';
        winMessage.innerHTML = `YOU WON!!<br>it took you ${timeOfGame}s`
        timeOfGame = 0;
    }
}

function newGame() { // for new game button
    winMessage.style.visibility = 'hidden'; 
    const cards = document.querySelectorAll('.game-container div');
    for (let card of cards) {
        card.remove() // removes current cards if exist
    }
    timeOfGame = 0;
    creatingDeck(amountOfCards)
}


// event listeners
board.addEventListener('click', revealCard)

newGameButton.addEventListener('click', newGame); 

difficultyButton.addEventListener('click', (event) => { // created the deck per difficulty
    switch (event.target.innerText) {
        case 'easy':
            amountOfCards = 12;
            newGame()
            break;
        case 'medium':
            amountOfCards = 16;
            newGame()
            break;
        case 'hard':
            amountOfCards = 20;
            newGame()
            break;
    }
})


// game play 
setInterval(() => { // starts timer
    document.querySelector('p').innerText = `Time: ${timeOfGame}`
    timeOfGame++
}, 1000);