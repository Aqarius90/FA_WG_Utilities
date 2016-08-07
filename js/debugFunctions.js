
function debugHeader(){
  //header
    var table = document.getElementById("debugTable");
    var row = table.insertRow(table.rows.length);
    var binary = row.insertCell(0);
    var parse = row.insertCell(1);
    binary.innerHTML = "BIN";
    parse.innerHTML = "PARSE";
  //side
    row = table.insertRow(table.rows.length);
    binary = row.insertCell(0);
    parse = row.insertCell(1);
    binary.innerHTML = binoutdebug.charAt(0);
    parse.innerHTML = Deck.sSide;
  //nation
    row = table.insertRow(table.rows.length);
    binary = row.insertCell(0);
    parse = row.insertCell(1);
    binary.innerHTML = binoutdebug.substr(0,9);
    parse.innerHTML = Deck.sNation;
  //SPEC
    row = table.insertRow(table.rows.length);
    binary = row.insertCell(0);
    parse = row.insertCell(1);
    binary.innerHTML = binoutdebug.substr(9,3);
    parse.innerHTML = Deck.sSpec;
  //era
    row = table.insertRow(table.rows.length);
    binary = row.insertCell(0);
    parse = row.insertCell(1);
    binary.innerHTML = binoutdebug.substr(12,2);
    parse.innerHTML = Deck.sEra;
  //2t units
    row = table.insertRow(table.rows.length);
    binary = row.insertCell(0);
    parse = row.insertCell(1);
    binary.innerHTML = binoutdebug.substr(14,4);
    parse.innerHTML = "inf-naval:  " + parseInt(binoutdebug.substr(14,4), 2);
    //1t units
    row = table.insertRow(table.rows.length);
    binary = row.insertCell(0);
    parse = row.insertCell(1);
    binary.innerHTML = binoutdebug.substr(18,5);1
    parse.innerHTML = "inf-land, veh-naval:  "+ parseInt(binoutdebug.substr(18,5), 2);
}

function debugUnitsOut(){
  for (var i = 0; i < Deck.i3Cards; i++) {
    var table = document.getElementById("debugTable");
    var row = table.insertRow(table.rows.length);
    var binary = row.insertCell(0);
    var parse = row.insertCell(1);
    binary.innerHTML = Deck.Cards2T[i].Unit.iUnitID;
    parse.innerHTML = Deck.Cards2T[i].Unit.sNameU;
    row = table.insertRow(table.rows.length);
    binary = row.insertCell(0);
    parse = row.insertCell(1);
    binary.innerHTML = Deck.Cards2T[i].Transport.iUnitID;
    parse.innerHTML = Deck.Cards2T[i].Transport.sNameU;
    row = table.insertRow(table.rows.length);
    binary = row.insertCell(0);
    parse = row.insertCell(1);
    binary.innerHTML = Deck.Cards2T[i].Craft.iUnitID;
    parse.innerHTML = Deck.Cards2T[i].Craft.sNameU;
  }
  for (var i = 0; i < Deck.i2Cards; i++) {
    var table = document.getElementById("debugTable");
    var row = table.insertRow(table.rows.length);
    var binary = row.insertCell(0);
    var parse = row.insertCell(1);
    binary.innerHTML = Deck.Cards1T[i].Unit.iUnitID;
    parse.innerHTML = Deck.Cards1T[i].Unit.sNameU;
    row = table.insertRow(table.rows.length);
    binary = row.insertCell(0);
    parse = row.insertCell(1);
    binary.innerHTML = Deck.Cards1T[i].Transport.iUnitID;
    parse.innerHTML = Deck.Cards1T[i].Transport.sNameU;
  }
  for (var i = 0; i < Deck.i1Cards; i++) {
    var table = document.getElementById("debugTable");
    var row = table.insertRow(table.rows.length);
    var binary = row.insertCell(0);
    var parse = row.insertCell(1);
    binary.innerHTML = Deck.Cards0T[i].Unit.iUnitID;
    parse.innerHTML = Deck.Cards0T[i].Unit.sNameU;
  }
}

function debugClear(){
    var body = document.getElementById("debugBody");
    var blankBody = document.createElement('tbody');
    blankBody.setAttribute("id","debugBody");
    body.parentNode.replaceChild(blankBody, body);
}
