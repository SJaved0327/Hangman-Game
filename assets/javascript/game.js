//set up word game bank
//index 0 to 7; 8 items
var gameBank = ["ALLEN", "SANCHEZ", "GUARNASCHELLI", "FREITAG", "SANTOS", "ZAKARIAN", "CHAUHAN", "MURPHY"];
//set up game selects a choice from the bank at random
var gameChoice = Math.floor(Math.random()* 8);
//answer for the round is the index of gameBank chosen at random
var gameAnswer = gameBank[gameChoice];
//number of letter items to be guessed is the length of gameAnswer
var gameLength = gameAnswer.length;

console.log(gameAnswer);
console.log(gameLength);