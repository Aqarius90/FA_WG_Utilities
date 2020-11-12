//var Dicts = new Dictionaries();
function init() {
    window.Deck = new DeckAssembly();
    window.CardsDB = new Array(1500);
    window.TransportArray = new Array(1500);
    window.Matrix = new matrix();
    for (var i = 0; i < 1500; i++) {
      CardsDB[i]=Array(2);
      TransportArray[i]=Array(2);
    }
    window.selectedCards = [0,0,0,0,0,0,0,0,0];
    window.IDlist = [];
    window.tDebug = [];
    window.DataDisplay = 1;
    ractiveDeck.set("debug", tDebug);
    $(document).ready(function()
      {
          $("#logTable").tablesorter();
          $("#infTable").tablesorter();
          $("#supTable").tablesorter();
          $("#tnkTable").tablesorter();
          $("#recTable").tablesorter();
          $("#vehTable").tablesorter();
          $("#helTable").tablesorter();
          $("#airTable").tablesorter();
          $("#navTable").tablesorter();
      }
    );
    ractiveHeader.set('unloaded', false);
    initMainDB();
}

function autoLoad(){
    //autoload deck, syntax: FA_WG_Utilities/?=@CODE
    console.log("autoload test");
    var startercode = window.location.search.split("@");
    console.log(startercode[1]);
    if(startercode[1].length >1){
        decodeDeck("@" + startercode[1]);
        GUIDisplay();
    }
}

function listUnits() //get units for display
{
    var tables = ["log", "inf", "sup", "tnk", "rec", "veh", "hel", "air", "nav"]
    for(var i=0; i<9; i++){
        var body = document.getElementById(tables[i] + "Body");
        var blankBody = document.createElement('tbody');
        blankBody.setAttribute("id",tables[i] + "Body");
        body.parentNode.replaceChild(blankBody, body);

        var table = document.getElementById(tables[i] + "Body"); //table sorter breaks with empty table
        var row = table.insertRow(table.rows.length);
        var nation = row.insertCell(0);
        var picU = row.insertCell(1);
        var unit = row.insertCell(2);
        var costU = row.insertCell(3);
        var cardsU = row.insertCell(4);
        var picT = row.insertCell(5);
        var trans = row.insertCell(6);
        var costT = row.insertCell(7);
        var cardsT = row.insertCell(8);
    }

    UnitLookup();
    $(document).ready(
        function()
        {
        $("#logTable").trigger("update");
        $("#infTable").trigger("update");
        $("#supTable").trigger("update");
        $("#tnkTable").trigger("update");
        $("#recTable").trigger("update");
        $("#vehTable").trigger("update");
        $("#helTable").trigger("update");
        $("#airTable").trigger("update");
        $("#navTable").trigger("update");
        }
    );
}

