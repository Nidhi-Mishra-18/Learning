const player1Name = document.getElementById('player1-name');
const player2Name = document.getElementById('player2-name');
const player1Current = document.getElementById('player1-current');
const player2Current = document.getElementById('player2-current');
const player1Saved = document.getElementById('player1-saved');
const player2Saved = document.getElementById('player2-saved');
const diceRep = document.getElementById('dice-rep');
const winners = document.getElementById('winners');

let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;
let hasRolled = false; 

document.getElementById('roll').addEventListener('click', rollDice);
document.getElementById('save').addEventListener('click', saveScore);
document.getElementById('reset').addEventListener('click', resetGame);

//function to roll the dice when button clicked
function rollDice() {
    if (hasRolled) {
        alert("⚠️You have already rolled. Please save your score before rolling the dice again.");
        return;
    }

    const diceValue = Math.floor(Math.random() * 6) + 1;
    const diceRep = document.getElementById('dice-rep');
    //diceRep.src = `dice${diceValue}.png`; 


    diceRep.style.transform = 'rotate(0deg)';
    
    // Add the rolling animation to the dice
    diceRep.style.animation = 'rollDice 1s ease-in-out';  // Apply the dice roll animation

    // After the animation is complete, change the dice image
    setTimeout(() => {
        diceRep.src = `dice${diceValue}.png`;  // Change to the correct dice face
        diceRep.style.animation = '';  // Reset the animation after it's finished
    }, 1000);

    if (currentPlayer === 1) {
        if (diceValue === 1 && player1Score === 0) {
            player1Current.textContent = '0';
        } else {
            player1Score = diceValue;
            player1Current.textContent = player1Score;
        }
    } else {
        player2Score = diceValue;
        player2Current.textContent = player2Score;
    }

    hasRolled = true;
}


function saveScore() {
    if (!hasRolled) {
        alert("⚠️You must roll the dice first before saving your score.");
        return;
    }
    if (currentPlayer === 1) {
        let savedScore = parseInt(player1Saved.textContent);
        savedScore += player1Score;
        player1Saved.textContent = savedScore;
        player1Score = 0;
        player1Current.textContent = '0';
    } else {
        let savedScore = parseInt(player2Saved.textContent);
        savedScore += player2Score;
        player2Saved.textContent = savedScore;
        player2Score = 0;
        player2Current.textContent = '0';
    }
    if (checkWinner()) {
        return; 
    }
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    hasRolled = false;
}

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    player1Current.textContent = '0';
    player2Current.textContent = '0';
    player1Saved.textContent = '0';
    player2Saved.textContent = '0';
    diceRep.src = 'diceRep.png';
    winners.textContent = '';
    currentPlayer = 1;
    hasRolled = false;
    document.getElementById('roll').disabled = false;
}

function checkWinner() {
    const player1Total = parseInt(player1Saved.textContent);
    const player2Total = parseInt(player2Saved.textContent);

    if (player1Total >= 100) {
        winners.textContent = `Congrats ${player1Name.querySelector('input').value || 'Player 1'} wins!🏆.`;
        document.getElementById('roll').disabled = true;
        return true;
    } else if (player2Total >= 100) {
        winners.textContent = ` Congrats ${player2Name.querySelector('input').value || 'Player 2'} wins!🏆.`;
        document.getElementById('roll').disabled = true;
        return true;
    }
    return false;
}