let noun;
//these constants should equal the amount of words MINUS 1.
const nounAmount = 2
const verbAmount = -1
//get nouns data
var dataNouns = new XMLHttpRequest();
dataNouns.open("GET","./nouns.json", false);
dataNouns.send(null);

//select words
var nounSelection = Math.floor(Math.random()*nounAmount)



//parse word data
const nounJSON = JSON.parse(dataNouns.responseText);

//convert random number to selection
var nounSelectionString = nounSelection.toString()

console.log(nounSelectionString);
console.log(nounJSON[nounSelectionString]);