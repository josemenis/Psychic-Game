var computerChoices= ["a", "b", "c", "d", "e", "f", "g", "h",
"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
"v", "w", "x", "y", "z"];


// variables which hold wins & losses that start at zero.
var wins = 0;
var losses = 0;

// variables for # of guesses and choices
var numGuesses = 9;
var guessChoices = [];


// Create variables that hold references to the places in the HTML 
// where we want to display things.
var directionsText = document.getElementById("directions-text");
var computerChoiceText = document.getElementById("computerchoice-text");

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");


var guessText = document.getElementById("guess-text");
var userChoiceText = document.getElementById("userchoice-text");

// function document.onkeyup runs when the user presses a key.
document.onkeyup = function(event) {
    // Shows which key the user pressed.
    var userGuess = event.key;
    // Shows computer guess, then random choice based on array length.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", 
    "x", "y", "z",];
		 	

	if (options.indexOf(userGuess) > -1) {

    
    // if user guess === computer guess, user wins
    if (userGuess === computerGuess) {
        wins++;
        numGuesses = 9;
		guessChoices = [];
      }

      if (userGuess != computerGuess) {
        numGuesses --;
        guessChoices.push(userGuess);
    }  

    // if the user guess 
    if (userGuess === 0) {
        numGuesses = 9;
        losses++;
        guessChoices = [];
    }



        computerChoiceText.textContent = `Computer Letter Guess: ${computerGuess}`;
        winsText.textContent = `wins: ${wins}`;
        lossesText.textContent = `losses:${losses}`;

        GuessText.textContent = `Guesses Left ${numGuesses}`;
        userChoiceText.textContent = `Your Letter Guessed: ${guessChoices}`;
    
    }
};

