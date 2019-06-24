// computers array
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z']

// variables which hold wins & losses that start at zero.
var wins = 0
var losses = 0

// variables for # of guesses and choices
var guessesLeft = 9
var lettersGuessed = []
var computerGuess = []

alert('Please select a random letter.')

// function document.onkeyup runs when the user presses a key.
document.onkeyup = function (event) {
  // Shows which key the user pressed.
  var userGuess = event.key
  // shows the letters guessed by user.
  lettersGuessed.push(userGuess)
  // user array
  var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
    'x', 'y', 'z' ]
  // Shows computer guess, then random choice based on array length.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]

  // google mdn indexof
  // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
  if (options.indexOf(userGuess) > -1) {
    // if user guess === computer guess and guesses left are greater than zero,
    if ((userGuess === computerGuess) && (guessesLeft > 0)) {
    // wins increment
      wins++
      // if won call reset function to set number of guesses left to zero
      reset()
    } else if (guessesLeft === 1) {
      // if guesses left === 0, losses++ and reset function is called.
      losses++
      reset()
    } else if (userGuess !== computerGuess) {
      guessesLeft--
    }
  }
  var html =
    "<p>Guess what letter I'm thinking of!</p>" +
    '<p>Wins: ' + wins + '</p>' +
    '<p>Losses: ' + losses + '</p>' +
    '<p>Guesses left: ' + guessesLeft + '</p>' +
    '<p>Your guesses so far: ' + lettersGuessed + '</p>'

  // displaying from HTML
  document.getElementById('game').innerHTML = html
}

//   ///////////////////////////////////////////////////////
function reset () {
  guessesLeft = 9
  lettersGuessed.length = []
}
//   //////////////////////////////////////////////////////
