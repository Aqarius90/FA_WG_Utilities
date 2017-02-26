//var Dicts = new Dictionaries();
function init() {
    window.Deck = new Deck(); //init empty deck, non-DB data and dictionaries
    window.Matrix = new matrix();
    window.IDlist = []; // unit list, for card counting
    window.tDebug = []; //debug output
    window.DataDisplay = 1; //portrait switch

    //just prep. the actual init is triggered by DataParsing.js
}

function listUnits(){ //get units for display
    UnitLookup();

}

function UnitLookup(){
    var card;
    var naval;
    var dry;
    var year = 3000;
    if(Deck.sEra == "B"){ year = 1985;}
    else if(Deck.sEra == "C"){ year = 1980;}

    var valid = true;

    for (var i=UnitIdMin; i<=UnitIdMax;i++){
        if (typeof UnitDatabase[i] != 'undefined'){
            card = ["000", UnitDatabase[i], 0, 0];
            if(card[1].IsTransporter == "False"){ //transports don't get their own card
                //valid = checkNation(card);
                if (card[1].Year <= year && valid == true){// eliminate by era and nation
                    if (card[1].MovementType == "Foot"){//if is inf, add transport.
                    /*for (var j=0; j < TransportArray[card.iUnitID][Deck.iSide].length; j++){
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
                    }*/
                    }
                    else{//is vehicle
                        if (Deck.sSpec == "GEN"){
                            toList(card);
                        }
                        else {
                            for (temp = 0; temp <= card[1].Decks.length; temp++){
                                if (Deck.sSpec == card[1].Decks[temp]){ //only ever matches once.
                                    toList(card);
                                    temp = 50;                           //exit loop
                                }
                            }
                        }
                    /* assign units to naval, TODO
                    if(card.sUnitData.charAt(27) == '1'){
                        send = new VehicleCard("000", card, 1, 0)
                        toList(send);
                    }*/
                    }
                }
            }
        }
    }
}


function toList(card){

    if (card[2] == 0){
        var newRow = {
            Nation: card[1].MotherCountry,
            Upicture: "" + card[1].DeckCode.Side + "" + card[1].DeckCode.Card,
            Unit: card[1].Name,
            Points: card[1].Price,
            Cards: card[1].MaxPacks,
            Vpicture: "",
            Transport: "",
            TPoints: "",
            TCards: ""
        };
    }
    else{
        var newRow = {
            Nation: card[1].MotherCountry,
            Upicture: card[1].DeckCode.Side + card[1].DeckCode.Card + "",
            Unit: card[1].Name,
            Points: card[1].Price,
            Cards: card[1].MaxPacks,
            Vpicture: "" + card[2].DeckCode.Side + "" + card[2].DeckCode.Card,
            Transport: card[2].Name,
            TPoints: card[2].Price,
            TCards: card[2].MaxPacks
        };
    }

         if (card[1].Tab == 'LOG'){ractiveDeck.push('logunits', newRow);}//logi
    else if (card[1].Tab == 'INF'){ractiveDeck.push('infunits', newRow);}//inf
    else if (card[1].Tab == 'SUP'){ractiveDeck.push('supunits', newRow);}//sup
    else if (card[1].Tab == 'TNK'){ractiveDeck.push('tnkunits', newRow);}//tnk
    else if (card[1].Tab == 'REC'){ractiveDeck.push('recunits', newRow);}//rec
    else if (card[1].Tab == 'VHC'){ractiveDeck.push('vehunits', newRow);}//veh
    else if (card[1].Tab == 'HEL'){ractiveDeck.push('helunits', newRow);}//hel
    else if (card[1].Tab == 'PLA'){ractiveDeck.push('airunits', newRow);}//air
    else if (card[1].Tab == 'SHP'){ractiveDeck.push('navunits', newRow);}//nav

   // row.onclick =  function(){ShowCard( new VehicleCard ("000", card.Unit, card.Transport, card.Craft));};
}
