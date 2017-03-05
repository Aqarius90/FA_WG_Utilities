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
