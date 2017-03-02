function GUIDisplay() { // sets header, displays deck data, encodes deck.
console.log("start GUI refresh");
    Deck.deckpoints = 0;
    Deck.deckpoitstotal = 45;
    //nation
    refreshFlags(); // also sets nation-relevant labels and deck data
    deckExport();

    //spec
    var Buttons = ractiveHeader.get('Buttons');
    var headers = ractiveDeck.get('headers');
    var ranks = ractiveDeck.get('ranks');
    switch (Deck.iSpec) {
    case 0://moto
        Buttons.bMarine = '#fff';
        Buttons.bAirborne = '#fff';
        Buttons.bMechanized = '#fff';
        Buttons.bArmoured = '#fff';
        Buttons.bMotorized = '#0f0';
        Buttons.bSupport = '#fff';
        Buttons.bNaval = '#fff';
        Buttons.bGeneral = '#fff';
        ractiveHeader.update('Buttons');
        //ractiveHeader.set("lab.tspec", "+2 cards, +1XP, -1 cost: Infantry, Recon, Vehicle");
        headers.logi = 'Logistics';
        headers.infa = 'Infantry (+1)';
        headers.supo = "Support";
        headers.tank = "Tank";
        headers.reco = "Recon (+1)";
        headers.vehi = "Vehicle (+1)";
        headers.helo = "Helicopter";
        headers.airp = "Air";
        headers.nava = "Naval";
        ractiveDeck.update('headers');/*
        ranks.inf.R0 = 'r001';
        ranks.inf.R1 = 'r010';
        ranks.inf.R2 = 'r011';
        ranks.inf.R3 = 'r100';
        ranks.rec.R0 = 'r001';
        ranks.rec.R1 = 'r010';
        ranks.rec.R2 = 'r011';
        ranks.rec.R3 = 'r100';
        ranks.veh.R0 = 'r001';
        ranks.veh.R1 = 'r010';
        ranks.veh.R2 = 'r011';
        ranks.veh.R3 = 'r100';*/
        ractiveDeck.update('ranks');
        break;
    case 1://arm
            Buttons.bMarine = '#fff';
            Buttons.bAirborne = '#fff';
            Buttons.bMechanized = '#fff';
            Buttons.bArmoured = '#0f0';
            Buttons.bMotorized = '#fff';
            Buttons.bSupport = '#fff';
            Buttons.bNaval = '#fff';
            Buttons.bGeneral = '#fff';
            ractiveHeader.update('Buttons');
            //ractiveHeader.set("lab.tspec", "+4 cards, +2XP, -1 cost: Tank");
            headers.logi = 'Logistics';
            headers.infa = 'Infantry';
            headers.supo = "Support";
            headers.tank = "Tank (+2)";
            headers.reco = "Recon";
            headers.vehi = "Vehicle";
            headers.helo = "Helicopter";
            headers.airp = "Air";
            headers.nava = "Naval";
            ractiveDeck.update('headers');/*
            ranks.tnk.R0 = 'r010';
            ranks.tnk.R1 = 'r011';
            ranks.tnk.R2 = 'r100';
            ranks.tnk.R3 = 'r100';*/
            ractiveDeck.update('ranks');
            break;
        case 2://sup
            Buttons.bMarine = '#fff';
            Buttons.bAirborne = '#fff';
            Buttons.bMechanized = '#fff';
            Buttons.bArmoured = '#fff';
            Buttons.bMotorized = '#fff';
            Buttons.bSupport = '#0f0';
            Buttons.bNaval = '#fff';
            Buttons.bGeneral = '#fff';
            ractiveHeader.update('Buttons');
            //ractiveHeader.set("lab.tspec", "+4 cards,-1 cost: Logistics, Support;  +1XP: Support");
            headers.logi = 'Logistics (+1)';
            headers.infa = 'Infantry';
            headers.supo = "Support (+1)";
            headers.tank = "Tank";
            headers.reco = "Recon";
            headers.vehi = "Vehicle";
            headers.helo = "Helicopter";
            headers.airp = "Air";
            headers.nava = "Naval";
            ractiveDeck.update('headers');/*
            ranks.sup.R0 = 'r001';
            ranks.sup.R1 = 'r010';
            ranks.sup.R2 = 'r011';
            ranks.sup.R3 = 'r100';*/
            ractiveDeck.update('ranks');
            break;
        case 3://mar
            Buttons.bMarine = '#0f0';
            Buttons.bAirborne = '#fff';
            Buttons.bMechanized = '#fff';
            Buttons.bArmoured = '#fff';
            Buttons.bMotorized = '#fff';
            Buttons.bSupport = '#fff';
            Buttons.bNaval = '#fff';
            Buttons.bGeneral = '#fff';
            ractiveHeader.update('Buttons');
            //ractiveHeader.set("lab.tspec", "+2 cards, +1XP, -1 cost: Infantry, Plane; +3 cards Naval");  //DEBUG +xp naval?
            headers.logi = 'Logistics';
            headers.infa = 'Infantry (+1)';
            headers.supo = "Support";
            headers.tank = "Tank";
            headers.reco = "Recon";
            headers.vehi = "Vehicle";
            headers.helo = "Helicopter";
            headers.airp = "Air (+1)";
            headers.nava = "Naval";
            ractiveDeck.update('headers');/*
            ranks.inf.R0 = 'r001';
            ranks.inf.R1 = 'r010';
            ranks.inf.R2 = 'r011';
            ranks.inf.R3 = 'r100';
            ranks.air.R0 = 'r001';
            ranks.air.R1 = 'r010';
            ranks.air.R2 = 'r011';
            ranks.air.R3 = 'r100';*/
            ractiveDeck.update('ranks');
            break;
        case 4://mec
            Buttons.bMarine = '#fff';
            Buttons.bAirborne = '#fff';
            Buttons.bMechanized = '#0f0';
            Buttons.bArmoured = '#fff';
            Buttons.bMotorized = '#fff';
            Buttons.bSupport = '#fff';
            Buttons.bNaval = '#fff';
            Buttons.bGeneral = '#fff';
            ractiveHeader.update('Buttons');
            //ractiveHeader.set("lab.tspec", "+4 cards, +1XP, -1 cost: Infantry, Vehicle");
            headers.logi = 'Logistics';
            headers.infa = 'Infantry (+1)';
            headers.supo = "Support";
            headers.tank = "Tank";
            headers.reco = "Recon";
            headers.vehi = "Vehicle (+1)";
            headers.helo = "Helicopter";
            headers.airp = "Air";
            headers.nava = "Naval";
            ractiveDeck.update('headers');/*
            ranks.inf.R0 = 'r001';
            ranks.inf.R1 = 'r010';
            ranks.inf.R2 = 'r011';
            ranks.inf.R3 = 'r100';
            ranks.veh.R0 = 'r001';
            ranks.veh.R1 = 'r010';
            ranks.veh.R2 = 'r011';
            ranks.veh.R3 = 'r100';*/
            ractiveDeck.update('ranks');
            break;
        case 5://air
            Buttons.bMarine = '#fff';
            Buttons.bAirborne = '#0f0';
            Buttons.bMechanized = '#fff';
            Buttons.bArmoured = '#fff';
            Buttons.bMotorized = '#fff';
            Buttons.bSupport = '#fff';
            Buttons.bNaval = '#fff';
            Buttons.bGeneral = '#fff';
            ractiveHeader.update('Buttons');
            //ractiveHeader.set("lab.tspec", "+4 cards, +1XP, -1 cost: Infantry, Helicopter, Airplane");
            headers.logi = 'Logistics';
            headers.infa = 'Infantry (+1)';
            headers.supo = "Support";
            headers.tank = "Tank";
            headers.reco = "Recon";
            headers.vehi = "Vehicle";
            headers.helo = "Helicopter (+1)";
            headers.airp = "Air (+1)";
            headers.nava = "Naval";
            ractiveDeck.update('headers');/*
            ranks.inf.R0 = 'r001';
            ranks.inf.R1 = 'r010';
            ranks.inf.R2 = 'r011';
            ranks.inf.R3 = 'r100';
            ranks.hel.R0 = 'r001';
            ranks.hel.R1 = 'r010';
            ranks.hel.R2 = 'r011';
            ranks.hel.R3 = 'r100';
            ranks.air.R0 = 'r001';
            ranks.air.R1 = 'r010';
            ranks.air.R2 = 'r011';
            ranks.air.R3 = 'r100';*/
            ractiveDeck.update('ranks');
            break;
        case 6://nav
            Buttons.bMarine = '#fff';
            Buttons.bAirborne = '#fff';
            Buttons.bMechanized = '#fff';
            Buttons.bArmoured = '#fff';
            Buttons.bMotorized = '#fff';
            Buttons.bSupport = '#fff';
            Buttons.bNaval = '#0f0';
            Buttons.bGeneral = '#fff';
            ractiveHeader.update('Buttons');
            //ractiveHeader.set("lab.tspec", "ಠ_ಠ");
            headers.logi = 'Logistics';
            headers.infa = 'Infantry';
            headers.supo = "Support";
            headers.tank = "Tank";
            headers.reco = "Recon";
            headers.vehi = "Vehicle";
            headers.helo = "Helicopter";
            headers.airp = "Air";
            headers.nava = "Naval";
            ractiveDeck.update('headers');
            break;
        case 7://gen
            Buttons.bMarine = '#fff';
            Buttons.bAirborne = '#fff';
            Buttons.bMechanized = '#fff';
            Buttons.bArmoured = '#fff';
            Buttons.bMotorized = '#fff';
            Buttons.bSupport = '#fff';
            Buttons.bNaval = '#fff';
            Buttons.bGeneral = '#0f0';
            ractiveHeader.update('Buttons');
            //ractiveHeader.set("lab.tspec", "no bonus");
            headers.logi = 'Logistics';
            headers.infa = 'Infantry';
            headers.supo = "Support";
            headers.tank = "Tank";
            headers.reco = "Recon";
            headers.vehi = "Vehicle";
            headers.helo = "Helicopter";
            headers.airp = "Air";
            headers.nava = "Naval";
            ractiveDeck.update('headers');/*
            ranks.R0 = 'r000';
            ranks.R1 = 'r001';
            ranks.R2 = 'r010';
            ranks.R3 = 'r011';
            ranks.R4 = 'r100';*/
            ractiveDeck.update('ranks');

            break;
    }
    switch (Deck.iEra)
    {
        case 0://C
            Buttons.bC = '#0f0';
            Buttons.bB = '#fff';
            Buttons.bA = '#fff';
            ractiveHeader.update('Buttons');
            ractiveHeader.set("lab.tera", "+10AP");
            Deck.deckpoitstotal += 10;
            break;
        case 1://B
            Buttons.bC = '#fff';
            Buttons.bB = '#0f0';
            Buttons.bA = '#fff';
            ractiveHeader.update('Buttons');
            ractiveHeader.set("lab.tera", "+5AP");
            Deck.deckpoitstotal += 5;
            break;
        case 2://A
            Buttons.bC = '#fff';
            Buttons.bB = '#fff';
            Buttons.bA = '#0f0';
            ractiveHeader.update('Buttons');
            ractiveHeader.set("lab.tera", "+0AP");
            break;
    }
    //displayUnits();
    ractiveHeader.set("lab.pointstally", Deck.deckpoints + "/" + Deck.deckpoitstotal);
    console.log("end GUI refresh");
}

