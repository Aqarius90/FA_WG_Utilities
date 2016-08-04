function ModelGUI(){
    this.sDeckvar = $("sDeckString");
    this.bDecode  = $("bDecode");
    this.bClear  = $("bClear");
}

function GUIDisplay() {

  //  updatePointsDisplay(MainMatrix.blank);
    Deck.deckpoints = 0;
    Deck.deckpoitstotal = 45;
//    resetDisplay();
    //nation
    switch (Deck.iNation)
    {
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
            btSpec.setAttribute("class","#btn btn-default btn-block btn-spec");
            //updatePointsDisplay(MainMatrix.moto);
            //lbSpec.Content = "+2 cards, +1XP, -1 cost: Infantry, Recon, Vehicle";
            break;
        case 1://arm
            var btSpec = document.getElementById("bArmoured");
            btSpec.setAttribute("class","#btn btn-default btn-block btn-spec");
            //updatePointsDisplay(MainMatrix.armoured);
            //lbSpec.Content = "+4 cards, +2XP, -1 cost: Tank";
            break;
        case 2://sup
            var btSpec = document.getElementById("bSupport");
            btSpec.setAttribute("class","#btn btn-default btn-block btn-spec");
        /*  updatePointsDisplay(MainMatrix.support);
            lbSpec.Content = "+4 cards,-1 cost: Logistics, Support;  +1XP: Support";*/
            break;
        case 3://mar
            var btSpec = document.getElementById("bMarine");
            btSpec.setAttribute("class","#btn btn-default btn-block btn-spec");
        /*  updatePointsDisplay(MainMatrix.marine);
            lbSpec.Content = "+2 cards, +1XP, -1 cost: Infantry, Vehicle";*/
            break;
        case 4://mec
            var btSpec = document.getElementById("bMechanized");
            btSpec.setAttribute("class","#btn btn-default btn-block btn-spec");
        /*  updatePointsDisplay(MainMatrix.mech);
            lbSpec.Content = "+4 cards, +1XP, -1 cost: Infantry, Vehicle";*/
            break;
        case 5://air
            var btSpec = document.getElementById("bAirborne");
            btSpec.setAttribute("class","#btn btn-default btn-block btn-spec");
     /*     updatePointsDisplay(MainMatrix.airborne);
            lbSpec.Content = "+4 cards, +1XP, -1 cost: Infantry, Helicopter, Airplane";*/
            break;
        case 6://nav
    //        var btSpec = document.getElementById("bGeneral");
      //      btSpec.setAttribute("class","#btn btn-default btn-block btn-spec");
            break;
        case 7://gen
            var btSpec = document.getElementById("bGeneral");
            btSpec.setAttribute("class","#btn btn-default btn-block btn-spec");
    /*      updatePointsDisplay(MainMatrix.general);
            lbSpec.Content = "no bonus";*/
            break;
    }
    switch (Deck.iEra)
    {
        case 0://C
            var btSpec = document.getElementById("bC");
            btSpec.setAttribute("class","#btn btn-default btn-block btn-spec");
         //   lbEra.Content = "+10AP";
           // Deck.deckpoitstotal += 10;
            break;
        case 1://B
            var btSpec = document.getElementById("bB");
            btSpec.setAttribute("class","#btn btn-default btn-block btn-spec");
        //    lbEra.Content = "+5AP";
         //   Deck.deckpoitstotal += 5;
            break;
        case 2://A
            var btSpec = document.getElementById("bA");
          //  btSpec.setAttribute("class","#btn btn-default btn-block btn-spec");
        //    lbEra.Content = "+0AP";
            break;
    }
    
  /*  decklist =Deck.dbDeckList();
    listUnits(decklist);
    dgDeckLog.ItemsSource = LOGLIST;
    dgDeckInf.ItemsSource = INFLIST;
    dgDeckSup.ItemsSource = SUPLIST;
    dgDeckTnk.ItemsSource = TNKLIST;
    dgDeckRec.ItemsSource = RECLIST;
    dgDeckVeh.ItemsSource = VEHLIST;
    dgDeckHel.ItemsSource = HELLIST;
    dgDeckAir.ItemsSource = AIRLIST;*/
    console.log(Deck.Cards2T);
    displayUnits();
    //LBPoints.Content = Deck.deckpoints + "/" + Deck.deckpoitstotal;
}

function flagSwap(flagID, imageID) {
    var flag = document.getElementById("i"+flagID);
    var blackflag = document.createElement('img');
    blackflag.setAttribute("id",flagID);
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
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR BRDNL ISR FIN YU
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
        // resetEncodeDGVs();
        // lbNation.Content = "+10%, +15AP";
        // deckpoitstotal += 15;
}
                        
