let noun;
//these constants should equal the number of words in their respective file.
//this should be the last key + 1
const nounAmount = 10
const verbAmount = 10

function dataGet(fileName){
    var data = new XMLHttpRequest();
    data.open("GET",fileName,false);
    data.send(null);
    return data;
}

//chooses a random word from the noun file
function nounGen(){
    //select word
    var nounSelection = Math.floor(Math.random()*nounAmount);

    //parse word data
    const nounJSON = JSON.parse(dataNouns.responseText);

    //convert random number to selection
    var nounSelectionString = nounSelection.toString()
    return nounJSON[nounSelectionString];
}

//chooses a random word from the verb file
function verbGen() {
    //select word
    var verbSelection = Math.floor(Math.random()*verbAmount);

    //parse word data
    const verbJSON = JSON.parse(dataVerbs.responseText);

    //convert random number to selection
    var verbSelectionString = verbSelection.toString();
    return verbJSON[verbSelectionString];
}

function replaceText(objectId, text) {
    document.getElementById(objectId).innerHTML = text;
}

const dataNouns = dataGet("./nouns.json");
const dataVerbs = dataGet("./verbs.json");

var noun1 = nounGen();
var verb = verbGen();
var noun2 = nounGen();

replaceText("noun1",noun1);
replaceText("verb",verb);
replaceText("noun2",noun2);

//console.log(noun1 + " "+ verb + " " + noun2);