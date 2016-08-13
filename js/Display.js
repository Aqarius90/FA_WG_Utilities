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
            var btSpec = document.getElementById("bMotorized");
            btSpec.setAttribute("style","background-color: #0f0");
            updatePointsDisplay(Matrix.moto);
            document.getElementById("tspec").innerHTML = "+2 cards, +1XP, -1 cost: Infantry, Recon, Vehicle";
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
            var btSpec = document.getElementById("bArmoured");
            btSpec.setAttribute("style","background-color: #0f0");
            updatePointsDisplay(Matrix.armoured);
            document.getElementById("tspec").innerHTML = "+4 cards, +2XP, -1 cost: Tank";
            
            document.getElementById("v40").src = "rank/010.png";
            document.getElementById("v41").src = "rank/011.png";
            document.getElementById("v42").src = "rank/100.png";
            document.getElementById("v43").src = "rank/100.png";
            document.getElementById("v44").src = "rank/100.png";
            break;
        case 2://sup
            var btSpec = document.getElementById("bSupport");
            btSpec.setAttribute("style","background-color: #0f0");
            updatePointsDisplay(Matrix.support);
            document.getElementById("tspec").innerHTML = "+4 cards,-1 cost: Logistics, Support;  +1XP: Support";
            
            document.getElementById("v20").src = "rank/010.png";
            document.getElementById("v21").src = "rank/011.png";
            document.getElementById("v22").src = "rank/100.png";
            document.getElementById("v23").src = "rank/100.png";
            document.getElementById("v24").src = "rank/100.png";
            break;
        case 3://mar
            var btSpec = document.getElementById("bMarine");
            btSpec.setAttribute("style","background-color: #0f0");
            updatePointsDisplay(Matrix.marine);
            document.getElementById("tspec").innerHTML = "+2 cards, +1XP, -1 cost: Infantry, Vehicle";
            break;
        case 4://mec
            var btSpec = document.getElementById("bMechanized");
            btSpec.setAttribute("style","background-color: #0f0");
            updatePointsDisplay(Matrix.mech);
            document.getElementById("tspec").innerHTML = "+4 cards, +1XP, -1 cost: Infantry, Vehicle";
            
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
            var btSpec = document.getElementById("bAirborne");
            btSpec.setAttribute("style","background-color: #0f0");
            updatePointsDisplay(Matrix.airborne);
            document.getElementById("tspec").innerHTML = "+4 cards, +1XP, -1 cost: Infantry, Helicopter, Airplane";
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
            var btSpec = document.getElementById("bNaval");
            btSpec.setAttribute("style","background-color: #0f0");
            updatePointsDisplay(Matrix.naval);
            document.getElementById("tspec").innerHTML =  "ಠ_ಠ";
            break;
        case 7://gen
            var btSpec = document.getElementById("bGeneral");
            btSpec.setAttribute("style","background-color: #0f0");
            updatePointsDisplay(Matrix.general);
            document.getElementById("tspec").innerHTML =  "no bonus";
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
            var btSpec = document.getElementById("bC");
            btSpec.setAttribute("style","background-color: #0f0");
            document.getElementById("tera").innerHTML =  "+10AP";
            Deck.deckpoitstotal += 10;
            break;
        case 1://B
            var btSpec = document.getElementById("bB");
            btSpec.setAttribute("style","background-color: #0f0");
            document.getElementById("tera").innerHTML = "+5AP";
            Deck.deckpoitstotal += 5;
            break;
        case 2://A
            var btSpec = document.getElementById("bA");
            btSpec.setAttribute("style","background-color: #0f0");
            document.getElementById("tera").innerHTML = "+0AP";
            break;
    }
    displayUnits();
    listUnits();
    document.getElementById("pointstally").innerHTML =  Deck.deckpoints + "/" + Deck.deckpoitstotal;
}

function flagSwap(flagID, imageID) {
    var flag = document.getElementById("i"+flagID);
    var blackflag = document.createElement('img');
    blackflag.setAttribute("id", "i" + flagID);
    blackflag.setAttribute("class","img-responsive");
    blackflag.setAttribute("src","flags/"+imageID+".png");
    flag.parentNode.replaceChild(blackflag, flag);
}