function displayUK(){
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    //resetEncodeDGVs();
    //lbNation.Content = "+20%, +15AP";
    //deckpoitstotal += 15;
}

function displayFRA()
{
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);

    //resetEncodeDGVs();
    //lbNation.Content = "+20%, +15AP";
    //deckpoitstotal += 15;
}

function displayBRD()
{
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);

    //resetEncodeDGVs();
    //lbNation.Content = "+20%, +15AP";
    //deckpoitstotal += 15;
}   

function displayCAN()
{
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);

    //resetEncodeDGVs();
    //lbNation.Content = "+40%, +15AP";
    //deckpoitstotal += 15;
}

function displayDEN()
{
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);

    //resetEncodeDGVs();
    //lbNation.Content = "+40%, +15AP";
    //deckpoitstotal += 15;
}

function displaySWE()
{
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);

    //resetEncodeDGVs();
    //lbNation.Content = "+30%, +15AP";
    //deckpoitstotal += 15;
}

function displayNOR()
{
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);

    //resetEncodeDGVs();
    //lbNation.Content = "+40%, +15AP";
    //deckpoitstotal += 15;
}

function displayANZAC()
{
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);

    //resetEncodeDGVs();
    //lbNation.Content = "+30%, +15AP";
    //deckpoitstotal += 15;
}

function displayJAP()
{
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);

    //resetEncodeDGVs();
    //lbNation.Content = "+30%, +15AP";
    //deckpoitstotal += 15;
}

function displayROK()
{
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);

    //resetEncodeDGVs();
    //lbNation.Content = "+30%, +15AP";
    //deckpoitstotal += 15;
}

function displayNED()
{
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);

    //resetEncodeDGVs();
    //lbNation.Content = "+20%, +15AP";
    //deckpoitstotal += 15;
}

function displayEU()
{
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);

    //resetEncodeDGVs();
    //lbNation.Content = "+0%, +10AP";
    //deckpoitstotal += 10;
}

function displaySCA()
{
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);

    //resetEncodeDGVs();
    //lbNation.Content = "+15%, +10AP";
    //deckpoitstotal += 10;
}

function displayCOM()
{
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);

    //resetEncodeDGVs();
    //lbNation.Content = "+10%, +10AP";
    //deckpoitstotal += 10;
}

function displayBD()
{
    var flagstr = [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);
    //resetEncodeDGVs();
    //lbNation.Content = "+20%, +10AP";
    //deckpoitstotal += 10;
}

function displayLJ()
{
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);

    //resetEncodeDGVs();
    //lbNation.Content = "+15%, +10AP";
    //deckpoitstotal += 10;
}

function displayNORAD()
{
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);

    //resetEncodeDGVs();
    //lbNation.Content = "+0%, +10AP";
    //deckpoitstotal += 10;
}

function displayBDRNL()
{
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR, Dutch
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0];
    showFlags(flagstr);

    //resetEncodeDGVs();
    //lbNation.Content = "+10%, +10AP";
    //deckpoitstotal += 10;
}

function displayNato()
{
    var flagstr = [1,0,1,1, 1,1, 1,1,0,0,0,1,1, 1,1, 1,1, 1,1, 1,1, 1,1,0,0,0,0,0,0,1,0,0,0];
    showFlags(flagstr);
    //resetEncodeDGVs();
    //lbNation.Content = "No bonus";
}

function displayDDR()
{
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0];
    showFlags(flagstr);

    //resetEncodeDGVs();
    //lbNation.Content = "+20%, +15AP";
    //deckpoitstotal += 15;
}

function displayUSSR()
{
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0];
    showFlags(flagstr);

    //resetEncodeDGVs();
    //lbNation.Content = "+10%, +15AP";
    //deckpoitstotal += 15;
}

function displayPOL()
{
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0];
    showFlags(flagstr);

    //resetEncodeDGVs();
    //lbNation.Content = "+20%, +15AP";
    //deckpoitstotal += 15;
}

function displayCZS()
{
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];
    showFlags(flagstr);

    //resetEncodeDGVs();
    //lbNation.Content = "+30%, +15AP";
    //deckpoitstotal += 15;
}

function displayPRC()
{
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0];
    showFlags(flagstr);

    //resetEncodeDGVs();
    //lbNation.Content = "+30%, +15AP";
    //deckpoitstotal += 15;
}

function displayDPRK()
{
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0];
    showFlags(flagstr);

    //resetEncodeDGVs();
    //lbNation.Content = "+40%, +15AP";
    //deckpoitstotal += 15;
}

