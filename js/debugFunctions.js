
function debugOutput(binoutdebug){
    var tablerow = [];
    tablerow.push({ bin: binoutdebug.charAt(0), parsing: Deck.sSide });
    tablerow.push({ bin: binoutdebug.substr(0,9), parsing: Deck.sNation });
    tablerow.push({ bin: binoutdebug.substr(9,3), parsing: Deck.sSpec });
    tablerow.push({ bin: binoutdebug.substr(12,2), parsing: Deck.sEra });
    tablerow.push({ bin: binoutdebug.substr(14,4), parsing: "inf-naval:  " + parseInt(binoutdebug.substr(14,4), 2) });
    tablerow.push({ bin: binoutdebug.substr(14,4), parsing: "inf-land, veh-naval:  "+ parseInt(binoutdebug.substr(18,5), 2) });

    for (var i = 0; i < Deck.i3Cards; i++) {
      tablerow.push({ bin: Deck.Cards2T[i].Unit.iUnitID, parsing: Deck.Cards2T[i].Unit.sNameU});
      tablerow.push({ bin: Deck.Cards2T[i].Transport.iUnitID, parsing: Deck.Cards2T[i].Transport.sNameU});
      tablerow.push({ bin: Deck.Cards2T[i].Craft.iUnitID, parsing: Deck.Cards2T[i].Craft.sNameU});
    }

    for (var i = 0; i < Deck.i2Cards; i++) {
      tablerow.push({ bin: Deck.Cards1T[i].Unit.iUnitID, parsing: Deck.Cards1T[i].Unit.sNameU});
      tablerow.push({ bin: Deck.Cards1T[i].Transport.iUnitID, parsing: Deck.Cards1T[i].Transport.sNameU});
    }
    for (var i = 0; i < Deck.i1Cards; i++) {
      tablerow.push({ bin: Deck.Cards0T[i].Unit.iUnitID, parsing: Deck.Cards0T[i].Unit.sNameU});
    }

    ractive.set("debug",tablerow);
}
