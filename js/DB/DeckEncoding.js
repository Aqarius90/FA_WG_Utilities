
function deckImport(){
/* deck string is an encoded binary, consisting of:
    0-11 bits = nation (0th bit is side)
    12-14 bits = specification (from 000 as motorised to 111 as general)
    15-16 bits = category deck (00 catC, 01 catB, 10 catA)
    17-20 bits = number of cards in deck occupied by 3 units (AKA infantry+transport+landing craft.)
    21-25 bits = number of cards in deck occupied by 2 units (inf+transport, or vehicle+landing craft)
    26+ bits = deck slots: numberOf3CardSlots * (3+11+11+11) + numberOf2CardSlots * (3+11+11) + [however many left over]*(3+11)
      where:
        -3 bits of veterancy (000 is militia etc)
        -11 bits per unit.
    */

    var DeckCode = sDeckString.value;
    //code below 4 is invalid.
    if (deckCode.length < 4 ) { return; }

    var deckBinary = "";
    //blank current deck
    Deck.Cards1T = [];
    Deck.Cards2T = [];
    Deck.Cards3T = [];
    Deck.Cards3Count = 0;
    Deck.Cards2Count = 0;
    Deck.Cards1Count = 0;
    Deck.iNation = "";
    Deck.sNation = "";
    Deck.iSpec = "";
    Deck.sSpec = "";
    Deck.iEra = "";
    Deck.sEra = "";


    //unravel to binary.
    //"@" is a prefix, added with israel for visual differentiation, and is ignored
    //"=" is an encoding suffix, basically means "000000", and is ignored
    for (var i = 0; i < deckCode.length; i++) {
      if (deckCode.charAt(i) == "A") { deckBinary += "000000"; } else
      if (deckCode.charAt(i) == "B") { deckBinary += "000001"; } else
      if (deckCode.charAt(i) == "C") { deckBinary += "000010"; } else
      if (deckCode.charAt(i) == "D") { deckBinary += "000011"; } else
      if (deckCode.charAt(i) == "E") { deckBinary += "000100"; } else
      if (deckCode.charAt(i) == "F") { deckBinary += "000101"; } else
      if (deckCode.charAt(i) == "G") { deckBinary += "000110"; } else
      if (deckCode.charAt(i) == "H") { deckBinary += "000111"; } else
      if (deckCode.charAt(i) == "I") { deckBinary += "001000"; } else
      if (deckCode.charAt(i) == "J") { deckBinary += "001001"; } else
      if (deckCode.charAt(i) == "K") { deckBinary += "001010"; } else
      if (deckCode.charAt(i) == "L") { deckBinary += "001011"; } else
      if (deckCode.charAt(i) == "M") { deckBinary += "001100"; } else
      if (deckCode.charAt(i) == "N") { deckBinary += "001101"; } else
      if (deckCode.charAt(i) == "O") { deckBinary += "001110"; } else
      if (deckCode.charAt(i) == "P") { deckBinary += "001111"; } else
      if (deckCode.charAt(i) == "Q") { deckBinary += "010000"; } else
      if (deckCode.charAt(i) == "R") { deckBinary += "010001"; } else
      if (deckCode.charAt(i) == "S") { deckBinary += "010010"; } else
      if (deckCode.charAt(i) == "T") { deckBinary += "010011"; } else
      if (deckCode.charAt(i) == "U") { deckBinary += "010100"; } else
      if (deckCode.charAt(i) == "V") { deckBinary += "010101"; } else
      if (deckCode.charAt(i) == "W") { deckBinary += "010110"; } else
      if (deckCode.charAt(i) == "X") { deckBinary += "010111"; } else
      if (deckCode.charAt(i) == "Y") { deckBinary += "011000"; } else
      if (deckCode.charAt(i) == "Z") { deckBinary += "011001"; } else
      if (deckCode.charAt(i) == "a") { deckBinary += "011010"; } else
      if (deckCode.charAt(i) == "b") { deckBinary += "011011"; } else
      if (deckCode.charAt(i) == "c") { deckBinary += "011100"; } else
      if (deckCode.charAt(i) == "d") { deckBinary += "011101"; } else
      if (deckCode.charAt(i) == "e") { deckBinary += "011110"; } else
      if (deckCode.charAt(i) == "f") { deckBinary += "011111"; } else
      if (deckCode.charAt(i) == "g") { deckBinary += "100000"; } else
      if (deckCode.charAt(i) == "h") { deckBinary += "100001"; } else
      if (deckCode.charAt(i) == "i") { deckBinary += "100010"; } else
      if (deckCode.charAt(i) == "j") { deckBinary += "100011"; } else
      if (deckCode.charAt(i) == "k") { deckBinary += "100100"; } else
      if (deckCode.charAt(i) == "l") { deckBinary += "100101"; } else
      if (deckCode.charAt(i) == "m") { deckBinary += "100110"; } else
      if (deckCode.charAt(i) == "n") { deckBinary += "100111"; } else
      if (deckCode.charAt(i) == "o") { deckBinary += "101000"; } else
      if (deckCode.charAt(i) == "p") { deckBinary += "101001"; } else
      if (deckCode.charAt(i) == "q") { deckBinary += "101010"; } else
      if (deckCode.charAt(i) == "r") { deckBinary += "101011"; } else
      if (deckCode.charAt(i) == "s") { deckBinary += "101100"; } else
      if (deckCode.charAt(i) == "t") { deckBinary += "101101"; } else
      if (deckCode.charAt(i) == "u") { deckBinary += "101110"; } else
      if (deckCode.charAt(i) == "v") { deckBinary += "101111"; } else
      if (deckCode.charAt(i) == "w") { deckBinary += "110000"; } else
      if (deckCode.charAt(i) == "x") { deckBinary += "110001"; } else
      if (deckCode.charAt(i) == "y") { deckBinary += "110010"; } else
      if (deckCode.charAt(i) == "z") { deckBinary += "110011"; } else
      if (deckCode.charAt(i) == "0") { deckBinary += "110100"; } else
      if (deckCode.charAt(i) == "1") { deckBinary += "110101"; } else
      if (deckCode.charAt(i) == "2") { deckBinary += "110110"; } else
      if (deckCode.charAt(i) == "3") { deckBinary += "110111"; } else
      if (deckCode.charAt(i) == "4") { deckBinary += "111000"; } else
      if (deckCode.charAt(i) == "5") { deckBinary += "111001"; } else
      if (deckCode.charAt(i) == "6") { deckBinary += "111010"; } else
      if (deckCode.charAt(i) == "7") { deckBinary += "111011"; } else
      if (deckCode.charAt(i) == "8") { deckBinary += "111100"; } else
      if (deckCode.charAt(i) == "+") { deckBinary += "111110"; } else
      if (deckCode.charAt(i) == "9") { deckBinary += "111101"; } else
      if (deckCode.charAt(i) == "/") { deckBinary += "111111"; }
    }
    //get Side
    if (deckBinary.charAt(1) == '0'){
        Deck.sSide = "BLU";
        Deck.iSide = 0;
    }
    else if (deckBinary.charAt(1) == '1'){
        Deck.sSide = "RED";
        Deck.iSide = 1;
    }
    else{
        Deck.sSide = "INVALID";
        Deck.iSide = 2;
    }
    for (var i = 0; i <= 11; i++){
        Deck.iNation += deckBinary.charAt(i);
    }
    //magic numbers galore
    if (Deck.iNation == "000000001100") { Deck.sNation = "USA"; } else
    if (Deck.iNation == "000000101100") { Deck.sNation = "UK"; } else
    if (Deck.iNation == "000001001100") { Deck.sNation = "FRA"; } else
    if (Deck.iNation == "000001101100") { Deck.sNation = "BRD"; } else
    if (Deck.iNation == "000010001100") { Deck.sNation = "CAN"; } else
    if (Deck.iNation == "000010101100") { Deck.sNation = "DEN"; } else
    if (Deck.iNation == "000011001100") { Deck.sNation = "SWE"; } else
    if (Deck.iNation == "000011101100") { Deck.sNation = "NOR"; } else
    if (Deck.iNation == "000100001100") { Deck.sNation = "ANZAC"; } else
    if (Deck.iNation == "000100101100") { Deck.sNation = "JAP"; } else
    if (Deck.iNation == "000101001100") { Deck.sNation = "ROK"; } else
    if (Deck.iNation == "000101101100") { Deck.sNation = "NED"; } else
    if (Deck.iNation == "000110001100") { Deck.sNation = "ISR";} else
    if (Deck.iNation == "000111100000") { Deck.sNation = "EU"; } else
    if (Deck.iNation == "000111100001") { Deck.sNation = "SCA"; } else
    if (Deck.iNation == "000111100010") { Deck.sNation = "CW"; } else
    if (Deck.iNation == "000111100011") { Deck.sNation = "BD"; } else
    if (Deck.iNation == "000111100110") { Deck.sNation = "LJUT"; } else
    if (Deck.iNation == "000111101000") { Deck.sNation = "NORAD"; } else
    if (Deck.iNation == "000111101001") { Deck.sNation = "BDRNL"; } else
    if (Deck.iNation == "000111101100") { Deck.sNation = "NATO"; } else
    if (Deck.iNation == "010000001100") { Deck.sNation = "DDR"; } else
    if (Deck.iNation == "010000101100") { Deck.sNation = "USSR"; } else
    if (Deck.iNation == "010001001100") { Deck.sNation = "POL"; } else
    if (Deck.iNation == "010001101100") { Deck.sNation = "CZS"; } else
    if (Deck.iNation == "010010001100") { Deck.sNation = "PRC"; } else
    if (Deck.iNation == "010010101100") { Deck.sNation = "DPRK"; } else
    if (Deck.iNation == "010011001100") { Deck.sNation = "FIN"; } else
    if (Deck.iNation == "010011101100") { Deck.sNation = "YU"; } else
    if (Deck.iNation == "010100100100") { Deck.sNation = "RD"; } else
    if (Deck.iNation == "010100100101") { Deck.sNation = "NSWP"; } else
    if (Deck.iNation == "010100101010") { Deck.sNation = "FINPL"; } else
    if (Deck.iNation == "010100101011") { Deck.sNation = "YUCZE"; } else
    if (Deck.iNation == "010100101100") { Deck.sNation = "REDFOR"; }
    for (var i = 12; i <= 14; i++)
    {
        Deck.sSpec += deckBinary.charAt(i); // temporarily using s(tring)Spec as binary
    }
    Deck.iSpec = parseInt(Deck.sSpec, 2);
    if (Deck.iSpec == 0) { Deck.sSpec = "Motorized"; } else
    if (Deck.iSpec == 1) { Deck.sSpec = "Armored"; } else
    if (Deck.iSpec == 2) { Deck.sSpec = "Support"; } else
    if (Deck.iSpec == 3) { Deck.sSpec = "Marine"; } else
    if (Deck.iSpec == 4) { Deck.sSpec = "Mechanized"; } else
    if (Deck.iSpec == 5) { Deck.sSpec = "Airborne"; } else
    if (Deck.iSpec == 6) { Deck.sSpec = "NAV"; } else
    if (Deck.iSpec == 7) { Deck.sSpec = "GEN"; }
    for (var i = 15; i <= 16; i++)
    {
        Deck.sEra +=  deckBinary.charAt(i); // same
    }
    Deck.iEra = parseInt(Deck.sEra, 2);
    if (Deck.iEra == 0) { Deck.sEra = "C"; } else
    if (Deck.iEra == 1) { Deck.sEra = "B"; } else
    if (Deck.iEra == 2) { Deck.sEra = "A"; }

    //unit counting
    var s3Count = "";
    var s2Count = "";
    for (var i = 17; i <= 20; i++)
    {
        s3Count += deckBinary.charAt(i);
    }
    for (var i = 21; i <= 25; i++)
    {
        s2Count += deckBinary.charAt(i);
    }
    Deck.Cards3Count = parseInt(s3Count, 2);
    Deck.Cards2Count = parseInt(s2Count, 2);

    //unit decoding
    var iPC = 26; //pos counter
    for (var i = 0; i < Deck.Cards3Count; i++) //for each unit
    {
        var sVet = "", sUnit = "", sIFV = "", sCraft = "";
        for (var j = iPC; j <= (iPC + 2); j++) //find vet
        {
            sVet += deckBinary.charAt(j);
        }
        iPC += 3;
        for (var j = iPC; j <= (iPC + 10); j++) //find unit
        {
            sUnit += deckBinary.charAt(j);
        }
        iPC += 11;
        for (var j = iPC; j <= (iPC + 10); j++) //find transport
        {
            sIFV += deckBinary.charAt(j);
        }
        iPC += 11;
        for (var j = iPC; j <= (iPC + 10); j++)  //find ship
        {
            sCraft += deckBinary.charAt(j);
        }
        iPC += 11;
        var iUnit = parseInt(sUnit, 2);
        var iIFV = parseInt(sIFV, 2);
        var iCraft = parseInt(sCraft, 2); //useful DEADBEEF: LCs are either 573/NATO or 458/PACT

        var Unit = $.grep(UnitDatabase, function(e){ return (e.DeckCode.Card == iUnit && e.DeckCode.Side == Deck.iSide; });
        var Ifv = $.grep(UnitDatabase, function(e){ return (e.DeckCode.Card == iIFV && e.DeckCode.Side == Deck.iSide; });
        var Craft = $.grep(UnitDatabase, function(e){ return (e.DeckCode.Card == iCraft && e.DeckCode.Side == Deck.iSide; });
        Deck.Cards3T[i] = new DeckCard(sVet, Unit, Ifv, Craft);
        Deck.Cards3T[i] = toGen(Deck.Cards3T[i]); // normalization. internally, the deck is stored as "general".

        for (var i = 0; i < Deck.Cards2Count; i++)
        {
            var sVet = "", sUnit = "", sIFV = "";
            for (var j = iPC; j <= (iPC + 2); j++)
            {
                sVet += deckBinary.charAt(j);
            }
            iPC += 3;
            for (var j = iPC; j <= (iPC + 10); j++)
            {
                sUnit += deckBinary.charAt(j);
            }
            iPC += 11;
            for (var j = iPC; j <= (iPC + 10); j++)
            {
                sIFV += deckBinary.charAt(j);
            }
            iPC += 11;
            var iUnit = parseInt(sUnit, 2);
            var iIFV = parseInt(sIFV, 2);
            var Unit = $.grep(UnitDatabase, function(e){ return (e.DeckCode.Card == iUnit && e.DeckCode.Side == Deck.iSide; });
            var Ifv = $.grep(UnitDatabase, function(e){ return (e.DeckCode.Card == iIFV && e.DeckCode.Side == Deck.iSide; });
            Deck.Cards2T[i] = new DeckCard(sVet, Unit, Ifv, 0); //LC is 0, IE, doesn't exist.
            Deck.Cards2T[i] = toGen(Deck.Cards2T[i]);// normalization. internally, the deck is stored as "general".
        }

        var iLength = deckBinary.length - iPC;
        while (iLength > 12)
        {
            var sVet = "", sUnit = "";
            for (var j = iPC; j <= (iPC + 2); j++)
            {
                sVet += deckBinary.charAt(j);
            }
            iPC += 3;
            for (var j = iPC; j <= (iPC + 10); j++)
            {
                sUnit += deckBinary.charAt(j);
            }
            iPC += 11;
            iLength = deckBinary.length - iPC;

            var iUnit = parseInt(sUnit, 2);
            var Unit = $.grep(UnitDatabase, function(e){ return (e.DeckCode.Card == iUnit && e.DeckCode.Side == Deck.iSide; });
            Deck.Cards1T[Deck.Cards1Count] = new DeckCard(sVet, Unit, 0, 0);
            Deck.Cards1T[Deck.Cards1Count] = toGen(Deck.Cards1T[Deck.Cards1Count]);
            Deck.Cards1Count++;
        }

        ractiveHeader.set('sBinary', deckBinary);
        debugOutput(deckBinary);
    }
}

function deckExport(){
    var BinaryOut = ""
    BinaryOut += Deck.iNation;

    var sUtil = Deck.iSpec.toString(2);
    pad = "000"; //length must be at least 3
    sUtil = pad.substring(0, pad.length - sUtil.length) + sUtil; //pad left 3
    BinaryOut += sUtil;

    sUtil = Deck.iEra.toString(2);
    pad = "00";
    sUtil = pad.substring(0, pad.length - sUtil.length) + sUtil; //pad left 2
    BinaryOut += sUtil;

    sUtil = Deck.Cards3Count.toString(2);
    pad = "0000";
    sUtil = pad.substring(0, pad.length - sUtil.length) + sUtil; //pad left 4
    BinaryOut += sUtil;

    sUtil = Deck.Cards2Count.toString(2);
    pad = "00000";
    sUtil = pad.substring(0, pad.length - sUtil.length) + sUtil; //pad left 4
    BinaryOut += sUtil;

    for (var i = 0; i < Deck.Cards3T.length; i++)
    {

        sUtil = Deck.Cards3T[i].sVet
        BinaryOut += sUtil;

        sUtil = Deck.Cards3T[i].Unit.DeckCode.Card.toString(2);
        pad = "00000000000";
        sUtil = pad.substring(0, pad.length - sUtil.length) + sUtil; //pad left 10
        BinaryOut += sUtil;

        sUtil = Deck.Cards3T[i].Transport.DeckCode.Card.toString(2);
        pad = "00000000000";
        sUtil = pad.substring(0, pad.length - sUtil.length) + sUtil; //pad left 10
        BinaryOut += sUtil;

        sUtil = Deck.Cards3T[i].Craft.DeckCode.Card.toString(2);
        pad = "00000000000";
        sUtil = pad.substring(0, pad.length - sUtil.length) + sUtil; //pad left 10
        BinaryOut += sUtil;
    }

    for (var i = 0; i < Deck.Cards2T.length; i++)
    {
        sUtil = Deck.Cards2T[i].sVet;
        BinaryOut += sUtil;
        sUtil = Deck.Cards2T[i].Unit.DeckCode.Card.toString(2);
        pad = "00000000000";
        sUtil = pad.substring(0, pad.length - sUtil.length) + sUtil; //pad left 10
        BinaryOut += sUtil;

        sUtil = Deck.Cards2T[i].Transport.DeckCode.Card.toString(2);
        pad = "00000000000";
        sUtil = pad.substring(0, pad.length - sUtil.length) + sUtil; //pad left 10
        BinaryOut += sUtil;
    }

    for (var i = 0; i < Deck.Cards1T.length; i++)
    {
        sUtil = Deck.Cards1T[i].sVet;
        BinaryOut += sUtil;

        sUtil = Deck.Cards1T[i].Unit.DeckCode.Card.toString(2);
        pad = "00000000000";
        sUtil = pad.substring(0, pad.length - sUtil.length) + sUtil; //pad left 10
        BinaryOut += sUtil;
    }

    var charArray = BinaryOut.match(/.{1,6}/g); //REGEX voodo, binString->6charStrips[]
    pad = "000000";
    charArray[charArray.length-1] = charArray[charArray.length-1] + pad.substring(0, pad.length - charArray[charArray.length-1].length);
    var CharOut = "@";
    var padCounter = 4;
    for (var i = 0; i < charArray.length; i++)
    {
      if (charArray[i] == "000000") { CharOut +="A" ; } else
      if (charArray[i] == "000001") { CharOut +="B" ; } else
      if (charArray[i] == "000010") { CharOut +="C" ; } else
      if (charArray[i] == "000011") { CharOut +="D" ; } else
      if (charArray[i] == "000100") { CharOut +="E" ; } else
      if (charArray[i] == "000101") { CharOut +="F" ; } else
      if (charArray[i] == "000110") { CharOut +="G" ; } else
      if (charArray[i] == "000111") { CharOut +="H" ; } else
      if (charArray[i] == "001000") { CharOut +="I" ; } else
      if (charArray[i] == "001001") { CharOut +="J" ; } else
      if (charArray[i] == "001010") { CharOut +="K" ; } else
      if (charArray[i] == "001011") { CharOut +="L" ; } else
      if (charArray[i] == "001100") { CharOut +="M" ; } else
      if (charArray[i] == "001101") { CharOut +="N" ; } else
      if (charArray[i] == "001110") { CharOut +="O" ; } else
      if (charArray[i] == "001111") { CharOut +="P" ; } else
      if (charArray[i] == "010000") { CharOut +="Q" ; } else
      if (charArray[i] == "010001") { CharOut +="R" ; } else
      if (charArray[i] == "010010") { CharOut +="S" ; } else
      if (charArray[i] == "010011") { CharOut +="T" ; } else
      if (charArray[i] == "010100") { CharOut +="U" ; } else
      if (charArray[i] == "010101") { CharOut +="V" ; } else
      if (charArray[i] == "010110") { CharOut +="W" ; } else
      if (charArray[i] == "010111") { CharOut +="X" ; } else
      if (charArray[i] == "011000") { CharOut +="Y" ; } else
      if (charArray[i] == "011001") { CharOut +="Z" ; } else
      if (charArray[i] == "011010") { CharOut +="a" ; } else
      if (charArray[i] == "011011") { CharOut +="b" ; } else
      if (charArray[i] == "011100") { CharOut +="c" ; } else
      if (charArray[i] == "011101") { CharOut +="d" ; } else
      if (charArray[i] == "011110") { CharOut +="e" ; } else
      if (charArray[i] == "011111") { CharOut +="f" ; } else
      if (charArray[i] == "100000") { CharOut +="g" ; } else
      if (charArray[i] == "100001") { CharOut +="h" ; } else
      if (charArray[i] == "100010") { CharOut +="i" ; } else
      if (charArray[i] == "100011") { CharOut +="j" ; } else
      if (charArray[i] == "100100") { CharOut +="k" ; } else
      if (charArray[i] == "100101") { CharOut +="l" ; } else
      if (charArray[i] == "100110") { CharOut +="m" ; } else
      if (charArray[i] == "100111") { CharOut +="n" ; } else
      if (charArray[i] == "101000") { CharOut +="o" ; } else
      if (charArray[i] == "101001") { CharOut +="p" ; } else
      if (charArray[i] == "101010") { CharOut +="q" ; } else
      if (charArray[i] == "101011") { CharOut +="r" ; } else
      if (charArray[i] == "101100") { CharOut +="s" ; } else
      if (charArray[i] == "101101") { CharOut +="t" ; } else
      if (charArray[i] == "101110") { CharOut +="u" ; } else
      if (charArray[i] == "101111") { CharOut +="v" ; } else
      if (charArray[i] == "110000") { CharOut +="w" ; } else
      if (charArray[i] == "110001") { CharOut +="x" ; } else
      if (charArray[i] == "110010") { CharOut +="y" ; } else
      if (charArray[i] == "110011") { CharOut +="z" ; } else
      if (charArray[i] == "110100") { CharOut +="0" ; } else
      if (charArray[i] == "110101") { CharOut +="1" ; } else
      if (charArray[i] == "110110") { CharOut +="2" ; } else
      if (charArray[i] == "110111") { CharOut +="3" ; } else
      if (charArray[i] == "111000") { CharOut +="4" ; } else
      if (charArray[i] == "111001") { CharOut +="5" ; } else
      if (charArray[i] == "111010") { CharOut +="6" ; } else
      if (charArray[i] == "111011") { CharOut +="7" ; } else
      if (charArray[i] == "111100") { CharOut +="8" ; } else
      if (charArray[i] == "111110") { CharOut +="+" ; } else
      if (charArray[i] == "111101") { CharOut +="9" ; } else
      if (charArray[i] == "111111") { CharOut +="/" ; }

        padCounter--;
        if(padCounter == 0){padCounter = 4;}
    }
    //game won't accept the code without the padding.
    if(padCounter == 1){
        CharOut += "A";
    }else if(padCounter == 2){
        CharOut += "A=";
    }else if(padCounter == 3){
        CharOut += "A==";
    }
    var sDeckString = document.getElementById("sDeckString");
    sDeckString.value = CharOut;
}