function displayRD()
{
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0];
    showFlags(flagstr);
    //resetEncodeDGVs();
    //lbNation.Content = "+20%, +10AP";
    //deckpoitstotal += 10;
}

function displayNSWP()
{
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0];
    showFlags(flagstr);

    //resetEncodeDGVs();
    //lbNation.Content = "+15%, +10AP";
    //deckpoitstotal += 10;
}

function displayRKA()
{
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0];
    showFlags(flagstr);

    //resetEncodeDGVs();
    //lbNation.Content = "+0%, +10AP";
    //deckpoitstotal += 10;
}

function displayREDFOR()
{
    var flagstr = [0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0];
    showFlags(flagstr);
    //resetEncodeDGVs();
    //lbNation.Content = "No bonus";
}

function addDataImage(x, y, spec){      
    var iData = document.createElement("img");
    iData.src = "png/" + spec + ".png";
    iData.setAttribute("class", "img-responsive");
    iData.setAttribute("style", "position: absolute; top: 0; left: 0;");
    document.getElementById("D" + x + y).appendChild(iData);
}

function displayCard(card, type, pos){
    
    var  unitDisplay = document.getElementById("D" + type + pos[type]);        
    var iData = document.createElement("img");
    iData.src = "png/blank.png";
    iData.setAttribute("class", "img-responsive");
    iData.setAttribute("style", "position: relative; top: 0; left: 0;");
    console.log("D" + type + pos[type]);
    unitDisplay.appendChild(iData);
    
    card.iArrayIndex =""+ type + pos;
    /*
    LOG01.Visibility = System.Windows.Visibility.Visible;
    laLOG01.Content = Card.Unit.sNameU;
    laLOG01.Visibility = Visibility.Visible;
    LOGFL01.Source = bitmap;*/
    //if (isUnavailable == true) { LOG01ERR.Visibility = System.Windows.Visibility.Visible; }
    
    if (card.Unit.sUnitData.charAt(0)== '1') { addDataImage(type, pos[type], "antiair"); }
    if (card.Unit.sUnitData.charAt(1)== '1') { addDataImage(type, pos[type], "AAM"); }
    if (card.Unit.sUnitData.charAt(2)== '1') { addDataImage(type, pos[type], "armour"); }
    if (card.Unit.sUnitData.charAt(3)== '1') { addDataImage(type, pos[type], "atgm"); }
    if (card.Unit.sUnitData.charAt(4)== '1') { addDataImage(type, pos[type], "carrier"); }
    if (card.Unit.sUnitData.charAt(5)== '1') { addDataImage(type, pos[type], "CMD"); }
    if (card.Unit.sUnitData.charAt(6)== '1') { addDataImage(type, pos[type], "helo"); }
    if (card.Unit.sUnitData.charAt(7)== '1') { addDataImage(type, pos[type], "inf"); }
    if (card.Unit.sUnitData.charAt(8)== '1') { addDataImage(type, pos[type], "log"); }
    if (card.Unit.sUnitData.charAt(9)== '1') { addDataImage(type, pos[type], "eng"); }
    if (card.Unit.sUnitData.charAt(10) == '1') { addDataImage(type, pos[type], "plane"); }
    if (card.Unit.sUnitData.charAt(11) == '1') { addDataImage(type, pos[type], "rad"); }
    if (card.Unit.sUnitData.charAt(12) == '1') { addDataImage(type, pos[type], "rocket"); }
    if (card.Unit.sUnitData.charAt(13) == '1') { addDataImage(type, pos[type], "mtr"); }
    if (card.Unit.sUnitData.charAt(14) == '1') { addDataImage(type, pos[type], "rec"); }
    if (card.Unit.sUnitData.charAt(14) == '2') { addDataImage(type, pos[type], "rec2"); }
    if (card.Unit.sUnitData.charAt(14) == '3') { addDataImage(type, pos[type], "rec3"); }
    if (card.Unit.sUnitData.charAt(15) == '1') { addDataImage(type, pos[type], "tube"); }
    if (card.Unit.sUnitData.charAt(16) == '1') { addDataImage(type, pos[type], "rad"); }
    //LOG02.Visibility = System.Windows.Visibility.Visible;
    //laLOG02.Content = Card.Unit.sNameU;
    //laLOG02.Visibility = Visibility.Visible;
    //LOGFL02.Source = bitmap;
    //LOGco02.Content = Card.iCost;
        /*
        
        
                LOG01.Visibility = System.Windows.Visibility.Visible;
                laLOGc01.Content = Card.Transport.sNameU;
                laLOGc01.Visibility = Visibility.Visible;
                LOG02.Visibility = System.Windows.Visibility.Visible;
                laLOGc02.Content = Card.Transport.sNameU;
                laLOGc02.Visibility = Visibility.Visible;
        var uri = new Uri("flags/" + Card.sNation + ".png", UriKind.Relative);
                break;
                <div id="D11" style="position: relative; left: 0; top: 0;">
                  <img src="png/blank.png" class="img-responsive" style="position: relative; top: 0; left: 0;"/>
                  <img src="png/blank.png" class="img-responsive" style="position: absolute; top: 0px; left: 0px;"/>
                </div>*/
    
    
    
    
}

