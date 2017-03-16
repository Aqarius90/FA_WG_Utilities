function listUnits(){ //get units for display
    UnitLookup();
    //used to have stuff inside
}

function checkNation(unit){
    //if Nation, check deck nation
    if(unit.MotherCountry == "ANZAC" && (Deck.sNation != "ANZAC" && Deck.sNation != "CW" && Deck.sNation != "NATO")){ return false; }
    else if(unit.MotherCountry == "West Germany" && (Deck.sNation != "West Germany" && Deck.sNation != "EU" && Deck.sNation != "LJUT" && Deck.sNation != "BDRNL" && Deck.sNation != "NATO")){ return false; }
    else if(unit.MotherCountry == "Canada" && (Deck.sNation != "Canada" && Deck.sNation != "CW" && Deck.sNation != "NORAD" && Deck.sNation != "NATO")){ return false; }
    else if(unit.MotherCountry == "Denmark" && (Deck.sNation != "Denmark" && Deck.sNation != "LJUT" && Deck.sNation != "SCA" && Deck.sNation != "NATO")){ return false; }
    else if(unit.MotherCountry == "France" && (Deck.sNation != "France" && Deck.sNation != "EU" && Deck.sNation != "NATO")){ return false; }
    else if(unit.MotherCountry == "Japan" && (Deck.sNation != "Japan" && Deck.sNation != "BD" && Deck.sNation != "NATO")){ return false; }
    else if(unit.MotherCountry == "The Netherlands" && (Deck.sNation != "The Netherlands" && Deck.sNation != "BDRNL" && Deck.sNation != "NATO")){ return false; }
    else if(unit.MotherCountry == "Norway" && (Deck.sNation != "Norway" && Deck.sNation != "SCA" && Deck.sNation != "NATO")){ return false; }
    else if(unit.MotherCountry == "South Korea" && (Deck.sNation != "South Korea" && Deck.sNation != "BD" && Deck.sNation != "NATO")){ return false; }
    else if(unit.MotherCountry == "Sweden" && (Deck.sNation != "Sweden" && Deck.sNation != "SCA" && Deck.sNation != "NATO")){ return false; }
    else if(unit.MotherCountry == "United Kingdom" && (Deck.sNation !== "United Kingdom" && Deck.sNation != "CW" && Deck.sNation != "NATO")){ return false; }
    else if(unit.MotherCountry == "United States" && (Deck.sNation !== "United States" && Deck.sNation != "NORAD" && Deck.sNation != "NATO")){ return false; }
    else if(unit.MotherCountry == "Israel" && (Deck.sNation !== "Israel" && Deck.sNation != "NATO")){ return false; }
    else if(unit.MotherCountry == "NATO" && Deck.iSide !== 0){ return false; }

    else if(unit.MotherCountry == "Czechoslavakia" && (Deck.sNation != "Czechoslavakia" && Deck.sNation != "NSWP" && Deck.sNation != "YUCZE" && Deck.sNation != "REDFOR")){ return false; }
    //lol typo in dataset
    else if(unit.MotherCountry == "East Germany" && (Deck.sNation != "East Germany" && Deck.sNation != "NSWP" && Deck.sNation != "REDFOR")){ return false; }
    else if(unit.MotherCountry == "North Korea" && (Deck.sNation != "North Korea" && Deck.sNation != "RD" && Deck.sNation != "REDFOR")){ return false; }
    else if(unit.MotherCountry == "Poland" && (Deck.sNation != "Poland" && Deck.sNation != "NSWP" && Deck.sNation != "FINPL" && Deck.sNation != "REDFOR")){ return false; }
    else if(unit.MotherCountry == "China" && (Deck.sNation != "China" && Deck.sNation != "RD" && Deck.sNation != "REDFOR")){ return false; }
    else if(unit.MotherCountry == "Soviet Union" && (Deck.sNation != "Soviet Union" && Deck.sNation != "REDFOR")){ return false; }
    else if(unit.MotherCountry == "Finland" && (Deck.sNation != "Finland" && Deck.sNation != "FINPL" && Deck.sNation != "REDFOR")){ return false; }
    else if(unit.MotherCountry == "Yugoslavia" && (Deck.sNation != "Yugoslavia" && Deck.sNation != "YUCZE" && Deck.sNation != "REDFOR")){ return false; }
    else if(unit.MotherCountry == "REDFOR" && Deck.iSide != 1){ return false; }

    else if(unit.IsPrototype == "True" && (Deck.sNation === "REDFOR" || Deck.sNation === "NATO")){ return false; }
    else { return true; }
}