function refreshFlags(){
    var Flags = ractiveHeader.get('flags');
    //all to gray, then reenable selectively
        Flags.NATO = "xNATO";
        Flags.REDFOR = "xREDFOR";
        Flags.BD = "xBD";
        Flags.COM = "xCOM";
        Flags.EU = "xEU";
        Flags.LJ = "xLJ";
        Flags.NORAD = "xNORAD";
        Flags.SCA = "xSCA";
        Flags.NSWP = "xNSWP";
        Flags.RD  = "xRD";
        Flags.ANZAC = "xANZAC";
        Flags.BRD = "xBRD";
        Flags.CAN = "xCAN";
        Flags.DEN = "xDEN";
        Flags.FRA = "xFRA";
        Flags.JAP = "xJAP";
        Flags.NED = "xNED";
        Flags.NOR = "xNOR";
        Flags.ROK = "xROK";
        Flags.SWE = "xSWE";
        Flags.UK = "xUK";
        Flags.USA = "xUSA";
        Flags.CZS = "xCZS";
        Flags.DDR = "xDDR";
        Flags.DPRK = "xDPRK";
        Flags.POL = "xPOL";
        Flags.PRC = "xPRC";
        Flags.USSR = "xUSSR";
        Flags.BRDNL = "xBRDNL";
        Flags.FIN  = "xFIN";
        Flags.YU = "xYU";
        Flags.ISR  = "xISR";
        Flags.FINPL = "xFINPL";
        Flags.YUCZE  = "xYUCZE";

    if (Deck.sNation == "NONE"){
        Flags.NATO = "NATO";
        Flags.REDFOR = "REDFOR";
        Flags.BD = "BD";
        Flags.COM = "COM";
        Flags.EU = "EU";
        Flags.LJ = "LJ";
        Flags.NORAD = "NORAD";
        Flags.SCA = "SCA";
        Flags.NSWP = "NSWP";
        Flags.RD  = "RD";
        Flags.ANZAC = "ANZAC";
        Flags.BRD = "BRD";
        Flags.CAN = "CAN";
        Flags.DEN = "DEN";
        Flags.FRA = "FRA";
        Flags.JAP = "JAP";
        Flags.NED = "NED";
        Flags.NOR = "NOR";
        Flags.ROK = "ROK";
        Flags.SWE = "SWE";
        Flags.UK = "UK";
        Flags.USA = "USA";
        Flags.CZS = "CZS";
        Flags.DDR = "DDR";
        Flags.DPRK = "DPRK";
        Flags.POL = "POL";
        Flags.PRC = "PRC";
        Flags.USSR = "USSR";
        Flags.BRDNL = "BRDNL";
        Flags.FIN  = "FIN";
        Flags.YU = "YU";
        Flags.ISR  = "ISR";
        Flags.FINPL = "FINPL";
        Flags.YUCZE  = "YUCZE";
    }

    else if (Deck.sNation == "ANZAC"){
        Flags.ANZAC = "ANZAC";
        ractiveHeader.set("lab.tnation", "+30%, +15AP");
        Deck.availQotient = 30;
        Deck.deckpoitstotal += 15;
    }
    else if (Deck.sNation == "Canada"){
        Flags.CAN = "CAN";
        ractiveHeader.set("lab.tnation", "+40%, +15AP");
        Deck.availQotient = 40;
        Deck.deckpoitstotal += 15;
    }
    else if (Deck.sNation == "China"){
        Flags.PRC = "PRC";
        ractiveHeader.set("lab.tnation", "+30%, +15AP");
        Deck.availQotient = 30;
        Deck.deckpoitstotal += 15;
    }
    else if (Deck.sNation == "Czechoslavakia"){
        Flags.CZS = "CZS";
        ractiveHeader.set("lab.tnation", "+30%, +15AP");
        Deck.availQotient = 30;
        Deck.deckpoitstotal += 15;
    }
    else if (Deck.sNation == "Denmark"){
        Flags.DEN = "DEN";
        ractiveHeader.set("lab.tnation", "+40%, +15AP");
        Deck.availQotient = 40;
        Deck.deckpoitstotal += 15;
    }
    else if (Deck.sNation == "East Germany"){
        Flags.DDR = "DDR";
        ractiveHeader.set("lab.tnation", "+20%, +15AP");
        Deck.availQotient = 20;
        Deck.deckpoitstotal += 15;
    }
    else if (Deck.sNation == "Finland"){
        Flags.FIN  = "FIN";
        ractiveHeader.set("lab.tnation", "+20%, +15AP");
        Deck.availQotient = 20;
        Deck.deckpoitstotal += 15;
    }
    else if (Deck.sNation == "France"){
        Flags.FRA = "FRA";
        ractiveHeader.set("lab.tnation", "+20%, +15AP");
        Deck.availQotient = 20;
        Deck.deckpoitstotal += 15;
    }
    else if (Deck.sNation == "Israel"){
        Flags.ISR  = "ISR";
        ractiveHeader.set("lab.tnation", "+10%, +15AP");
        Deck.availQotient = 10;
        Deck.deckpoitstotal += 15;
    }
    else if (Deck.sNation == "Japan"){
        Flags.JAP = "JAP";
        ractiveHeader.set("lab.tnation", "+30%, +15AP");
        Deck.availQotient = 30;
        Deck.deckpoitstotal += 15;
    }
    else if (Deck.sNation == "North Korea"){
        Flags.DPRK = "DPRK";
        ractiveHeader.set("lab.tnation", "+40%, +15AP");
        Deck.availQotient = 40;
        Deck.deckpoitstotal += 15;
    }
    else if (Deck.sNation == "Norway"){
        Flags.NOR = "NOR";
        ractiveHeader.set("lab.tnation", "+40%, +15AP");
        Deck.availQotient = 40;
        Deck.deckpoitstotal += 15;
    }
    else if (Deck.sNation == "Poland"){
        Flags.POL = "POL";
        ractiveHeader.set("lab.tnation", "+20%, +15AP");
        Deck.availQotient = 20;
        Deck.deckpoitstotal += 15;
    }
    else if (Deck.sNation == "South Korea"){
        Flags.ROK = "ROK";
        ractiveHeader.set("lab.tnation", "+30%, +15AP");
        Deck.availQotient = 30;
        Deck.deckpoitstotal += 15;
    }
    else if (Deck.sNation == "Soviet Union"){
        Flags.USSR = "USSR";
        ractiveHeader.set("lab.tnation", "+10%, +15AP");
        Deck.availQotient = 10;
        Deck.deckpoitstotal += 15;
    }
    else if (Deck.sNation == "Sweden"){
        Flags.SWE = "SWE";
        ractiveHeader.set("lab.tnation", "+30%, +15AP");
        Deck.availQotient = 30;
        Deck.deckpoitstotal += 15;
    }
    else if (Deck.sNation == "The Netherlands"){
        Flags.NED = "NED";
        ractiveHeader.set("lab.tnation", "+20%, +15AP");
        Deck.availQotient = 20;
        Deck.deckpoitstotal += 15;
    }
    else if (Deck.sNation == "United Kingdom"){
        Flags.UK = "UK";
        ractiveHeader.set("lab.tnation", "+20%, +15AP");
        Deck.availQotient = 20;
        Deck.deckpoitstotal += 15;
    }
    else if (Deck.sNation == "United States"){
        Flags.USA = "USA";
        ractiveHeader.set("lab.tnation", "+10%, +15AP");
        Deck.availQotient = 10;
        Deck.deckpoitstotal += 15;
    }
    else if (Deck.sNation == "West Germany"){
        Flags.BRD = "BRD";
        ractiveHeader.set("lab.tnation", "+20%, +15AP");
        Deck.availQotient = 20;
        Deck.deckpoitstotal += 15;
    }
    else if (Deck.sNation == "Yugoslavia"){
        Flags.YU = "YU";
        ractiveHeader.set("lab.tnation", "+15%, +15AP");
        Deck.availQotient = 15;
        Deck.deckpoitstotal += 15;
    }

    else if (Deck.sNation == "NATO"){
        Flags.NATO = "NATO";
        Flags.BD = "BD";
        Flags.COM = "COM";
        Flags.EU = "EU";
        Flags.LJ = "LJ";
        Flags.NORAD = "NORAD";
        Flags.SCA = "SCA";
        Flags.ANZAC = "ANZAC";
        Flags.BRD = "BRD";
        Flags.CAN = "CAN";
        Flags.DEN = "DEN";
        Flags.FRA = "FRA";
        Flags.JAP = "JAP";
        Flags.NED = "NED";
        Flags.NOR = "NOR";
        Flags.ROK = "ROK";
        Flags.SWE = "SWE";
        Flags.UK = "UK";
        Flags.USA = "USA";
        Flags.BRDNL = "BRDNL";
        Flags.ISR  = "ISR";
        ractiveHeader.set("lab.tnation", "No bonus");
        Deck.availQotient = 0;
    }
    else if (Deck.sNation == "REDFOR"){
        Flags.REDFOR = "REDFOR";
        Flags.NSWP = "NSWP";
        Flags.RD  = "RD";
        Flags.CZS = "CZS";
        Flags.DDR = "DDR";
        Flags.DPRK = "DPRK";
        Flags.POL = "POL";
        Flags.PRC = "PRC";
        Flags.USSR = "USSR";
        Flags.FIN  = "FIN";
        Flags.YU = "YU";
        Flags.FINPL = "FINPL";
        Flags.YUCZE  = "YUCZE";
        ractiveHeader.set("lab.tnation", "No bonus");
        Deck.availQotient = 0;
    }
    else if (Deck.sNation == "BD"){
        Flags.BD = "BD";
        Flags.JAP = "JAP";
        Flags.ROK = "ROK";
        ractiveHeader.set("lab.tnation", "+20%, +10AP");
        Deck.availQotient = 20;
        Deck.deckpoitstotal += 10;
    }
    else if (Deck.sNation == "COM"){
        Flags.COM = "COM";
        Flags.ANZAC = "ANZAC";
        Flags.CAN = "CAN";
        Flags.UK = "UK";
        ractiveHeader.set("lab.tnation", "+0%, +10AP");
        Deck.availQotient = 0;
        Deck.deckpoitstotal += 10;
    }
    else if (Deck.sNation == "EU"){
        Flags.EU = "EU";
        Flags.BRD = "BRD";
        Flags.FRA = "FRA";
        ractiveHeader.set("lab.tnation", "+0%, +10AP");
        Deck.availQotient = 0;
        Deck.deckpoitstotal += 10;
    }
    else if (Deck.sNation == "LJ"){
        Flags.LJ = "LJ";
        Flags.BRD = "BRD";
        Flags.DEN = "DEN";
        ractiveHeader.set("lab.tnation", "+15%, +10AP");
        Deck.availQotient = 15;
        Deck.deckpoitstotal += 10;
    }
    else if (Deck.sNation == "NORAD"){
        Flags.NORAD = "NORAD";
        Flags.CAN = "CAN";
        Flags.USA = "USA";
        ractiveHeader.set("lab.tnation", "+0%, +10AP");
        Deck.availQotient = 0;
        Deck.deckpoitstotal += 10;
    }
    else if (Deck.sNation == "SCA"){
        Flags.SCA = "SCA";
        Flags.DEN = "DEN";
        Flags.NOR = "NOR";
        Flags.SWE = "SWE";
        ractiveHeader.set("lab.tnation", "+15%, +10AP");
        Deck.availQotient = 15;
        Deck.deckpoitstotal += 10;
    }
    else if (Deck.sNation == "NSWP"){
        Flags.NSWP = "NSWP";
        Flags.CZS = "CZS";
        Flags.DDR = "DDR";
        Flags.POL = "POL";
        ractiveHeader.set("lab.tnation", "+0%, +10AP");
        Deck.availQotient = 0;
        Deck.deckpoitstotal += 10;
    }
    else if (Deck.sNation == "RD"){
        Flags.RD  = "RD";
        Flags.DPRK = "DPRK";
        Flags.PRC = "PRC";
        ractiveHeader.set("lab.tnation", "+20%, +10AP");
        Deck.availQotient = 20;
        Deck.deckpoitstotal += 10;
    }
    else if (Deck.sNation == "BRDNL"){
        Flags.BRD = "BRD";
        Flags.NED = "NED";
        ractiveHeader.set("lab.tnation", "+10%, +10AP");
        Deck.availQotient = 10;
        Deck.deckpoitstotal += 10;
    }
    else if (Deck.sNation == "FINPL"){
        Flags.POL = "POL";
        Flags.FIN  = "FIN";
        ractiveHeader.set("lab.tnation", "+10%, +10AP");
        Deck.availQotient = 10;
        Deck.deckpoitstotal += 10;
    }
    else if (Deck.sNation == "YUCZE"){
        Flags.CZS = "CZS";
        Flags.YU = "YU";
        ractiveHeader.set("lab.tnation", "+0%, +10AP");
        Deck.availQotient = 0;
        Deck.deckpoitstotal += 10;
    }
    ractiveHeader.update('Flags');
}

function displayUnits(){

  //DA is a 9x9 array of values for the deck fields.
  var counter = [0,1,1,1,1,1,1,1,1,1];
  var DA = Matrix.general;
  switch (Deck.iSpec)
  {
      case 0:
          DA = Matrix.moto;
          break;
      case 1://arm
          DA = Matrix.armoured;
          break;
      case 2://sup
          DA = Matrix.support;
          break;
      case 3://mar
          DA = Matrix.marine;
          break;
      case 4://mec
          DA = Matrix.mech;
          break;
      case 5://air
          DA = Matrix.airborne;
          break;
      case 6://nav
          DA = Matrix.naval;
          break;
      case 7://gen
          DA = Matrix.general;
          break;
  }
}