function checkNation(card){
  if(card.sNation == "ANZAC" && (Deck.sNation != "ANZAC" && Deck.sNation != "CW" && Deck.sNation != "NATO")){ return false; }
  else if(card.sNation == "BRD" && (Deck.sNation != "BRD" && Deck.sNation != "EU" && Deck.sNation != "LJUT" && Deck.sNation != "BDRNL" && Deck.sNation != "NATO")){ return false; }
  else if(card.sNation == "CAN" && (Deck.sNation != "CAN" && Deck.sNation != "CW" && Deck.sNation != "NORAD" && Deck.sNation != "NATO")){ return false; }
  else if(card.sNation == "DEN" && (Deck.sNation != "DEN" && Deck.sNation != "LJUT" && Deck.sNation != "SCA" && Deck.sNation != "NATO")){ return false; }
  else if(card.sNation == "FRA" && (Deck.sNation != "FRA" && Deck.sNation != "EU" && Deck.sNation != "NATO")){ return false; }
  else if(card.sNation == "JAP" && (Deck.sNation != "JAP" && Deck.sNation != "BD" && Deck.sNation != "NATO")){ return false; }
  else if(card.sNation == "NED" && (Deck.sNation != "NED" && Deck.sNation != "BDRNL" && Deck.sNation != "NATO")){ return false; }
  else if(card.sNation == "NOR" && (Deck.sNation != "NOR" && Deck.sNation != "SCA" && Deck.sNation != "NATO")){ return false; }
  else if(card.sNation == "ROK" && (Deck.sNation != "ROK" && Deck.sNation != "BD" && Deck.sNation != "NATO")){ return false; }
  else if(card.sNation == "SWE" && (Deck.sNation != "SWE" && Deck.sNation != "SCA" && Deck.sNation != "NATO")){ return false; }
  else if(card.sNation == "UK" && (Deck.sNation != "UK" && Deck.sNation != "CW" && Deck.sNation != "NATO")){ return false; }
  else if(card.sNation == "USA" && (Deck.sNation != "USA" && Deck.sNation != "NORAD" && Deck.sNation != "NATO")){ return false; }
  else if(card.sNation == "ISR" && (Deck.sNation != "ISR" && Deck.sNation != "NATO")){ return false; }
  else if(card.sNation == "NATO" && Deck.iSide != 0){ return false; }

  else if(card.sNation == "CZS" && (Deck.sNation != "CZS" && Deck.sNation != "NSWP" && Deck.sNation != "YUCZE" && Deck.sNation != "REDFOR")){ return false; }
  else if(card.sNation == "DDR" && (Deck.sNation != "DDR" && Deck.sNation != "NSWP" && Deck.sNation != "REDFOR")){ return false; }
  else if(card.sNation == "DPRK" && (Deck.sNation != "DPRK" && Deck.sNation != "RD" && Deck.sNation != "REDFOR")){ return false; }
  else if(card.sNation == "POL" && (Deck.sNation != "POL" && Deck.sNation != "NSWP" && Deck.sNation != "FINPL" && Deck.sNation != "REDFOR")){ return false; }
  else if(card.sNation == "PRC" && (Deck.sNation != "PRC" && Deck.sNation != "RD" && Deck.sNation != "REDFOR")){ return false; }
  else if(card.sNation == "USSR" && (Deck.sNation != "USSR" && Deck.sNation != "REDFOR")){ return false; }
  else if(card.sNation == "FIN" && (Deck.sNation != "FIN" && Deck.sNation != "FINPL" && Deck.sNation != "REDFOR")){ return false; }
  else if(card.sNation == "YU" && (Deck.sNation != "YU" && Deck.sNation != "YUCZE" && Deck.sNation != "REDFOR")){ return false; }
  else if(card.sNation == "REDFOR" && Deck.iSide != 1){ return false; }

  else if(card.iIsProto == 1 && (Deck.sNation == "REDFOR" || Deck.sNation == "NATO")){ return false; }
  else if(card.sNation != ""){ return true; }
}

function UnitLookup(){
    var card;
    var naval;
    var dry;
    var year = 3000;
    if(Deck.sEra == "B"){ year = 1985;}
    else if(Deck.sEra == "C"){ year = 1980;}
    var spec = -1;
    if(Deck.sSpec == "MAR"){spec=0;}
    else if (Deck.sSpec == "AIR"){spec=1;}
    else if (Deck.sSpec == "MECH"){spec=2;}
    else if (Deck.sSpec == "ARM"){spec=3;}
    else if (Deck.sSpec == "MOTO"){spec=4;}
    else if (Deck.sSpec == "SUP"){spec=5;}
    else if (Deck.sSpec == "NAV"){spec=6;}

	var valid = true;
    for (var i=0; i<1114;i++){
        card = CardsDB[i][Deck.iSide];
        if(card.sUnitData.charAt(4) != '1'){ //transports don't get their own card
            valid = checkNation(card);
            if (card.iYear <= year && valid == true){
                if (card.sUnitData.charAt(7) == '1'){//if is inf
                    for (var j=0; j < TransportArray[card.iUnitID][Deck.iSide].length; j++){
                        if(TransportArray[card.iUnitID][Deck.iSide][j] != 0){
                            var veh = CardsDB[TransportArray[card.iUnitID][Deck.iSide][j]][Deck.iSide];
                            if (veh.iYear <= year) {
                                if (Deck.sSpec == "GEN" || veh.sSpecDeck.charAt(spec) == '1'){
                                    if (Deck.sSpec == "GEN" || card.sSpecDeck.charAt(spec) == '1'){
                                        dry = new VehicleCard("000", card, veh, 0)
                                        toList(dry);
                                    }
                                }
                                if(veh.sUnitData.charAt(27) == '1'){
                                    send = new VehicleCard("000", card, veh, 1);
                                    toList(send);
                                }
                            }
                        }
                    }
                }
                else{//is veh
                    if (Deck.sSpec == "GEN" || card.sSpecDeck.charAt(spec) == '1'){
                        dry = new VehicleCard("000", card, 0, 0);
                        toList(dry);
                    }
                    if(card.sUnitData.charAt(27) == '1'){
                        send = new VehicleCard("000", card, 1, 0)
                        toList(send);
                    }
                }
            }
        }
    }
}

