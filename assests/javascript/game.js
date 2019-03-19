// computers array
var computerChoices= ["a", "b", "c", "d", "e", "f", "g", "h",
"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
"v", "w", "x", "y", "z"];


// variables which hold wins & losses that start at zero.
var wins = 0;
var losses = 0;

// variables for # of guesses and choices
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];

// function document.onkeyup runs when the user presses a key.
document.onkeyup = function(event) {
    // Shows which key the user pressed.
    var userGuess = event.key;
    lettersGuessed.push(userGuess);

    // Shows computer guess, then random choice based on array length.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // user array
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", 
    "x", "y", "z",];
		 	

	if (options.indexOf(userGuess) > -1) {
    
    // html viewed with JS. Not by ID as in RPS game in activities. 
    // i changed ID's to this below because of console errors. I couln't figure out how to fix it.
    var html = "<p>Guess what letter I'm thinking of!</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses left: " + guessesLeft + "</p>" +
    "<p>Your guesses so far: " + lettersGuessed + "</p>";

  document.querySelector("#game").innerHTML = html;

    
    // if user guess === computer guess and guesses left are greater than zero,
    // user wins.
    if ((userGuess === computerGuess[0]) && (guessesLeft > 0)) {
        wins++;
        guessesLeft = 9;
	    lettersGuessed.length = 0;
	    computerGuess.length = 0;    
}
    // if user guess does not = computer guess and guesses left are greater than zero
    // guesses left gets subtracted by one.
     else if ((userGuess !==  computerGuess[0])  && (guessesLeft > 0)) {
        guessesLeft = guessesLeft-1;
    }  
    // opposite of wins
    else {
        losses++;
        guessesLeft = 9;
        lettersGuessed.length = 0;
        computerGuess.length = 0;    
    }
    }
};
