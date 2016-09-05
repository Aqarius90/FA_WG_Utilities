function  DeckAssembly()
{
    this.sSide = "NONE";
    this.iSide =0;
    this.sNation = "NONE";
    this.iNation = 0;
    this.sSpec = "GEN";
    this.iSpec = 7;
    this.sEra = "A";
    this.iEra = 2;
    this.i3Cards = 0;
    this.i2Cards = 0;
    this.i1Cards = 0;
    this.iSide = 0;
    this.Cards0T = [];
    this.Cards1T = [];
    this.Cards2T = [];
    this.deckpoints = 0;
    this.deckpoitstotal = 45;
    this.availQ = 0;
   // var Weapon = new Weapon(0, 0, 0, 0, 0, 0, 0, "", 0, "", "", "NONE"); //???
}


function DeckDisAssembly()
{
  var binoutdebug = "NONE";
  decodeDeck(sDeckString.value)
}

function decodeDeck (deckCode)
{
    Deck.Cards0T = [];
    Deck.Cards1T = [];
    Deck.Cards2T = [];
    Deck.i3Cards = 0;
    Deck.i2Cards = 0;
    Deck.i1Cards = 0;
    var deckBinary ="";
    if (deckCode.length < 4 ) { return; }
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

    if (deckBinary.charAt(0) == '0')
    {
        Deck.sSide = "BLU";
        Deck.iSide = 0;
    }
    else if (deckBinary.charAt(0) == '1')
    {
        Deck.sSide = "RED";
        Deck.iSide = 1;
    }
    else
    {
        Deck.sSide = "INVALID";
        Deck.iSide = 2;
    }
    Deck.sNation = "";
    for (var i = 0; i <= 8; i++)
    {
        Deck.sNation += deckBinary.charAt(i);
    }
    Deck.iNation = parseInt(Deck.sNation, 2);
    if (Deck.iNation == 10)  { Deck.sNation = "USA"; } else
    if (Deck.iNation == 26)  { Deck.sNation = "UK"; } else
    if (Deck.iNation == 42)  { Deck.sNation = "FRA"; } else
    if (Deck.iNation == 58)  { Deck.sNation = "BRD"; } else
    if (Deck.iNation == 74)  { Deck.sNation = "CAN"; } else
    if (Deck.iNation == 90)  { Deck.sNation = "DEN"; } else
    if (Deck.iNation == 106) { Deck.sNation = "SWE"; } else
    if (Deck.iNation == 122) { Deck.sNation = "NOR"; } else
    if (Deck.iNation == 138) { Deck.sNation = "ANZAC"; } else
    if (Deck.iNation == 154) { Deck.sNation = "JAP"; } else
    if (Deck.iNation == 170) { Deck.sNation = "ROK"; } else
    if (Deck.iNation == 186) { Deck.sNation = "NED"; } else
    if (Deck.iNation == 192) { Deck.sNation = "EU"; } else
    if (Deck.iNation == 193) { Deck.sNation = "SCA"; } else
    if (Deck.iNation == 194) { Deck.sNation = "CW"; } else
    if (Deck.iNation == 195) { Deck.sNation = "BD"; } else
    if (Deck.iNation == 198) { Deck.sNation = "LJUT"; } else
    if (Deck.iNation == 200) { Deck.sNation = "NORAD"; } else
    if (Deck.iNation == 201) { Deck.sNation = "BDRNL"; } else
    if (Deck.iNation == 202) { Deck.sNation = "NATO"; } else
    if (Deck.iNation == 266) { Deck.sNation = "DDR"; } else
    if (Deck.iNation == 282) { Deck.sNation = "USSR"; } else
    if (Deck.iNation == 298) { Deck.sNation = "POL"; } else
    if (Deck.iNation == 314) { Deck.sNation = "CZS"; } else
    if (Deck.iNation == 330) { Deck.sNation = "PRC"; } else
    if (Deck.iNation == 346) { Deck.sNation = "DPRK"; } else
    if (Deck.iNation == 356) { Deck.sNation = "RD"; } else
    if (Deck.iNation == 357) { Deck.sNation = "NSWP"; } else
    if (Deck.iNation == 359) { Deck.sNation = "SOVKOR"; } else
    if (Deck.iNation == 362) { Deck.sNation = "REDFOR"; }

    Deck.sSpec = "";
    for (var i = 9; i <= 11; i++)
    {
        Deck.sSpec += deckBinary.charAt(i);
    }
    Deck.iSpec = parseInt(Deck.sSpec, 2);
    if (Deck.iSpec == 0) { Deck.sSpec = "MOTO"; } else
    if (Deck.iSpec == 1) { Deck.sSpec = "ARM"; } else
    if (Deck.iSpec == 2) { Deck.sSpec = "SUP"; } else
    if (Deck.iSpec == 3) { Deck.sSpec = "MAR"; } else
    if (Deck.iSpec == 4) { Deck.sSpec = "MECH"; } else
    if (Deck.iSpec == 5) { Deck.sSpec = "AIR"; } else
    if (Deck.iSpec == 6) { Deck.sSpec = "NAV"; } else
    if (Deck.iSpec == 7) { Deck.sSpec = "GEN"; }

    Deck.sEra = "";
    for (var i = 12; i <= 13; i++)
    {
        Deck.sEra +=  deckBinary.charAt(i);
    }
    Deck.iEra = parseInt(Deck.sEra, 2);
    if (Deck.iEra == 0) { Deck.sEra = "C"; } else
    if (Deck.iEra == 1) { Deck.sEra = "B"; } else
    if (Deck.iEra == 2) { Deck.sEra = "A"; }

    //Units
    var s3Count = "";
    for (var i = 14; i <= 17; i++)
    {
        s3Count += deckBinary.charAt(i);
    }
    Deck.i3Cards = parseInt(s3Count, 2);
    var s2Count = "";
    for (var i = 18; i <= 22; i++)
    {
        s2Count += deckBinary.charAt(i);
    }
    Deck.i2Cards = parseInt(s2Count, 2);

    var iPC = 23; //pos counter
    for (var i = 0; i < Deck.i3Cards; i++) //for each unit
    {
        var sVet = "", sUnit = "", sIFV = "", sCraft = "";
        for (var j = iPC; j <= (iPC + 2); j++) //find vet
        {
            sVet += deckBinary.charAt(j);
        }
        iPC += 3;
        for (var j = iPC; j <= (iPC + 9); j++) //find unit
        {
            sUnit += deckBinary.charAt(j);
        }
        iPC += 10;
        for (var j = iPC; j <= (iPC + 9); j++) //find transport
        {
            sIFV += deckBinary.charAt(j);
        }
        iPC += 10;
        for (var j = iPC; j <= (iPC + 9); j++)  //find ship
        {
            sCraft += deckBinary.charAt(j);
        }
        iPC += 10;
        var iUnit = parseInt(sUnit, 2);
        var iIFV = parseInt(sIFV, 2);
        var iCraft = parseInt(sCraft, 2);
        var Unit = CardsDB[iUnit][Deck.iSide];
        var Ifv = CardsDB[iIFV][Deck.iSide];
        var Craft = CardsDB[iCraft][Deck.iSide];
        Deck.Cards2T[i] = new VehicleCard(sVet, Unit, Ifv, 1);
        Deck.Cards2T[i].Unit.sUnitData = Deck.Cards2T[i].Unit.sUnitData.substr(0, 17)+ "000000001";//is not regular inf
        Deck.Cards2T[i] = toGen(Deck.Cards2T[i]);
    }

    for (var i = 0; i < Deck.i2Cards; i++)
    {
        var sVet = "", sUnit = "", sIFV = "";
        for (var j = iPC; j <= (iPC + 2); j++)
        {
            sVet += deckBinary.charAt(j);
        }
        iPC += 3;
        for (var j = iPC; j <= (iPC + 9); j++)
        {
            sUnit += deckBinary.charAt(j);
        }
        iPC += 10;
        for (var j = iPC; j <= (iPC + 9); j++)
        {
            sIFV += deckBinary.charAt(j);
        }
        iPC += 10;
        var iUnit = parseInt(sUnit, 2);
        var iIFV = parseInt(sIFV, 2);
        var Unit = CardsDB[iUnit][Deck.iSide];
        var Ifv = CardsDB[iIFV][Deck.iSide];
        Deck.Cards1T[i] = new VehicleCard(sVet, Unit, Ifv, 0);
        if (Deck.Cards1T[i].Unit.sUnitData.charAt(7) != '1' )// if not inf
        {
              Deck.Cards1T[i].Unit.sUnitData = Deck.Cards1T[i].Unit.sUnitData.substr(0, 17)+ "000000001"; // is naval
        };
        Deck.Cards1T[i] = toGen(Deck.Cards1T[i]);
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
        for (var j = iPC; j <= (iPC + 9); j++)
        {
            sUnit += deckBinary.charAt(j);
        }
        iPC += 10;
        iLength = deckBinary.length - iPC;

        var iUnit = parseInt(sUnit, 2);
        var Unit = CardsDB[iUnit][Deck.iSide];
        Deck.Cards0T[Deck.i1Cards] = new VehicleCard(sVet, Unit, 0, 0);
        Deck.Cards0T[Deck.i1Cards] = toGen(Deck.Cards0T[Deck.i1Cards]);
        Deck.i1Cards++;
    }
    //cardDisplaySort(Deck.Cards0T, Deck.Cards1T, Deck.Cards2T);
    ractiveHeader.set('sBinary', deckBinary);
    debugOutput(deckBinary);
}


        //deck decoding