function showFlags(x) {
     
    if(x[0]==1){flagSwap("NATO", "nato")}else{flagSwap("NATO", "natob")}        
    if(x[1]==1){flagSwap("REDFOR","REDFOR")}else{flagSwap("REDFOR","REDFORb")}
    if(x[2]==1){flagSwap("BD","BD")}else{flagSwap("BD","BDb")}     
    if(x[3]==1){flagSwap("COM","COM")}else{flagSwap("COM","COMb")}
    if(x[4]==1){flagSwap("EU","EU")}else{flagSwap("EU","EUb")}
    if(x[5]==1){flagSwap("LJ","LJ")}else{flagSwap("LJ","LJb")}
    if(x[6]==1){flagSwap("NORAD","NORAD")}else{flagSwap("NORAD","NORADb")}
    if(x[7]==1){flagSwap("SCA","SCA")}else{flagSwap("SCA","SCAb")}
    if(x[8]==1){flagSwap("NSWP","NSWP")}else{flagSwap("NSWP","NSWPb")}
    if(x[9]==1){flagSwap("RD","RD")}else{flagSwap("RD","RDb")}
    if(x[10]==1){flagSwap("RKA","RKA")}else{flagSwap("RKA","RKAb")}
    if(x[11]==1){flagSwap("ANZAC","ANZAC")}else{flagSwap("ANZAC","ANZACb")}
    if(x[12]==1){flagSwap("BRD","BRD")}else{flagSwap("BRD","BRDb")}
    if(x[13]==1){flagSwap("CAN","CAN")}else{flagSwap("CAN","CANb")}
    if(x[14]==1){flagSwap("DEN","DEN")}else{flagSwap("DEN","DENb")}
    if(x[15]==1){flagSwap("FRA","FRA")}else{flagSwap("FRA","FRAb")}
    if(x[16]==1){flagSwap("JAP","JAP")}else{flagSwap("JAP","JAPb")}
    if(x[17]==1){flagSwap("NED","NED")}else{flagSwap("NED","NEDb")}
    if(x[18]==1){flagSwap("NOR","NOR")}else{flagSwap("NOR","NORb")}
    if(x[19]==1){flagSwap("ROK","ROK")}else{flagSwap("ROK","ROKb")}
    if(x[20]==1){flagSwap("SWE","SWE")}else{flagSwap("SWE","SWEb")}
    if(x[21]==1){flagSwap("UK","UK")}else{flagSwap("UK","UKb")}
    if(x[22]==1){flagSwap("USA","USA")}else{flagSwap("USA","USAb")}
    if(x[23]==1){flagSwap("CZS","CZS")}else{flagSwap("CZS","CZSb")}
    if(x[24]==1){flagSwap("DDR","DDR")}else{flagSwap("DDR","DDRb")}
    if(x[25]==1){flagSwap("DPRK","DPRK")}else{flagSwap("DPRK","DPRKb")}
    if(x[26]==1){flagSwap("POL","POL")}else{flagSwap("POL","POLb")}
    if(x[27]==1){flagSwap("PRC","PRC")}else{flagSwap("PRC","PRCb")}
    if(x[28]==1){flagSwap("USSR","USSR")}else{flagSwap("USSR","USSRb")}
    if(x[29]==1){flagSwap("BRDNL","BRDNL")}else{flagSwap("BRDNL","BRDNLb")}
    if(x[30]==1){flagSwap("ISR","ISR")}else{flagSwap("ISR","ISRb")}
    if(x[31]==1){flagSwap("FIN","FIN")}else{flagSwap("FIN","FINb")}
    if(x[32]==1){flagSwap("YU","YU")}else{flagSwap("YU","YUb")}
}
function displayUSA() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML = "+10%, +15AP";
    Deck.deckpoitstotal += 15;
}
                        
function displayUK() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML =  "+20%, +15AP";
    Deck.deckpoitstotal += 15;
}

