console.log("JS file is connected to HTML! Woo!");

var cardOne = "king";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "queen";

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

var gameBoard = document.querySelector("#game-board");

var createCards = function() {
	for (var i = 0; i < 4; i++){

		var cardElement = document.createElement("div");
		cardElement.className = "card";
		gameBoard.appendChild(cardElement);
	};
};

document.addEventListener("load", createCards());