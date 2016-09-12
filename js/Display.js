function GUIDisplay() {

    Deck.deckpoints = 0;
    Deck.deckpoitstotal = 45;
    //nation
    switch (Deck.iNation) {
        case 10:{displayUSA(); break; }
        case 26:{displayUK(); break; }
        case 42:{displayFRA(); break;}
        case 58:{displayBRD(); break;}
        case 74:{displayCAN(); break;}
        case 90:{displayDEN(); break;}
        case 106:{displaySWE(); break;}
        case 122:{displayNOR(); break;}
        case 138:{displayANZAC(); break;}
        case 154:{displayJAP(); break;}
        case 170:{displayROK(); break;}
        case 186:{displayNED(); break;}
        case 192:{displayEU(); break;}
        case 193:{displaySCA(); break;}
        case 194:{displayCOM(); break;}
        case 195:{displayBD(); break;}
        case 198:{displayLJ(); break;}
        case 200:{displayNORAD(); break;}
        case 201:{displayBDRNL(); break;}
        case 202:{displayNato(); break;}
        case 266:{displayDDR(); break;}
        case 282:{displayUSSR(); break;}
        case 298:{displayPOL(); break;}
        case 314:{displayCZS(); break;}
        case 330:{displayPRC(); break;}
        case 346:{displayDPRK(); break;}
        case 356:{displayRD(); break;}
        case 357:{displayNSWP(); break;}
        case 359:{displayRKA(); break;}
        case 362:{displayREDFOR(); break;}
    }

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
            updatePointsDisplay(Matrix.moto);
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
            updatePointsDisplay(Matrix.armoured);
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
            updatePointsDisplay(Matrix.support);
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
            updatePointsDisplay(Matrix.marine);
            ractiveHeader.set("lab.tspec", "+2 cards, +1XP, -1 cost: Infantry, Plane; +3 cards Naval");
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
            updatePointsDisplay(Matrix.mech);
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
            updatePointsDisplay(Matrix.airborne);
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
            updatePointsDisplay(Matrix.naval);
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
            updatePointsDisplay(Matrix.general);
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
}
function displayUSA() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+10%, +15AP");
    Deck.availQ = 10;
    Deck.deckpoitstotal += 15;
}

function displayUK() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+20%, +15AP");
    Deck.availQ = 20;
    Deck.deckpoitstotal += 15;
}

function displayFRA() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+20%, +15AP");
    Deck.availQ = 20;
    Deck.deckpoitstotal += 15;
}

function displayBRD() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+20%, +15AP");
    Deck.availQ = 20;
    Deck.deckpoitstotal += 15;
}

function displayCAN() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+40%, +15AP");
    Deck.availQ = 40;
    Deck.deckpoitstotal += 15;
}

function displayDEN(){
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+40%, +15AP");
    Deck.availQ = 40;
    Deck.deckpoitstotal += 15;
}

function displaySWE() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+30%, +15AP");
    Deck.availQ = 30;
    Deck.deckpoitstotal += 15;
}

function displayNOR() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+40%, +15AP");
    Deck.availQ = 40;
    Deck.deckpoitstotal += 15;
}

function displayANZAC() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+30%, +15AP");
    Deck.availQ = 30;
    Deck.deckpoitstotal += 15;
}

function displayJAP() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+30%, +15AP");
    Deck.availQ = 30;
    Deck.deckpoitstotal += 15;
}

function displayROK() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+30%, +15AP");
    Deck.availQ = 30;
    Deck.deckpoitstotal += 15;
}

function displayNED() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+20%, +15AP");
    Deck.availQ = 20;
    Deck.deckpoitstotal += 15;
}

function displayEU() {
    var flagstr = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+0%, +10AP");
    Deck.availQ = 0;
    Deck.deckpoitstotal += 10;
}

function displaySCA() {
    var flagstr = [0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+15%, +10AP");
    Deck.availQ = 15;
    Deck.deckpoitstotal += 10;
}

function displayCOM() {
    var flagstr = [0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+10%, +10AP");
    Deck.availQ = 10;
    Deck.deckpoitstotal += 10;
}

function displayBD() {
    var flagstr = [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+20%, +10AP");
    Deck.availQ = 20;
    Deck.deckpoitstotal += 10;
}

function displayLJ() {
    var flagstr = [0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+15%, +10AP");
    Deck.availQ = 15;
    Deck.deckpoitstotal += 10;
}

function displayNORAD() {
    var flagstr = [0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+0%, +10AP");
    Deck.availQ = 0;
    Deck.deckpoitstotal += 10;
}

function displayBDRNL() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+10%, +10AP");
    Deck.availQ = 10;
    Deck.deckpoitstotal += 10;
}

function displayNato() {
    var flagstr = [1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "No bonus");
    Deck.availQ = 0;
}

function displayDDR() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+20%, +15AP");
    Deck.availQ = 20;
    Deck.deckpoitstotal += 15;
}

function displayUSSR() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+10%, +15AP");
    Deck.availQ = 10;
    Deck.deckpoitstotal += 15;
}

function displayPOL() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+20%, +15AP");
    Deck.availQ = 20;
    Deck.deckpoitstotal += 15;
}

function displayCZS() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+30%, +15AP");
    Deck.availQ = 30;
    Deck.deckpoitstotal += 15;
}

