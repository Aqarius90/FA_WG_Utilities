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
    var Unit = ractiveUnit.get('Unit');
    Unit.deckType.MAR = '#f00';
    Unit.deckType.AIR = '#f00';
    Unit.deckType.MEC = '#f00';
    Unit.deckType.ARM = '#f00';
    Unit.deckType.MOT = '#f00';
    Unit.deckType.SUP = '#f00';
    for (var i = 0; i< card[1].Decks.length; i++){
        if (card[1].Decks[i] == "Marine"){
            Unit.deckType.MAR = "#0f0";
        }
        else if (card[1].Decks[i] == "Airborne"){
            Unit.deckType.AIR = "#0f0";
        }
        else if (card[1].Decks[i] == "Mechanized"){
            Unit.deckType.MEC = "#0f0";
        }
        else if (card[1].Decks[i] == "Armored"){
            Unit.deckType.ARM = "#0f0";
        }
        else if (card[1].Decks[i] == "Motorized"){
            Unit.deckType.MOT = "#0f0";
        }
        else if (card[1].Decks[i] == "Support"){
            Unit.deckType.SUP = "#0f0";
        }
    }

    Unit.UnitCode = "" + card[1].DeckCode.Side + card[1].DeckCode.Card;
    Unit.UnitName = "" + card[1].Name;
    Unit.Nation = card[1].MotherCountry;
    Unit.Price = card[1].Price;
    Unit.isCommand = "#f00";
    Unit.isProto = "#f00";

    if (card[1].IsPrototype == "True"){
        Unit.isProto = "#0f0";
    }
    if (card[1].IsCommandUnit == "True"){
        Unit.isCommand = "#0f0";
    }
