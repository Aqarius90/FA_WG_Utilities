function GUIDisplay() {

    Deck.deckpoints = 0;
    Deck.deckpoitstotal = 45;
    //nation
    if (Deck.iNation == "000000001010") { displayUSA(); } else
    if (Deck.iNation == "000000101010") { displayUK(); } else
    if (Deck.iNation == "000001001010") { displayFRA(); } else
    if (Deck.iNation == "000001101010") { displayBRD(); } else
    if (Deck.iNation == "000010001010") { displayCAN(); } else
    if (Deck.iNation == "000010101010") { displayDEN(); } else
    if (Deck.iNation == "000011001010") { displaySWE(); } else
    if (Deck.iNation == "000011101010") { displayNOR(); } else
    if (Deck.iNation == "000100001010") { displayANZAC(); } else
    if (Deck.iNation == "000100101010") { displayJAP(); } else
    if (Deck.iNation == "000101001010") { displayROK(); } else
    if (Deck.iNation == "000101101010") { displayNED(); } else
    if (Deck.iNation == "000110001010") { displayISR(); } else
    if (Deck.iNation == "000110100000") { displayEU(); } else
    if (Deck.iNation == "000110100001") { displaySCA(); } else
    if (Deck.iNation == "000110100010") { displayCOM(); } else
    if (Deck.iNation == "000110100011") { displayBD(); } else
    if (Deck.iNation == "000110100110") { displayLJ(); } else
    if (Deck.iNation == "000110101000") { displayNORAD(); } else
    if (Deck.iNation == "000110101001") { displayBDRNL(); } else
    if (Deck.iNation == "000110101010") { displayNato(); } else
    if (Deck.iNation == "010000001010") { displayDDR(); } else
    if (Deck.iNation == "010000101010") { displayUSSR(); } else
    if (Deck.iNation == "010001001010") { displayPOL(); } else
    if (Deck.iNation == "010001101010") { displayCZS(); } else
    if (Deck.iNation == "010010001010") { displayPRC(); } else
    if (Deck.iNation == "010010101010") { displayDPRK(); } else
    //if (Deck.iNation == "010011001010") { displayFIN(); } else //enable placeholder
    //if (Deck.iNation == "010011101010") { displayYU(); } else //enable placeholder
    if (Deck.iNation == "010011000100") { displayRD(); } else
    if (Deck.iNation == "010011000101") { displayNSWP(); } else
    if (Deck.iNation == "010011000111") { displayRKA(); } else
    if (Deck.iNation == "010011001010") { displayREDFOR(); } else
    //if (Deck.iNation == "010011001011") { displayFINPL(); } else  //enable placeholder
    //if (Deck.iNation == "010011001100") { displayYUCZE(); } else  //enable placeholder
    { displayBLANK();}

    //spec
    switch (Deck.iSpec)
    {
        case 0://moto
            var Buttons = ractiveHeader.get('Buttons');
            Buttons.bMarine = '#fff';
            Buttons.bAirborne = '#fff';
            Buttons.bMechanized = '#fff';
            Buttons.bArmoured = '#fff';
            Buttons.bMotorized = '#0f0';
            Buttons.bSupport = '#fff';
            Buttons.bNaval = '#fff';
            Buttons.bGeneral = '#fff';
            ractiveHeader.update('Buttons');
            ractiveHeader.set("lab.tspec", "+2 cards, +1XP, -1 cost: Infantry, Recon, Vehicle");
            var ranks = ractiveDeck.get('ranks');
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
            ranks.veh.R3 = 'r100';
            ractiveDeck.update('ranks');
            break;
        case 1://arm
            var Buttons = ractiveHeader.get('Buttons');
            Buttons.bMarine = '#fff';
            Buttons.bAirborne = '#fff';
            Buttons.bMechanized = '#fff';
            Buttons.bArmoured = '#0f0';
            Buttons.bMotorized = '#fff';
            Buttons.bSupport = '#fff';
            Buttons.bNaval = '#fff';
            Buttons.bGeneral = '#fff';
            ractiveHeader.update('Buttons');
            ractiveHeader.set("lab.tspec", "+4 cards, +2XP, -1 cost: Tank");
            var ranks = ractiveDeck.get('ranks');
            ranks.tnk.R0 = 'r010';
            ranks.tnk.R1 = 'r011';
            ranks.tnk.R2 = 'r100';
            ranks.tnk.R3 = 'r100';
            ractiveDeck.update('ranks');
            break;
        case 2://sup
            var Buttons = ractiveHeader.get('Buttons');
            Buttons.bMarine = '#fff';
            Buttons.bAirborne = '#fff';
            Buttons.bMechanized = '#fff';
            Buttons.bArmoured = '#fff';
            Buttons.bMotorized = '#fff';
            Buttons.bSupport = '#0f0';
            Buttons.bNaval = '#fff';
            Buttons.bGeneral = '#fff';
            ractiveHeader.update('Buttons');
            ractiveHeader.set("lab.tspec", "+4 cards,-1 cost: Logistics, Support;  +1XP: Support");
            var ranks = ractiveDeck.get('ranks');
            ranks.sup.R0 = 'r001';
            ranks.sup.R1 = 'r010';
            ranks.sup.R2 = 'r011';
            ranks.sup.R3 = 'r100';
            ractiveDeck.update('ranks');
            break;
        case 3://mar
            var Buttons = ractiveHeader.get('Buttons');
            Buttons.bMarine = '#0f0';
            Buttons.bAirborne = '#fff';
            Buttons.bMechanized = '#fff';
            Buttons.bArmoured = '#fff';
            Buttons.bMotorized = '#fff';
            Buttons.bSupport = '#fff';
            Buttons.bNaval = '#fff';
            Buttons.bGeneral = '#fff';
            ractiveHeader.update('Buttons');
            ractiveHeader.set("lab.tspec", "+2 cards, +1XP, -1 cost: Infantry, Plane; +3 cards Naval");  //DEBUG +xp naval?
            var ranks = ractiveDeck.get('ranks');
            ranks.inf.R0 = 'r001';
            ranks.inf.R1 = 'r010';
            ranks.inf.R2 = 'r011';
            ranks.inf.R3 = 'r100';
            ranks.air.R0 = 'r001';
            ranks.air.R1 = 'r010';
            ranks.air.R2 = 'r011';
            ranks.air.R3 = 'r100';
            ractiveDeck.update('ranks');
            break;
        case 4://mec
            var Buttons = ractiveHeader.get('Buttons');
            Buttons.bMarine = '#fff';
            Buttons.bAirborne = '#fff';
            Buttons.bMechanized = '#0f0';
            Buttons.bArmoured = '#fff';
            Buttons.bMotorized = '#fff';
            Buttons.bSupport = '#fff';
            Buttons.bNaval = '#fff';
            Buttons.bGeneral = '#fff';
            ractiveHeader.update('Buttons');
            ractiveHeader.set("lab.tspec", "+4 cards, +1XP, -1 cost: Infantry, Vehicle");
            var ranks = ractiveDeck.get('ranks');
            ranks.inf.R0 = 'r001';
            ranks.inf.R1 = 'r010';
            ranks.inf.R2 = 'r011';
            ranks.inf.R3 = 'r100';
            ranks.veh.R0 = 'r001';
            ranks.veh.R1 = 'r010';
            ranks.veh.R2 = 'r011';
            ranks.veh.R3 = 'r100';
            ractiveDeck.update('ranks');
            break;
        case 5://air
            var Buttons = ractiveHeader.get('Buttons');
            Buttons.bMarine = '#fff';
            Buttons.bAirborne = '#0f0';
            Buttons.bMechanized = '#fff';
            Buttons.bArmoured = '#fff';
            Buttons.bMotorized = '#fff';
            Buttons.bSupport = '#fff';
            Buttons.bNaval = '#fff';
            Buttons.bGeneral = '#fff';
            ractiveHeader.update('Buttons');
            ractiveHeader.set("lab.tspec", "+4 cards, +1XP, -1 cost: Infantry, Helicopter, Airplane");
            var ranks = ractiveDeck.get('ranks');
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
            ranks.air.R3 = 'r100';
            ractiveDeck.update('ranks');
            break;
        case 6://nav
            var Buttons = ractiveHeader.get('Buttons');
            Buttons.bMarine = '#fff';
            Buttons.bAirborne = '#fff';
            Buttons.bMechanized = '#fff';
            Buttons.bArmoured = '#fff';
            Buttons.bMotorized = '#fff';
            Buttons.bSupport = '#fff';
            Buttons.bNaval = '#0f0';
            Buttons.bGeneral = '#fff';
            ractiveHeader.update('Buttons');
            ractiveHeader.set("lab.tspec", "ಠ_ಠ");
            break;
        case 7://gen
            var Buttons = ractiveHeader.get('Buttons');
            Buttons.bMarine = '#fff';
            Buttons.bAirborne = '#fff';
            Buttons.bMechanized = '#fff';
            Buttons.bArmoured = '#fff';
            Buttons.bMotorized = '#fff';
            Buttons.bSupport = '#fff';
            Buttons.bNaval = '#fff';
            Buttons.bGeneral = '#0f0';
            ractiveHeader.update('Buttons');
            ractiveHeader.set("lab.tspec", "no bonus");
            var ranks = ractiveDeck.get('ranks');
            ranks.log.R0 = 'r000';
            ranks.log.R1 = 'r001';
            ranks.log.R2 = 'r010';
            ranks.log.R3 = 'r011';
            ranks.log.R4 = 'r100';
            ranks.inf.R0 = 'r000';
            ranks.inf.R1 = 'r001';
            ranks.inf.R2 = 'r010';
            ranks.inf.R3 = 'r011';
            ranks.inf.R4 = 'r100';
            ranks.sup.R0 = 'r000';
            ranks.sup.R1 = 'r001';
            ranks.sup.R2 = 'r010';
            ranks.sup.R3 = 'r011';
            ranks.sup.R4 = 'r100';
            ranks.tnk.R0 = 'r000';
            ranks.tnk.R1 = 'r001';
            ranks.tnk.R2 = 'r010';
            ranks.tnk.R3 = 'r011';
            ranks.tnk.R4 = 'r100';
            ranks.rec.R0 = 'r000';
            ranks.rec.R1 = 'r001';
            ranks.rec.R2 = 'r010';
            ranks.rec.R3 = 'r011';
            ranks.rec.R4 = 'r100';
            ranks.veh.R0 = 'r000';
            ranks.veh.R1 = 'r001';
            ranks.veh.R2 = 'r010';
            ranks.veh.R3 = 'r011';
            ranks.veh.R4 = 'r100';
            ranks.hel.R0 = 'r000';
            ranks.hel.R1 = 'r001';
            ranks.hel.R2 = 'r010';
            ranks.hel.R3 = 'r011';
            ranks.hel.R4 = 'r100';
            ranks.air.R0 = 'r000';
            ranks.air.R1 = 'r001';
            ranks.air.R2 = 'r010';
            ranks.air.R3 = 'r011';
            ranks.air.R4 = 'r100';
            ranks.nav.R0 = 'r000';
            ranks.nav.R1 = 'r001';
            ranks.nav.R2 = 'r010';
            ranks.nav.R3 = 'r011';
            ranks.nav.R4 = 'r100';
            ractiveDeck.update('ranks');

            break;
    }
    switch (Deck.iEra)
    {
        case 0://C
            var Buttons = ractiveHeader.get('Buttons');
            Buttons.bC = '#0f0';
            Buttons.bB = '#fff';
            Buttons.bA = '#fff';
            ractiveHeader.update('Buttons');
            ractiveHeader.set("lab.tera", "+10AP");
            Deck.deckpoitstotal += 10;
            break;
        case 1://B
            var Buttons = ractiveHeader.get('Buttons');
            Buttons.bC = '#fff';
            Buttons.bB = '#0f0';
            Buttons.bA = '#fff';
            ractiveHeader.update('Buttons');
            ractiveHeader.set("lab.tera", "+5AP");
            Deck.deckpoitstotal += 5;
            break;
        case 2://A
            var Buttons = ractiveHeader.get('Buttons');
            Buttons.bC = '#fff';
            Buttons.bB = '#fff';
            Buttons.bA = '#0f0';
            ractiveHeader.update('Buttons');
            ractiveHeader.set("lab.tera", "+0AP");
            break;
    }
    displayUnits();
    ractiveHeader.set("lab.pointstally", Deck.deckpoints + "/" + Deck.deckpoitstotal);
}

