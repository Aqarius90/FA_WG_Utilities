function GUIDisplay() {

    Deck.deckpoints = 0;
    Deck.deckpoitstotal = 45;
    resetDisplay();
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
            ractive.set("Buttons.bMotorized", "#0f0");
            updatePointsDisplay(Matrix.moto);
            ractive.set("lab.tspec", "+2 cards, +1XP, -1 cost: Infantry, Recon, Vehicle");
            document.getElementById("v10").src = "rank/001.png";
            document.getElementById("v11").src = "rank/010.png";
            document.getElementById("v12").src = "rank/011.png";
            document.getElementById("v13").src = "rank/100.png";
            document.getElementById("v14").src = "rank/100.png";

            document.getElementById("v40").src = "rank/001.png";
            document.getElementById("v41").src = "rank/010.png";
            document.getElementById("v42").src = "rank/011.png";
            document.getElementById("v43").src = "rank/100.png";
            document.getElementById("v44").src = "rank/100.png";

            document.getElementById("v50").src = "rank/001.png";
            document.getElementById("v51").src = "rank/010.png";
            document.getElementById("v52").src = "rank/011.png";
            document.getElementById("v53").src = "rank/100.png";
            document.getElementById("v54").src = "rank/100.png";
            break;
        case 1://arm
            ractive.set("Buttons.bArmoured", "#0f0");
            updatePointsDisplay(Matrix.armoured);
            ractive.set("lab.tspec", "+4 cards, +2XP, -1 cost: Tank");
            document.getElementById("v40").src = "rank/010.png";
            document.getElementById("v41").src = "rank/011.png";
            document.getElementById("v42").src = "rank/100.png";
            document.getElementById("v43").src = "rank/100.png";
            document.getElementById("v44").src = "rank/100.png";
            break;
        case 2://sup
            ractive.set("Buttons.bSupport", "#0f0");
            updatePointsDisplay(Matrix.support);
            ractive.set("lab.tspec", "+4 cards,-1 cost: Logistics, Support;  +1XP: Support");

            document.getElementById("v20").src = "rank/010.png";
            document.getElementById("v21").src = "rank/011.png";
            document.getElementById("v22").src = "rank/100.png";
            document.getElementById("v23").src = "rank/100.png";
            document.getElementById("v24").src = "rank/100.png";
            break;
        case 3://mar
            ractive.set("Buttons.bMarine", "#0f0");
            updatePointsDisplay(Matrix.marine);
            ractive.set("lab.tspec", "+2 cards, +1XP, -1 cost: Infantry, Plane; +3 cards Naval");

            document.getElementById("v10").src = "rank/001.png";
            document.getElementById("v11").src = "rank/010.png";
            document.getElementById("v12").src = "rank/011.png";
            document.getElementById("v13").src = "rank/100.png";
            document.getElementById("v14").src = "rank/100.png";

            document.getElementById("v70").src = "rank/001.png";
            document.getElementById("v71").src = "rank/010.png";
            document.getElementById("v72").src = "rank/011.png";
            document.getElementById("v73").src = "rank/100.png";
            document.getElementById("v74").src = "rank/100.png";
            break;
        case 4://mec
            ractive.set("Buttons.bMechanized", "#0f0");
            updatePointsDisplay(Matrix.mech);
            ractive.set("lab.tspec", "+4 cards, +1XP, -1 cost: Infantry, Vehicle");

            document.getElementById("v10").src = "rank/001.png";
            document.getElementById("v11").src = "rank/010.png";
            document.getElementById("v12").src = "rank/011.png";
            document.getElementById("v13").src = "rank/100.png";
            document.getElementById("v14").src = "rank/100.png";

            document.getElementById("v50").src = "rank/001.png";
            document.getElementById("v51").src = "rank/010.png";
            document.getElementById("v52").src = "rank/011.png";
            document.getElementById("v53").src = "rank/100.png";
            document.getElementById("v54").src = "rank/100.png";
            break;
        case 5://air
            ractive.set("Buttons.bAirborne", "#0f0");
            updatePointsDisplay(Matrix.airborne);
            ractive.set("lab.tspec", "+4 cards, +1XP, -1 cost: Infantry, Helicopter, Airplane");
            document.getElementById("v10").src = "rank/001.png";
            document.getElementById("v11").src = "rank/010.png";
            document.getElementById("v12").src = "rank/011.png";
            document.getElementById("v13").src = "rank/100.png";
            document.getElementById("v14").src = "rank/100.png";

            document.getElementById("v60").src = "rank/001.png";
            document.getElementById("v61").src = "rank/010.png";
            document.getElementById("v62").src = "rank/011.png";
            document.getElementById("v63").src = "rank/100.png";
            document.getElementById("v64").src = "rank/100.png";

            document.getElementById("v70").src = "rank/001.png";
            document.getElementById("v71").src = "rank/010.png";
            document.getElementById("v72").src = "rank/011.png";
            document.getElementById("v73").src = "rank/100.png";
            document.getElementById("v74").src = "rank/100.png";
            break;
        case 6://nav
            ractive.set("Buttons.bNaval", "#0f0");
            updatePointsDisplay(Matrix.naval);
            ractive.set("lab.tspec", "ಠ_ಠ");
            break;
        case 7://gen
            ractive.set("Buttons.bGeneral", "#0f0");
            updatePointsDisplay(Matrix.general);
            ractive.set("lab.tspec", "no bonus");
            document.getElementById("v00").src = "rank/000.png";
            document.getElementById("v01").src = "rank/001.png";
            document.getElementById("v02").src = "rank/010.png";
            document.getElementById("v03").src = "rank/011.png";
            document.getElementById("v04").src = "rank/100.png";

            document.getElementById("v10").src = "rank/000.png";
            document.getElementById("v11").src = "rank/001.png";
            document.getElementById("v12").src = "rank/010.png";
            document.getElementById("v13").src = "rank/011.png";
            document.getElementById("v14").src = "rank/100.png";

            document.getElementById("v20").src = "rank/000.png";
            document.getElementById("v21").src = "rank/001.png";
            document.getElementById("v22").src = "rank/010.png";
            document.getElementById("v23").src = "rank/011.png";
            document.getElementById("v24").src = "rank/100.png";

            document.getElementById("v30").src = "rank/000.png";
            document.getElementById("v31").src = "rank/001.png";
            document.getElementById("v32").src = "rank/010.png";
            document.getElementById("v33").src = "rank/011.png";
            document.getElementById("v34").src = "rank/100.png";

            document.getElementById("v40").src = "rank/000.png";
            document.getElementById("v41").src = "rank/001.png";
            document.getElementById("v42").src = "rank/010.png";
            document.getElementById("v43").src = "rank/011.png";
            document.getElementById("v44").src = "rank/100.png";

            document.getElementById("v50").src = "rank/000.png";
            document.getElementById("v51").src = "rank/001.png";
            document.getElementById("v52").src = "rank/010.png";
            document.getElementById("v53").src = "rank/011.png";
            document.getElementById("v54").src = "rank/100.png";

            document.getElementById("v60").src = "rank/000.png";
            document.getElementById("v61").src = "rank/001.png";
            document.getElementById("v62").src = "rank/010.png";
            document.getElementById("v63").src = "rank/011.png";
            document.getElementById("v64").src = "rank/100.png";

            document.getElementById("v70").src = "rank/000.png";
            document.getElementById("v71").src = "rank/001.png";
            document.getElementById("v72").src = "rank/010.png";
            document.getElementById("v73").src = "rank/011.png";
            document.getElementById("v74").src = "rank/100.png";

            document.getElementById("v80").src = "rank/000.png";
            document.getElementById("v81").src = "rank/001.png";
            document.getElementById("v82").src = "rank/010.png";
            document.getElementById("v83").src = "rank/011.png";
            document.getElementById("v84").src = "rank/100.png";

            break;
    }
    switch (Deck.iEra)
    {
        case 0://C
            ractive.set("Buttons.bC", "#0f0");
            ractive.set("lab.tera", "+10AP");
            Deck.deckpoitstotal += 10;
            break;
        case 1://B
            ractive.set("Buttons.bB", "#0f0");
            ractive.set("lab.tera", "+5AP");
            Deck.deckpoitstotal += 5;
            break;
        case 2://A
            ractive.set("Buttons.bA", "#0f0");
            ractive.set("lab.tera", "+0AP");
            break;
    }
    displayUnits();
    listUnits();
    ractive.set("lab.pointstally", Deck.deckpoints + "/" + Deck.deckpoitstotal);
}