function toList(card){
    var type;
    if (card.UnitTypeData.charAt(0) == '1'){ type = "logTable";}//logi
    else if (card.UnitTypeData.charAt(1) == '1'){type = "infTable";}//inf
    else if (card.UnitTypeData.charAt(2) == '1'){type = "supTable";}//sup
    else if (card.UnitTypeData.charAt(3) == '1'){type = "tnkTable";}//tnk
    else if (card.UnitTypeData.charAt(4) == '1'){type = "recTable";}//rec
    else if (card.UnitTypeData.charAt(5)== '1'){type = "vehTable";}//veh
    else if (card.UnitTypeData.charAt(6) == '1'){type = "helTable";}//hel
    else if (card.UnitTypeData.charAt(7) == '1'){type = "airTable";}//air
    else {type = "navTable";}//nav


    var table = document.getElementById(type);
    var row = table.insertRow(table.rows.length);
    var nation = row.insertCell(0);
    var picU = row.insertCell(1);
    var unit = row.insertCell(2);
    var costU = row.insertCell(3);
    var cardsU = row.insertCell(4);
    var picT = row.insertCell(5);
    var trans = row.insertCell(6);
    var costT = row.insertCell(7);
    var cardsT = row.insertCell(8);
    nation.innerHTML = card.Unit.sNation;
    unit.innerHTML = card.Unit.sNameU;
    cardsU.innerHTML = card.Unit.iCards;
    costU.innerHTML = card.Unit.iCost;

    var iData = document.createElement("img");
    iData.setAttribute("class", "img-responsive sprite sprite-" + Deck.iSide + card.Unit.iUnitID );
    iData.setAttribute("style", "position: relative; top: 0; left: 0; height: 30px;");
    picU.appendChild(iData);

    if(card.Transport !=0){
        var iData = document.createElement("img");
        iData.setAttribute("class", "img-responsive sprite sprite-" + Deck.iSide + card.Transport.iUnitID );
        iData.setAttribute("style", "position: relative; top: 0; left: 0; height: 30px;");
        picT.appendChild(iData);
        trans.innerHTML = card.Transport.sNameU;
        cardsT.innerHTML = card.Transport.iCards;
        costT.innerHTML = card.Transport.iCost;
    }

    row.onclick =  function(){ShowCard( new VehicleCard ("000", card.Unit, card.Transport, card.Craft));};
}

function isError(Card) {
    var isUnavailable = false;
    isUnavailable = !checkNation(Card);
    if (Deck.sEra == "B" && Card.iYear > 1985){ isUnavailable = true; }
    else if (Deck.sEra == "C" && Card.iYear > 1980){ isUnavailable = true; }
    if (Deck.sSpec == "MAR" && Card.sSpec.charAt(0) != '1') { isUnavailable = true; }
    else if (Deck.sSpec == "AIR" && Card.sSpec.charAt(1) != '1') { isUnavailable = true; }
    else if (Deck.sSpec == "MECH" && Card.sSpec.charAt(2) != '1') { isUnavailable = true; }
    else if (Deck.sSpec == "ARM" && Card.sSpec.charAt(3) != '1') { isUnavailable = true; }
    else if (Deck.sSpec == "MOTO" && Card.sSpec.charAt(4) != '1') { isUnavailable = true; }
    else if (Deck.sSpec == "SUP" && Card.sSpec.charAt(5) != '1') { isUnavailable = true; }
    return isUnavailable;
}

function ShowData(type, spec) {
    var iData = document.createElement("img");
    iData.src = "png/" + spec + ".png";
    iData.setAttribute("class", "img-responsive");
    iData.setAttribute("style", "position: absolute; top: 0; left: 0;");
    document.getElementById(type + "UD").appendChild(iData);
}

