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

updateTurnHighlight();

document.getElementById('roll').addEventListener('click', rollDice);
document.getElementById('save').addEventListener('click', saveScore);
document.getElementById('reset').addEventListener('click', resetGame);

// Function to roll the dice when the button is clicked
function rollDice() {
    if (hasRolled) {
        alert("⚠️You have already rolled. Please save your score before rolling the dice again.");
        return;
    }

    const diceValue = Math.floor(Math.random() * 6) + 1;
    diceRep.style.transform = 'rotate(0deg)';
    
    diceRep.style.animation = 'rollDice 1s ease-in-out';

    setTimeout(() => {
        diceRep.src = `dice${diceValue}.png`;  
        diceRep.style.animation = ''; 

        // Logic for when the dice rolls a 1
        if (diceValue === 1) {
            if (currentPlayer === 1) {
                player1Score = 0;
                player1Current.textContent = '0';
            } else {
                player2Score = 0;
                player2Current.textContent = '0';
            }

            // Switch to the next player
            currentPlayer = currentPlayer === 1 ? 2 : 1;
            updateTurnHighlight();  // Update the turn highlight
            hasRolled = false;  // Reset the rolling flag
            return;
        }

        // Accumulate score (if dice is not 1)
        if (currentPlayer === 1) {
            player1Score += diceValue;
            player1Current.textContent = player1Score; // Update player 1's current score
        } else {
            player2Score += diceValue;
            player2Current.textContent = player2Score; // Update player 2's current score
        }

        hasRolled = true;  // Mark that the player has rolled
        updateTurnHighlight();  // Update the turn highlight

    }, 1000);  // 1-second delay for dice animation to complete before updating score
}

// Function to highlight the current player's turn
function updateTurnHighlight() {
    // Remove the active-player class from both player containers
    document.getElementById('player1').classList.remove('active-player');
    document.getElementById('player2').classList.remove('active-player');

    // Add the active-player class to the current player's container
    if (currentPlayer === 1) {
        document.getElementById('player1').classList.add('active-player');
    } else {
        document.getElementById('player2').classList.add('active-player');
    }
}

// Function to save the score
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
        return;  // Game over if there is a winner
    }

    // Switch turn to the other player
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    
    //highlight the player turn
    updateTurnHighlight();

    hasRolled = false;
}

// Function to reset the game
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
    updateTurnHighlight();
}

// Function to check for winner
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
