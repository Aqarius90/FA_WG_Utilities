//var Dicts = new Dictionaries();
function init() {
    window.Deck = new DeckAssembly();
    window.CardsDB = new Array(1024);
    window.Matrix = new matrix();
    for (var i = 0; i < 1025; i++) {
    CardsDB[i]=Array(2);
    }
    initMainDB();
    window.selectedCards = [0,0,0,0,0,0,0,0,0];
   // GUIDisplay();
    window.tDebug = [];
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
        var btn = row.insertCell(9);
    }

    if(Deck.sNation == "ANZAC" || Deck.sNation == "BRD" || Deck.sNation == "CAN" || Deck.sNation == "DEN" || Deck.sNation == "FRA" || Deck.sNation == "JAP" || Deck.sNation == "NED" || Deck.sNation == "NOR" || Deck.sNation == "ROK" || Deck.sNation == "SWE" || Deck.sNation == "UK" || Deck.sNation == "USA") {
       UnitLookup(Deck.sNation);
        UnitLookup("NATO");
    }else if(Deck.sNation == "CZS" || Deck.sNation == "DDR" || Deck.sNation == "DPRK" || Deck.sNation == "POL" || Deck.sNation == "PRC" || Deck.sNation == "USSR" || Deck.sNation == "ISR" || Deck.sNation == "FIN" || Deck.sNation == "YU"){
        UnitLookup(Deck.sNation);
        UnitLookup("RED");
    }
    else if (Deck.sNation == "NATO")
    {
        UnitLookup("ANZAC");
        UnitLookup("BRD");
        UnitLookup("CAN");
        UnitLookup("DEN");
        UnitLookup("FRA");
        UnitLookup("JAP");
        UnitLookup("NED");
        UnitLookup("NOR");
        UnitLookup("ROK");
        UnitLookup("SWE");
        UnitLookup("UK");
        UnitLookup("USA");
        UnitLookup("ISR");
        UnitLookup("NATO");
    }
    else if (Deck.sNation == "REDFOR")
    {
        UnitLookup("CZS");
        UnitLookup("DDR");
        UnitLookup("DPRK");
        UnitLookup("POL");
        UnitLookup("PRC");
        UnitLookup("USSR");
        UnitLookup("FIN");
        UnitLookup("YU");
        UnitLookup("RED");
    }
    else if (Deck.sNation == "BD")
    {
        UnitLookup("ROK");
        UnitLookup("JAP");
        UnitLookup("NATO");
    }
    else if (Deck.sNation == "CW")
    {
        UnitLookup("ANZAC");
        UnitLookup("CAN");
        UnitLookup("UK");
        UnitLookup("NATO");
    }
    else if (Deck.sNation == "EU")
    {
        UnitLookup("BRD");
        UnitLookup("FRA");
        UnitLookup("NATO");
    }
    else if (Deck.sNation == "LJUT")
    {
        UnitLookup("BRD");
        UnitLookup("DEN");
        UnitLookup("NATO");
    }
    else if (Deck.sNation == "BDRNL")
    {
        UnitLookup("BRD");
        UnitLookup("NED");
        UnitLookup("NATO");
    }
    else if (Deck.sNation == "NORAD")
    {
        UnitLookup("CAN");
        UnitLookup("USA");
        UnitLookup("NATO");
    }
    else if (Deck.sNation == "SCA")
    {
        UnitLookup("DEN");
        UnitLookup("NOR");
        UnitLookup("SWE");
        UnitLookup("NATO");
    }
    else if (Deck.sNation == "NSWP")
    {
        UnitLookup("CZS");
        UnitLookup("DDR");
        UnitLookup("POL");
        UnitLookup("RED");
    }
    else if (Deck.sNation == "RD")
    {
        UnitLookup("DPRK");
        UnitLookup("PRC");
        UnitLookup("RED");
    }
    else if (Deck.sNation == "SOVKOR")
    {
        UnitLookup("DPRK");
        UnitLookup("USSR");
        UnitLookup("RED");
    }

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