function showFlags(x) {
    if(x[0]==1) {ractiveHeader.set("flags.NATO", "NATO")}else{ractiveHeader.set("flags.NATO", "xNATO")};
    if(x[1]==1) {ractiveHeader.set("flags.REDFOR", "REDFOR")}else{ractiveHeader.set("flags.REDFOR", "xREDFOR")};
    if(x[2]==1) {ractiveHeader.set("flags.BD", 'BD')}else{ractiveHeader.set("flags.BD", "xBD")};
    if(x[3]==1) {ractiveHeader.set("flags.COM", 'COM' )}else{ractiveHeader.set("flags.COM", "xCOM")};
    if(x[4]==1) {ractiveHeader.set("flags.EU", 'EU')}else{ractiveHeader.set("flags.EU", "xEU")};
    if(x[5]==1) {ractiveHeader.set("flags.LJ", 'LJ')}else{ractiveHeader.set("flags.LJ", "xLJ")};
    if(x[6]==1) {ractiveHeader.set("flags.NORAD", "NORAD")}else{ractiveHeader.set("flags.NORAD", "xNORAD")};
    if(x[7]==1) {ractiveHeader.set("flags.SCA", 'SCA' )}else{ractiveHeader.set("flags.SCA", "xSCA")};
    if(x[8]==1) {ractiveHeader.set("flags.NSWP", 'NSWP')}else{ractiveHeader.set("flags.NSWP", "xNSWP")};
    if(x[9]==1) {ractiveHeader.set("flags.RD", 'RD'   )}else{ractiveHeader.set("flags.RD", "xRD")};
    if(x[10]==1){ractiveHeader.set("flags.RKA", 'RKA' )}else{ractiveHeader.set("flags.RKA", "xRKA")};
    if(x[11]==1){ractiveHeader.set("flags.ANZAC", 'ANZAC')}else{ractiveHeader.set("flags.ANZAC", "xANZAC")};
    if(x[12]==1){ractiveHeader.set("flags.BRD", 'BRD' )}else{ractiveHeader.set("flags.BRD", "xBRD")};
    if(x[13]==1){ractiveHeader.set("flags.CAN", 'CAN' )}else{ractiveHeader.set("flags.CAN", "xCAN")};
    if(x[14]==1){ractiveHeader.set("flags.DEN", 'DEN' )}else{ractiveHeader.set("flags.DEN", "xDEN")};
    if(x[15]==1){ractiveHeader.set("flags.FRA", 'FRA' )}else{ractiveHeader.set("flags.FRA", "xFRA")};
    if(x[16]==1){ractiveHeader.set("flags.JAP", 'JAP' )}else{ractiveHeader.set("flags.JAP", "xJAP")};
    if(x[17]==1){ractiveHeader.set("flags.NED", 'NED' )}else{ractiveHeader.set("flags.NED", "xNED")};
    if(x[18]==1){ractiveHeader.set("flags.NOR", 'NOR' )}else{ractiveHeader.set("flags.NOR", "xNOR")};
    if(x[19]==1){ractiveHeader.set("flags.ROK", 'ROK' )}else{ractiveHeader.set("flags.ROK", "xROK")};
    if(x[20]==1){ractiveHeader.set("flags.SWE", 'SWE' )}else{ractiveHeader.set("flags.SWE", "xSWE")};
    if(x[21]==1){ractiveHeader.set("flags.UK" , 'UK'  )}else{ractiveHeader.set("flags.UK", "xUK")};
    if(x[22]==1){ractiveHeader.set("flags.USA", 'USA' )}else{ractiveHeader.set("flags.USA", "xUSA")};
    if(x[23]==1){ractiveHeader.set("flags.CZS", 'CZS' )}else{ractiveHeader.set("flags.CZS", "xCZS")};
    if(x[24]==1){ractiveHeader.set("flags.DDR", 'DDR' )}else{ractiveHeader.set("flags.DDR", "xDDR")};
    if(x[25]==1){ractiveHeader.set("flags.DPRK", 'DPRK')}else{ractiveHeader.set("flags.DPRK", "xDPRK")};
    if(x[26]==1){ractiveHeader.set("flags.POL", 'POL' )}else{ractiveHeader.set("flags.POL", "xPOL")};
    if(x[27]==1){ractiveHeader.set("flags.PRC", 'PRC' )}else{ractiveHeader.set("flags.PRC", "xPRC")};
    if(x[28]==1){ractiveHeader.set("flags.USSR", 'USSR')}else{ractiveHeader.set("flags.USSR", "xUSSR")};
    if(x[29]==1){ractiveHeader.set("flags.BRDNL", 'BRDNL')}else{ractiveHeader.set("flags.BRDNL", "xBRDNL")};
    if(x[30]==1){ractiveHeader.set("flags.FIN", 'FIN')}else{ractiveHeader.set("flags.FIN", "xFIN")};
    if(x[31]==1){ractiveHeader.set("flags.YU", 'YU'  )}else{ractiveHeader.set("flags.YU", "xYU")};
    if(x[32]==1){ractiveHeader.set("flags.ISR", 'ISR')}else{ractiveHeader.set("flags.ISR", "xISR")};
    if(x[33]==1){ractiveHeader.set("flags.FINPL", 'FINPL')}else{ractiveHeader.set("flags.FINPL", "xFINPL")};
    if(x[34]==1){ractiveHeader.set("flags.YUCZE", 'YUCZE'  )}else{ractiveHeader.set("flags.YUCZE", "xYUCZE")};
}
function displayUSA() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+10%, +15AP");
    Deck.availQ = 10;
    Deck.deckpoitstotal += 15;
}