function ShowCard(Card)
{
    var type, btn;
    if (Card.UnitTypeData.charAt(0) == '1'){ type = "log"; btn = 0;}//logi
    else if (Card.UnitTypeData.charAt(1) == '1'){type = "inf"; btn = 1;}//inf
    else if (Card.UnitTypeData.charAt(2) == '1'){type = "sup"; btn = 2;}//sup
    else if (Card.UnitTypeData.charAt(3) == '1'){type = "tnk"; btn = 3;}//tnk
    else if (Card.UnitTypeData.charAt(4) == '1'){type = "rec"; btn = 4;}//rec
    else if (Card.UnitTypeData.charAt(5) == '1'){type = "veh"; btn = 5;}//veh
    else if (Card.UnitTypeData.charAt(6) == '1'){type = "hel"; btn = 6;}//hel
    else if (Card.UnitTypeData.charAt(7) == '1'){type = "air"; btn = 7;}//air
    else {type = "nav"; btn = 8;}//nav


    document.getElementById(type + "UD").innerHTML = "";
    var iData = document.createElement("img");
    iData.src = "png/blankb.png";
    iData.setAttribute("class", "img-responsive");
    iData.setAttribute("style", "position: relative; top: 0; left: 0;");
    document.getElementById(type + "UD").appendChild(iData);

    if (Card.Unit.sUnitData.charAt(0)== '1') { ShowData(type, "antiair"); }
    if (Card.Unit.sUnitData.charAt(1)== '1') { ShowData(type, "AAM"); }
    if (Card.Unit.sUnitData.charAt(2)== '1') { ShowData(type, "armour"); }
    if (Card.Unit.sUnitData.charAt(3)== '1') { ShowData(type, "atgm"); }
    if (Card.Unit.sUnitData.charAt(4)== '1') { ShowData(type, "carrier"); }
    if (Card.Unit.sUnitData.charAt(5)== '1') { ShowData(type, "CMD"); }
    if (Card.Unit.sUnitData.charAt(6)== '1') { ShowData(type, "helo"); }
    if (Card.Unit.sUnitData.charAt(7)== '1' && Card.Unit.sUnitData.charAt(14) == '2') { ShowData(type, "rinf"); }
    if (Card.Unit.sUnitData.charAt(7)== '1' && Card.Unit.sUnitData.charAt(14) != '2') { ShowData(type, "inf"); }
    if (Card.Unit.sUnitData.charAt(8)== '1') { ShowData(type, "log"); }
    if (Card.Unit.sUnitData.charAt(9)== '1') { ShowData(type, "eng"); }
    if (Card.Unit.sUnitData.charAt(10) == '1') { ShowData(type, "plane"); }
    if (Card.Unit.sUnitData.charAt(11) == '1') { ShowData(type, "rad"); }
    if (Card.Unit.sUnitData.charAt(12) == '1') { ShowData(type, "rocket"); }
    if (Card.Unit.sUnitData.charAt(13) == '1') { ShowData(type, "mtr"); }
    if (Card.Unit.sUnitData.charAt(14) == '1') { ShowData(type, "rec"); }
    if (Card.Unit.sUnitData.charAt(14) == '2') { ShowData(type, "rec2"); }
    if (Card.Unit.sUnitData.charAt(14) == '3') { ShowData(type, "rec3"); }
    if (Card.Unit.sUnitData.charAt(15) == '1') { ShowData(type, "tube"); }
    if (Card.Unit.sUnitData.charAt(16) == '1') { ShowData(type, "rad"); }
    if (Card.Unit.sUnitData.charAt(26) == '1') { ShowData(type, "amph"); }
    if (Card.Unit.sUnitData.charAt(28) == '1') { ShowData(type, "nav1"); }
    if (Card.Unit.sUnitData.charAt(28) == '2') { ShowData(type, "nav2"); }
    if (Card.Unit.sUnitData.charAt(28) == '3') { ShowData(type, "nav2"); }
    if (Card.Unit.sUnitData.charAt(29) == '1') { ShowData(type, "moto"); }

    iData = document.createElement("img");
    iData.src = "picsb/" + Deck.iSide + Card.Unit.iUnitID + ".png";
    iData.setAttribute("class", "img-responsive");
    iData.setAttribute("style", "position: relative; top: 0; left: 0;");
    document.getElementById(type + "UP").innerHTML = "";
    document.getElementById(type + "UP").appendChild(iData);

    selectedCards[btn] = Card;

    var avails = ractiveDeck.get('ranks.' + type);
    avails.A0 = Math.round(((100 + Deck.availQ) * Card.iaAvailability[0])/100);
    if(Card.iaAvailability[0] == 0){ avails.B0 = "disabled"} else { avails.B0 = "" }
    avails.A1 = Math.round(((100 + Deck.availQ) * Card.iaAvailability[1])/100);
    if(Card.iaAvailability[1] == 0){ avails.B1 = "disabled"} else { avails.B1 = "" }
    avails.A2 = Math.round(((100 + Deck.availQ) * Card.iaAvailability[2])/100);
    if(Card.iaAvailability[2] == 0){ avails.B2 = "disabled"} else { avails.B2 = "" }
    avails.A3 = Math.round(((100 + Deck.availQ) * Card.iaAvailability[3])/100);
    if(Card.iaAvailability[3] == 0){ avails.B3 = "disabled"} else { avails.B3 = "" }
    avails.A4 = Math.round(((100 + Deck.availQ) * Card.iaAvailability[4])/100);
    if(Card.iaAvailability[4] == 0){ avails.B4 = "disabled"} else { avails.B4 = "" }
    ractiveDeck.update('ranks.' + type);

    document.getElementById("D" + type).innerHTML = "";
    var uText = document.createElement("p");
    uText.innerHTML = Card.Unit.sNameU + "   (" + Card.Unit.iUnitID + ")";
    document.getElementById("D" + type).appendChild(uText);
    uText = document.createElement("p");
    uText.innerHTML = "HP:" + Card.Unit.iHP;
    document.getElementById("D" + type).appendChild(uText);
    uText = document.createElement("p");
    uText.innerHTML = InterpretSize(Card.Unit);
    document.getElementById("D" + type).appendChild(uText);
    uText = document.createElement("p");
    uText.innerHTML = InterpretOptics(Card.Unit);
    document.getElementById("D" + type).appendChild(uText);
    uText = document.createElement("p");
    uText.innerHTML = InterpretStealth(Card.Unit);
    document.getElementById("D" + type).appendChild(uText);
    uText = document.createElement("p");
    uText.innerHTML = "Ground Speed:" + Card.Unit.iSpeed + "km/h";
    document.getElementById("D" + type).appendChild(uText);
    uText = document.createElement("p");
    uText.innerHTML = "Road Speed:" + Card.Unit.iRSpeed + "km/h";
    document.getElementById("D" + type).appendChild(uText);
    uText = document.createElement("p");
    uText.innerHTML = "Amphibious Speed:" + Card.Unit.iASpeed + "km/h";
    document.getElementById("D" + type).appendChild(uText);
    uText = document.createElement("p");
    uText.innerHTML = InterpretTraining(Card);
    document.getElementById("D" + type).appendChild(uText);
    uText = document.createElement("p");
    uText.innerHTML = "Autonomy" + Card.Unit.iAutonomy;
    document.getElementById("D" + type).appendChild(uText);
    uText = document.createElement("p");
    uText.innerHTML = Card.Unit.iYear;
    document.getElementById("D" + type).appendChild(uText);
    uText = document.createElement("p");
    uText.innerHTML = "Road Speed:" + Card.Unit.iRSpeed + "km/h";
    document.getElementById("D" + type).appendChild(uText);
    uText = document.createElement("p");
    uText.innerHTML = "Armor: F-"+ Card.Unit.iaArmor[0] + ", B-" + Card.Unit.iaArmor[1] + ", S-" + Card.Unit.iaArmor[2] + ", T-" + Card.Unit.iaArmor[3];
    document.getElementById("D" + type).appendChild(uText);

    showWeapon(Card.Unit.W1, type, 1);
    showWeapon(Card.Unit.W2, type, 2);
    showWeapon(Card.Unit.W3, type, 3);

    if(Card.Transport != 0){
        type += "V";

        document.getElementById(type + "UD").innerHTML = "";
        var iData = document.createElement("img");
        iData.src = "png/blankb.png";
        iData.setAttribute("class", "img-responsive");
        iData.setAttribute("style", "position: relative; top: 0; left: 0;");
        document.getElementById(type + "UD").appendChild(iData);

        if (Card.Transport.sUnitData.charAt(0)== '1') { ShowData(type, "antiair"); }
        if (Card.Transport.sUnitData.charAt(1)== '1') { ShowData(type, "AAM"); }
        if (Card.Transport.sUnitData.charAt(2)== '1') { ShowData(type, "armour"); }
        if (Card.Transport.sUnitData.charAt(3)== '1') { ShowData(type, "atgm"); }
        if (Card.Transport.sUnitData.charAt(4)== '1') { ShowData(type, "carrier"); }
        if (Card.Transport.sUnitData.charAt(5)== '1') { ShowData(type, "CMD"); }
        if (Card.Transport.sUnitData.charAt(6)== '1') { ShowData(type, "helo"); }
        if (Card.Transport.sUnitData.charAt(7)== '1' && Card.Unit.sUnitData.charAt(14) == '2') { ShowData(type, "rinf"); }
        if (Card.Transport.sUnitData.charAt(7)== '1' && Card.Unit.sUnitData.charAt(14) != '2') { ShowData(type, "inf"); }
        if (Card.Transport.sUnitData.charAt(8)== '1') { ShowData(type, "log"); }
        if (Card.Transport.sUnitData.charAt(9)== '1') { ShowData(type, "eng"); }
        if (Card.Transport.sUnitData.charAt(10) == '1') { ShowData(type, "plane"); }
        if (Card.Transport.sUnitData.charAt(11) == '1') { ShowData(type, "rad"); }
        if (Card.Transport.sUnitData.charAt(12) == '1') { ShowData(type, "rocket"); }
        if (Card.Transport.sUnitData.charAt(13) == '1') { ShowData(type, "mtr"); }
        if (Card.Transport.sUnitData.charAt(14) == '1') { ShowData(type, "rec"); }
        if (Card.Transport.sUnitData.charAt(14) == '2') { ShowData(type, "rec2"); }
        if (Card.Transport.sUnitData.charAt(14) == '3') { ShowData(type, "rec3"); }
        if (Card.Transport.sUnitData.charAt(15) == '1') { ShowData(type, "tube"); }
        if (Card.Transport.sUnitData.charAt(16) == '1') { ShowData(type, "rad"); }
        if (Card.Transport.sUnitData.charAt(26) == '1') { ShowData(type, "amph"); }
        if (Card.Transport.sUnitData.charAt(28) == '1') { ShowData(type, "nav1"); }
        if (Card.Transport.sUnitData.charAt(28) == '2') { ShowData(type, "nav2"); }
        if (Card.Transport.sUnitData.charAt(28) == '3') { ShowData(type, "nav2"); }
        if (Card.Transport.sUnitData.charAt(29) == '1') { ShowData(type, "moto"); }

        iData = document.createElement("img");
        iData.src = "picsb/" + Deck.iSide + Card.Transport.iUnitID + ".png";
        iData.setAttribute("class", "img-responsive");
        iData.setAttribute("style", "position: relative; top: 0; left: 0;");
        document.getElementById(type + "UP").innerHTML = "";
        document.getElementById(type + "UP").appendChild(iData);

        document.getElementById("D" + type).innerHTML = "";
        uText = document.createElement("p");
        uText.innerHTML = Card.Transport.sNameU  + "   (" + Card.Transport.iUnitID + ")";
        document.getElementById("D" + type).appendChild(uText);
        uText = document.createElement("p");
        uText.innerHTML = "HP:" + Card.Transport.iHP;
        document.getElementById("D" + type).appendChild(uText);
        uText = document.createElement("p");
        uText.innerHTML = InterpretSize(Card.Transport);
        document.getElementById("D" + type).appendChild(uText);
        uText = document.createElement("p");
        uText.innerHTML = InterpretOptics(Card.Transport);
        document.getElementById("D" + type).appendChild(uText);
        uText = document.createElement("p");
        uText.innerHTML = InterpretStealth(Card.Transport);
        document.getElementById("D" + type).appendChild(uText);
        uText = document.createElement("p");
        uText.innerHTML = "Ground Speed:" + Card.Transport.iSpeed + "km/h";
        document.getElementById("D" + type).appendChild(uText);
        uText = document.createElement("p");
        uText.innerHTML = "Road Speed:" + Card.Transport.iRSpeed + "km/h";
        document.getElementById("D" + type).appendChild(uText);
        uText = document.createElement("p");
        uText.innerHTML = "Amphibious Speed:" + Card.Transport.iASpeed + "km/h";
        document.getElementById("D" + type).appendChild(uText);
        uText = document.createElement("p");
        uText.innerHTML = InterpretTraining(Card);
        document.getElementById("D" + type).appendChild(uText);
        uText = document.createElement("p");
        uText.innerHTML = "Autonomy" + Card.Transport.iAutonomy;
        document.getElementById("D" + type).appendChild(uText);
        uText = document.createElement("p");
        uText.innerHTML = Card.Unit.iYear;
        document.getElementById("D" + type).appendChild(uText);
        uText = document.createElement("p");
        uText.innerHTML = "Road Speed:" + Card.Transport.iRSpeed + "km/h";
        document.getElementById("D" + type).appendChild(uText);
        uText = document.createElement("p");
        uText.innerHTML = "Armor: F-"+ Card.Transport.iaArmor[0] + ", B-" + Card.Transport.iaArmor[1] + ", S-" + Card.Transport.iaArmor[2] + ", T-" + Card.Transport.iaArmor[3];
        document.getElementById("D" + type).appendChild(uText);

        showWeapon(Card.Transport.W1, type, 1);
        showWeapon(Card.Transport.W2, type, 2);
        showWeapon(Card.Transport.W3, type, 3);
    }
}

 function InterpretTraining(Card)
 {
     switch (Card.Unit.iTraining)
     {
         case 1: return "Training: Militia";
         case 2: return "Training: Line";
         case 3: return "Training: Shock";
         case 4: return "Training: Elite";
         case -1: return "CIWS: Bad";
         case -2: return "CIWS: Medium";
         case -3: return "CIWS: Good";
         case -4: return "CIWS: Very good";
         case -5: return "CIWS: Excellent";
         default: return "";
     }
 }

 function InterpretStealth( Card)
 {
     switch (Card.iStealth)
     {
         case 1: return "Stealth: Poor";
         case 2: return "Stealth: Medium";
         case 3: return "Stealth: Good";
         case 4: return "Stealth: Very good";
         case 5: return "Stealth: Exceptional";
         default: return "Stealth: none";
     }
 }

 function InterpretOptics( Card)
 {
     var optika;
 if ((Card.sUnitData.charAt(24) == '1') || (Card.iOptics < 0)){
     switch (Card.iOptics)
     {
         case 1: return "Air Detection: Poor";
         case 2:  return "Air Detection: Medium";
         case 3:  return "Air Detection: Good";
         case 4:  return "Air Detection: Very good";
         case 5:  return "Air Detection: Exceptional";
         default: "Steevie Wonder";
     }
	 
 }
     switch (Card.iOptics)
     {
         case 1: return "Optics: Poor";
         case 2:  return "Optics: Medium";
         case 3:  return "Optics: Good";
         case 4:  return "Optics: Very good";
         case 5:  return "Optics: Exceptional";
         case -1: return "Air Detection: Poor";
         case -2:  return "Air Detection: Medium";
         case -3:  return "Air Detection: Good";
         case -4:  return "Air Detection: Very good";
         case -5:  return "Air Detection: Exceptional";
         case 10: return "Naval optics: Poor";
         case 20:  return "Naval optics: Medium";
         case 30:  return "Naval optics: Good";
         case 40:  return "Naval optics: Very good";
         case 50:  return "Naval optics: Exceptional";
         default: "Steevie Wonder";
     }
 }

 function InterpretSize(Card)
 {
     switch (Card.iSize)
     {
         case 1: return "Size: Very small";
         case 2: return "Size: Small";
         case 3: return "Size: Medium";
         case 4: return "Size: Big";
         case 5: return "Size: Very big";
         default: return "ECM:" + Card.iSize + "%";
     }
 }