function showFlags(x) {
    if(x[0]==1) {ractive.set("flags.nato", "flags/nato.png")}else{ractive.set("flags.nato", "flags/natob.png")};
    if(x[1]==1) {ractive.set("flags.redfor", "flags/REDFOR.png")}else{ractive.set("flags.redfor", "flags/REDFORb.png")};
    if(x[2]==1) {ractive.set("flags.BD", 'flags/BD.png')}else{ractive.set("flags.BD", "flags/BDb.png")};
    if(x[3]==1) {ractive.set("flags.COM", 'flags/COM.png' )}else{ractive.set("flags.COM", "flags/COMb.png")};
    if(x[4]==1) {ractive.set("flags.EU", 'flags/EU.png')}else{ractive.set("flags.EU", "flags/EUb.png")};
    if(x[5]==1) {ractive.set("flags.LJ", 'flags/LJ.png')}else{ractive.set("flags.LJ", "flags/LJb.png")};
    if(x[6]==1) {ractive.set("flags.NORAD", "flags/NORAD.png")}else{ractive.set("flags.NORAD", "flags/NORADb.png")};
    if(x[7]==1) {ractive.set("flags.SCA", 'flags/SCA.png' )}else{ractive.set("flags.SCA", "flags/SCAb.png")};
    if(x[8]==1) {ractive.set("flags.NSWP", 'flags/NSWP.png')}else{ractive.set("flags.NSWP", "flags/NSWPb.png")};
    if(x[9]==1) {ractive.set("flags.RD", 'flags/RD.png'   )}else{ractive.set("flags.RD", "flags/RDb.png")};
    if(x[10]==1){ractive.set("flags.RKA", 'flags/RKA.png' )}else{ractive.set("flags.RKA", "flags/RKAb.png")};
    if(x[11]==1){ractive.set("flags.ANZAC", 'flags/ANZAC.png')}else{ractive.set("flags.ANZAC", "flags/ANZACb.png")};
    if(x[12]==1){ractive.set("flags.BRD", 'flags/BRD.png' )}else{ractive.set("flags.BRD", "flags/BRDb.png")};
    if(x[13]==1){ractive.set("flags.CAN", 'flags/CAN.png' )}else{ractive.set("flags.CAN", "flags/CANb.png")};
    if(x[14]==1){ractive.set("flags.DEN", 'flags/DEN.png' )}else{ractive.set("flags.DEN", "flags/DENb.png")};
    if(x[15]==1){ractive.set("flags.FRA", 'flags/FRA.png' )}else{ractive.set("flags.FRA", "flags/FRAb.png")};
    if(x[16]==1){ractive.set("flags.JAP", 'flags/JAP.png' )}else{ractive.set("flags.JAP", "flags/JAPb.png")};
    if(x[17]==1){ractive.set("flags.NED", 'flags/NED.png' )}else{ractive.set("flags.NED", "flags/NEDb.png")};
    if(x[18]==1){ractive.set("flags.NOR", 'flags/NOR.png' )}else{ractive.set("flags.NOR", "flags/NORb.png")};
    if(x[19]==1){ractive.set("flags.ROK", 'flags/ROK.png' )}else{ractive.set("flags.ROK", "flags/ROKb.png")};
    if(x[20]==1){ractive.set("flags.SWE", 'flags/SWE.png' )}else{ractive.set("flags.SWE", "flags/SWEb.png")};
    if(x[21]==1){ractive.set("flags.UK" , 'flags/UK.png'  )}else{ractive.set("flags.UK", "flags/UKb.png")};
    if(x[22]==1){ractive.set("flags.USA", 'flags/USA.png' )}else{ractive.set("flags.USA", "flags/USAb.png")};
    if(x[23]==1){ractive.set("flags.CZS", 'flags/CZS.png' )}else{ractive.set("flags.CZS", "flags/CZSb.png")};
    if(x[24]==1){ractive.set("flags.DDR", 'flags/DDR.png' )}else{ractive.set("flags.DDR", "flags/DDRb.png")};
    if(x[25]==1){ractive.set("flags.DPRK", 'flags/DPRK.png')}else{ractive.set("flags.DPRK", "flags/DPRKb.png")};
    if(x[26]==1){ractive.set("flags.POL", 'flags/POL.png' )}else{ractive.set("flags.POL", "flags/POLb.png")};
    if(x[27]==1){ractive.set("flags.PRC", 'flags/PRC.png' )}else{ractive.set("flags.PRC", "flags/PRCb.png")};
    if(x[28]==1){ractive.set("flags.USSR", 'flags/USSR.png')}else{ractive.set("flags.USSR", "flags/USSRb.png")};
    if(x[29]==1){ractive.set("flags.BRDNL", 'flags/BRDNL.png')}else{ractive.set("flags.BRDNL", "flags/BRDNLb.png")};
    if(x[30]==1){ractive.set("flags.FIN", 'flags/FINb.png')}else{ractive.set("flags.FIN", "flags/FINb.png")};
    if(x[31]==1){ractive.set("flags.YU", 'flags/YUb.png'  )}else{ractive.set("flags.YU", "flags/YUb.png")};
    if(x[32]==1){ractive.set("flags.ISR", 'flags/ISRb.png')}else{ractive.set("flags.ISR", "flags/ISRb.png")};
}
function displayUSA() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+10%, +15AP");
    Deck.availQ = 10;
    Deck.deckpoitstotal += 15;
}

