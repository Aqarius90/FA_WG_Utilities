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
    GUIDisplay();
}

function btDecode()
{
    debugClear();
    DeckDisAssembly();
    GUIDisplay();
    DeckExport();
}

function btClear()
{
    Deck = new DeckAssembly();
    GUIDisplay();
    DeckExport();
}

function listUnits() //get units for display
{
    var tables = ["log", "inf", "sup", "tnk", "rec", "veh", "hel", "air", "nav"]
    for(var i=0; i<9; i++){        
        var body = document.getElementById(tables[i] + "Body");
        var blankBody = document.createElement('tbody');
        blankBody.setAttribute("id",tables[i] + "Body");
        body.parentNode.replaceChild(blankBody, body);
                
        var table = document.getElementById(tables[i] + "Body");
        var row = table.insertRow(table.rows.length);
        var nation = row.insertCell(0);
        var unit = row.insertCell(1);
        var costU = row.insertCell(2);
        var cardsU = row.insertCell(3);
        var trans = row.insertCell(4);
        var costT = row.insertCell(5);
        var cardsT = row.insertCell(6);
        var btn = row.insertCell(7);
        nation.innerHTML = "Nation";
        unit.innerHTML = "Unit";
        cardsU.innerHTML = "Cards";
        costU.innerHTML = "Cost";
        trans.innerHTML = "Vehicle";
        cardsT.innerHTML = "Cards";
        costT.innerHTML = "Cost";
    }
    
    if(Deck.sNation == "ANZAC" || Deck.sNation == "BRD" || Deck.sNation == "CAN" || Deck.sNation == "DEN" || Deck.sNation == "FRA" || Deck.sNation == "JAP" || Deck.sNation == "NED" || Deck.sNation == "NOR" || Deck.sNation == "ROK" || Deck.sNation == "SWE" || Deck.sNation == "UK" || Deck.sNation == "USA" || Deck.sNation == "CZS" || Deck.sNation == "DDR" || Deck.sNation == "DPRK" || Deck.Nation == "POL" || Deck.sNation == "PRC" || Deck.sNation == "USSR" || Deck.sNation == "ISR" || Deck.sNation == "FIN" || Deck.sNation == "YU") {
       UnitLookup(Deck.sNation);
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
    }
    else if (Deck.sNation == "BD")
    {
        UnitLookup("ROK");
        UnitLookup("JAP");
    }
    else if (Deck.sNation == "CW")
    {
        UnitLookup("ANZAC");
        UnitLookup("CAN");
        UnitLookup("UK");
    }
    else if (Deck.sNation == "EU")
    {
        UnitLookup("BRD");
        UnitLookup("FRA");
    }
    else if (Deck.sNation == "LJUT")
    {
        UnitLookup("BRD");
        UnitLookup("FRA");
    }
    else if (Deck.sNation == "BDRNL")
    {
        UnitLookup("BRD");
        UnitLookup("NED");
    }
    else if (Deck.sNation == "NORAD")
    {
        UnitLookup("CAN");
        UnitLookup("USA");
    }
    else if (Deck.sNation == "SCA")
    {
        UnitLookup("DEN");
        UnitLookup("NOR");
        UnitLookup("SWE");
    }
    else if (Deck.sNation == "NSWP")
    {
        UnitLookup("CZS");
        UnitLookup("DDR");
        UnitLookup("POL");
    }
    else if (Deck.sNation == "RD")
    {
        UnitLookup("DPRK");
        UnitLookup("PRC");
    }
    else if (Deck.sNation == "SOVKOR")
    {
        UnitLookup("DPRK");
        UnitLookup("USSR");
    }
}

