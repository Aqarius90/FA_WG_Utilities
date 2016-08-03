function  DeckAssembly()
{
    /*MainDB MainCardDatabase = new MainDB();
    Dictionaries Dicts = new Dictionaries();*/
    this.sSide = "NONE";
    this.iSide =0;
    this.sNation = "NONE";
    this.iNation = 0;
    this.sSpec = "NONE";
    this.iSpec =0;
    this.sEra = "NONE";
    this.iEra = 0;
    this.i3Cards = 0;
    this.i2Cards = 0;
    this.i1Cards = 0;
    this.iSide = 0;
    this.Cards0T = [];
    this.Cards1T = [];
    this.Cards2T = [];
    this.deckpoints = 0;
    this.deckpoitstotal = 45;
    /*var List<VehicleCard> LOG = new List<VehicleCard>();
    var List<VehicleCard> INF = new List<VehicleCard>();
    var List<VehicleCard> SUP = new List<VehicleCard>();
    var List<VehicleCard> TNK = new List<VehicleCard>();
    var List<VehicleCard> REC = new List<VehicleCard>();
    var List<VehicleCard> VEH = new List<VehicleCard>();
    var List<VehicleCard> HEL = new List<VehicleCard>();
    var List<VehicleCard> AIR = new List<VehicleCard>();
    var List<VehicleCard> NAV = new List<VehicleCard>();
    var Weapon ""Weapon = new Weapon(0, 0, 0, 0, 0, 0, 0, "", 0, "", "", "NONE"); //???*/
}


function DeckDisAssembly()
{
  var binoutdebug = "NONE";
  decodeDeck(sDeckString.value)
  //main caller for decoding
}
      //on exit, cards 0,1,2T are populated.
      //  #region deckstring=>deck
function decodeDeck (deckCode)
{
    /*for (var i = 0; i < 72; i++)
    {
        Cards0T[i] = "";
        Cards1T[i] = "";
        Cards2T[i] = "";
    }*/
    Deck.i3Cards = 0;
    Deck.i2Cards = 0;
    Deck.i1Cards = 0;
    var deckBinary ="";
    if (deckCode.length < 25 ) { return; }
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
    binoutdebug = deckBinary;
    //DEBUG
    var sDebug = document.getElementById("debug");
    sDebug.innerHTML = binoutdebug;

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

        //DEBUG
    debugHeader();

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
        Deck.Cards2T[i] = new VehicleCard(sVet, Unit, Ifv, Craft);
        Deck.Cards2T[i].Unit.sUnitData = Deck.Cards2T[i].Unit.sUnitData.substr(0, 17)+ "000000001";//is not regular inf
        //Cards2T[i] = toGen(Cards2T[i]);   <<TO IMPLEMENT LATER
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
        if (Deck.Cards1T[i].Unit.sUnitData.charAt(18) == '1')// if not inf
        {
              Deck.Cards1T[i].Unit.sUnitData = Deck.Cards1T[i].Unit.sUnitData.substr(0, 17)+ "000000001"; // is naval
        };
        //Cards1T[i] = toGen(Cards1T[i]); <<TO IMPLEMENT LATER
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
        //Cards0T[i1Cards] = toGen(Cards0T[i1Cards]); <<TO IMPLEMENT LATER
        Deck.i1Cards++;
    }
    //cardDisplaySort(Cards0T, Cards1T, Cards2T);
    debugUnitsOut();
}