function displayUK() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+20%, +15AP");
    Deck.availQ = 20;
    Deck.deckpoitstotal += 15;
}

function displayFRA() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+20%, +15AP");
    Deck.availQ = 20;
    Deck.deckpoitstotal += 15;
}

function displayBRD() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+20%, +15AP");
    Deck.availQ = 20;
    Deck.deckpoitstotal += 15;
}

function displayCAN() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+40%, +15AP");
    Deck.availQ = 40;
    Deck.deckpoitstotal += 15;
}

function displayDEN(){
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+40%, +15AP");
    Deck.availQ = 40;
    Deck.deckpoitstotal += 15;
}

function displaySWE() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+30%, +15AP");
    Deck.availQ = 30;
    Deck.deckpoitstotal += 15;
}

function displayNOR() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+40%, +15AP");
    Deck.availQ = 40;
    Deck.deckpoitstotal += 15;
}

function displayANZAC() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+30%, +15AP");
    Deck.availQ = 30;
    Deck.deckpoitstotal += 15;
}

function displayJAP() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+30%, +15AP");
    Deck.availQ = 30;
    Deck.deckpoitstotal += 15;
}

function displayROK() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+30%, +15AP");
    Deck.availQ = 30;
    Deck.deckpoitstotal += 15;
}

function displayNED() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+20%, +15AP");
    Deck.availQ = 20;
    Deck.deckpoitstotal += 15;
}

