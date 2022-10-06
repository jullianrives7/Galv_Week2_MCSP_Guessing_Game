//play(); // This is your main function that runs when the page loads

//App will have user guess a number
//1. Will use prompt() function to guess user input (GUESS VALUE)
//   Will use alert() function to send back appropriate message
// window.alert('Higher')
// window.alert('Lower')
// window.alert('Correct!')

//2. If user guesses incorrectly, ask user to guess again.
//3. Tells the user how many tries it took to guess correctly upon correct answer.
//4. (String) “Correct! Your previous guesses we’re x, x, x, x!” , if Guess is equal to the secret number
//5. “Sorry Alice, Guess Higher”, if Guess is lower than the secret number
//   “Sorry Alice, Guess Lower”, if Guess is higher than the secret number
//   “That’s Correct Alice! Your previous guesses we’re 100, 30, 50, 55!” , if Guess is equal to the secret number
//6. Play again: let’s add a feature that asks the user if they want to play again once they’ve made a correct guess.
//   (String) “Yes”, Run main game function
//   (String) “No”, do nothing
//7. Let’s add a feature that records the number of guesses for each unique name that is entered when the game is started. 
//   If someone with the same name played before, then when they get a correct answer, it tells them 
//   if they beat their previous attempt (less guesses is better). 

// Alert: https://developer.mozilla.org/en-US/docs/Web/API/Window/alert

// Prompt: https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt


//HOISTING --- running function at top before its been defined... used in chrome console
//play();



var scoreBoard = {};



function play(){
    let playerName = prompt('Welcome to the Secret Number Guessing Game! What is your name?');
    let playerGuess = prompt('Guess a number between 0 and 10.');
    var randomNum = Math.floor(Math.random() * 11);
    
    var attemptCount = 0;
    var guessArr = [];
    
    while(playerGuess != randomNum){

        if (playerGuess < randomNum){
            attemptCount += 1;
            alert('Sorry' + ' ' + playerName + ', guess higher!');
            guessArr.push(playerGuess);
            playerGuess = prompt('Guess again!')
        }

        else if (playerGuess > randomNum){
            attemptCount += 1;
            alert('Sorry' + ' ' + playerName + ', guess lower!');
            guessArr.push(playerGuess);
            playerGuess = prompt('Guess again!');
        }
    }
//if guess is equal to random number, then the following code executes
        attemptCount += 1;
        var finalAttemptCount = attemptCount;

        alert('That\'s correct,' + ' ' + playerName + '! It only took you' + ' ' + finalAttemptCount + ' tries!'
        + ' ' + 'Your previous guesses were ' + guessArr.join(', ') + '!');

        updatePlayerHighScore(playerName, finalAttemptCount);
        console.log(scoreBoard);
        playAgain();

   }



function playAgain(){
    
    let gameRestart = prompt('Do you want to play again? Type \'yes\' or \'no\'.');
    
        if (gameRestart.toLowerCase() === 'yes'){
            play();  
        }
        if (gameRestart.toLowerCase() === 'no'){
            alert('Thanks for playing!');  
        }

}



function updatePlayerHighScore(playerName, finalAttemptCount){
    //if there is no data for the current player, create an entry
    if(!scoreBoard[playerName]){
        scoreBoard[playerName] = finalAttemptCount;
        alert('Your new high score is' + ' ' + scoreBoard[playerName] + ' guesses.');
    }

    //if there is data for the current player on the scoreboard and 
    //the current finalAttemptCount is less than the current "best score", 
    //overwrite the best score with the current finalAttemptCount
    else if(finalAttemptCount < scoreBoard[playerName]){
        scoreBoard[playerName] = finalAttemptCount;
        alert('This is your new high score!');
    }

    //if there is data for the current player on the scoreboard and 
    //the current finalAttemptCount is greater than the current "best score", 
    //display message stating they have not beat their current high score, and display current high score

    else{
        alert('Sorry' + ' ' + playerName + ', you didn\'t beat your high score this time.' +
        'Your high score is still' + ' ' + scoreBoard[playerName] + ' guesses.');
    }
    
}


  
 
 