function displayUK() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+20%, +15AP");
    Deck.availQ = 20;
    Deck.deckpoitstotal += 15;
}

function displayFRA() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+20%, +15AP");
    Deck.availQ = 20;
    Deck.deckpoitstotal += 15;
}

function displayBRD() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+20%, +15AP");
    Deck.availQ = 20;
    Deck.deckpoitstotal += 15;
}

function displayCAN() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+40%, +15AP");
    Deck.availQ = 40;
    Deck.deckpoitstotal += 15;
}

function displayDEN(){
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+40%, +15AP");
    Deck.availQ = 40;
    Deck.deckpoitstotal += 15;
}

function displaySWE() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+30%, +15AP");
    Deck.availQ = 30;
    Deck.deckpoitstotal += 15;
}

function displayNOR() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+40%, +15AP");
    Deck.availQ = 40;
    Deck.deckpoitstotal += 15;
}

function displayANZAC() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+30%, +15AP");
    Deck.availQ = 30;
    Deck.deckpoitstotal += 15;
}

function displayJAP() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+30%, +15AP");
    Deck.availQ = 30;
    Deck.deckpoitstotal += 15;
}

function displayROK() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+30%, +15AP");
    Deck.availQ = 30;
    Deck.deckpoitstotal += 15;
}

function displayNED() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+20%, +15AP");
    Deck.availQ = 20;
    Deck.deckpoitstotal += 15;
}