function UnitLookup(){
    //navRow = [];
    var card;
    var naval;
    var dry;
    var year = 3000;
    if(Deck.sEra == "B"){ year = 1985;}
    else if(Deck.sEra == "C"){ year = 1980;}
    logRow.length = 0;// <<perfectly legal, oddly enough
    infRow.length = 0;// = []; <<this doesn't work, oddly enough
    supRow.length = 0;// = [];
    tnkRow.length = 0;// = [];
    recRow.length = 0;// = [];
    vehRow.length = 0;// = [];
    helRow.length = 0;// = [];
    airRow.length = 0;// = [];
    navRow.length = 0;

    var validNation = true;
    var validSpec = true;

    for (var i=UnitIdMin; i<=UnitIdMax;i++){
        if (typeof UnitDatabase[i] != 'undefined'){//get unit
            card = ["000", UnitDatabase[i], 0, 0];
            if(card[1].IsTransporter == "False"){ //transports don't get their own card. also, deprecated units
                validNation = checkNation(card[1]);
                if (validNation){
                    validSpec = checkDeckSpecialisation(card[1]); //pass individual units, not cards
                    if (card[1].Year <= year && validSpec && validNation){// eliminate by era, spec, and nation
                        /* assign units to naval, TODO
                        if(card.sUnitData.charAt(27) == '1'){
                            send = new VehicleCard("000", card, 1, 0)
                            toList(send);
                        }*/
                        if (card[1].MovementType == "Foot"){//if is inf, add transport.
                            for (var j=0; j < card[1].Transporters.length; j++){
                                var transportID = card[1].Transporters[j]; // get transport
                                card[2] = UnitDatabase[transportID];
                                validNation = checkNation(card[2]);
                                validSpec = checkDeckSpecialisation(card[2]); //pass individual units, not cards
                                if (card[2].Year <= year && validSpec && validNation) {
                                    toList(card);
                                }
                            }
                        }
                        else {
                            toList(card);
                        }
                    }
                }
            }
        }
    }
}

function checkDeckSpecialisation(unit){
    for( var i = 0; i < unit.Decks.length; i++){ //run through an array, if there's a match, true.
        if(unit.Decks[i] == Deck.sSpec){
            return true;  //TODO test this
        }
    }
    if ( Deck.sSpec == "GEN"){
        return true;
    }
    return false;
}


function toList(card){
  //just pairs the card with it's class
         if (card[1].Tab == 'LOG'){ addRow(card, logRow);}
    else if (card[1].Tab == 'INF'){ addRow(card, infRow);}
    else if (card[1].Tab == 'SUP'){ addRow(card, supRow);}
    else if (card[1].Tab == 'TNK'){ addRow(card, tnkRow);}
    else if (card[1].Tab == 'REC'){ addRow(card, recRow);}
    else if (card[1].Tab == 'VHC'){ addRow(card, vehRow);}
    else if (card[1].Tab == 'HEL'){ addRow(card, helRow);}
    else if (card[1].Tab == 'PLA'){ addRow(card, airRow);}
    else if (card[1].Tab == 'SHP'){ addRow(card, navRow);}
}

function addRow(card, table){
      if (card[2] === 0){ //if has no transport
              table.push({Nation : card[1].MotherCountry,
                          Upicture : "" + card[1].DeckCode.Side + "" + card[1].DeckCode.Card,
                          Unit : card[1].Name,
                          Points : card[1].Price,
                          Cards : card[1].MaxPacks,
                          Vpicture : "",
                          Transport : "",
                          TPoints : "",
                          TCards : "",
                          sentCard: card});
      }
      else{//if has transport
              table.push({Nation : card[1].MotherCountry,
                          Upicture : "" + card[1].DeckCode.Side + "" + card[1].DeckCode.Card,
                          Unit : card[1].Name,
                          Points : card[1].Price,
                          Cards : card[1].MaxPacks,
                          Vpicture : "" + card[2].DeckCode.Side + "" + card[2].DeckCode.Card,
                          Transport : card[2].Name,
                          TPoints : card[2].Price,
                          TCards : card[2].MaxPack,
                          sentCard: card});
      }
}

