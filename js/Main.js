function listUnits() //get units for display
{/*
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
    }*/



    UnitLookup();

    /*
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
    );*/
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

function isError(Card) {
    var isUnavailable = false;
    isUnavailable = !checkNation(Card);
    if (Deck.sEra == "B" && Card.iYear > 1985){ isUnavailable = true; }
    else if (Deck.sEra == "C" && Card.iYear > 1980){ isUnavailable = true; }
    if (Deck.sSpec == "Marine" && Card.sSpec.charAt(0) != '1') { isUnavailable = true; }
    else if (Deck.sSpec == "Airborne" && Card.sSpec.charAt(1) != '1') { isUnavailable = true; }
    else if (Deck.sSpec == "Mechanized" && Card.sSpec.charAt(2) != '1') { isUnavailable = true; }
    else if (Deck.sSpec == "Armored" && Card.sSpec.charAt(3) != '1') { isUnavailable = true; }
    else if (Deck.sSpec == "Motorized" && Card.sSpec.charAt(4) != '1') { isUnavailable = true; }
    else if (Deck.sSpec == "Support" && Card.sSpec.charAt(5) != '1') { isUnavailable = true; }
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
    avails.A0 = Math.round(((100 + Deck.availQotient) * Card.iaAvailability[0])/100);
    if(Card.iaAvailability[0] == 0){ avails.B0 = "disabled"} else { avails.B0 = "" }
    avails.A1 = Math.round(((100 + Deck.availQotient) * Card.iaAvailability[1])/100);
    if(Card.iaAvailability[1] == 0){ avails.B1 = "disabled"} else { avails.B1 = "" }
    avails.A2 = Math.round(((100 + Deck.availQotient) * Card.iaAvailability[2])/100);
    if(Card.iaAvailability[2] == 0){ avails.B2 = "disabled"} else { avails.B2 = "" }
    avails.A3 = Math.round(((100 + Deck.availQotient) * Card.iaAvailability[3])/100);
    if(Card.iaAvailability[3] == 0){ avails.B3 = "disabled"} else { avails.B3 = "" }
    avails.A4 = Math.round(((100 + Deck.availQotient) * Card.iaAvailability[4])/100);
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
     if (Card.sUnitData.charAt(24) == '1') { optika = "Air Detection"; } else { optika = "Optics"; }
     switch (Card.iOptics)
     {
         case 1: return optika + ": Poor";
         case 2:  return optika + ": Medium";
         case 3:  return optika + ": Good";
         case 4:  return optika + ": Very good";
         case 5:  return optika + ": Exceptional";
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
            Deck.Cards3T[Deck.Cards3Count] = newcard;
            Deck.Cards3Count++;
        } else if (selectedCards[type].Transport != 0){
            var newcard = new VehicleCard(veterancy, selectedCards[type].Unit, selectedCards[type].Transport, 0)
            Deck.Cards2T[Deck.Cards2Count] = newcard;
            Deck.Cards2Count++;
        } else if (selectedCards[type].Unit != 0){
            var newcard = new VehicleCard(veterancy, selectedCards[type].Unit, 0,0)
            Deck.Cards1T[Deck.Cards1Count] = newcard;
            Deck.Cards1Count++;
        }
    }
    GUIDisplay();
    DeckExport();
}

function toGen(Card)
{
    var sData = Card.Unit.sUnitData;
    if (sData.charAt(18) == '1' && (Deck.sSpec == "Motorized" || Deck.sSpec == "Mechanized" || Deck.sSpec == "Marine" || Deck.sSpec == "Airborne")) // INF
    {
        Card.iVet0 = Card.iVet -1;
    }
    else if (sData.charAt(19) == '1' && (Deck.sSpec == "Support")) // support
    {
         Card.iVet0 = Card.iVet -1;
    }
    else if (sData.charAt(20) == '1' && (Deck.sSpec == "Armored")) // tanks
    {
        Card.iVet0 = Card.iVet -2;
    }
    else if (sData.charAt(21) == '1' && (Deck.sSpec == "Motorized"))  //recon
    {
        Card.iVet0 = Card.iVet -1;
    }
    else if (sData.charAt(22) == '1' && (Deck.sSpec == "Mechanized" || Deck.sSpec == "Motorized")) // vehicles
    {
        Card.iVet0 = Card.iVet -1;
    }
    else if (sData.charAt(23) == '1' && (Deck.sSpec == "Airborne"))
    {
        Card.iVet0 = Card.iVet -1;
    }
    else if (sData.charAt(24) == '1' && (Deck.sSpec == "Marine" || Deck.sSpec == "Airborne"))
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
    if (sData.charAt(18) == '1' && (Deck.sSpec == "Motorized" || Deck.sSpec == "Mechanized" || Deck.sSpec == "Marine" || Deck.sSpec == "Airborne")) // INF
    {
        Card.iVet = Card.iVet0 + 1;
    }
    else if (sData.charAt(19) == '1' && (Deck.sSpec == "Support")) // support
    {
        Card.iVet = Card.iVet0 + 1;
    }
    else if (sData.charAt(20) == '1' && (Deck.sSpec == "Armored")) // tanks
    {
        Card.iVet = Card.iVet0 + 2;
    }
    else if (sData.charAt(21) == '1' && (Deck.sSpec == "Motorized"))  //recon
    {
        Card.iVet = Card.iVet0 + 1;
    }
    else if (sData.charAt(22) == '1' && (Deck.sSpec == "Mechanized" || Deck.sSpec == "Motorized")) // vehicles
    {
        Card.iVet = Card.iVet0 + 1;
    }
    else if (sData.charAt(23) == '1' && (Deck.sSpec == "Airborne"))
    {
        Card.iVet = Card.iVet0 + 1;
    }
    else if (sData.charAt(24) == '1' && (Deck.sSpec == "Marine" || Deck.sSpec == "Airborne"))
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