function UnitLookup(nation){
    var card;
    var year = 0;
    if(Deck.sEra == "B"){ year = 1986;}//I think FOBs are "year 0". Should be "-7500" really
    if(Deck.sEra == "C"){ year = 1981;}
    var spec = -1;
    if(Deck.sSpec == "MAR"){spec=0;}
    else if (Deck.sSpec == "AIR"){spec=0;}
    else if (Deck.sSpec == "MECH"){spec=1;}
    else if (Deck.sSpec == "ARM"){spec=3;}
    else if (Deck.sSpec == "MOTO"){spec=4;}
    else if (Deck.sSpec == "SUP"){spec=5;}
    
    for (var i=0; i<1024;i++){
        card = CardsDB[i][Deck.iSide];
        if(card.sUnitData.charAt(4) != '1'){ //transports don't get their own card
            if (card.sNation == nation && card.iYear >= year){
                if((Deck.sNation != "NATO" && Deck.sNation != "REDFOR") || card.iIsProto == '0'){
                    if (card.sSpecDeck.charAt(spec) != '1' || Deck.sSpec == "GEN"){  
                        var transport = 0;
                        if (card.sUnitData.charAt(7) == '1'){
                            for (var j=0; j<TransportLinker.length; j++){
                                if (card.iUnitID == TransportLinker[j].uID && TransportLinker[j].iSide == Deck.iSide){
                                    var pair = new VehicleCard("000", card, CardsDB[TransportLinker[j].vID][Deck.iSide], 0);
                                    if (pair.iYear >= year) {
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
    var unit = row.insertCell(1);
    var costU = row.insertCell(2);
    var cardsU = row.insertCell(3);
    var trans = row.insertCell(4);
    var costT = row.insertCell(5);
    var cardsT = row.insertCell(6);
    var btn = row.insertCell(7);
    nation.innerHTML = card.sNation;
    unit.innerHTML = card.Unit.sNameU;
    cardsU.innerHTML = card.Unit.iCards;   
    costU.innerHTML = card.Unit.iCost;
    if(card.Transport !=0){
        trans.innerHTML = card.Transport.sNameU;
        cardsT.innerHTML = card.Transport.iCards;    
        costT.innerHTML = card.Transport.iCost;
    }
    
    let elem = document.createElement('input');
    elem.type = 'button';
    elem.value = '>';
    elem.onclick = function(){ShowCard(card);}; //closure escape via math. FML
    btn.appendChild(elem); 
}

function btNATO_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "NATO";
    Deck.iNation = 202;
    GUIDisplay();
    DeckExport();
}        

function btREDFOR_Click() {
    Deck.sSide = "RED";
    Deck.iSide = 1;
    Deck.sNation = "REDFOR";
    Deck.iNation = 362;
    GUIDisplay();
    DeckExport();
}
function btBD_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "BD";
    Deck.iNation = 195;
    GUIDisplay();
    DeckExport();
}
function btCOM_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "CW";
    Deck.iNation = 194;
    GUIDisplay();
    DeckExport();
}
function btEU_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "EU";
    Deck.iNation = 192;
    GUIDisplay();
    DeckExport();
}
function btLJ_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "LJUT";
    Deck.iNation = 198;
    GUIDisplay();
    DeckExport();
}
function btBRDNL_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "BDRNL";
    Deck.iNation = 201;
    GUIDisplay();
    DeckExport();
}
function btNORAD_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "NORAD";
    Deck.iNation = 200;
    GUIDisplay();
    DeckExport();
}
function btSCA_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "SCA";
    Deck.iNation = 193;
    GUIDisplay();
    DeckExport();
}
function btNSWP_Click() {
    Deck.sSide = "RED";
    Deck.iSide = 1;
    Deck.sNation = "NSWP";
    Deck.iNation = 357;
    GUIDisplay();
    DeckExport();
}
function btRD_Click() {
    Deck.sSide = "RED";
    Deck.iSide = 1;
    Deck.sNation = "RD";
    Deck.iNation = 356;
    GUIDisplay();
    DeckExport();
}
function btRKA_Click() {
    Deck.sSide = "RED";
    Deck.iSide = 1;
    Deck.sNation = "SOVKOR";
    Deck.iNation = 359;
    GUIDisplay();
    DeckExport();
}
function btANZAC_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "ANZAC";
    Deck.iNation = 138;
    GUIDisplay();
    DeckExport();
}
function btBRD_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "BRD";
    Deck.iNation = 58;
    GUIDisplay();
    DeckExport();
}
function btCAN_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "CAN";
    Deck.iNation = 74;
    GUIDisplay();
    DeckExport();
}
function btDEN_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "DEN";
    Deck.iNation = 90;
    GUIDisplay();
    DeckExport();
}
function btFRA_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "FRA";
    Deck.iNation = 42;
    GUIDisplay();
    DeckExport();
}
function btJAP_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "JAP";
    Deck.iNation = 154;
    GUIDisplay();
    DeckExport();
}
function btNED_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "NED";
    Deck.iNation = 186;
    GUIDisplay();
    DeckExport();
}
function btNOR_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "NOR";
    Deck.iNation = 122;
    GUIDisplay();
    DeckExport();
}
function btROK_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "ROK";
    Deck.iNation = 170;
    GUIDisplay();
    DeckExport();
}
function btSWE_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "SWE";
    Deck.iNation = 106;
    GUIDisplay();
    DeckExport();
}
function btUK_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "UK";
    Deck.iNation = 26;
    GUIDisplay();
    DeckExport();
}
function btUSA_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "USA";
    Deck.iNation = 10;
    GUIDisplay();
    DeckExport();
}
function btCZS_Click() {
    Deck.sSide = "RED";
    Deck.iSide = 1;
    Deck.sNation = "CZS";
    Deck.iNation = 314;
    GUIDisplay();
    DeckExport();
}
function btDDR_Click() {
    Deck.sSide = "RED";
    Deck.iSide = 1;
    Deck.sNation = "DDR";
    Deck.iNation = 266;
    GUIDisplay();
    DeckExport();
}
function btDPRK_Click() {
    Deck.sSide = "RED";
    Deck.iSide = 1;
    Deck.sNation = "DPRK";
    Deck.iNation = 346;
    GUIDisplay();
    DeckExport();
}
function btPOL_Click() {
    Deck.sSide = "RED";
    Deck.iSide = 1;
    Deck.sNation = "POL";
    Deck.iNation = 298;
    GUIDisplay();
    DeckExport();
}
function btPRC_Click() {
    Deck.sSide = "RED";
    Deck.iSide = 1;
    Deck.sNation = "PRC";
    Deck.iNation = 330;
    GUIDisplay();
    DeckExport();
}

