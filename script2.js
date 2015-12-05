"use strict";

console.log('Link : script.js');

$(document).ready(function(){
	console.log('Link : jQuery');

	/*var x = "outside";

	var f1 = function(){
		var x = "inside f1";
	};
	f1();
	console.log(x);

	var f2 = function(){
		x = "inside f2";
	}
	f2();
	console.log(x);*/

	//les fonctions sont considérées comme des variables.
	function launchMissile(value){
		var ennemy = value;
		return value * 2;
	};
	
	console.log(launchMissile(6));		// retourne la valeur 6 * 2
	launchMissile = true;		// assignation à la valeur true
	console.log(launchMissile);			// retourne la valeur true

	//Closure
	// En ce qui concerne la durée de vie des variables locales, les fonctions sont des variables
	function wrapValue(n){				//fonction qui retourne une fonction
		var localVariable = n;
		return function (){return localVariable};	//fonction retournée
	}

	var wrap1 = wrapValue(1);	// assignation de la fonction {return 1}
	var wrap2 = wrapValue(2);	// assignation de la fonction {return 2}
	console.log(wrap1());		// retourne la valeur 1
	console.log(wrap2());		// retourne la valeur 2

	function multiplier(factor){	// application 2
		return function(number){	// fonction retournée
			return number * factor;
		}
	}

	var twice = multiplier(2);	// assignation de la fonction (number){ return number * 2}
	console.log(twice(5));		// retourne le résultat de 2 * 5
	// La variable reste donc accessible dans ce cas, même s'il a changé de paramètre pour une autre assignation.

	//Recursion
	// Il ne faut pas surcharger le stack, la fonction doit donc s'arrêter à un moment ou à un autre.
	function power(base, exponent){
		if (exponent == 0)
			return 1;			// valeur retournée en fin de récursivité
		else
			return base * power(base, exponent - 1);	// appel de "soi-même"
	}

	console.log(power(2,3));	// retourne 2 à la puissance 3
	// Faire une bouocle est plus rapide que la recursion, mais ce dernier est mathématiquement plus élégant...

	//Création d'un paysage ascii
	var landscape = function(){
		var result = "";
		var flat = function(size){
			for (var count = 0; count < size; count++)
				result += "_";
		}
		var mountain = function(size){
			result += "/";
			for (var count = 0; count < size; count++)
				result += "'";
			result += "\\";
		};
		flat(3);
		mountain(4);
		flat(6);
		mountain(1);
		flat(1);
		return result;
	};

	console.log(landscape());

	//trouver la solution d'un problème par récursion
	function findSolution(target){
		function find(start, history){
			if (start == target)
				return history;
			else if (start > target)
				return null;
			else
				return find(start + 5, "(" + history + " + 5)") || find(start * 3, "(" + history + " * 3)");
		}
		return find(1, "1");
	}

	console.log(findSolution(139));

	//Minimum
	function minimum(a, b){
		return (a < b)?a:b;
	}
	var a = minimum(5, 6);
	var b = minimum(6, 6);
	var c = minimum(7, 6);
	console.log(a, b, c);

	//Recusion
	function isEven(number){
		if (number < 0)
			number = -1 * number;
		if (number == 0)
			return true;
		if (number == 1)
			return false;
		else
			number -= 2;
		return (isEven(number));
	}
	console.log(isEven(75));

	//Bean counting
	function countB(str){
		var count = countChar(str, 'B');
		return count;
	}

	function countChar(str, search){
		var count = 0;
		var letter = '';
		for (var i = 0; i < str.length; i++){
			letter = str.charAt(i);
			if (letter === search)
				count ++;
		}
		return count;
	}
	var result = countB('Bonjour, Benjamin');
	console.log(result);
});