function displayEU() {
    var flagstr = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+0%, +10AP");
    Deck.availQ = 0;
    Deck.deckpoitstotal += 10;
}

function displaySCA() {
    var flagstr = [0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+15%, +10AP");
    Deck.availQ = 15;
    Deck.deckpoitstotal += 10;
}

function displayCOM() {
    var flagstr = [0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+0%, +10AP");
    Deck.availQ = 0;
    Deck.deckpoitstotal += 10;
}

function displayBD() {
    var flagstr = [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+20%, +10AP");
    Deck.availQ = 20;
    Deck.deckpoitstotal += 10;
}

function displayLJ() {
    var flagstr = [0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+15%, +10AP");
    Deck.availQ = 15;
    Deck.deckpoitstotal += 10;
}

function displayNORAD() {
    var flagstr = [0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+0%, +10AP");
    Deck.availQ = 0;
    Deck.deckpoitstotal += 10;
}

function displayBDRNL() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+10%, +10AP");
    Deck.availQ = 10;
    Deck.deckpoitstotal += 10;
}

function displayNato() {
    var flagstr = [1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "No bonus");
    Deck.availQ = 0;
}

function displayDDR() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+20%, +15AP");
    Deck.availQ = 20;
    Deck.deckpoitstotal += 15;
}

function displayUSSR() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+10%, +15AP");
    Deck.availQ = 10;
    Deck.deckpoitstotal += 15;
}

function displayPOL() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+20%, +15AP");
    Deck.availQ = 20;
    Deck.deckpoitstotal += 15;
}

function displayCZS() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+30%, +15AP");
    Deck.availQ = 30;
    Deck.deckpoitstotal += 15;
}