/*
        private void cardDisplaySort(VehicleCard[] c0T, VehicleCard[] c1T, VehicleCard[] c2T)
        {
            LOG.Clear();
            INF.Clear();
            SUP.Clear();
            TNK.Clear();
            REC.Clear();
            VEH.Clear();
            HEL.Clear();
            AIR.Clear();
            NAV.Clear();
            foreach (VehicleCard Card in c2T)
            {
                if (Card != "")
                {
                    if (Card.Unit.caUnitData[25] == '1')
                    {
                        NAV.Add(Card);
                    }
                }
            }

            foreach (VehicleCard Card in c1T)
            {
                if (Card != "")
                {

                    if (Card.Unit.caUnitData[17] == '1')//logi
                    {
                        LOG.Add(Card);
                    }
                    else if (Card.Unit.caUnitData[18] == '1') // INF
                    {
                        INF.Add(Card);
                    }
                    else if (Card.Unit.caUnitData[19] == '1') // support
                    {
                        SUP.Add(Card);
                    }
                    else if (Card.Unit.caUnitData[20] == '1') // tanks
                    {
                        TNK.Add(Card);
                    }
                    else if (Card.Unit.caUnitData[21] == '1')
                    {
                        REC.Add(Card);
                    }
                    else if (Card.Unit.caUnitData[22] == '1')
                    {
                        VEH.Add(Card);
                    }
                    else if (Card.Unit.caUnitData[23] == '1')
                    {
                        HEL.Add(Card);
                    }
                    else if (Card.Unit.caUnitData[24] == '1')
                    {
                        AIR.Add(Card);
                    }
                    else if (Card.Unit.caUnitData[25] == '1')
                    {
                        NAV.Add(Card);
                    }
                }
            }
            foreach (VehicleCard Card in c0T)
            {
                if (Card != "")
                {

                    if (Card.Unit.caUnitData[17] == '1')//logi
                    {
                        LOG.Add(Card);
                    }
                    else if (Card.Unit.caUnitData[18] == '1') // INF
                    {
                        INF.Add(Card);
                    }
                    else if (Card.Unit.caUnitData[19] == '1') // support
                    {
                        SUP.Add(Card);
                    }
                    else if (Card.Unit.caUnitData[20] == '1') // tanks
                    {
                        TNK.Add(Card);
                    }
                    else if (Card.Unit.caUnitData[21] == '1')
                    {
                        REC.Add(Card);
                    }
                    else if (Card.Unit.caUnitData[22] == '1')
                    {
                        VEH.Add(Card);
                    }
                    else if (Card.Unit.caUnitData[23] == '1')
                    {
                        HEL.Add(Card);
                    }
                    else if (Card.Unit.caUnitData[24] == '1')
                    {
                        AIR.Add(Card);
                    }
                    else if (Card.Unit.caUnitData[25] == '1')
                    {
                        NAV.Add(Card);
                    }
                }
            }
        }
          */
        /*
        //deck decoding
        public var DeckExport(DeckDisAssembly currentDeck)
        {
            List<char> lcDeckChar = new List<char>();

            var key = Dicts.NATlook.FirstOrDefault(x => x.Value == currentDeck.sNation).Key;
            var sUtil = Convert.ToString(key, 2);
            sUtil = sUtil.PadLeft(9, '0');
            char[] caUtil= sUtil.ToCharArray();
            for (var i = 0; i < 9; i++)
            {
                lcDeckChar.Add(caUtil[i]);
            }

            key = Dicts.SPClook.FirstOrDefault(x => x.Value == currentDeck.sSpec).Key;
            sUtil = Convert.ToString(key, 2);
            sUtil = sUtil.PadLeft(3, '0');
            caUtil = sUtil.ToCharArray();
            for (var i = 0; i < 3; i++)
            {
                lcDeckChar.Add(caUtil[i]);
            }

            key = Dicts.ERAlook.FirstOrDefault(x => x.Value == currentDeck.sEra).Key;
            sUtil = Convert.ToString(key, 2);
            sUtil = sUtil.PadLeft(2, '0');
            caUtil = sUtil.ToCharArray();
            for (var i = 0; i < 2; i++)
            {
                lcDeckChar.Add(caUtil[i]);
            }

            sUtil = Convert.ToString(currentDeck.i3Cards, 2);
            sUtil = sUtil.PadLeft(4, '0');
            caUtil = sUtil.ToCharArray();
            for (var i = 0; i < 4; i++)
            {
                lcDeckChar.Add(caUtil[i]);
            }

            sUtil = Convert.ToString(currentDeck.i2Cards, 2);
            sUtil = sUtil.PadLeft(5, '0');
            caUtil = sUtil.ToCharArray();
            for (var i = 0; i < 5; i++)
            {
                lcDeckChar.Add(caUtil[i]);
            }

            foreach (VehicleCard CA in currentDeck.Cards2T)
            {
                if (CA != "")
                {
                    caUtil = CA.sVeterancy.ToCharArray();
                    for (var i = 0; i < 3; i++)
                    {
                        lcDeckChar.Add(caUtil[i]);
                    }

                    sUtil = Convert.ToString(CA.Unit.iUnitID,2);
                    sUtil = sUtil.PadLeft(10, '0');
                    caUtil = sUtil.ToCharArray();
                    for (var i = 0; i < 10; i++)
                    {
                        lcDeckChar.Add(caUtil[i]);
                    }

                    sUtil = Convert.ToString(CA.Transport.iUnitID, 2);
                    sUtil = sUtil.PadLeft(10, '0');
                    caUtil = sUtil.ToCharArray();
                    for (var i = 0; i < 10; i++)
                    {
                        lcDeckChar.Add(caUtil[i]);
                    }

                    sUtil = Convert.ToString(CA.Craft.iUnitID, 2);
                    sUtil = sUtil.PadLeft(10, '0');
                    caUtil = sUtil.ToCharArray();
                    for (var i = 0; i < 10; i++)
                    {
                        lcDeckChar.Add(caUtil[i]);
                    }
                }
            }

            foreach (VehicleCard CA in currentDeck.Cards1T)
            {
                if (CA != "")
                {
                    caUtil = CA.sVeterancy.ToCharArray();
                    for (var i = 0; i < 3; i++)
                    {
                        lcDeckChar.Add(caUtil[i]);
                    }

                    sUtil = Convert.ToString(CA.Unit.iUnitID, 2);
                    sUtil = sUtil.PadLeft(10, '0');
                    caUtil = sUtil.ToCharArray();
                    for (var i = 0; i < 10; i++)
                    {
                        lcDeckChar.Add(caUtil[i]);
                    }

                    sUtil = Convert.ToString(CA.Transport.iUnitID, 2);
                    sUtil = sUtil.PadLeft(10, '0');
                    caUtil = sUtil.ToCharArray();
                    for (var i = 0; i < 10; i++)
                    {
                        lcDeckChar.Add(caUtil[i]);
                    }
                }
            }

            foreach (VehicleCard CA in currentDeck.Cards0T)
            {
                if (CA != "")
                {
                    caUtil = CA.sVeterancy.ToCharArray();
                    for (var i = 0; i < 3; i++)
                    {
                        lcDeckChar.Add(caUtil[i]);
                    }

                    sUtil = Convert.ToString(CA.Unit.iUnitID, 2);
                    sUtil = sUtil.PadLeft(10, '0');
                    caUtil = sUtil.ToCharArray();
                    for (var i = 0; i < 10; i++)
                    {
                        lcDeckChar.Add(caUtil[i]);
                    }
                }
            }

            return Dicts.lookupB36(lcDeckChar.ToArray());


        }
		*/