function displayEU() {
    var flagstr = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+0%, +10AP");
    Deck.availQ = 0;
    Deck.deckpoitstotal += 10;
}

function displaySCA() {
    var flagstr = [0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+15%, +10AP");
    Deck.availQ = 15;
    Deck.deckpoitstotal += 10;
}

function displayCOM() {
    var flagstr = [0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+10%, +10AP");
    Deck.availQ = 10;
    Deck.deckpoitstotal += 10;
}

function displayBD() {
    var flagstr = [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+20%, +10AP");
    Deck.availQ = 20;
    Deck.deckpoitstotal += 10;
}

function displayLJ() {
    var flagstr = [0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+15%, +10AP");
    Deck.availQ = 15;
    Deck.deckpoitstotal += 10;
}

function displayNORAD() {
    var flagstr = [0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+0%, +10AP");
    Deck.availQ = 0;
    Deck.deckpoitstotal += 10;
}

function displayBDRNL() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+10%, +10AP");
    Deck.availQ = 10;
    Deck.deckpoitstotal += 10;
}

function displayNato() {
    var flagstr = [1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "No bonus");
    Deck.availQ = 0;
}

function displayDDR() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+20%, +15AP");
    Deck.availQ = 20;
    Deck.deckpoitstotal += 15;
}

function displayUSSR() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+10%, +15AP");
    Deck.availQ = 10;
    Deck.deckpoitstotal += 15;
}

function displayPOL() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+20%, +15AP");
    Deck.availQ = 20;
    Deck.deckpoitstotal += 15;
}

function displayCZS() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+30%, +15AP");
    Deck.availQ = 30;
    Deck.deckpoitstotal += 15;
}

function displayPRC() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+30%, +15AP");
    Deck.availQ = 30;
    Deck.deckpoitstotal += 15;
}

function displayDPRK() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+40%, +15AP");
    Deck.availQ = 40;
    Deck.deckpoitstotal += 15;
}