function showWeapon( wep, type, place)
{
    document.getElementById("W" + type + place).innerHTML = "";
    if (wep.sName != "NONE")
    {
        var uText = document.createElement("p");
        uText.innerHTML = wep.sName;
        document.getElementById("W" + type + place).appendChild(uText);
        uText = document.createElement("p");
        uText.innerHTML = wep.iAmmo + "x " + wep.sRoundType;
        document.getElementById("W" + type + place).appendChild(uText);
        uText = document.createElement("p");
        uText.innerHTML = " "+wep.sTags;
        document.getElementById("W" + type + place).appendChild(uText);
        uText = document.createElement("p");
        uText.innerHTML = "Ground " + wep.rGround + "m";
        document.getElementById("W" + type + place).appendChild(uText);
        uText = document.createElement("p");
        uText.innerHTML = "Helo " + wep.rHelo + "m";
        document.getElementById("W" + type + place).appendChild(uText);
        uText = document.createElement("p");
        uText.innerHTML = "Plane " + wep.rAir + "m";
        document.getElementById("W" + type + place).appendChild(uText);
        uText = document.createElement("p");
        if (wep.iAccuracy > 100){
            uText.innerHTML = "ACC " + wep.iAccuracy + "m";
        } else {
            uText.innerHTML = "ACC " + wep.iAccuracy + "%";
        }
        document.getElementById("W" + type + place).appendChild(uText);
        uText = document.createElement("p");
        uText.innerHTML = "STAB " + wep.iStab + "%";
        document.getElementById("W" + type + place).appendChild(uText);
        uText = document.createElement("p");
        uText.innerHTML = "AP "+wep.AP;
        document.getElementById("W" + type + place).appendChild(uText);
        uText = document.createElement("p");
        uText.innerHTML = "HE "+wep.HE;
        document.getElementById("W" + type + place).appendChild(uText);
        uText = document.createElement("p");
        uText.innerHTML = "ROF" + wep.ROF;
        document.getElementById("W" + type + place).appendChild(uText);
        uText = document.createElement("p");
        uText.innerHTML = "Supp. "+wep.iSuppression;
        document.getElementById("W" + type + place).appendChild(uText);
        uText = document.createElement("p");
    }
}