function DeckExport()
{

    var BinaryOut = ""

    var sUtil = Deck.iNation.toString(2);
    var pad = "000000000";
    sUtil = pad.substring(0, pad.length - sUtil.length) + sUtil; //pad left 9
    BinaryOut += sUtil;

    sUtil = Deck.iSpec.toString(2);
    pad = "000";
    sUtil = pad.substring(0, pad.length - sUtil.length) + sUtil; //pad left 3
    BinaryOut += sUtil;

    sUtil = Deck.iEra.toString(2);
    pad = "00";
    sUtil = pad.substring(0, pad.length - sUtil.length) + sUtil; //pad left 2
    BinaryOut += sUtil;

    sUtil = Deck.i3Cards.toString(2);
    pad = "0000";
    sUtil = pad.substring(0, pad.length - sUtil.length) + sUtil; //pad left 4
    BinaryOut += sUtil;

    sUtil = Deck.i2Cards.toString(2);
    pad = "00000";
    sUtil = pad.substring(0, pad.length - sUtil.length) + sUtil; //pad left 4
    BinaryOut += sUtil;

    for (var i = 0; i < Deck.Cards2T.length; i++)
    {
        //var newcard = toSpec(Deck.Cards2T[i]);
       // sUtil = newcard.sVeterancy;

        sUtil = Deck.Cards2T[i].sVeterancy;
        BinaryOut += sUtil;

        sUtil = Deck.Cards2T[i].Unit.iUnitID.toString(2);
        pad = "0000000000";
        sUtil = pad.substring(0, pad.length - sUtil.length) + sUtil; //pad left 10
        BinaryOut += sUtil;

        sUtil = Deck.Cards2T[i].Transport.iUnitID.toString(2);
        pad = "0000000000";
        sUtil = pad.substring(0, pad.length - sUtil.length) + sUtil; //pad left 10
        BinaryOut += sUtil;

        sUtil = Deck.Cards2T[i].Craft.iUnitID.toString(2);
        pad = "0000000000";
        sUtil = pad.substring(0, pad.length - sUtil.length) + sUtil; //pad left 10
        BinaryOut += sUtil;
    }

    for (var i = 0; i < Deck.Cards1T.length; i++)
    {
        //var newcard = toSpec(Deck.Cards1T[i]);
        //sUtil = newcard.sVeterancy1
        sUtil = Deck.Cards1T[i].sVeterancy;
        BinaryOut += sUtil;
        sUtil = Deck.Cards1T[i].Unit.iUnitID.toString(2);
        pad = "0000000000";
        sUtil = pad.substring(0, pad.length - sUtil.length) + sUtil; //pad left 10
        BinaryOut += sUtil;

        sUtil = Deck.Cards1T[i].Transport.iUnitID.toString(2);
        pad = "0000000000";
        sUtil = pad.substring(0, pad.length - sUtil.length) + sUtil; //pad left 10
        BinaryOut += sUtil;
    }

    for (var i = 0; i < Deck.Cards0T.length; i++)
    {
        //var newcard = toSpec(Deck.Cards0T[i]);
        //sUtil = newcard.sVeterancy;
        sUtil = Deck.Cards0T[i].sVeterancy;
        BinaryOut += sUtil;

        sUtil = Deck.Cards0T[i].Unit.iUnitID.toString(2);
        pad = "0000000000";
        sUtil = pad.substring(0, pad.length - sUtil.length) + sUtil; //pad left 10
        BinaryOut += sUtil;
    }

    var charArray = BinaryOut.match(/.{1,6}/g); //REGEX voodo
    pad = "000000";
    charArray[charArray.length-1] = charArray[charArray.length-1] + pad.substring(0, pad.length - charArray[charArray.length-1].length);
    var CharOut = "";
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

    if(padCounter == 1){
        CharOut += "=";
    }else if(padCounter == 2){
        CharOut += "A=";
    }else if(padCounter == 3){
        CharOut += "A==";
    }
    var sDeckString = document.getElementById("sDeckString");
    sDeckString.value = CharOut;
}

Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

function CardDelete(ID)
{
    var sD  = "DeckView.D" +ID;
    var sL  = "DeckView.L" +ID;
    var sD0 = "DetailView.D0" +ID;
    var sL0 = "DetailView.L0" +ID;
    ractiveDeck.set(sD, "");
    ractiveDeck.set(sD0, "");
    ractiveDeck.set(sL, "");
    ractiveDeck.set(sL0, "");

    for (var j = 0; j< Deck.Cards2T.length; j++) {
        if (Deck.Cards2T[j].iArrayIndex == ID)
        {
            Deck.Cards2T.remove(j);
            Deck.i3Cards--;
        }
    }
    for (var j = 0; j< Deck.Cards1T.length; j++) {
        if (Deck.Cards1T[j].iArrayIndex == ID)
        {
            Deck.Cards1T.remove(j);
            Deck.i2Cards--;
        }
    }
    for (var j = 0; j< Deck.Cards0T.length; j++) {
        if (Deck.Cards0T[j].iArrayIndex == ID)
        {
            Deck.Cards0T.remove(j);
            Deck.i1Cards--;
        }
    }
    GUIDisplay();
    DeckExport();
}
