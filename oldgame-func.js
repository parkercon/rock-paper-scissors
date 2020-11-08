function computerPlay(compChoice){
    let choiceNum = Math.floor(Math.random() * 3);
    if (choiceNum == 0){
        compChoice.Value = "rock";
    }
    else if (choiceNum == 1){
        compChoice.Value = "paper";
    }
    else if(choiceNum == 2){
        compChoice.Value = "scissors";
    }
    console.log(choiceNum);
    return choiceNum;
}

function playRound(playerChoiceInt, compChoiceInt, compChoice, playerChoice){
    /* 0 == rock
       1 == paper
       2 == scissor
     */
    let win_array = [[0, 2, 1], 
                     [1, 0, 2], 
                     [2, 1, 0]];
    let result = win_array[playerChoiceInt][compChoiceInt];
    if (result == 0){
        console.log(`Its a tie! You chose ${playerChoice} and The computer chose ${compChoice.Value}`);
    }
    else if (result == 1){
        console.log(`You won! You chose ${playerChoice} and The computer chose ${compChoice.Value}`);
    }
    else if (result == 2){
        console.log(`You lost! You chose ${playerChoice} and The computer chose ${compChoice.Value}`);
    }
}

function game(){
    let compChoice = {Value: ""};
    let compChoiceInt;
    let playerChoiceInt;
    let playerChoice;

    for (let i = 0; i < 5; i++){
        playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
        if (playerChoice == "rock"){
            playerChoiceInt = 0;
        }
        else if (playerChoice == "paper"){
            playerChoiceInt = 1;
        }
        else if (playerChoice == "scissors")
        {
            playerChoiceInt = 2;
        }
        compChoiceInt = computerPlay(compChoice);
        playRound(playerChoiceInt, compChoiceInt, compChoice, playerChoice);
    }
    
}