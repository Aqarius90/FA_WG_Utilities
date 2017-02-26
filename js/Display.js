function displayCard(card, type, pos){

    card.iArrayIndex =""+ type + pos[type];
    var sD  = "DeckView.D" +type + pos[type];
    var sL  = "DeckView.L" +type + pos[type];
    var sD0 = "DetailView.D0" +type + pos[type];
    var sL0 = "DetailView.L0" +type + pos[type];
    var isUnavailable = isError(card);

    if (DataDisplay == 1){ //<<portrait switch
        //display unit data over card.
        var innerString = "<img src='png/blank.png' class='img-responsive' style='position: relative; top: 0; left: 0;' >"; //basic blank card

        if (card.Unit.sUnitData.charAt(0)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='antiair' >";}
        if (card.Unit.sUnitData.charAt(1)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='AAM' >";}
        if (card.Unit.sUnitData.charAt(2)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='armour' >";}
        if (card.Unit.sUnitData.charAt(3)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='atgm' >";}
        if (card.Unit.sUnitData.charAt(4)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='carrier' >";}
        if (card.Unit.sUnitData.charAt(5)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='CMD'  >";}
        if (card.Unit.sUnitData.charAt(6)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='helo' >";}
        if (card.Unit.sUnitData.charAt(7)  == '1' && card.Unit.sUnitData.charAt(14) == '2') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='rinf' >";}
        if (card.Unit.sUnitData.charAt(7)  == '1' && card.Unit.sUnitData.charAt(14) != '2') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='inf' >";}
        if (card.Unit.sUnitData.charAt(8)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='log' >";}
        if (card.Unit.sUnitData.charAt(9)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='eng' >";}
        if (card.Unit.sUnitData.charAt(10) == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='plane' >";}
        if (card.Unit.sUnitData.charAt(11) == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='rad' >";}
        if (card.Unit.sUnitData.charAt(12) == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='rocket' >";}
        if (card.Unit.sUnitData.charAt(13) == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='mtr' >";}
        if (card.Unit.Optics == 'Good')             { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='rec' >";}
        if (card.Unit.Optics == 'Very Good')        { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='rec2' >";}
        if (card.Unit.Optics == 'Exceptional')      { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='rec3' >";}
        if (card.Unit.sUnitData.charAt(15) == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='tube' >";}
        if (card.Unit.sUnitData.charAt(16) == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='rad' >";}
        if (card.Unit.Amphibious == 'True')         { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='amph' >";}
        if (card.Unit.sUnitData.charAt(28) == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='nav1' >";}
        if (card.Unit.sUnitData.charAt(28) == '2') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='nav2' >";}
        if (card.Unit.sUnitData.charAt(28) == '3') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='nav2' >";}
        if (card.Unit.MovementType == 'Wheeled')    { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='moto' >";}

        if(card.Transport != 0){
              if (card.Transport.sUnitData.charAt(0)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='antiair' >";}
              if (card.Transport.sUnitData.charAt(1)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='AAM' >";}
              if (card.Transport.sUnitData.charAt(2)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='armour' >";}
              if (card.Transport.sUnitData.charAt(3)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='atgm' >";}
              if (card.Transport.sUnitData.charAt(4)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='carrier' >";}
              if (card.Transport.sUnitData.charAt(5)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='CMD'  >";}
              if (card.Transport.sUnitData.charAt(6)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='helo' >";}
              if (card.Transport.sUnitData.charAt(7)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='inf' >";}
              if (card.Transport.sUnitData.charAt(8)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='log' >";}
              if (card.Transport.sUnitData.charAt(9)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='eng' >";}
              if (card.Transport.sUnitData.charAt(10) == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='plane' >";}
              if (card.Transport.sUnitData.charAt(11) == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='rad' >";}
              if (card.Transport.sUnitData.charAt(12) == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='rocket' >";}
              if (card.Transport.sUnitData.charAt(13) == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='mtr' >";}
              if (card.Transport.sUnitData.charAt(14) == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='rec' >";}
              if (card.Transport.sUnitData.charAt(14) == '2') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='rec2' >";}
              if (card.Transport.sUnitData.charAt(14) == '3') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='rec3' >";}
              if (card.Transport.sUnitData.charAt(15) == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='tube' >";}
              if (card.Transport.sUnitData.charAt(16) == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='rad' >";}
              if (card.Transport.sUnitData.charAt(26) == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='amph' >";}
              if (card.Transport.sUnitData.charAt(28) == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='nav1' >";}
              if (card.Transport.sUnitData.charAt(28) == '2') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='nav2' >";}
              if (card.Transport.sUnitData.charAt(28) == '3') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='nav2' >";}
              if (card.Transport.sUnitData.charAt(29) == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='moto' >";}
            }
    }
    else{
      var innerString = " <img src='picsa/" + Deck.iSide + card.Unit.iUnitID + ".png' style='position: relative; top: 0; left: 0;'>";
    }
    innerString += ' <h5 style="position: absolute; bottom: 0; right: 0; color:#ff0; font-weight:900;">' + card.iCost + '</h5>';
    var temp = Math.round(((100 + Deck.availQotient) * card.iaAvailability[card.iVet0])/100);
    innerString += ' <h5 style="position: absolute; top: 0; left: 50%; color:#fff; font-weight:900;">' + temp + '</h5>';
    innerString += " <img src='flags/" +card.sNation + ".png' class='img-thumbnail' style='position: absolute; top: 0; left: 0;' >";
    innerString += " <img id='r" + card.sVeterancy + "' class='ranks' style='position: absolute; bottom: 0; left: 0;' >";

    if (isUnavailable == true){ innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='error' >"; }
    if(card.Transport != 0){if (isUnavailable == true){ innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='error' >"; } }
    ractiveDeck.set(sD, innerString);
    ractiveDeck.set(sD0, innerString);

    var color = "black";
    if (card.Craft == 0){
      if (card.Transport == 0){
        if (type !=9){
          IDlist.push(card.Unit.iUnitID)
        };
        var cardnr = IDlist.filter(function(x){return x==card.Unit.iUnitID}).length;
        if(cardnr>card.Unit.iCards){color = "red"}
        innerString = '<h6 style="color:' + color + '">' + card.Unit.sNameU + " " + cardnr + "/" + card.Unit.iCards + "<br>" + "<br>" + '</h6>';
      } else {
        if (type !=9){
          IDlist.push(card.Unit.iUnitID);
          IDlist.push(card.Transport.iUnitID);
        };
        var cardnr = IDlist.filter(function(x){return x==card.Unit.iUnitID}).length;
        var cardnrT = IDlist.filter(function(x){return x==card.Transport.iUnitID}).length;
        if(cardnr>card.Unit.iCards){color = "red"}
        if(cardnrT>card.Transport.iCards){color = "red"}
        innerString = '<h6 style="color:' + color + '">' + card.Unit.sNameU + " " + cardnr + "/" + card.Unit.iCards + "<br>" + card.Transport.sNameU + " " + cardnrT + "/"+ card.Transport.iCards + "<br>" + '</h6>';
      }
      } else {
        if (type !=9){
          IDlist.push(card.Unit.iUnitID);
          IDlist.push(card.Transport.iUnitID);
          IDlist.push(card.Craft.iUnitID);
        };
        if(cardnr>card.Unit.iCards){color = "red"}
        if(cardnrT>card.Transport.iCards){color = "red"}
        if(cardnrC>card.Unit.iCards){color = "red"}
        var cardnr = IDlist.filter(function(x){return x==card.Unit.iUnitID}).length;
        var cardnrT = IDlist.filter(function(x){return x==card.Transport.iUnitID}).length;
        var cardnrC = IDlist.filter(function(x){return x==card.Craft.iUnitID}).length;
        if(cardnr>card.Unit.iCards){color = "red"}
        if(cardnrT>card.Transport.iCards){color = "red"}
        if(cardnrC>card.Craft.iCards){color = "red"}
      innerString = '<h6 style="color:' + color + '">' + card.Unit.sNameU + " " + cardnr + "/" + card.Unit.iCards + "<br>" + card.Transport.sNameU + " " + cardnrT + "/"+ card.Transport.iCards + "<br>" + card.Craft.sNameU + " " + cardnrC + "/"  + card.Craft.iCards +'</h6>';
    }
    ractiveDeck.set(sL, innerString);
    innerString += '<button type="button" class="btn btn-default btn-block btn-top-line" onclick="CardDelete('+type+ pos[type]+');"}>DELETE</button>';
    ractiveDeck.set(sL0, innerString);
}


function displayUnits() //set matrix display, display units in deck.
{

    IDlist = [];/*
    for (var i = 0; i < Deck.Cards3T.length; i++)
    {
        Deck.Cards3T[i] = toSpec(Deck.Cards3T[i]);
        var type;
        type = 9; //2 transports = naval inf.
        displayCard(Deck.Cards3T[i], type, counter);
        if(counter[type]<10){Deck.deckpoints += DA[type][counter[type]];}
        counter[type] +=1;
    }
    for (var i = 0; i < Deck.Cards2T.length; i++)
    {
        Deck.Cards2T[i] = toSpec(Deck.Cards2T[i]);
        var type;
        if (Deck.Cards2T[i].UnitTypeData.charAt(0) == '1'){type = 1;}//logi
        else if (Deck.Cards2T[i].UnitTypeData.charAt(1) == '1'){type = 2;}//inf
        else if (Deck.Cards2T[i].UnitTypeData.charAt(2) == '1'){type = 3;}//sup
        else if (Deck.Cards2T[i].UnitTypeData.charAt(3) == '1'){type = 4;}//tnk
        else if (Deck.Cards2T[i].UnitTypeData.charAt(4) == '1'){type = 5;}//rec
        else if (Deck.Cards2T[i].UnitTypeData.charAt(5) == '1'){type = 6;}//veh
        else if (Deck.Cards2T[i].UnitTypeData.charAt(6) == '1'){type = 7;}//hel
        else if (Deck.Cards2T[i].UnitTypeData.charAt(7) == '1'){type = 8;}//air
        else if (Deck.Cards2T[i].UnitTypeData.charAt(8) == '1'){type = 9;}//nav
        else{type = 9;} //me=idiot, forgot to input naval
        displayCard(Deck.Cards2T[i], type, counter);
        if(counter[type]<10){Deck.deckpoints += DA[type][counter[type]];}
        counter[type] +=1;
    }
    for (var i = 0; i < Deck.Cards1T.length; i++)
    {
        Deck.Cards1T[i] = toSpec(Deck.Cards1T[i]);
        var type;
        if (Deck.Cards1T[i].UnitTypeData.charAt(0) == '1'){type = 1;}//logi
        else if (Deck.Cards1T[i].UnitTypeData.charAt(1) == '1'){type = 2;}//inf
        else if (Deck.Cards1T[i].UnitTypeData.charAt(2) == '1'){type = 3;}//sup
        else if (Deck.Cards1T[i].UnitTypeData.charAt(3) == '1'){type = 4;}//tnk
        else if (Deck.Cards1T[i].UnitTypeData.charAt(4) == '1'){type = 5;}//rec
        else if (Deck.Cards1T[i].UnitTypeData.charAt(5) == '1'){type = 6;}//veh
        else if (Deck.Cards1T[i].UnitTypeData.charAt(6) == '1'){type = 7;}//hel
        else if (Deck.Cards1T[i].UnitTypeData.charAt(7) == '1'){type = 8;}//air
        else if (Deck.Cards1T[i].UnitTypeData.charAt(8) == '1'){type = 9;}//nav
        else{type = 9;} //me=idiot, forgot to input naval
        displayCard(Deck.Cards1T[i], type, counter);
        if(counter[type]<10){Deck.deckpoints += DA[type][counter[type]];}
        counter[type] +=1;
    }
    for (var i = 1; i < 10; i++){
        for (var j = counter[i]; j < 10; j++){
            var sD  = "DeckView.D" +i + j;
            var sL  = "DeckView.L"+i + j;
            var sD0 = "DetailView.D0" +i + j;
            var sL0 = "DetailView.L0" +i + j;
            var innerString = '<h3 class="text-center" style="line-height: 50%;">' +  DA[i][j] + '</h5>';
            ractiveDeck.set(sD, innerString);
            ractiveDeck.set(sD0, innerString);
            ractiveDeck.set(sL, "");
            ractiveDeck.set(sL0, "");
        }
    }*/
}

function debugOutput(binoutdebug){
    var tablerow = [];
    tablerow.push({ bin: binoutdebug.charAt(0), parsing: Deck.sSide });
    tablerow.push({ bin: binoutdebug.substr(0,12), parsing: Deck.sNation });
    tablerow.push({ bin: binoutdebug.substr(12,3), parsing: Deck.sSpec });
    tablerow.push({ bin: binoutdebug.substr(15,2), parsing: Deck.sEra });
    tablerow.push({ bin: binoutdebug.substr(17,4), parsing: "inf-naval:  " + parseInt(binoutdebug.substr(17,4), 2) });
    tablerow.push({ bin: binoutdebug.substr(21,5), parsing: "inf-land, veh-naval:  "+ parseInt(binoutdebug.substr(21,5), 2) });

    for (var i = 0; i < Deck.Cards3Count; i++) {
      tablerow.push({ bin: Deck.Cards3T[i].Unit.iUnitID, parsing: Deck.Cards3T[i].Unit.sNameU});
      tablerow.push({ bin: Deck.Cards3T[i].Transport.iUnitID, parsing: Deck.Cards3T[i].Transport.sNameU});
      tablerow.push({ bin: Deck.Cards3T[i].Craft.iUnitID, parsing: Deck.Cards3T[i].Craft.sNameU});
    }

    for (var i = 0; i < Deck.Cards2Count; i++) {
      tablerow.push({ bin: Deck.Cards2T[i].Unit.iUnitID, parsing: Deck.Cards2T[i].Unit.sNameU});
      tablerow.push({ bin: Deck.Cards2T[i].Transport.iUnitID, parsing: Deck.Cards2T[i].Transport.sNameU});
    }
    for (var i = 0; i < Deck.Cards1Count; i++) {
      tablerow.push({ bin: Deck.Cards1T[i].Unit.iUnitID, parsing: Deck.Cards1T[i].Unit.sNameU});
    }

    ractiveDeck.set("debug",tablerow);
}
