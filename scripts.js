//Get the computer's choice for the game
function getComputerChoice() {
    let choiceIndicator = Math.floor(Math.random() * 3);
    if (choiceIndicator == 0) {
        computerChoice = "Rock"
    } else if (choiceIndicator == 1) {
        computerChoice = "Paper"
    } else if (choiceIndicator == 2) {
        computerChoice = "Scissors"}
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
        console.log("You Win!")
        playerScore++
    } else if (playOption == "PAPER" & compOption == "ROCK") {
        console.log("You Win!")
        playerScore++
    } else if (playOption == "SCISSORS" & compOption == "PAPER") {
        console.log("You Win!")
        playerScore++
    } else if (playOption == "ROCK" & compOption == "PAPER") {
        console.log("You Lose!")
        compScore++
    } else if (playOption == "PAPER" & compOption == "SCISSORS") {
        console.log("You Lose!")
        compScore++
    } else if (playOption == "SCISSORS" & compOption == "ROCK") {
        console.log("You Lose!")
        compScore++
    }
}


//Loop game until 5 rounds have passed, evaluate the overall winner and print winning message
//Contain other functions
function game() {
    for (let i = 0; i < 5; i++) {
    getPlayerChoice()

    compOption = computerChoice.toUpperCase()

    playRound(playOption, compOption)
    }
    if (playerScore > compScore) {
        console.log("You won the whole game!")
        console.log("Player score: " + playerScore + " Computer score: " + compScore)
    } else if (compScore > playerScore) {
        console.log("You lost the whole game!")
        console.log("Player score: " + playerScore + " Computer score: " + compScore)
    } else {console.log("What happened?")}
}

game()