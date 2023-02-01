

//Get the computer's choice for the game
function getComputerChoice() {
    let choiceIndicator = Math.floor(Math.random() * 3);
    if (choiceIndicator == 0) {
        computerChoice = "ROCK"
    } else if (choiceIndicator == 1) {
        computerChoice = "PAPER"
    } else if (choiceIndicator == 2) {
        computerChoice = "SCISSORS"}
    return computerChoice;
}

//Prompt for the player's choice, compare to the computer's choice in case of tie, give message if invalid input
function getPlayerChoice() {
    let playerChoice = prompt('Rock, paper, scissors, shoot!')
    let frozenChoice = getComputerChoice()
   upPlayerChoice = playerChoice.toUpperCase()
    if (upPlayerChoice == "ROCK" || upPlayerChoice == "PAPER" || upPlayerChoice == "SCISSORS") {
        if (upPlayerChoice == frozenChoice.toUpperCase()) {
            console.log(frozenChoice + "! " + "Whoops! A tie. Let's try again.")
            getPlayerChoice()
        }
        else {console.log("I choose... " + frozenChoice + "!")
        return playOption = upPlayerChoice}
    } else {
        console.log("Not sure what you were going for there! Care to try again?")
        getPlayerChoice()
    }
}


//Initialize variables for comparison (computer/player choices) and scorekeeping
let playOption = ""

let computerChoice = ""

let playerScore = 0

let compScore = 0

//Evaluate if computer or player wins, increment score appropriately
function playRound(playOption, compOption) {
    if (playOption == "ROCK" & compOption == "SCISSORS") {
        playerScore++
        resultContent.textContent = 'Scissors! You Win! Player score is ' + playerScore + ' Computer score is ' + compScore
        results.appendChild(resultContent)
    } else if (playOption == "PAPER" & compOption == "ROCK") {
        playerScore++
        resultContent.textContent = 'Rock! You Win! Player score is ' + playerScore + ' Computer score is ' + compScore
        results.appendChild(resultContent)
    } else if (playOption == "SCISSORS" & compOption == "PAPER") {
        playerScore++
        resultContent.textContent = 'Paper! You Win! Player score is ' + playerScore + ' Computer score is ' + compScore
        results.appendChild(resultContent)
    } else if (playOption == "ROCK" & compOption == "PAPER") {
        compScore++
        resultContent.textContent = 'Paper! You Lose! Player score is ' + playerScore + ' Computer score is ' + compScore
        results.appendChild(resultContent)
    } else if (playOption == "PAPER" & compOption == "SCISSORS") {
        compScore++
        resultContent.textContent = 'Scissors! You Lose! Player score is ' + playerScore + ' Computer score is ' + compScore
        results.appendChild(resultContent)
    } else if (playOption == "SCISSORS" & compOption == "ROCK") {
        compScore++
        resultContent.textContent = 'Rock! You Lose! Player score is ' + playerScore + ' Computer score is ' + compScore
        results.appendChild(resultContent)
    } else if (playOption == compOption) {
        resultContent.textContent = compOption + '! Whoops! A tie. Let\'s try again. Player score is ' + playerScore + ' Computer score is ' + compScore
        results.appendChild(resultContent)
    }

    if (playerScore == 5 || compScore == 5) {
        if (playerScore > compScore) {
            resultContent.textContent = "You won the whole game! " + "Player score: " + playerScore + " Computer score: " + compScore
            results.appendChild(resultContent)
        } else if (compScore > playerScore) {
            resultContent.textContent = "You lost the whole game! " + "Player score: " + playerScore + " Computer score: " + compScore
            results.appendChild(resultContent)
        } else {resultContent.textContent = "What happened?"
        results.appendChild(resultContent)}
    }
}


//Loop game until 5 rounds have passed, evaluate the overall winner and print winning message
//Contain other functions
function game(playOption, compOption) {
    for (let i = 0; i < 100; i++) {
    //getPlayerChoice()

    //compOption = computerChoice.toUpperCase()

    playRound(playOption, getComputerChoice())
    }
    if (playerScore > compScore) {
        console.log("You won the whole game!")
        console.log("Player score: " + playerScore + " Computer score: " + compScore)
    } else if (compScore > playerScore) {
        console.log("You lost the whole game!")
        console.log("Player score: " + playerScore + " Computer score: " + compScore)
    } else {console.log("What happened?")}
}

//game()

const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click', function() {playRound("ROCK", getComputerChoice())}
);

const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click', function() {playRound("PAPER", getComputerChoice())}
);

const scissorsBtn = document.querySelector('.scissors');
scissorsBtn.addEventListener('click', function() {playRound("SCISSORS", getComputerChoice())}
);

const results = document.querySelector('.results');
const resultContent = document.createElement('div');
results.classList.add('resultContent');
resultContent.textContent = 'You Win!'