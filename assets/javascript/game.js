var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guess = 9;
var guessleft = 9;
var guessletter = [];
var letterToGuess = null;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var changeLetter = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

var changeGuessSoFar = function() {
  document.querySelector('#soFar').innerHTML = "Your Guesses so far: " + guessletter.join(', ');
};

var changeGuessLeft = function() {
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessleft;
};

var reset = function() {
  totalguess = 9;
  guessleft = 9;
  guessletter = [];
  changeLetter();
  changeGuessLeft();
  changeGuessSoFar();
}

changeLetter();
changeGuessLeft();

document.onkeyup = function(event) {
  
  guessleft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessletter.push(userGuess);
  changeGuessLeft();
  changeGuessSoFar();

        if (guessleft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#userWins').innerHTML = "Wins: " + wins;
                reset();
            }
        } else if(guessleft == 0){
            losses++;
            document.querySelector('#userLosses').innerHTML = "Losses: " + losses;
            reset();
        }
};

