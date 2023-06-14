let noun;
//these constants should equal the number of words in their respective file.
//this should be the last key + 1
const nounAmount = 20
const verbAmount = 20

//adjusts padding on window resize
function preventOverflow(){
    if(window.innerWidth < 780){
        document.getElementById("generationTable").style = "width: 100%";
        document.getElementById("regenButton").style="width:100%;"
    } else{
        document.getElementById("generationTable").style = "width: 50%";
        document.getElementById("regenButton").style="width:25%;"
    }
    if(window.innerHeight < 700){
        document.getElementById("footerTitle").style = "display:none;"
    }else{
        document.getElementById("footerTitle").style = ""
    }
}

function dataGet(fileName){
    var data = new XMLHttpRequest();
    data.open("GET",fileName,false);
    data.send(null);
    return data;
}

const dataNouns = dataGet("./nouns.json");
const dataVerbs = dataGet("./verbs.json");

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

//changes the text of a specified element
function replaceText(objectId, text) {
    document.getElementById(objectId).innerHTML = text;
}

//generates words then puts them in the word boxes
function insertWords(){
    var noun1 = nounGen();
    var verb = verbGen();
    var noun2 = nounGen();
    
    replaceText("noun1",noun1);
    replaceText("verb",verb);
    replaceText("noun2",noun2);
}

//run insertWords() when button is clicked
document.getElementById("regenButton").addEventListener("click",insertWords)

//get words for initial load
insertWords();

//change box size when window is thin
preventOverflow()
window.addEventListener("resize", preventOverflow);

//console.log(noun1 + " "+ verb + " " + noun2);