function showCard(card){
    //set decktype avail indicators
    var deckType = ractiveUnit.get('deckType');
    deckType.MAR = '#f00';
    deckType.AIR = '#f00';
    deckType.MEC = '#f00';
    deckType.ARM = '#f00';
    deckType.MOT = '#f00';
    deckType.SUP = '#f00';
    for (var i = 0; i< card[1].Decks.length; i++){
        if (card[1].Decks[i] == "Marine"){
            deckType.MAR = "#0f0";
        }
        else if (card[1].Decks[i] == "Airborne"){
            deckType.AIR = "#0f0";
        }
        else if (card[1].Decks[i] == "Mechanized"){
            deckType.MEC = "#0f0";
        }
        else if (card[1].Decks[i] == "Armored"){
            deckType.ARM = "#0f0";
        }
        else if (card[1].Decks[i] == "Motorized"){
            deckType.MOT = "#0f0";
        }
        else if (card[1].Decks[i] == "Support"){
            deckType.SUP = "#0f0";
        }
    }
    ractiveUnit.update('deckType');

    ractiveUnit.set({
        UnitCode : "" + card[1].DeckCode.Side + card[1].DeckCode.Card,
        UnitName : "" + card[1].Name,
        Price : card[1].Price,
        isCommand: "#f00",
        isProto: "#f00"
    })

    if (card[1].IsPrototype == "True"){
        ractiveUnit.set({ isProto: "#0f0"});
    }
    if (card[1].IsCommandUnit == "True"){
        ractiveUnit.set({ isCommand: "#0f0"});
    }


    //get unit type for data switching
    if (card[1].MovementType == "Air" && card[1].LateralSpeed > 0){
        //^is flying, is helo
        ractiveUnit.set({ isAir: false, isHelo: true, isShip: false, isLand: false,});
    }
    else if (card[1].MovementType == "Air" && card[1].LateralSpeed === null){
        //^is flying, is not helo
        ractiveUnit.set({ isAir: true, isHelo: false, isShip: false, isLand: false,});
    }
    else if (card[1].MovementType == "Wheeled" || card[1].MovementType == "Tracked" || card[1].MovementType == "Foot"){
        ractiveUnit.set({ isAir: false, isHelo: false, isShip: false, isLand: true,});
    }
    else if (card[1].MovementType == "Water"){
        //^is flying, is not helo
        ractiveUnit.set({ isAir: false, isHelo: false, isShip: true, isLand: false,});
    }

    //armor
    var Armor = ractiveUnit.get('Armor');
    //so, AV is AV, except if splash is "True" (not true, "True"), then AV is splash type. lol.
    Armor.FAVtype = 0;
    Armor.SAVtype = 0;
    Armor.RAVtype = 0;
    Armor.TAVtype = 0;
    Armor.FAV = card[1].ArmorFront;
    Armor.SAV = card[1].ArmorSides;
    Armor.RAV = card[1].ArmorRear;
    Armor.TAV = card[1].ArmorTop;
    if (card[1].ArmorFrontSplashResistant == "True"){
        Armor.FAV = 0;
        Armor.FAVtype = card[1].ArmorFront;
    }
    if (card[1].ArmorSidesSplashResistant == "True"){
        Armor.SAV = 0;
        Armor.SAVtype = card[1].ArmorSides;
    }
    if (card[1].ArmorRearSplashResistant == "True"){
        Armor.RAV = 0;
        Armor.RAVtype = card[1].ArmorRear;
    }
    if (card[1].ArmorTopSplashResistant == "True"){
        Armor.TAV = 0;
        Armor.TAVtype = card[1].ArmorTop;
    }
    ractiveUnit.update('Armor');

    //full data
    var Universal = ractiveUnit.get('Universal');
    Universal.IdentifyBaseProbability = card[1].IdentifyBaseProbability;
    if (card[1].Size === ""){ Universal.Size = 1;} else { Universal.Size = card[1].Size;}
    Universal.Stealth = card[1].Stealth;
    Universal.StunDamageRegen = card[1].StunDamageRegen;
    Universal.StunDamageToGetStunned = card[1].StunDamageToGetStunned;
    Universal.TimeBetweenEachIdentifyRoll = card[1].TimeBetweenEachIdentifyRoll;
    Universal.Year = card[1].Year;
    Universal.MAXpacks = card[1].MAXpacks;
    Universal.MAXspeed = card[1].MAXspeed;
    Universal.SupressionCeiling = card[1].SupressionCeiling;
    Universal.FuelCapacity = card[1].FuelCapacity;
    Universal.Autonomy = card[1].Autonomy;
    Universal.helidetectionradius = card[1].HelicopterDetectionRadius;
    Universal.MovementType = card[1].MovementType;
    Universal.PorteeVision = card[1].PorteeVision;
    Universal.OpticalStrengthAir = card[1].OpticalStrengthAir;
    Universal.OpticalStrengthGround = card[1].OpticalStrengthGround;
    Universal.opticsantiradar = card[1].OpticalStrengthAntiradar;
    Universal.SupplyCapacity = card[1].SupplyCapacity; //logi  = card.
    Universal.SupplyPriority = card[1].SupplyPriority; //logi on = card.
    ractiveUnit.update('Universal');

    ractiveUnit.set({UnitIsLoaded: true});
/*
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
      }*/
}
