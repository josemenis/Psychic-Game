## Option One: Psychic Game (Basic)

![Psychic](Images/1-Psychic.jpg)

1. [Watch the demo](https://youtu.be/qTc45Lox97g).

2. You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:

3. Guess what letter I'm thinking of

4. Wins: (# of times the user has guessed the letter correctly)

5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

6. Guesses Left: (# of guesses left. This will update)

7. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

Game works properly. No input validation for only letters, but only letter choices can decrement guesses.