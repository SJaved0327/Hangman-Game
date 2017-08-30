//set up word game bank
//index 0 to 7; 8 items
var gameBank = ["ALLEN", "SANCHEZ", "GUARNASCHELLI", "FREITAG", "SANTOS", "ZAKARIAN", "CHAUHAN", "MURPHY"];

//set up game selects a choice from the 8 items in the bank at random
var gameChoice = Math.floor(Math.random()* 8);

//answer for the round is the index of gameBank chosen at random
var gameAnswer = gameBank[gameChoice];

//number of letters to be guessed is the length of gameAnswer (number of items in the gameAnswer)
var lettersToGuess = gameAnswer.length;

//letters in gameAnswer need to be broken into discrete selections
//var gameLetters = gameAnswer.split('');

//there needs to be one _ for every letter item in gameLength
//items are guessed and matched against index of gameLength
//var guessLetters = [gameLength];


/*
//user wins when all items in gameLength have been guessed
var wins = gameLength;

//user starts with 15 guesses
var guessesRemain = 15;

//need to display userAnswer in the guessLetters display AND lettersGuessed
var output = "";
var userAnswer = "";

//letters are represented by _ until they are guessed. each _ corresponds to an index
for (var i = 0; i < gameAnswer.length; i++){
	guessLetters[i] = "_ ";
	output = guessLetters[i];
}


var current = document.getElementById("current");
current.innerHTML = "New Heading";
*/