function add(type, veterancy){
    if (selectedCards[type].iaAvailability[veterancy] != 0){
        veterancy = veterancy.toString(2);
        if (selectedCards[type].Craft != 0){
            var newcard = new VehicleCard(veterancy, selectedCards[type].Unit, selectedCards[type].Transport, 1)
            Deck.Cards2T[Deck.i3Cards] = newcard;
            Deck.i3Cards++;
        } else if (selectedCards[type].Transport != 0){
            var newcard = new VehicleCard(veterancy, selectedCards[type].Unit, selectedCards[type].Transport, 0)
            Deck.Cards1T[Deck.i2Cards] = newcard;
            Deck.i2Cards++;
        } else if (selectedCards[type].Unit != 0){
            var newcard = new VehicleCard(veterancy, selectedCards[type].Unit, 0,0)
            Deck.Cards0T[Deck.i1Cards] = newcard;
            Deck.i1Cards++;
        }
    }
    GUIDisplay();
    DeckExport();
}

function toGen(Card)
{
    var sData = Card.Unit.sUnitData;
    if (sData.charAt(18) == '1' && (Deck.sSpec == "MOTO" || Deck.sSpec == "MECH" || Deck.sSpec == "MAR" || Deck.sSpec == "AIR")) // INF
    {
        Card.iVet0 = Card.iVet -1;
    }
    else if (sData.charAt(19) == '1' && (Deck.sSpec == "SUP")) // support
    {
         Card.iVet0 = Card.iVet -1;
    }
    else if (sData.charAt(20) == '1' && (Deck.sSpec == "ARM")) // tanks
    {
        Card.iVet0 = Card.iVet -2;
    }
    else if (sData.charAt(21) == '1' && (Deck.sSpec == "MOTO"))  //recon
    {
        Card.iVet0 = Card.iVet -1;
    }
    else if (sData.charAt(22) == '1' && (Deck.sSpec == "MECH" || Deck.sSpec == "MOTO")) // vehicles
    {
        Card.iVet0 = Card.iVet -1;
    }
    else if (sData.charAt(23) == '1' && (Deck.sSpec == "AIR"))
    {
        Card.iVet0 = Card.iVet -1;
    }
    else if (sData.charAt(24) == '1' && (Deck.sSpec == "MAR" || Deck.sSpec == "AIR"))
    {
        Card.iVet0 = Card.iVet -1;
    }
    else{
            Card.iVet0 = Card.iVet;
    }
    return Card;
}

