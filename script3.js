"use strict";

console.log('Link : script.js');

$(document).ready(function(){
	console.log('Link : jQuery');

	//The Weresquirrel
	var journal = [];

	function addEntry(events, didITurnIntoASquirrel){
		journal.push({
			events: events,
			squirell: didITurnIntoASquirrel,
		});
	}

	addEntry(["work", "touched tree", "pizza", "running", "television"], false);
	addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
	addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

	for (var i = 0; i < journal.length; i++){
		//console.log(journal[i], "Events content : ",journal[i].events);
	}

	//console.log("Type of JOURNAL : ", typeof JOURNAL);

	function phi(table){
		return (table[3] * table[0] - table[2] * table[1]) / Math.sqrt((table[2]+table[3])*(table[0]+table[1])*(table[1]+table[3])*(table[0]+table[2]));
	}

	//console.log(phi([76, 9, 4, 1]));

	function hasEvent(event, entry){
		return entry.events.indexOf(event) != -1;
	}

	function tableFor(event, journal){
		var table = [0, 0, 0, 0];
		for (var i = 0; i < journal.length; i++){
			var entry = journal[i], index = 0;
			if (hasEvent(event, entry)) index += 1;
			if (entry.squirell) index += 2;
			table[index] += 1;
		}
		return table;
	}

	//console.log(tableFor("pizza", JOURNAL));

	var map = {};
	function storePhi(event, phi){
		map[event] = phi;
	}

	storePhi("pizza", 0.069);
	storePhi("touched tree", -0.081);
	//console.log("pizza" in map);
	//console.log(map["touched tree"]);
	//for (var event in map)
		//console.log("The correlation for '" + event + "' is " + map[event]);

	function gatherCorrelations(journal){
		var phis = {};
		for (var entry = 0; entry < journal.length; entry++){
			var events = journal[entry].events;
			for (var i = 0; i < events.length; i++){
				var event = events[i];
				if (!(event in phis))
					phis[event] = phi(tableFor(event, journal));
			}
		}
		return phis;
	}

	var correlations = gatherCorrelations(JOURNAL);
	//console.log(correlations);


	//Exercices
	// The Sum of a Range
	function range(start, end){
		var table = [];
		for (var i = start; i <= end; i++)
			table.push(i)
		return table;
	}
	function sum(table){
		var result = 0;
		for (var i = 0; i < table.length; i++)
			result += table[i];
		return result;
	}

	console.log(range(3,11));
	console.log(sum(range(3,11)));


	//Reversing an Array
	function reverseArray(table){
		var newTable = [];
		for (var i = 0; i < table.length; i++)
			newTable.unshift(table[i]);
		return newTable;
	}
	function reverseArrayInPlace(table){
		for (var i = 0; i < table.length / 2; i++){
			var first = table[i];
			var last = table[table.length-1-i];
			table[i] = last;
			table[table.length-1-i] = first;
		}
		return table;
	}

	var maTable = [1,2,3,4,5,6,7];
	console.log(reverseArray(maTable));
	console.log(reverseArrayInPlace(maTable));
	console.log(maTable);

	//A list
	var autreTable = [1, 2, 3];
	function arrayToList(table, index){
		var obj = {
			value: table[index],
			rest: null,
		};
		if (table[index + 1] == null){
		} else {
			obj["rest"] = arrayToList(table, index + 1);
		}
		return obj;
	}
	function listToArray(list){
		var table = [];
		function pushTable(list){
			table.push(list["value"]);
			if (list.rest != null)
				pushTable(list.rest);
		}
		pushTable(list);
		return table;
	}

	//console.log(null == undefined);
	var object = arrayToList(autreTable, 0);
	console.log(object);
	var object1 = {
		nom: "Ben",
		surnom: "Bingoooo"
	};
	var object2 = {
		nom: "Ben",
		surnom: "Bingoooo"
	};
	var tableEncore = listToArray(object);
	console.log(tableEncore);

	//Deep Comparison
	function deepEqual(first, second){
		if (typeof first != typeof second)
			return false;
		if (typeof first == 'object'){
			for (var element in first){
				if (first[element] != second[element])
					return false;
			}
		}
		return true;
	}
	//console.log(1 == "1");
	console.log(deepEqual(1, "1"));
	console.log(object2 == object1);
	console.log(deepEqual(object2, object1));
});