function displayPRC() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+30%, +15AP");
    Deck.availQ = 30;
    Deck.deckpoitstotal += 15;
}

function displayDPRK() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+40%, +15AP");
    Deck.availQ = 40;
    Deck.deckpoitstotal += 15;
}

function displayRD() {
    var flagstr = [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+20%, +10AP");
    Deck.availQ = 20;
    Deck.deckpoitstotal += 10;
}

function displayNSWP() {
    var flagstr = [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+15%, +10AP");
    Deck.availQ = 15;
    Deck.deckpoitstotal += 10;
}

function displayRKA() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "+0%, +10AP");
    Deck.availQ = 0;
    Deck.deckpoitstotal += 10;
}

function displayREDFOR() {
    var flagstr = [0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0];
    showFlags(flagstr);
    ractiveHeader.set("lab.tnation", "No bonus");
    Deck.availQ = 0;
}

function displayCard(card, type, pos){

    card.iArrayIndex =""+ type + pos[type];
    var sD  = "DeckView.D" +type + pos[type];
    var sL  = "DeckView.L" +type + pos[type];
    var sD0 = "DetailView.D0" +type + pos[type];
    var sL0 = "DetailView.L0" +type + pos[type];
    var isUnavailable = isError(card);

    var innerString = "<img src='png/blank.png' class='img-responsive' style='position: relative; top: 0; left: 0;' >";
    //var innerString = "<img class='img-responsive' style='position: relative; top: 0; left: 0;' id='blank'>";

    if (card.Unit.sUnitData.charAt(0)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='antiair' >";}
    if (card.Unit.sUnitData.charAt(1)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='AAM' >";}
    if (card.Unit.sUnitData.charAt(2)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='armour' >";}
    if (card.Unit.sUnitData.charAt(3)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='atgm' >";}
    if (card.Unit.sUnitData.charAt(4)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='carrier' >";}
    if (card.Unit.sUnitData.charAt(5)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='CMD'  >";}
    if (card.Unit.sUnitData.charAt(6)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='helo' >";}
    if (card.Unit.sUnitData.charAt(7)  == '1') { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='inf' >";}
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
    if (isUnavailable == true)                 { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='error' >"; }

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
          if (isUnavailable == true)                 { innerString += " <img class='unit img-responsive' style='position: absolute; top: 0; left: 0;' id='error' >"; }
    }
    innerString += ' <h5 style="position: absolute; bottom: 0; right: 0; color:#ff0; font-weight:900;">' + card.iCost + '</h5>';
    var temp = Math.round(((100 + Deck.availQ) * card.iaAvailability[card.iVet0])/100);
    innerString += ' <h5 style="position: absolute; bottom: 0; left: 35%; color:#fff; font-weight:900;">' + temp + '</h5>';
    innerString += " <img src='flags/" +card.sNation + ".png' class='img-thumbnail' style='position: absolute; top: 0; left: 0;' >";
    innerString += " <img id='r" + card.sVeterancy + "' class='ranks' style='position: absolute; bottom: 0; left: 0;' >";
    ractiveDeck.set(sD, innerString);
    ractiveDeck.set(sD0, innerString);

    if (card.Craft == 0){
      if (card.Transport == 0){
        IDlist.push(card.Unit.iUnitID);
        var cardnr = IDlist.filter(function(x){return x==card.Unit.iUnitID}).length;
        innerString = '<h6>' + card.Unit.sNameU + " " + cardnr + "/" + card.Unit.iCards + "<br>" + "<br>" + '</h6>';
      } else {
        IDlist.push(card.Unit.iUnitID);
        IDlist.push(card.Transport.iUnitID);
        var cardnr = IDlist.filter(function(x){return x==card.Unit.iUnitID}).length;
        var cardnrT = IDlist.filter(function(x){return x==card.Transport.iUnitID}).length;
        innerString = '<h6>' + card.Unit.sNameU + " " + cardnr + "/" + card.Unit.iCards + "<br>" + card.Transport.sNameU + " " + cardnrT + "/"+ card.Transport.iCards + "<br>" + '</h6>';
      }
      } else {
        IDlist.push(card.Unit.iUnitID);
        IDlist.push(card.Transport.iUnitID);
        IDlist.push(card.Craft.iUnitID);
        var cardnr = IDlist.filter(function(x){return x==card.Unit.iUnitID}).length;
        var cardnrT = IDlist.filter(function(x){return x==card.Transport.iUnitID}).length;
        var cardnrC = IDlist.filter(function(x){return x==card.Craft.iUnitID}).length;
      innerString = '<h6>' + card.Unit.sNameU + " " + cardnr + "/" + card.Unit.iCards + "<br>" + card.Transport.sNameU + " " + cardnrT + "/"+ card.Transport.iCards + "<br>" + card.Craft.sNameU + " " + cardnrC + "/"  + card.Craft.iCards +'</h6>';
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
        Deck.deckpoints += DA[type][counter[type]];
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
        Deck.deckpoints += DA[type][counter[type]];
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
        Deck.deckpoints += DA[type][counter[type]];
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

function updatePointsDisplay(DA)
{
}

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

    ractiveDeck.set("debug",tablerow);
}
