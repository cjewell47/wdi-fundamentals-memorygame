console.log("JS file is connected to HTML! Woo!");

//var cardOne = "king";
//var cardTwo = "king";
//var cardThree = "queen";
//var cardFour = "queen";
 
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

/* if (cardOne === cardTwo) {
	alert("You have found a match!");
} else { 
	alert("Sorry, try again.");
}

if (cardThree === cardFour) {
	alert("You have found a match!");
} else { 
	alert("Sorry, try again.");
}

if (cardOne === cardThree) {
	alert("You have found a match!");
} else { 
	alert("Sorry, try again.");
} */

var gameBoard = document.getElementById("game-board");

var createCards = function() {
	for (var i = 0; i < 4; i++){
		var cardElement = document.createElement("div");
		cardElement.className = "card";
		gameBoard.appendChild(cardElement);
	};
};

createCards();

var createBoard = function() {
	for (var x = 0; x < cards.length; x++){
 	cardElement.setAttribute('data-card', cards[x]);
	};
};

createBoard();

var isMatch = function(match) {
(match[0].getAttribute('data-card') === match[1].getAttribute('data-card'));
};

var isTwoCards = function() {
cardsInPlay.push(this.getAttribute('data-card'));
if (cardsInPlay.length === 2) {
	isMatch(cardsInPlay);
	cardsInPlay = [];
};
};

for (var z = 0; z < cards.length; z++) {
	cardElement.addEventListener("click", isTwoCards());
	if (cardsInPlay.getAttribute('data-card') === 'king') {
		cardElement.innerHTML = '<img src="file:///Users/charlesjewell/Documents/fundamentals/wdi-fundamentals-memorygame/starter-code/MyKing.png" alt="King of Spades" />';
	} else if (cardsInPlay.getAttribute('data-card') === 'queen') {
		cardElement.innerHTML = '<img src="file:///Users/charlesjewell/Documents/fundamentals/wdi-fundamentals-memorygame/starter-code/MyQueen.png" alt="Queen of Spades" />';
	};
};

