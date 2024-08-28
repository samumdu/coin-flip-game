'use strict';

const tails = 1;
const heads = 2;
let gameStarted = false;
let activePlayer = 0;
//Scores
let playerScores = [0, 0];
//Random number
let randomNumber = 0;

const flipCoin = () =>{
    let coinSide = Math.trunc(Math.random() * 2) + 1;
    console.log(coinSide)
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

const switchPlayer = () => {
    
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
    gameStarted = false;
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
    
}

const scorePoint = () => {
    coinEl.src = `coin-${tails}.png`;
    coinEl.classList.remove('hidden');
    playerScores[activePlayer] ++;
    document.getElementById(`score--${activePlayer}`).textContent = playerScores[activePlayer];
};

//Start
startBtn.addEventListener('click', () => {
    playing();
    if (playing()){
        startBtn.textContent = `🔄️ Next turn`;
        randomNumber = flipCoin();
        coinEl.classList.add('hidden'); 
        
    };
});

//Tails
tailsBtn.addEventListener('click', () =>{
     
    if(gameStarted === true){
        
        if(tails === randomNumber){
            scorePoint();
            switchPlayer();
    
        } else {
            switchPlayer();
        };
        
    }
});
//Heads
headsBtn.addEventListener('click', () =>{
     
    if(gameStarted === true){
         
        if(heads === randomNumber){
            scorePoint(); 
            switchPlayer();
    
        } else {
            switchPlayer();
        };
    }

});