function displayUnits()
{
    var counter = [0,1,1,1,1,1,1,1,1,1];
    //var isUnavailable = isError(Card);
    for (var i = 0; i < Deck.Cards2T.length; i++)
    {
        var type;
        if (Deck.Cards2T[i].Unit.sUnitData.charAt(17) == '1'){type = 1;}//logi
        if (Deck.Cards2T[i].Unit.sUnitData.charAt(18) == '1'){type = 2;}//inf
        if (Deck.Cards2T[i].Unit.sUnitData.charAt(19) == '1'){type = 3;}//sup
        if (Deck.Cards2T[i].Unit.sUnitData.charAt(20) == '1'){type = 4;}//tnk
        if (Deck.Cards2T[i].Unit.sUnitData.charAt(21) == '1'){type = 5;}//rec
        if (Deck.Cards2T[i].Unit.sUnitData.charAt(22) == '1'){type = 6;}//veh
        if (Deck.Cards2T[i].Unit.sUnitData.charAt(23) == '1'){type = 7;}//hel
        if (Deck.Cards2T[i].Unit.sUnitData.charAt(24) == '1'){type = 8;}//air
        if (Deck.Cards2T[i].Unit.sUnitData.charAt(25) == '1'){type = 9;}//nav
        displayCard(Deck.Cards2T[i], type, counter);
        //showname
        //showifv
        //showcraft
        counter[type] +=1;         
    } 
    for (var i = 0; i < Deck.Cards1T.length; i++)
    {
        var type;
        if (Deck.Cards1T[i].Unit.sUnitData.charAt(17) == '1'){type = 1;}//logi
        if (Deck.Cards1T[i].Unit.sUnitData.charAt(18) == '1'){type = 2;}//inf
        if (Deck.Cards1T[i].Unit.sUnitData.charAt(19) == '1'){type = 3;}//sup
        if (Deck.Cards1T[i].Unit.sUnitData.charAt(20) == '1'){type = 4;}//tnk
        if (Deck.Cards1T[i].Unit.sUnitData.charAt(21) == '1'){type = 5;}//rec
        if (Deck.Cards1T[i].Unit.sUnitData.charAt(22) == '1'){type = 6;}//veh
        if (Deck.Cards1T[i].Unit.sUnitData.charAt(23) == '1'){type = 7;}//hel
        if (Deck.Cards1T[i].Unit.sUnitData.charAt(24) == '1'){type = 8;}//air
        if (Deck.Cards1T[i].Unit.sUnitData.charAt(25) == '1'){type = 9;}//nav
        displayCard(Deck.Cards1T[i], type, counter);
        //showname
        //showifv
        //showcraft
        counter[type] +=1;         
    } 
    for (var i = 0; i < Deck.Cards0T.length; i++)
    {
        var type;
        if (Deck.Cards0T[i].Unit.sUnitData.charAt(17) == '1'){type = 1;}//logi
        if (Deck.Cards0T[i].Unit.sUnitData.charAt(18) == '1'){type = 2;}//inf
        if (Deck.Cards0T[i].Unit.sUnitData.charAt(19) == '1'){type = 3;}//sup
        if (Deck.Cards0T[i].Unit.sUnitData.charAt(20) == '1'){type = 4;}//tnk
        if (Deck.Cards0T[i].Unit.sUnitData.charAt(21) == '1'){type = 5;}//rec
        if (Deck.Cards0T[i].Unit.sUnitData.charAt(22) == '1'){type = 6;}//veh
        if (Deck.Cards0T[i].Unit.sUnitData.charAt(23) == '1'){type = 7;}//hel
        if (Deck.Cards0T[i].Unit.sUnitData.charAt(24) == '1'){type = 8;}//air
        if (Deck.Cards0T[i].Unit.sUnitData.charAt(25) == '1'){type = 9;}//nav
        displayCard(Deck.Cards0T[i], type, counter);
        //showname
        //showifv
        //showcraft
        counter[type] +=1;         
    } 
}