function displayFRA() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML =  "+20%, +15AP";
    Deck.deckpoitstotal += 15;
}

function displayBRD() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML =  "+20%, +15AP";
    Deck.deckpoitstotal += 15;
}   

function displayCAN() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML =  "+40%, +15AP";
    Deck.deckpoitstotal += 15;
}

function displayDEN(){
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML =  "+40%, +15AP";
    Deck.deckpoitstotal += 15;
}

function displaySWE() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML =  "+30%, +15AP";
    Deck.deckpoitstotal += 15;
}

function displayNOR() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML =  "+40%, +15AP";
    Deck.deckpoitstotal += 15;
}

function displayANZAC() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML =  "+30%, +15AP";
    Deck.deckpoitstotal += 15;
}

function displayJAP() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML = "+30%, +15AP";
    Deck.deckpoitstotal += 15;
}

function displayROK() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML = "+30%, +15AP";
    Deck.deckpoitstotal += 15;
}

function displayNED() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML = "+20%, +15AP";
    Deck.deckpoitstotal += 15;
}

function displayEU() {
    var flagstr = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML = "+0%, +10AP";
    Deck.deckpoitstotal += 10;
}

function displaySCA() {
    var flagstr = [0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML = "+15%, +10AP";
    Deck.deckpoitstotal += 10;
}

function displayCOM() {
    var flagstr = [0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML = "+10%, +10AP";
    Deck.deckpoitstotal += 10;
}

function displayBD() {
    var flagstr = [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML = "+20%, +10AP";
    Deck.deckpoitstotal += 10;
}

function displayLJ() {
    var flagstr = [0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML = "+15%, +10AP";
    Deck.deckpoitstotal += 10;
}

function displayNORAD() {
    var flagstr = [0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML = "+0%, +10AP";
    Deck.deckpoitstotal += 10;
}

function displayBDRNL() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML = "+10%, +10AP";
    Deck.deckpoitstotal += 10;
}

function displayNato() {
    var flagstr = [1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML = "No bonus";
}

function displayDDR() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML = "+20%, +15AP";
    Deck.deckpoitstotal += 15;
}

function displayUSSR() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML = "+10%, +15AP";
    Deck.deckpoitstotal += 15;
}

function displayPOL() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML = "+20%, +15AP";
    Deck.deckpoitstotal += 15;
}

function displayCZS() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML = "+30%, +15AP";
    Deck.deckpoitstotal += 15;
}

function displayPRC() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML = "+30%, +15AP";
    Deck.deckpoitstotal += 15;
}

function displayDPRK() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML = "+40%, +15AP";
    Deck.deckpoitstotal += 15;
}

