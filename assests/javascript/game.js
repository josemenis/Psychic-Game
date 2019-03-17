var computerChoices= ["a", "b", "c", "d", "e", "f", "g", "h",
"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
"v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");

document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    if (userGuess === computerGuess) {
        wins++;
      }


userChoiceText.textContent = `Your Letter Guessed: ${userGuess}`;
        computerChoiceText.textContent = `Computer Letter Guess: ${computerGuess}`;
        winsText.textContent = `wins: ${wins}`;
        

}