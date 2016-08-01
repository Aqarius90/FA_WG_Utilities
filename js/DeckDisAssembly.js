    function  DeckDisAssembly
    {
        /*MainDB MainCardDatabase = new MainDB();
        Dictionaries Dicts = new Dictionaries();*/

        var sSide = "NONE";
        var sNation = "NONE";
        var sSpec = "NONE";
        var sEra = "NONE";
        var i3Cards = 0;
        var i2Cards = 0;
        var i1Cards = 0;
        var iSide = 0;
        var Cards0T = [];
        var Cards1T = [];
        var Cards2T = [];
        var List<VehicleCard> LOG = new List<VehicleCard>();
        var List<VehicleCard> INF = new List<VehicleCard>();
        var List<VehicleCard> SUP = new List<VehicleCard>();
        var List<VehicleCard> TNK = new List<VehicleCard>();
        var List<VehicleCard> REC = new List<VehicleCard>();
        var List<VehicleCard> VEH = new List<VehicleCard>();
        var List<VehicleCard> HEL = new List<VehicleCard>();
        var List<VehicleCard> AIR = new List<VehicleCard>();
        var List<VehicleCard> NAV = new List<VehicleCard>();
        var Weapon nullWeapon = new Weapon(0, 0, 0, 0, 0, 0, 0, "", 0, "", "", "NONE"); //???

        public DeckDisAssembly()
        {
            //sSide = "BLU";
            //sNation = "NATO";
            sSpec = "GEN";
            sEra = "A";
        }

        public Datacard dbLookup(string sID)
        {
            int ID = Convert.ToInt32(sID);
            return MainCardDatabase.dbQuery(ID, iSide);
        }
        public List<VehicleCard> dbDeckList()
        {
                return MainCardDatabase.dbDeckList(sSide, sNation, sSpec, sEra);
        }
/*
        //on exit, cards 0,1,2T are populated.
        #region deckstring=>deck
        public void decodeDeck (string deckCode)
        {
            for (int i = 0; i < 72; i++)
            {
                Cards0T[i] = null;
                Cards1T[i] = null;
                Cards2T[i] = null;
            }
            i3Cards = 0;
            i2Cards = 0;
            i1Cards = 0;
            if (deckCode == "") { return; }

            char[] caDeckChars = deckCode.ToCharArray(); // deck in base64
            caDeckChars = Dicts.lookupUTF(caDeckChars); // deck in binary char array

            string binoutdebug = null;
            foreach (char x in caDeckChars)
            {
                binoutdebug += x.ToString();
            }
            if (caDeckChars[0] == '0')
            {
                sSide = "BLU";
                iSide = 0;
            }
            else if (caDeckChars[0] == '1')
            {
                sSide = "RED";
                iSide = 1;
            }
            else
            {
                sSide = "INVALID";
                iSide = 2;
            }

            sNation = null;
            for (int i = 0; i <= 8; i++)
            {
                sNation += caDeckChars[i];
            }
            sNation = Dicts.lookupNAT(Convert.ToInt32(sNation, 2));

            sSpec = null;
            for (int i = 9; i <= 11; i++)
            {
                sSpec += caDeckChars[i];
            }
            sSpec = Dicts.lookupSPEC(Convert.ToInt32(sSpec, 2));

            sEra = null;
            for (int i = 12; i <= 13; i++)
            {
                sEra += caDeckChars[i];
            }
            sEra = Dicts.lookupERA(Convert.ToInt32(sEra, 2));

            string s3Count = null;
            for (int i = 14; i <= 17; i++)
            {
                s3Count += caDeckChars[i];
            }
            i3Cards = Convert.ToInt32(s3Count, 2);

            string s2Count = null;
            for (int i = 18; i <= 22; i++)
            {
                s2Count += caDeckChars[i];
            }
            i2Cards = Convert.ToInt32(s2Count, 2);

            int iPC = 23; //pos counter
            for (int i = 0; i < i3Cards; i++) //for each unit
            {
                string sVet = null, sUnit = null, sIFV = null, sCraft = null;
                for (int j = iPC; j <= (iPC + 2); j++) //find vet
                {
                    sVet += caDeckChars[j];
                }
                iPC += 3;
                for (int j = iPC; j <= (iPC + 9); j++) //find unit
                {
                    sUnit += caDeckChars[j];
                }
                iPC += 10;
                for (int j = iPC; j <= (iPC + 9); j++) //find transport
                {
                    sIFV += caDeckChars[j];
                }
                iPC += 10;
                for (int j = iPC; j <= (iPC + 9); j++)  //find ship
                {
                    sCraft += caDeckChars[j];
                }
                iPC += 10;

                Datacard dcUnit = MainCardDatabase.dbQuery(Convert.ToInt32(sUnit, 2), iSide);
                Datacard dcIFV = MainCardDatabase.dbQuery(Convert.ToInt32(sIFV, 2), iSide);
                Datacard dcCraft = MainCardDatabase.dbQuery(Convert.ToInt32(sCraft, 2), iSide);
                VehicleCard vcCard = new VehicleCard(dcUnit, dcIFV, dcCraft);
                Cards2T[i] = vcCard;
                Cards2T[i].sVeterancy = sVet;
                Cards2T[i].iVet = Convert.ToInt32(Cards2T[i].sVeterancy, 2);
                Cards2T[i].Unit.caUnitData[18] = '0'; //is not regular inf
                Cards2T[i].Unit.caUnitData[25] = '1'; // is naval deployed
                Cards2T[i] = toGen(Cards2T[i]);
            }

            for (int i = 0; i < i2Cards; i++)
            {
                string sVet = null, sUnit = null, sIFV = null;
                for (int j = iPC; j <= (iPC + 2); j++)
                {
                    sVet += caDeckChars[j];
                }
                iPC += 3;
                for (int j = iPC; j <= (iPC + 9); j++)
                {
                    sUnit += caDeckChars[j];
                }
                iPC += 10;
                for (int j = iPC; j <= (iPC + 9); j++)
                {
                    sIFV += caDeckChars[j];
                }
                iPC += 10;

                Datacard dcUnit = MainCardDatabase.dbQuery(Convert.ToInt32(sUnit, 2), iSide);
                Datacard dcIFV = MainCardDatabase.dbQuery(Convert.ToInt32(sIFV, 2), iSide);
                VehicleCard vcCard = new VehicleCard(dcUnit, dcIFV);
                Cards1T[i] = vcCard;
                Cards1T[i].sVeterancy = sVet;
                Cards1T[i].iVet = Convert.ToInt32(Cards1T[i].sVeterancy, 2);
                if (Cards1T[i].Unit.caUnitData[18] == '1')// if not inf
                {
                    Cards1T[i].Unit.caUnitData[25] = '1'; // is naval deployed
                };
                Cards1T[i] = toGen(Cards1T[i]);
            }

            int iLenght = caDeckChars.Length - iPC;
            while (iLenght > 12)
            {
                string sVet = null, sUnit = null;
                for (int j = iPC; j <= (iPC + 2); j++)
                {
                    sVet += caDeckChars[j];
                }
                iPC += 3;
                for (int j = iPC; j <= (iPC + 9); j++)
                {
                    sUnit += caDeckChars[j];
                }
                iPC += 10;
                iLenght = caDeckChars.Length - iPC;

                Datacard dcUnit = MainCardDatabase.dbQuery(Convert.ToInt32(sUnit, 2), iSide);
                VehicleCard vcCard = new VehicleCard(dcUnit);
                Cards0T[i1Cards] = vcCard;
                Cards0T[i1Cards].sVeterancy = sVet;
                Cards0T[i1Cards].iVet = Convert.ToInt32(Cards0T[i1Cards].sVeterancy, 2);
                Cards0T[i1Cards] = toGen(Cards0T[i1Cards]);

                i1Cards++;
            }
            cardDisplaySort(Cards0T, Cards1T, Cards2T);
        }*/
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
                if (Card != null)
                {
                    if (Card.Unit.caUnitData[25] == '1')
                    {
                        NAV.Add(Card);
                    }
                }
            }

            foreach (VehicleCard Card in c1T)
            {
                if (Card != null)
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
                if (Card != null)
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
        #endregion deckstring=>deck
        /*
        //deck decoding
        public string DeckExport(DeckDisAssembly currentDeck)
        {
            List<char> lcDeckChar = new List<char>();

            int key = Dicts.NATlook.FirstOrDefault(x => x.Value == currentDeck.sNation).Key;
            string sUtil = Convert.ToString(key, 2);
            sUtil = sUtil.PadLeft(9, '0');
            char[] caUtil= sUtil.ToCharArray();
            for (int i = 0; i < 9; i++)
            {
                lcDeckChar.Add(caUtil[i]);
            }

            key = Dicts.SPClook.FirstOrDefault(x => x.Value == currentDeck.sSpec).Key;
            sUtil = Convert.ToString(key, 2);
            sUtil = sUtil.PadLeft(3, '0');
            caUtil = sUtil.ToCharArray();
            for (int i = 0; i < 3; i++)
            {
                lcDeckChar.Add(caUtil[i]);
            }

            key = Dicts.ERAlook.FirstOrDefault(x => x.Value == currentDeck.sEra).Key;
            sUtil = Convert.ToString(key, 2);
            sUtil = sUtil.PadLeft(2, '0');
            caUtil = sUtil.ToCharArray();
            for (int i = 0; i < 2; i++)
            {
                lcDeckChar.Add(caUtil[i]);
            }

            sUtil = Convert.ToString(currentDeck.i3Cards, 2);
            sUtil = sUtil.PadLeft(4, '0');
            caUtil = sUtil.ToCharArray();
            for (int i = 0; i < 4; i++)
            {
                lcDeckChar.Add(caUtil[i]);
            }

            sUtil = Convert.ToString(currentDeck.i2Cards, 2);
            sUtil = sUtil.PadLeft(5, '0');
            caUtil = sUtil.ToCharArray();
            for (int i = 0; i < 5; i++)
            {
                lcDeckChar.Add(caUtil[i]);
            }

            foreach (VehicleCard CA in currentDeck.Cards2T)
            {
                if (CA != null)
                {
                    caUtil = CA.sVeterancy.ToCharArray();
                    for (int i = 0; i < 3; i++)
                    {
                        lcDeckChar.Add(caUtil[i]);
                    }

                    sUtil = Convert.ToString(CA.Unit.iUnitID,2);
                    sUtil = sUtil.PadLeft(10, '0');
                    caUtil = sUtil.ToCharArray();
                    for (int i = 0; i < 10; i++)
                    {
                        lcDeckChar.Add(caUtil[i]);
                    }

                    sUtil = Convert.ToString(CA.Transport.iUnitID, 2);
                    sUtil = sUtil.PadLeft(10, '0');
                    caUtil = sUtil.ToCharArray();
                    for (int i = 0; i < 10; i++)
                    {
                        lcDeckChar.Add(caUtil[i]);
                    }

                    sUtil = Convert.ToString(CA.Craft.iUnitID, 2);
                    sUtil = sUtil.PadLeft(10, '0');
                    caUtil = sUtil.ToCharArray();
                    for (int i = 0; i < 10; i++)
                    {
                        lcDeckChar.Add(caUtil[i]);
                    }
                }
            }

            foreach (VehicleCard CA in currentDeck.Cards1T)
            {
                if (CA != null)
                {
                    caUtil = CA.sVeterancy.ToCharArray();
                    for (int i = 0; i < 3; i++)
                    {
                        lcDeckChar.Add(caUtil[i]);
                    }

                    sUtil = Convert.ToString(CA.Unit.iUnitID, 2);
                    sUtil = sUtil.PadLeft(10, '0');
                    caUtil = sUtil.ToCharArray();
                    for (int i = 0; i < 10; i++)
                    {
                        lcDeckChar.Add(caUtil[i]);
                    }

                    sUtil = Convert.ToString(CA.Transport.iUnitID, 2);
                    sUtil = sUtil.PadLeft(10, '0');
                    caUtil = sUtil.ToCharArray();
                    for (int i = 0; i < 10; i++)
                    {
                        lcDeckChar.Add(caUtil[i]);
                    }
                }
            }

            foreach (VehicleCard CA in currentDeck.Cards0T)
            {
                if (CA != null)
                {
                    caUtil = CA.sVeterancy.ToCharArray();
                    for (int i = 0; i < 3; i++)
                    {
                        lcDeckChar.Add(caUtil[i]);
                    }

                    sUtil = Convert.ToString(CA.Unit.iUnitID, 2);
                    sUtil = sUtil.PadLeft(10, '0');
                    caUtil = sUtil.ToCharArray();
                    for (int i = 0; i < 10; i++)
                    {
                        lcDeckChar.Add(caUtil[i]);
                    }
                }
            }

            return Dicts.lookupB36(lcDeckChar.ToArray());


        }
		*/
/*
        public void CardDelete(int ID)
        {
            for (int j = 0; j < 71; j++)
            {
                if (Cards0T[j] != null && Cards0T[j].iArrayIndex == ID)
                {
                    for (int i = j; i < 71; i++)
                    {
                        Cards0T[i] = Cards0T[i + 1];
                    }
                    i1Cards--;
                }
                else if (Cards1T[j] != null && Cards1T[j].iArrayIndex == ID)
                {
                    for (int i = j; i < 71; i++)
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
        public void AddCard(string Vet, int UID, int TID = 0, int CID = 0)
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