function displayRD() {
    var flagstr = [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+20%, +10AP");
    Deck.availQ = 20;
    Deck.deckpoitstotal += 10;
}

function displayNSWP() {
    var flagstr = [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+15%, +10AP");
    Deck.availQ = 15;
    Deck.deckpoitstotal += 10;
}

function displayRKA() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "+0%, +10AP");
    Deck.availQ = 0;
    Deck.deckpoitstotal += 10;
}

function displayREDFOR() {
    var flagstr = [0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0];
    showFlags(flagstr);
    ractive.set("lab.tnation", "No bonus");
    Deck.availQ = 0;
}

function addDataImage(x, prefix, y, spec){
    var iData = document.createElement("img");
    iData.src = "png/" + spec + ".png";
    iData.setAttribute("class", "img-responsive");
    iData.setAttribute("style", "position: absolute; top: 0; left: 0;");
    document.getElementById("D" + prefix + x + y).appendChild(iData);
}

function displayCard(card, type, pos){

    card.iArrayIndex =""+ type + pos[type];
    var sD  = "DeckView.D" +type + pos[type];
    var sL  = "DeckView.L" +type + pos[type];
    var sD0 = "DeckView.D0" +type + pos[type];
    var sL0 = "DeckView.L0" +type + pos[type];
    var isUnavailable = isError(card);

    var innerString = "<img src='png/blank.png' class='img-responsive' style='position: relative; top: 0; left: 0;' >";

    if (isUnavailable == true) { innerString += " <img src='png/INVALID.png' class='img-responsive' style='position: absolute; top: 0; left: 0;' >"; }
    if (card.Unit.sUnitData.charAt(0)  == '1') { innerString += " <img src='png/antiair.png' class='img-responsive' style='position: absolute; top: 0; left: 0;' >";}
    if (card.Unit.sUnitData.charAt(1)  == '1') { innerString += " <img src='png/AAM.png' class='img-responsive' style='position: absolute; top: 0; left: 0;' >";}
    if (card.Unit.sUnitData.charAt(2)  == '1') { innerString += " <img src='png/armour.png' class='img-responsive' style='position: absolute; top: 0; left: 0;' >";}
    if (card.Unit.sUnitData.charAt(3)  == '1') { innerString += " <img src='png/atgm.png' class='img-responsive' style='position: absolute; top: 0; left: 0;' >";}
    if (card.Unit.sUnitData.charAt(4)  == '1') { innerString += " <img src='png/carrier.png' class='img-responsive' style='position: absolute; top: 0; left: 0;' >";}
    if (card.Unit.sUnitData.charAt(5)  == '1') { innerString += " <img src='png/CMD.png' class='img-responsive' style='position: absolute; top: 0; left: 0;' >";}
    if (card.Unit.sUnitData.charAt(6)  == '1') { innerString += " <img src='png/helo.png' class='img-responsive' style='position: absolute; top: 0; left: 0;' >";}
    if (card.Unit.sUnitData.charAt(7)  == '1') { innerString += " <img src='png/inf.png' class='img-responsive' style='position: absolute; top: 0; left: 0;' >";}
    if (card.Unit.sUnitData.charAt(8)  == '1') { innerString += " <img src='png/log.png' class='img-responsive' style='position: absolute; top: 0; left: 0;' >";}
    if (card.Unit.sUnitData.charAt(9)  == '1') { innerString += " <img src='png/eng.png' class='img-responsive' style='position: absolute; top: 0; left: 0;' >";}
    if (card.Unit.sUnitData.charAt(10) == '1') { innerString += " <img src='png/plane.png' class='img-responsive' style='position: absolute; top: 0; left: 0;' >";}
    if (card.Unit.sUnitData.charAt(11) == '1') { innerString += " <img src='png/rad.png' class='img-responsive' style='position: absolute; top: 0; left: 0;' >";}
    if (card.Unit.sUnitData.charAt(12) == '1') { innerString += " <img src='png/rocket.png' class='img-responsive' style='position: absolute; top: 0; left: 0;' >";}
    if (card.Unit.sUnitData.charAt(13) == '1') { innerString += " <img src='png/mtr.png' class='img-responsive' style='position: absolute; top: 0; left: 0;' >";}
    if (card.Unit.sUnitData.charAt(14) == '1') { innerString += " <img src='png/rec.png' class='img-responsive' style='position: absolute; top: 0; left: 0;' >";}
    if (card.Unit.sUnitData.charAt(14) == '2') { innerString += " <img src='png/rec2.png' class='img-responsive' style='position: absolute; top: 0; left: 0;' >";}
    if (card.Unit.sUnitData.charAt(14) == '3') { innerString += " <img src='png/rec3.png' class='img-responsive' style='position: absolute; top: 0; left: 0;' >";}
    if (card.Unit.sUnitData.charAt(15) == '1') { innerString += " <img src='png/tube.png' class='img-responsive' style='position: absolute; top: 0; left: 0;' >";}
    if (card.Unit.sUnitData.charAt(16) == '1') { innerString += " <img src='png/rad.png' class='img-responsive' style='position: absolute; top: 0; left: 0;' >";}
    innerString += ' <h5 style="position: absolute; bottom: 0; right: 0; color:#ff0; font-weight:900;">' + card.iCost + '</h5>';
    var temp = Math.round(((100 + Deck.availQ) * card.iaAvailability[card.iVet0])/100);
    innerString += ' <h5 style="position: absolute; bottom: 0; left: 35%; color:#fff; font-weight:900;">' + temp + '</h5>';
    innerString += " <img src='flags/" + card.sNation + ".png' class='img-thumbnail' style='position: absolute; top: 0; left: 0;' >";
    innerString += " <img src='rank/" + card.sVeterancy + ".png' class='img-thumbnail-mini' style='position: absolute; bottom: 0; left: 0;' >";
    ractive.set(sD, innerString);
    ractive.set(sD0, innerString);

    innerString = '<h6>' + card.Unit.sNameU + '</h6>';
    if(card.Transport != "0"){
        innerString = '<h6>' + card.Unit.sNameU + "<br>" + card.Transport.sNameU + '</h6>';
    }
    if(card.Craft != "0"){
        innerString = '<h6>' + card.Unit.sNameU + "<br>" + card.Transport.sNameU + "<br>" + card.Craft.sNameU +'</h6>';
    }
    ractive.set(sL, innerString);

    innerString = '<button type="button" class="btn btn-default btn-block btn-top-line" onclick="CardDelete('+type*10+ pos[type]+');"}>DELETE</button>';
    ractive.set(sL0, innerString);
/*
    if (prefix == '0'){
        let temp = pos[type];
        let elem = document.createElement('input');
        elem.type = 'button';
        elem.value = 'DELETE';
        elem.onclick = function(){CardDelete(type*10+ temp);}; //closure escape via math. FML
        document.getElementById("L0" + type + pos[type]).appendChild(elem);
    }*/
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

    for (var i = 0; i < Deck.Cards2T.length; i++)
    {
        Deck.Cards2T[i] = toSpec(Deck.Cards2T[i]);
        var type;
        //if (Deck.Cards2T[i].Unit.sUnitData.charAt(17) == '1'){type = 1;}//logi
        //else if (Deck.Cards2T[i].Unit.sUnitData.charAt(18) == '1'){type = 2;}//inf
        //else if (Deck.Cards2T[i].Unit.sUnitData.charAt(19) == '1'){type = 3;}//sup
        //else if (Deck.Cards2T[i].Unit.sUnitData.charAt(20) == '1'){type = 4;}//tnk
        //else if (Deck.Cards2T[i].Unit.sUnitData.charAt(21) == '1'){type = 5;}//rec
        //else if (Deck.Cards2T[i].Unit.sUnitData.charAt(22) == '1'){type = 6;}//veh
        //else if (Deck.Cards2T[i].Unit.sUnitData.charAt(23) == '1'){type = 7;}//hel
        //else if (Deck.Cards2T[i].Unit.sUnitData.charAt(24) == '1'){type = 8;}//air
        //else if (Deck.Cards2T[i].Unit.sUnitData.charAt(25) == '1'){type = 9;}//nav
        type =9; //2 transports = naval inf.
        displayCard(Deck.Cards2T[i], type, counter);
        Deck.deckpoints += DA[type][counter[type]];
        counter[type] +=1;
    }
    for (var i = 0; i < Deck.Cards1T.length; i++)
    {
        Deck.Cards1T[i] = toSpec(Deck.Cards1T[i]);
        var type;
        if (Deck.Cards1T[i].Unit.sUnitData.charAt(17) == '1'){type = 1;}//logi
        else if (Deck.Cards1T[i].Unit.sUnitData.charAt(18) == '1'){type = 2;}//inf
        else if (Deck.Cards1T[i].Unit.sUnitData.charAt(19) == '1'){type = 3;}//sup
        else if (Deck.Cards1T[i].Unit.sUnitData.charAt(20) == '1'){type = 4;}//tnk
        else if (Deck.Cards1T[i].Unit.sUnitData.charAt(21) == '1'){type = 5;}//rec
        else if (Deck.Cards1T[i].Unit.sUnitData.charAt(22) == '1'){type = 6;}//veh
        else if (Deck.Cards1T[i].Unit.sUnitData.charAt(23) == '1'){type = 7;}//hel
        else if (Deck.Cards1T[i].Unit.sUnitData.charAt(24) == '1'){type = 8;}//air
        else if (Deck.Cards1T[i].Unit.sUnitData.charAt(25) == '1'){type = 9;}//nav
        else{type = 9;} //me=idiot, forgot to input naval
        displayCard(Deck.Cards1T[i], type, counter);
        Deck.deckpoints += DA[type][counter[type]];
        counter[type] +=1;
    }
    for (var i = 0; i < Deck.Cards0T.length; i++)
    {
        Deck.Cards0T[i] = toSpec(Deck.Cards0T[i]);
        var type;
        if (Deck.Cards0T[i].Unit.sUnitData.charAt(17) == '1'){type = 1;}//logi
        else if (Deck.Cards0T[i].Unit.sUnitData.charAt(18) == '1'){type = 2;}//inf
        else if (Deck.Cards0T[i].Unit.sUnitData.charAt(19) == '1'){type = 3;}//sup
        else if (Deck.Cards0T[i].Unit.sUnitData.charAt(20) == '1'){type = 4;}//tnk
        else if (Deck.Cards0T[i].Unit.sUnitData.charAt(21) == '1'){type = 5;}//rec
        else if (Deck.Cards0T[i].Unit.sUnitData.charAt(22) == '1'){type = 6;}//veh
        else if (Deck.Cards0T[i].Unit.sUnitData.charAt(23) == '1'){type = 7;}//hel
        else if (Deck.Cards0T[i].Unit.sUnitData.charAt(24) == '1'){type = 8;}//air
        else if (Deck.Cards0T[i].Unit.sUnitData.charAt(25) == '1'){type = 9;}//nav
        else{type = 9;} //me=idiot, forgot to input naval
        displayCard(Deck.Cards0T[i], type, counter);
        Deck.deckpoints += DA[type][counter[type]];
        counter[type] +=1;
    }
}