function displayRD() {
    var flagstr = [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML = "+20%, +10AP";
    Deck.deckpoitstotal += 10;
}

function displayNSWP() {
    var flagstr = [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML = "+15%, +10AP";
    Deck.deckpoitstotal += 10;
}

function displayRKA() {
    var flagstr = [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML = "+0%, +10AP";
    Deck.deckpoitstotal += 10;
}

function displayREDFOR() {
    var flagstr = [0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0];
    showFlags(flagstr);
    document.getElementById("tnation").innerHTML = "No bonus";
}

function addDataImage(x, prefix, y, spec){      
    var iData = document.createElement("img");
    iData.src = "png/" + spec + ".png";
    iData.setAttribute("class", "img-responsive");
    iData.setAttribute("style", "position: absolute; top: 0; left: 0;");
    document.getElementById("D" + prefix + x + y).appendChild(iData);
}

function displayCard(card, prefix,type, pos){
    var isUnavailable = isError(card);
    
    document.getElementById("D" + prefix + type + pos[type]).innerHTML = "";      
          
    var iData = document.createElement("img");
    iData.src = "png/blank.png";``
    iData.setAttribute("class", "img-responsive");
    iData.setAttribute("style", "position: relative; top: 0; left: 0;");
    document.getElementById("D" + prefix + type + pos[type]).appendChild(iData); 
    card.iArrayIndex =""+ type + pos[type];   
    
    if (prefix == '0'){
        let temp = pos[type];
        let elem = document.createElement('input');
        elem.type = 'button';
        elem.value = 'DELETE';
        elem.onclick = function(){CardDelete(type*10+ temp);}; //closure escape via math. FML
        document.getElementById("L0" + type + pos[type]).appendChild(elem); 
    }
    
    //unit name
    var uText = document.createElement("h6");
    uText.innerHTML = card.Unit.sNameU;
    document.getElementById("L" + prefix + type + pos[type]).appendChild(uText); 
    if(card.Transport != "0"){
        uText.innerHTML = card.Unit.sNameU + "<br>" + card.Transport.sNameU ;
        document.getElementById("L" + prefix + type + pos[type]).appendChild(uText);
    }
    if(card.Craft != "0"){
        uText.innerHTML = card.Unit.sNameU + "<br>" + card.Transport.sNameU + "<br>" + card.Craft.sNameU;
        document.getElementById("L" + prefix + type + pos[type]).appendChild(uText);
    }
    
    if (isUnavailable == true) { addDataImage(type, prefix, pos[type], "INVALID"); } 

    if (card.Unit.sUnitData.charAt(0)== '1') { addDataImage(type, prefix, pos[type], "antiair"); }
    if (card.Unit.sUnitData.charAt(1)== '1') { addDataImage(type, prefix, pos[type], "AAM"); }
    if (card.Unit.sUnitData.charAt(2)== '1') { addDataImage(type, prefix, pos[type], "armour"); }
    if (card.Unit.sUnitData.charAt(3)== '1') { addDataImage(type, prefix, pos[type], "atgm"); }
    if (card.Unit.sUnitData.charAt(4)== '1') { addDataImage(type, prefix, pos[type], "carrier"); }
    if (card.Unit.sUnitData.charAt(5)== '1') { addDataImage(type, prefix, pos[type], "CMD"); }
    if (card.Unit.sUnitData.charAt(6)== '1') { addDataImage(type, prefix, pos[type], "helo"); }
    if (card.Unit.sUnitData.charAt(7)== '1') { addDataImage(type, prefix, pos[type], "inf"); }
    if (card.Unit.sUnitData.charAt(8)== '1') { addDataImage(type, prefix, pos[type], "log"); }
    if (card.Unit.sUnitData.charAt(9)== '1') { addDataImage(type, prefix, pos[type], "eng"); }
    if (card.Unit.sUnitData.charAt(10) == '1') { addDataImage(type, prefix, pos[type], "plane"); }
    if (card.Unit.sUnitData.charAt(11) == '1') { addDataImage(type, prefix, pos[type], "rad"); }
    if (card.Unit.sUnitData.charAt(12) == '1') { addDataImage(type, prefix, pos[type], "rocket"); }
    if (card.Unit.sUnitData.charAt(13) == '1') { addDataImage(type, prefix, pos[type], "mtr"); }
    if (card.Unit.sUnitData.charAt(14) == '1') { addDataImage(type, prefix, pos[type], "rec"); }
    if (card.Unit.sUnitData.charAt(14) == '2') { addDataImage(type, prefix, pos[type], "rec2"); }
    if (card.Unit.sUnitData.charAt(14) == '3') { addDataImage(type, prefix, pos[type], "rec3"); }
    if (card.Unit.sUnitData.charAt(15) == '1') { addDataImage(type, prefix, pos[type], "tube"); }
    if (card.Unit.sUnitData.charAt(16) == '1') { addDataImage(type, prefix, pos[type], "rad"); }
        
    //cost
    uText = document.createElement("h5");
    uText.innerHTML = card.iCost;
    uText.setAttribute("style","position: absolute; bottom: 0; right: 0; color:#ff0; font-weight:900;");
    document.getElementById("D" + prefix + type + pos[type]).appendChild(uText);
            
    //avail
    var aText = document.createElement("h5");
    aText.innerHTML = card.iaAvailability[card.iVet0];
    aText.setAttribute("style","position: absolute; bottom: 0; left: 35%; color:#fff; font-weight:900;");
    document.getElementById("D" + prefix + type + pos[type]).appendChild(aText);
    
    //flag
    iData = document.createElement("img");
    iData.src = "flags/" + card.sNation + ".png";
    iData.setAttribute("class", "img-thumbnail");
    iData.setAttribute("style", "position: absolute; top: 0; left: 0;");
    document.getElementById("D" + prefix + type + pos[type]).appendChild(iData);
    
    //vet
    iData = document.createElement("img");
    iData.src = "rank/" + card.sVeterancy + ".png";
    iData.setAttribute("class", "img-thumbnail-mini");
    iData.setAttribute("style", "position: absolute; bottom: 0; left: 0;");
    document.getElementById("D" + prefix + type + pos[type]).appendChild(iData);
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
        displayCard(Deck.Cards2T[i], "", type, counter);
        displayCard(Deck.Cards2T[i], "0", type, counter);  
        Deck.deckpoints += DA[type-1][counter[type-1]];
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
        displayCard(Deck.Cards1T[i], "", type, counter);
        displayCard(Deck.Cards1T[i], "0", type, counter);  
        Deck.deckpoints += DA[type-1][counter[type-1]];
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
        displayCard(Deck.Cards0T[i], "", type, counter);
        displayCard(Deck.Cards0T[i], "0", type, counter); 
        Deck.deckpoints += DA[type-1][counter[type-1]];
        counter[type] +=1;         
    } 
}


function resetDisplay()
{
//  if (decklist != null)
//  {
//      decklist.Clear();
//  }
    
    
    var flagstr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0]; //"0,0,0" = ISR, FIN, YU
    showFlags(flagstr);
    
    
    var btSpec = document.getElementById("bMotorized");
            btSpec.setAttribute("style","background-color: #fff");
    btSpec = document.getElementById("bArmoured");
            btSpec.setAttribute("style","background-color: #fff");
    btSpec = document.getElementById("bSupport");
            btSpec.setAttribute("style","background-color: #fff");
    btSpec = document.getElementById("bMarine");
            btSpec.setAttribute("style","background-color: #fff");
    btSpec = document.getElementById("bMechanized");
            btSpec.setAttribute("style","background-color: #fff");
    btSpec = document.getElementById("bAirborne");
            btSpec.setAttribute("style","background-color: #fff");
    btSpec = document.getElementById("bNaval");
            btSpec.setAttribute("style","background-color: #fff");
    btSpec = document.getElementById("bGeneral");
            btSpec.setAttribute("style","background-color: #fff");
    btSpec = document.getElementById("bA");
            btSpec.setAttribute("style","background-color: #fff");
    btSpec = document.getElementById("bB");
            btSpec.setAttribute("style","background-color: #fff");
    btSpec = document.getElementById("bC");
            btSpec.setAttribute("style","background-color: #fff");

    for (var i = 1; i < 10; i++){
        for (var j = 1; j < 10; j++){
            document.getElementById("D" + j + i).innerHTML = "";            
            document.getElementById("L" + j + i).innerHTML = "";  
            document.getElementById("D0" + j + i).innerHTML = "";      
            document.getElementById("L0" + j + i).innerHTML = "";
        }   
    }        
}

function updatePointsDisplay(DA)
{
    for (var i = 1; i < 10; i++){
        for (var j = 1; j < 10; j++){       
                var uText = document.createElement("h3");
                uText.setAttribute("class","text-center");
                uText.setAttribute("line-height","50%"); 
                uText.innerHTML = DA[i-1][j-1];
                document.getElementById("D" + i + j).appendChild(uText);
        }   
    }
    for (var i = 1; i < 10; i++){
        for (var j = 1; j < 10; j++){       
                var uText = document.createElement("h2");
                uText.setAttribute("class","text-center");   
                uText.innerHTML = DA[i-1][j-1];
                document.getElementById("D0" + i + j).appendChild(uText);
        }   
    }
}