/*
        public void CardDelete(var ID)
        {
            for (var j = 0; j < 71; j++)
            {
                if (Cards0T[j] != "" && Cards0T[j].iArrayIndex == ID)
                {
                    for (var i = j; i < 71; i++)
                    {
                        Cards0T[i] = Cards0T[i + 1];
                    }
                    i1Cards--;
                }
                else if (Cards1T[j] != "" && Cards1T[j].iArrayIndex == ID)
                {
                    for (var i = j; i < 71; i++)
                    {
                        Cards1T[i] = Cards1T[i + 1];
                    }
                    i2Cards--;
                }
            }
            cardDisplaySort(Cards0T, Cards1T, Cards2T);
        }
		*/
/*
        public void AddCard(var Vet, var UID, var TID = 0, var CID = 0)
        {
            Datacard unit = MainCardDatabase.dbQuery(UID, iSide);
            if (TID != 0)
            {
                Datacard carrier = MainCardDatabase.dbQuery(TID, iSide);
                VehicleCard newcard = new VehicleCard(unit, carrier);
                newcard.sVeterancy = Vet;
                newcard.iVet = Convert.ToInt32(newcard.sVeterancy, 2);
                newcard = toGen(newcard);
                Cards1T[i2Cards] = newcard;
                i2Cards++;
            }
            else
            {
                VehicleCard newcard = new VehicleCard(unit);
                newcard.sVeterancy = Vet.ToString();
                newcard.iVet = Convert.ToInt32(newcard.sVeterancy, 2);
                newcard = toGen(newcard);
                Cards0T[i1Cards] = newcard;
                i1Cards++;
            }
            cardDisplaySort(Cards0T, Cards1T, Cards2T);
        }
*/
/*
        VehicleCard toGen(VehicleCard x)
        {
            char[] caData = x.Unit.caUnitData;
            if (caData[4] == '0')
            {
                if (caData[18] == '1') // INF
                {
                    if (sSpec == "MOTO" || sSpec == "MECH" || sSpec == "MAR" || sSpec == "AIR")
                    {
                        x.iVet--;
                    }
                }
                else if (caData[19] == '1') // support
                {
                    if (sSpec == "SUP")
                    {
                        x.iVet--;
                    }
                }
                else if (caData[20] == '1') // tanks
                {
                    if (sSpec == "ARM")
                    {
                        x.iVet--;
                        x.iVet--;
                    }
                }
                else if (caData[21] == '1')
                {
                    if (sSpec == "MOTO")
                    {
                        x.iVet--;
                    }
                }
                else if (caData[22] == '1')
                {
                    if (sSpec == "MECH" || sSpec == "MOTO")
                    {
                        x.iVet--;
                    }
                }
                else if (caData[23] == '1')
                {
                    if (sSpec == "AIR")
                    {
                        x.iVet--;
                    }
                }
                else if (caData[24] == '1')
                {
                    if (sSpec == "MAR" || sSpec == "AIR")
                    {
                        x.iVet--;
                    }
                }
            }
            return x;
        }
*/