function btUSSR_Click() {
    Deck.sSide = "RED";
    Deck.iSide = 1;
    Deck.sNation = "USSR";
    Deck.iNation = 282;
    GUIDisplay();
    DeckExport();
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
        Card.sNation != "USA")
        { isUnavailable = true; }
        if (Card.iIsProto == 1) { isUnavailable = true; }
    }
    else if (Deck.sNation == "REDFOR")
    {
        if (
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
        Card.sNation != "JAP" &&
        Card.sNation != "ROK") { isUnavailable = true; }
    }
    else if (Deck.sNation == "CW")
    {
        if (
        Card.sNation != "ANZAC" &&
        Card.sNation != "CAN" &&
        Card.sNation != "UK") { isUnavailable = true; }
    }
    else if (Deck.sNation == "EU")
    {
        if (
        Card.sNation != "BRD" &&
        Card.sNation != "FRA") { isUnavailable = true; }
    }
    else if (Deck.sNation == "LJUT")
    {
        if (
        Card.sNation != "BRD" &&
        Card.sNation != "DEN") { isUnavailable = true; }
    }
    else if (Deck.sNation == "NORAD")
    {
        if (
        Card.sNation != "CAN" ||
        Card.sNation != "USA") { isUnavailable = true; }
    }
    else if (Deck.sNation == "SCA")
    {
        if (
        Card.sNation != "DEN" &&
        Card.sNation != "NOR" &&
        Card.sNation != "SWE") { isUnavailable = true; }
    }
    else if (Deck.sNation == "NSWP")
    {
        if (
        Card.sNation != "CZS" &&
        Card.sNation != "DDR" &&
        Card.sNation != "POL") { isUnavailable = true; }
    }
    else if (Deck.sNation == "RD")
    {
        if (
        Card.sNation != "DPRK" &&
        Card.sNation != "PRC") { isUnavailable = true; }
    }
    else if (Deck.sNation == "SOVKOR")
    {
        if (
        Card.sNation != "DPRK" &&
        Card.sNation != "USSR") { isUnavailable = true; }
    }
    else if (Deck.sNation == "BDRNL")
    {
        if (
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
    
    selectedCards[btn] = Card;
    
    document.getElementById("add"+btn+"0").innerHTML = Card.iaAvailability[0];
    document.getElementById("add"+btn+"1").innerHTML = Card.iaAvailability[1];
    document.getElementById("add"+btn+"2").innerHTML = Card.iaAvailability[2];
    document.getElementById("add"+btn+"3").innerHTML = Card.iaAvailability[3];
    document.getElementById("add"+btn+"4").innerHTML = Card.iaAvailability[4];
    
    document.getElementById("D" + type).innerHTML = "";       
    var uText = document.createElement("p");
    uText.innerHTML = Card.Unit.sNameU;
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
        uText.innerHTML = Card.Transport.sNameU;
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
        uText.innerHTML = "ACC " + wep.iAccuracy + "%";
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
    selectedCards[type].iVet0 = veterancy;
    if (selectedCards[type].Craft != 0){
        Deck.Cards2T[Deck.i3Cards] = selectedCards[type];
        Deck.i3Cards++;
    } else if (selectedCards[type].Transport != 0){
        Deck.Cards1T[Deck.i2Cards] = selectedCards[type];
        Deck.i2Cards++;
    } else if (selectedCards[type].Unit != 0){
        Deck.Cards0T[Deck.i1Cards] = selectedCards[type];
        Deck.i1Cards++;
    }
    GUIDisplay();
    DeckExport();
}

function btA()
{
    Deck.sEra = "A";
    Deck.iEra = 2;
    GUIDisplay();
    DeckExport();
}

function btB()
{
    Deck.sEra = "B";
    Deck.iEra = 1;
    GUIDisplay();
    DeckExport();
}

function btC()
{
    Deck.sEra = "C";
    Deck.iEra = 0;
    GUIDisplay();
    DeckExport();
}

function btMarine() {
    Deck.sSpec = "MAR";
    Deck.iSpec = 3;
    GUIDisplay();
    DeckExport();
}

function btAirborne() {
    Deck.sSpec = "AIR";
    Deck.iSpec = 5;
    GUIDisplay();
    DeckExport();
}

function btMechanized() {
    Deck.sSpec = "MECH";
    Deck.iSpec = 4;
    GUIDisplay();
    DeckExport();
}

function btArmoured() {
    Deck.sSpec = "ARM";
    Deck.iSpec = 1;
    GUIDisplay();
    DeckExport();
}

function btMotorized() {
    Deck.sSpec = "MOTO";
    Deck.iSpec = 0;
    GUIDisplay();
    DeckExport();
}

function btSupport() {
    Deck.sSpec = "SUP";
    Deck.iSpec = 2;
    GUIDisplay();
    DeckExport();
}

function btGeneral() {
    Deck.sSpec = "GEN";
    Deck.iSpec = 7;
    GUIDisplay();
    DeckExport();
}

function btNaval() {
    Deck.sSpec = "NAV";
    Deck.iSpec = 6;
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
