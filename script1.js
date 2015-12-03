"use strict";

console.log('Link : script.js');

$(document).ready(function(){
	console.log(('Link : jquery.js'));
	//console.log(Math.max(2,4));
	//console.log(Math.min(2,4));
	//confirm("C'est bon ?");
	//var answer = prompt("Tell me everything you know", "...");
	/*var theNumber = Number(prompt("Choisissez un nombre: ", "")); //Boolean String
	if (!isNaN(theNumber))
		alert("Votre nombre a pour carré " + theNumber*theNumber);
	else
		alert("Vous n'avez pas choisi un nombre.");*/
	
	//Looping a triangle
	for (var i = 0; i < 7; i++){
		var out = "";
		for (var j = 0; j <= i; j++){
			out += '#';
		}
		console.log(out);
	}

	//fizzbuzz
	function fizzbuzz(num){
		var x = ((num%3)?'':'fizz')+((num%5)?'':'buzz');
		//console.log(x);
		return (x)?x:num;
	}
	var result = '';
	for (var i = 1; i < 101; i++){
		result += fizzbuzz(i);
	}
	console.log(result);

	//Chess Board
	var size = 100;
	var chessBoard = '';
	for (var i = 0; i < size; i++){
		if (i%2){
			for (var j = 0; j < size; j++){
				chessBoard += (j%2)?'#':' ';
			}
		} else {
			for (var j = 0; j < size; j++){
				chessBoard += (j%2)?' ':'#';
			}
		}
		chessBoard += '\n';
	}
	console.log(chessBoard);
});