function displayPRC() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+30%, +15AP");
    Deck.availQ = 30;
    Deck.deckpoitstotal += 15;
}

function displayDPRK() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+40%, +15AP");
    Deck.availQ = 40;
    Deck.deckpoitstotal += 15;
}

function displayRD() {
    var flagstr = [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+20%, +10AP");
    Deck.availQ = 20;
    Deck.deckpoitstotal += 10;
}

function displayNSWP() {
    var flagstr = [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+0%, +10AP");
    Deck.availQ = 0;
    Deck.deckpoitstotal += 10;
}

function displayRKA() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+0%, +10AP");
    Deck.availQ = 0;
    Deck.deckpoitstotal += 10;
}

function displayREDFOR() {
    var flagstr = [0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "No bonus redfor");
    Deck.availQ = 0;
}

function displayISR() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+10%, +15AP");
    Deck.availQ = 10;
    Deck.deckpoitstotal += 15;
}

function displayBLANK() {
    var flagstr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "");
    Deck.availQ = 10;
    Deck.deckpoitstotal += 15;
  }

function displayFINPL() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+0%, +0AP");
    Deck.availQ = 0;
    Deck.deckpoitstotal += 0; //enable fix
}

function displayYUCZE() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+0%, +0AP");
    Deck.availQ = 0;
    Deck.deckpoitstotal += 0; //enable fix
}

