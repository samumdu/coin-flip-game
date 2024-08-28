'use strict';

const tails = 1;
const heads = 2;
let gameStarted = false;
//Scores
let playerScores = [0, 1];
//Random number
const flipCoin = () =>{
    let coinSide = Math.trunc(Math.random() * 2) + 1;
    return coinSide;
};

const coinEl = document.querySelector('.coin');
const player0El = document.getElementById('score--0');
const player1El = document.getElementById('score--1');
const startBtn = document.querySelector('.btn--start');
const tailsBtn = document.querySelector('.btn--tails');
const headsBtn = document.querySelector('.btn--heads');

coinEl.classList.add('hidden');

const playing = () => {
    gameStarted = true;
    return gameStarted;
}

// const showCoin = (coinSide) =>{
//     coinEl.src = `coin-${coinSide}.png`
//     coinEl.classList.remove('hidden');
// };

startBtn.addEventListener('click', () => {
    playing();
    if (playing() === true){
        startBtn.textContent = `🔄️ Play again`;



    };
});

tailsBtn.addEventListener('click', () =>{
    
});

headsBtn.addEventListener('click', () =>{
     
    

});