function toSpec(Card)
{
    var sData = Card.Unit.sUnitData;
    if (sData.charAt(18) == '1' && (Deck.sSpec == "MOTO" || Deck.sSpec == "MECH" || Deck.sSpec == "MAR" || Deck.sSpec == "AIR")) // INF
    {
        Card.iVet = Card.iVet0 + 1;
    }
    else if (sData.charAt(19) == '1' && (Deck.sSpec == "SUP")) // support
    {
        Card.iVet = Card.iVet0 + 1;
    }
    else if (sData.charAt(20) == '1' && (Deck.sSpec == "ARM")) // tanks
    {
        Card.iVet = Card.iVet0 + 2;
    }
    else if (sData.charAt(21) == '1' && (Deck.sSpec == "MOTO"))  //recon
    {
        Card.iVet = Card.iVet0 + 1;
    }
    else if (sData.charAt(22) == '1' && (Deck.sSpec == "MECH" || Deck.sSpec == "MOTO")) // vehicles
    {
        Card.iVet = Card.iVet0 + 1;
    }
    else if (sData.charAt(23) == '1' && (Deck.sSpec == "AIR"))
    {
        Card.iVet = Card.iVet0 + 1;
    }
    else if (sData.charAt(24) == '1' && (Deck.sSpec == "MAR" || Deck.sSpec == "AIR"))
    {
        Card.iVet = Card.iVet0 + 1;
    }
    else{
            Card.iVet = Card.iVet0;
    }
    if (Card.iVet == 5) { Card.sVeterancy = "100"; } else
    if (Card.iVet == 4) { Card.sVeterancy = "100"; } else
    if (Card.iVet == 3) { Card.sVeterancy = "011"; } else
    if (Card.iVet == 2) { Card.sVeterancy = "010"; } else
    if (Card.iVet == 1) { Card.sVeterancy = "001"; } else
    if (Card.iVet == 0) { Card.sVeterancy = "000"; }
    //note: iVet<0 or >5 is error, and honestly *should* break. iVet=5 is possible, for superheavies and jets. Edge case, and coded around
    return Card;
}