function displayFIN() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+0%, +0AP");
    Deck.availQ = 0;
    Deck.deckpoitstotal += 0; //enable fix
}

function displayYU() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+0%, +0AP");
    Deck.availQ = 0;
    Deck.deckpoitstotal += 0; //enable fix
}

function displayCard(card, type, pos){

    card.iArrayIndex =""+ type + pos[type];
    var sD  = "DeckView.D" +type + pos[type];
    var sL  = "DeckView.L" +type + pos[type];
    var sD0 = "DetailView.D0" +type + pos[type];
    var sL0 = "DetailView.L0" +type + pos[type];
    var isUnavailable = isError(card);

    if (DataDisplay == 1){
        var innerString = "<img src='png/blank.png' class='img-responsive' style='position: relative; top: 0; left: 0;' >";

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
        if (card.Unit.sUnitData.charAt(14) == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='rec' >";}
        if (card.Unit.sUnitData.charAt(14) == '2') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='rec2' >";}
        if (card.Unit.sUnitData.charAt(14) == '3') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='rec3' >";}
        if (card.Unit.sUnitData.charAt(15) == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='tube' >";}
        if (card.Unit.sUnitData.charAt(16) == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='rad' >";}
        if (card.Unit.sUnitData.charAt(26) == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='amph' >";}
        if (card.Unit.sUnitData.charAt(28) == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='nav1' >";}
        if (card.Unit.sUnitData.charAt(28) == '2') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='nav2' >";}
        if (card.Unit.sUnitData.charAt(28) == '3') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='nav2' >";}
        if (card.Unit.sUnitData.charAt(29) == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='moto' >";}

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
    var temp = Math.round(((100 + Deck.availQ) * card.iaAvailability[card.iVet0])/100);
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


function displayUnits()
{
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

    IDlist = [];
    for (var i = 0; i < Deck.Cards2T.length; i++)
    {
        Deck.Cards2T[i] = toSpec(Deck.Cards2T[i]);
        var type;
        type = 9; //2 transports = naval inf.
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
    for (var i = 0; i < Deck.Cards0T.length; i++)
    {
        Deck.Cards0T[i] = toSpec(Deck.Cards0T[i]);
        var type;
        if (Deck.Cards0T[i].UnitTypeData.charAt(0) == '1'){type = 1;}//logi
        else if (Deck.Cards0T[i].UnitTypeData.charAt(1) == '1'){type = 2;}//inf
        else if (Deck.Cards0T[i].UnitTypeData.charAt(2) == '1'){type = 3;}//sup
        else if (Deck.Cards0T[i].UnitTypeData.charAt(3) == '1'){type = 4;}//tnk
        else if (Deck.Cards0T[i].UnitTypeData.charAt(4) == '1'){type = 5;}//rec
        else if (Deck.Cards0T[i].UnitTypeData.charAt(5) == '1'){type = 6;}//veh
        else if (Deck.Cards0T[i].UnitTypeData.charAt(6) == '1'){type = 7;}//hel
        else if (Deck.Cards0T[i].UnitTypeData.charAt(7) == '1'){type = 8;}//air
        else if (Deck.Cards0T[i].UnitTypeData.charAt(8) == '1'){type = 9;}//nav
        else{type = 9;} //me=idiot, forgot to input naval
        displayCard(Deck.Cards0T[i], type, counter);
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
    }
}

function debugOutput(binoutdebug){
    var tablerow = [];
    tablerow.push({ bin: binoutdebug.charAt(0), parsing: Deck.sSide });
    tablerow.push({ bin: binoutdebug.substr(0,12), parsing: Deck.sNation });
    tablerow.push({ bin: binoutdebug.substr(12,3), parsing: Deck.sSpec });
    tablerow.push({ bin: binoutdebug.substr(15,2), parsing: Deck.sEra });
    tablerow.push({ bin: binoutdebug.substr(17,4), parsing: "inf-naval:  " + parseInt(binoutdebug.substr(17,4), 2) });
    tablerow.push({ bin: binoutdebug.substr(21,5), parsing: "inf-land, veh-naval:  "+ parseInt(binoutdebug.substr(21,5), 2) });

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

    ractiveDeck.set("debug",tablerow);
}
