//var Dicts = new Dictionaries();
function init() {
    window.Deck = new Deck(); //init empty deck, non-DB data and dictionaries
    window.Matrix = new matrix();
    window.IDlist = []; // unit list, for card counting
    window.tDebug = []; //debug output
    window.DataDisplay = 1; //portrait switch

    //just prep. the actual init is triggered by DataParsing.js
}