function UnitLookup(nation){
    var card;
    var year = 3000;
    if(Deck.sEra == "B"){ year = 1985;}//I think FOBs are "year 0". Should be "-7500" really
    if(Deck.sEra == "C"){ year = 1980;}
    var spec = -1;
    if(Deck.sSpec == "MAR"){spec=0;}
    else if (Deck.sSpec == "AIR"){spec=1;}
    else if (Deck.sSpec == "MECH"){spec=2;}
    else if (Deck.sSpec == "ARM"){spec=3;}
    else if (Deck.sSpec == "MOTO"){spec=4;}
    else if (Deck.sSpec == "SUP"){spec=5;}

    for (var i=0; i<1024;i++){
        card = CardsDB[i][Deck.iSide];
        if(card.sUnitData.charAt(4) != '1'){ //transports don't get their own card
            if ((card.sNation == nation || card.sNation == "NATO") && card.iYear <= year){
                if((Deck.sNation != "NATO" && Deck.sNation != "REDFOR") || card.iIsProto == '0'){
                    if (card.sSpecDeck.charAt(spec) == '1' || Deck.sSpec == "GEN"){
                        var transport = 0;
                        if (card.sUnitData.charAt(7) == '1'){
                            for (var j=0; j<TransportLinker.length; j++){
                                if (card.iUnitID == TransportLinker[j].uID && TransportLinker[j].iSide == Deck.iSide){
                                    var pair = new VehicleCard("000", card, CardsDB[TransportLinker[j].vID][Deck.iSide], 0);
                                    if (pair.iYear <= year) {
                                        if((Deck.sNation != "NATO" && Deck.sNation != "REDFOR") || pair.iIsProto == '0'){
                                            if (pair.sSpec.charAt(spec) != '1' || Deck.sSpec == "GEN"){
                                                toList(pair);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        else{
                            var single = new VehicleCard("000", card, 0, 0);
                            toList(single);
                        }
                    }
                }
            }
        }
    }
}

function toList(card){
    var type;
    if (card.Unit.sUnitData.charAt(17) == '1'){ type = "logTable";}//logi
    else if (card.Unit.sUnitData.charAt(18) == '1'){type = "infTable";}//inf
    else if (card.Unit.sUnitData.charAt(19) == '1'){type = "supTable";}//sup
    else if (card.Unit.sUnitData.charAt(20) == '1'){type = "tnkTable";}//tnk
    else if (card.Unit.sUnitData.charAt(21) == '1'){type = "recTable";}//rec
    else if (card.Unit.sUnitData.charAt(22) == '1'){type = "vehTable";}//veh
    else if (card.Unit.sUnitData.charAt(23) == '1'){type = "helTable";}//hel
    else if (card.Unit.sUnitData.charAt(24) == '1'){type = "airTable";}//air
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
    var btn = row.insertCell(9);
    nation.innerHTML = card.Unit.sNation;
    unit.innerHTML = card.Unit.sNameU;
    cardsU.innerHTML = card.Unit.iCards;
    costU.innerHTML = card.Unit.iCost;

    var iData = document.createElement("img");
    iData.src = "pics/" + Deck.iSide + card.Unit.iUnitID + ".png";
    iData.setAttribute("class", "img-responsive");
    iData.setAttribute("style", "position: relative; top: 0; left: 0; height: 30px;");
    picU.appendChild(iData);

    if(card.Transport !=0){
        var iData = document.createElement("img");
        iData.src = "pics/" + Deck.iSide + card.Transport.iUnitID + ".png";
        iData.setAttribute("class", "img-responsive");
        iData.setAttribute("style", "position: relative; top: 0; left: 0; height: 30px;");
        picT.appendChild(iData);
        trans.innerHTML = card.Transport.sNameU;
        cardsT.innerHTML = card.Transport.iCards;
        costT.innerHTML = card.Transport.iCost;
    }


    let elem = document.createElement('input');
    elem.type = 'button';
    elem.value = '>';
    elem.onclick = function(){ShowCard(card);};
    btn.appendChild(elem);
}

function isError(Card) {
    var isUnavailable = false;
    if (Deck.sNation == "NATO")
    {
        if (
        Card.sNation != "ANZAC" &&
        Card.sNation != "BRD" &&
        Card.sNation != "CAN" &&
        Card.sNation != "DEN" &&
        Card.sNation != "FRA" &&
        Card.sNation != "JAP" &&
        Card.sNation != "NED" &&
        Card.sNation != "NOR" &&
        Card.sNation != "ROK" &&
        Card.sNation != "SWE" &&
        Card.sNation != "UK" &&
        Card.sNation != "USA" &&
        Card.sNation != "NATO")
        { isUnavailable = true;}
        if (Card.iIsProto == 1) { isUnavailable = true; }
    }
    else if (Deck.sNation == "REDFOR")
    {
        if (
        Card.sNation != "RED" &&
        Card.sNation != "CZS" &&
        Card.sNation != "DDR" &&
        Card.sNation != "DPRK" &&
        Card.sNation != "POL" &&
        Card.sNation != "PRC" &&
        Card.sNation != "USSR")
        { isUnavailable = true; }
        if (Card.iIsProto == 1) { isUnavailable = true; }
    }
    else if (Deck.sNation == "BD")
    {
        if (
        Card.sNation != "NATO" &&
        Card.sNation != "JAP" &&
        Card.sNation != "ROK") { isUnavailable = true; }
    }
    else if (Deck.sNation == "CW")
    {
        if (
        Card.sNation != "NATO" &&
        Card.sNation != "ANZAC" &&
        Card.sNation != "CAN" &&
        Card.sNation != "UK") { isUnavailable = true; }
    }
    else if (Deck.sNation == "EU")
    {
        if (
        Card.sNation != "NATO" &&
        Card.sNation != "BRD" &&
        Card.sNation != "FRA") { isUnavailable = true; }
    }
    else if (Deck.sNation == "LJUT")
    {
        if (
        Card.sNation != "NATO" &&
        Card.sNation != "BRD" &&
        Card.sNation != "DEN") { isUnavailable = true; }
    }
    else if (Deck.sNation == "NORAD")
    {
        if (
        Card.sNation != "NATO" &&
        Card.sNation != "CAN" &&
        Card.sNation != "USA") { isUnavailable = true; }
    }
    else if (Deck.sNation == "SCA")
    {
        if (
        Card.sNation != "NATO" &&
        Card.sNation != "DEN" &&
        Card.sNation != "NOR" &&
        Card.sNation != "SWE") { isUnavailable = true; }
    }
    else if (Deck.sNation == "NSWP")
    {
        if (
        Card.sNation != "RED" &&
        Card.sNation != "CZS" &&
        Card.sNation != "DDR" &&
        Card.sNation != "POL") { isUnavailable = true; }
    }
    else if (Deck.sNation == "RD")
    {
        if (
        Card.sNation != "RED" &&
        Card.sNation != "DPRK" &&
        Card.sNation != "PRC") { isUnavailable = true; }
    }
    else if (Deck.sNation == "SOVKOR")
    {
        if (
        Card.sNation != "RED" &&
        Card.sNation != "DPRK" &&
        Card.sNation != "USSR") { isUnavailable = true; }
    }
    else if (Deck.sNation == "BDRNL")
    {
        if (
        Card.sNation != "NATO" &&
        Card.sNation != "BRD" &&
        Card.sNation != "NED") { isUnavailable = true; }
    }
    else
    {
        if (Card.sNation != Deck.sNation)
        { isUnavailable = true; }
    }
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
    if (Card.Unit.sUnitData.charAt(17) == '1'){ type = "log"; btn = 0;}//logi
    else if (Card.Unit.sUnitData.charAt(18) == '1'){type = "inf"; btn = 1;}//inf
    else if (Card.Unit.sUnitData.charAt(19) == '1'){type = "sup"; btn = 2;}//sup
    else if (Card.Unit.sUnitData.charAt(20) == '1'){type = "tnk"; btn = 3;}//tnk
    else if (Card.Unit.sUnitData.charAt(21) == '1'){type = "rec"; btn = 4;}//rec
    else if (Card.Unit.sUnitData.charAt(22) == '1'){type = "veh"; btn = 5;}//veh
    else if (Card.Unit.sUnitData.charAt(23) == '1'){type = "hel"; btn = 6;}//hel
    else if (Card.Unit.sUnitData.charAt(24) == '1'){type = "air"; btn = 7;}//air
    else {type = "navTable";}//nav


    document.getElementById(type + "UD").innerHTML = "";
    var iData = document.createElement("img");
    iData.src = "png/blank.png";
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
    if (Card.Unit.sUnitData.charAt(7)== '1') { ShowData(type, "inf"); }
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

    iData = document.createElement("img");
    iData.src = "picsb/" + Deck.iSide + Card.Unit.iUnitID + ".png";
    iData.setAttribute("class", "img-responsive");
    iData.setAttribute("style", "position: relative; top: 0; left: 0;");
    document.getElementById(type + "UP").innerHTML = "";
    document.getElementById(type + "UP").appendChild(iData);

    selectedCards[btn] = Card;

    document.getElementById("add"+btn+"0").innerHTML = Math.round(((100 + Deck.availQ) * Card.iaAvailability[0])/100);
    document.getElementById("add"+btn+"1").innerHTML = Math.round(((100 + Deck.availQ) * Card.iaAvailability[1])/100);
    document.getElementById("add"+btn+"2").innerHTML = Math.round(((100 + Deck.availQ) * Card.iaAvailability[2])/100);
    document.getElementById("add"+btn+"3").innerHTML = Math.round(((100 + Deck.availQ) * Card.iaAvailability[3])/100);
    document.getElementById("add"+btn+"4").innerHTML = Math.round(((100 + Deck.availQ) * Card.iaAvailability[4])/100);

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
/*
            //lLOGunitProto.Content = Card.Unit.iIsProto;
            //lLOGunitDeck.Content = Card.Unit.
    }*/

 function InterpretTraining(Card)
 {
     switch (Card.Unit.iTraining)
     {
         case 1:
             return "Training: Militia";
         case 2:
             return "Training: Line";
         case 3:
             return "Training: Shock";
         case 4:
             return "Training: Elite";
         default:
             return "";
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
     if (Card.sUnitData.charAt(24) == '1') { optika = "Air Detection"; } else { optika = "Optics"; }
     switch (Card.iOptics)
     {
         case 1:
             return optika + ": Poor";
         case 2:
             return optika + ": Medium";
         case 3:
             return optika + ": Good";
         case 4:
             return optika + ": Very good";
         case 5:
             return optika + ": Exceptional";
     }
     return "Steevie Wonder";
 }

 function InterpretSize(Card)
 {
     switch (Card.iSize)
     {
         case 1: return "Size: Very small";
         case 2: return  "Size: Small";
         case 3: return  "Size: Medium";
         case 4: return  "Size: Big";
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
            var newcard = new VehicleCard(veterancy, selectedCards[type].Unit, selectedCards[type].Transport, selectedCards[type].Craft)
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
        Card.iVet = Card.iVet0 + 1;
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