function resetDisplay()
{
    var flagstr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0]; //"0,0,0" = ISR, FIN, YU
    showFlags(flagstr);

    ractive.set("Buttons.bMotorized", "#fff");
    ractive.set("Buttons.bArmoured", "#fff");
    ractive.set("Buttons.bSupport", "#fff");
    ractive.set("Buttons.bMarine", "#fff");
    ractive.set("Buttons.bMechanized", "#fff");
    ractive.set("Buttons.bAirborne", "#fff");
    ractive.set("Buttons.bNaval", "#fff");
    ractive.set("Buttons.bGeneral", "#fff");
    ractive.set("Buttons.bA", "#fff");
    ractive.set("Buttons.bB", "#fff");
    ractive.set("Buttons.bC", "#fff");
/*
    for (var i = 1; i < 10; i++){
        for (var j = 1; j < 10; j++){
            document.getElementById("D" + j + i).innerHTML = "";
            document.getElementById("L" + j + i).innerHTML = "";
            document.getElementById("D0" + j + i).innerHTML = "";
            document.getElementById("L0" + j + i).innerHTML = "";
        }
    }*/
}

function updatePointsDisplay(DA)
{/*
    for (var i = 1; i < 10; i++){
        for (var j = 1; j < 10; j++){
                var uText = document.createElement("h3");
                uText.setAttribute("class","text-center");
                uText.setAttribute("line-height","50%");
                uText.innerHTML = DA[i][j];
                document.getElementById("D" + i + j).appendChild(uText);
        }
    }
    for (var i = 1; i < 10; i++){
        for (var j = 1; j < 10; j++){
                var uText = document.createElement("h2");
                uText.setAttribute("class","text-center");
                uText.innerHTML = DA[i][j];
                document.getElementById("D0" + i + j).appendChild(uText);
        }
    }*/
}