//TODO optics
//TODO availability
    Unit.isAir = false;
    Unit.isHelo = false;
    Unit.isShip = false;
    Unit.isLand = false;

    //so, AV is AV, except if splash is "True" (not true, "True"), then AV is splash type. lol.
    Unit.Armor.FAVtype = 0;
    Unit.Armor.SAVtype = 0;
    Unit.Armor.RAVtype = 0;
    Unit.Armor.TAVtype = 0;
    Unit.Armor.FAV = card[1].ArmorFront;
    Unit.Armor.SAV = card[1].ArmorSides;
    Unit.Armor.RAV = card[1].ArmorRear;
    Unit.Armor.TAV = card[1].ArmorTop;
    if (card[1].ArmorFrontSplashResistant == "True"){
        Unit.Armor.FAV = 0;
        Unit.Armor.FAVtype = card[1].ArmorFront;
    }
    if (card[1].ArmorSidesSplashResistant == "True"){
        Unit.Armor.SAV = 0;
        Unit.Armor.SAVtype = card[1].ArmorSides;
    }
    if (card[1].ArmorRearSplashResistant == "True"){
        Unit.Armor.RAV = 0;
        Unit.Armor.RAVtype = card[1].ArmorRear;
    }
    if (card[1].ArmorTopSplashResistant == "True"){
        Unit.Armor.TAV = 0;
        Unit.Armor.TAVtype = card[1].ArmorTop;
    }

    //full data
    Unit.Universal.IdentifyBaseProbability = card[1].IdentifyBaseProbability;
    if (card[1].Size === ""){ Unit.Universal.Size = 1;} else { Unit.Universal.Size = card[1].Size;} //"size" is recorded as an offset, "medium" is acutally "null"
    Unit.Universal.Stealth = card[1].Stealth;
    Unit.Universal.Strength = card[1].Strength;
    Unit.Universal.StunDamageRegen = card[1].StunDamageRegen;
    Unit.Universal.StunDamageToGetStunned = card[1].StunDamageToGetStunned;
    Unit.Universal.SupressionCeiling = card[1].SupressionCeiling;

    Unit.Universal.Year = card[1].Year;
    Unit.Universal.MAXpacks = card[1].MAXpacks;
    Unit.Universal.MAXspeed = card[1].MAXspeed;
    Unit.Universal.TimeBetweenEachIdentifyRoll = card[1].TimeBetweenEachIdentifyRoll;
    Unit.Universal.FuelCapacity = card[1].FuelCapacity;
    Unit.Universal.Autonomy = card[1].Autonomy;
    Unit.Universal.helidetectionradius = card[1].HelicopterDetectionRadius;

    Unit.Universal.MovementType = card[1].MovementType;
    Unit.Universal.PorteeVision = card[1].PorteeVision;
    Unit.Universal.OpticalStrengthAir = card[1].OpticalStrengthAir;
    Unit.Universal.OpticalStrengthGround = card[1].OpticalStrengthGround;
    Unit.Universal.opticsantiradar = card[1].OpticalStrengthAntiradar;
    Unit.Universal.SupplyCapacity = card[1].SupplyCapacity; //logi  = card.
    Unit.Universal.SupplyPriority = card[1].SupplyPriority; //logi on = card.


    //get unit type for data switching
    if (card[1].MovementType == "Air" && card[1].LateralSpeed > 0){
        //^is flying, is helo
        Unit.isHelo = true;

        Unit.Helo.mass = card[1].mass;
        Unit.Helo.CyclicManoeuvrability = card[1].CyclicManoeuvrability;
        Unit.Helo.HelicopterManoeuverability = card[1].HelicopterManoeuverability;
        Unit.Helo.HelicopterHoverAltitude = card[1].HelicopterHoverAltitude;
        Unit.Helo.MaxInclination = card[1].MaxInclination;
        Unit.Helo.RotorArea = card[1].RotorArea;
        Unit.Helo.UpwardSpeed = card[1].UpwardSpeed;
        Unit.Helo.LateralSpeed = card[1].LateralSpeed;
        Unit.Helo.GFactorLimit = card[1].GFactorLimit;
        Unit.Helo.TimeHalfTurn = card[1].TimeHalfTurn;
        Unit.Helo.AirToAirHelicopterDetectionRadius = card[1].AirToAirHelicopterDetectionRadius;
        Unit.Helo.TorqueManoeuvrability = card[1].TorqueManoeuvrability;
        Unit.Helo.MAXacell = card[1].MAXacell;
        Unit.Helo.MAXdcell = card[1].MAXdcell;
    }
    else if (card[1].MovementType == "Air" && card[1].LateralSpeed === null){
        //^is flying, is not helo
        Unit.isAir = true;

        Unit.Air.ECM = card[1].ECM;
        Unit.Air.AirToAirHelicopterDetectionRadius = card[1].AirToAirHelicopterDetectionRadius;
        Unit.Air.AirplaneMinimalAltitude = card[1].AirplaneMinimalAltitude;
        Unit.Air.AirplaneFlyingAltitude = card[1].AirplaneFlyingAltitude;
    }
    else if (card[1].MovementType == "Wheeled" || card[1].MovementType == "Tracked" || card[1].MovementType == "Foot"){
        Unit.isLand = true;

        Unit.Land.SuppressDamageRatioIfTransporterKilled = card[1].SuppressDamageRatioIfTransporterKilled;
        Unit.Land.amphib = card[1].Amphibious;
        Unit.Land.Training = card[1].Training;
        Unit.Land.MAXacell = card[1].MAXacell;
        Unit.Land.MAXdcell = card[1].MAXdcell;
    }
    else if (card[1].MovementType == "Water"){
        Unit.isShip = true;

        Unit.Shpi.MAXacell = card[1].MAXacell;
        Unit.Shpi.MAXdcell = card[1].MAXdcell;
        Unit.Shpi.CIWS = card[1].CIWS;
        Unit.Shpi.TimeHalfTurn = card[1].TimeHalfTurn;
        Unit.Shpi.ECM = card[1].ECM;
    }
    ractiveUnit.update('Unit');

    ractiveUnit.set({UnitIsLoaded: true});
    //TODO weapons
    //TODO transport
}
