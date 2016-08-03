function ModelGUI(){
    this.sDeckvar = document.getElementById("sDeckString");
    this.bDecode  = document.getElementById("bDecode");
    this.bClear  = document.getElementById("bClear");
    
    this.iNATO  = document.getElementById("iNATO");
    this.iREDFOR  = document.getElementById("iREDFOR");
    this.iBD  = document.getElementById("iBD");
    this.iCOM  = document.getElementById("iCOM");
    this.iEU  = document.getElementById("iEU");
    this.iLJ  = document.getElementById("iLJ");
    this.iNORAD  = document.getElementById("iNORAD");
    this.iSCA  = document.getElementById("iSCA");
    this.iBRDNL  = document.getElementById("iBRDNL");
    this.iNSWP  = document.getElementById("iNSWP");
    this.iRD  = document.getElementById("iRD");
    this.iRKA  = document.getElementById("iRKA");
    this.iANZAC  = document.getElementById("iANZAC");
    this.iBRD  = document.getElementById("iBRD");
    this.iCAN  = document.getElementById("iCAN");
    this.iDEN  = document.getElementById("iDEN");
    this.iFRA  = document.getElementById("iFRA");
    this.iJAP  = document.getElementById("iJAP");
    this.iNED  = document.getElementById("iNED");
    this.iNOR  = document.getElementById("iNOR");
    this.iROK  = document.getElementById("iROK");
    this.iSWE  = document.getElementById("iSWE");
    this.iUK  = document.getElementById("iUK");
    this.iUSA  = document.getElementById("iUSA");
    this.iISR  = document.getElementById("iISR");
    this.iCZS  = document.getElementById("iCZS");
    this.iDDR  = document.getElementById("iDDR");
    this.iDPRK  = document.getElementById("iDPRK");
    this.iPOL  = document.getElementById("iPOL");
    this.iPRC  = document.getElementById("iPRC");
    this.iUSSR  = document.getElementById("iUSSR");
    this.iFIN  = document.getElementById("iFIN");
    this.iYU  = document.getElementById("iYU");
    
    this.bMarine = document.getElementById("bMarine");
    this.bAirborne = document.getElementById("bAirborne");
    this.bMechanized = document.getElementById("bMechanized");
    this.bArmoured = document.getElementById("bArmoured");
    this.bMotorized = document.getElementById("bMotorized");
    this.bSupport = document.getElementById("bSupport");
    this.bGeneral = document.getElementById("bGeneral");
    this.bA = document.getElementById("bA");
    this.bB = document.getElementById("bB");
    this.bC = document.getElementById("bC");
    
    this.D11 = document.getElementById("D11")
    this.D12 = document.getElementById("D12")
    this.D13 = document.getElementById("D13")
    this.D14 = document.getElementById("D14")
    this.D15 = document.getElementById("D15")
    this.D16 = document.getElementById("D16")
    this.D17 = document.getElementById("D17")
    this.D18 = document.getElementById("D18")
    this.D19 = document.getElementById("D19")
    
    this.D21 = document.getElementById("D21")
    this.D22 = document.getElementById("D22")
    this.D23 = document.getElementById("D23")
    this.D24 = document.getElementById("D24")
    this.D25 = document.getElementById("D25")
    this.D26 = document.getElementById("D26")
    this.D27 = document.getElementById("D27")
    this.D28 = document.getElementById("D28")
    this.D29 = document.getElementById("D29")
    
    this.D31 = document.getElementById("D31")
    this.D32 = document.getElementById("D32")
    this.D33 = document.getElementById("D33")
    this.D34 = document.getElementById("D34")
    this.D35 = document.getElementById("D35")
    this.D36 = document.getElementById("D36")
    this.D37 = document.getElementById("D37")
    this.D38 = document.getElementById("D38")
    this.D39 = document.getElementById("D39")
    
    this.D41 = document.getElementById("D41")
    this.D42 = document.getElementById("D42")
    this.D43 = document.getElementById("D43")
    this.D44 = document.getElementById("D44")
    this.D45 = document.getElementById("D45")
    this.D46 = document.getElementById("D46")
    this.D47 = document.getElementById("D47")
    this.D48 = document.getElementById("D48")
    this.D49 = document.getElementById("D49")
    
    this.D51 = document.getElementById("D51")
    this.D52 = document.getElementById("D52")
    this.D53 = document.getElementById("D53")
    this.D54 = document.getElementById("D54")
    this.D55 = document.getElementById("D55")
    this.D56 = document.getElementById("D56")
    this.D57 = document.getElementById("D57")
    this.D58 = document.getElementById("D58")
    this.D59 = document.getElementById("D59")
    
    this.D61 = document.getElementById("D61")
    this.D62 = document.getElementById("D62")
    this.D63 = document.getElementById("D63")
    this.D64 = document.getElementById("D64")
    this.D65 = document.getElementById("D65")
    this.D66 = document.getElementById("D66")
    this.D67 = document.getElementById("D67")
    this.D68 = document.getElementById("D68")
    this.D69 = document.getElementById("D69")
    
    this.D71 = document.getElementById("D71")
    this.D72 = document.getElementById("D72")
    this.D73 = document.getElementById("D73")
    this.D74 = document.getElementById("D74")
    this.D75 = document.getElementById("D75")
    this.D76 = document.getElementById("D76")
    this.D77 = document.getElementById("D77")
    this.D78 = document.getElementById("D78")
    this.D79 = document.getElementById("D79")
    
    this.D81 = document.getElementById("D81")
    this.D82 = document.getElementById("D82")
    this.D83 = document.getElementById("D83")
    this.D84 = document.getElementById("D84")
    this.D85 = document.getElementById("D85")
    this.D86 = document.getElementById("D86")
    this.D87 = document.getElementById("D87")
    this.D88 = document.getElementById("D88")
    this.D89 = document.getElementById("D89")
    
    this.D91 = document.getElementById("D91")
    this.D92 = document.getElementById("D92")
    this.D93 = document.getElementById("D93")
    this.D94 = document.getElementById("D94")
    this.D95 = document.getElementById("D95")
    this.D96 = document.getElementById("D96")
    this.D97 = document.getElementById("D97")
    this.D98 = document.getElementById("D98")
    this.D99 = document.getElementById("D99")
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
 /*   var converter = new System.Windows.Media.BrushConverter();
    var brush = (Brush)converter.ConvertFromString("Lime");
    //spec
    key = Dicts.SPClook.FirstOrDefault(x => x.Value == DAmain.sSpec).Key;
    switch (key)
    {
        case 0://moto
            btMotorized.BorderBrush = brush;
            updatePointsDisplay(MainMatrix.moto);
            lbSpec.Content = "+2 cards, +1XP, -1 cost: Infantry, Recon, Vehicle";
            break;
        case 1://arm
            btArmoured.BorderBrush = brush;
            updatePointsDisplay(MainMatrix.armoured);
            lbSpec.Content = "+4 cards, +2XP, -1 cost: Tank";
            break;
        case 2://sup
            btSupport.BorderBrush = brush;
            updatePointsDisplay(MainMatrix.support);
            lbSpec.Content = "+4 cards,-1 cost: Logistics, Support;  +1XP: Support";
            break;
        case 3://mar
            btMarine.BorderBrush = brush;
            updatePointsDisplay(MainMatrix.marine);
            lbSpec.Content = "+2 cards, +1XP, -1 cost: Infantry, Vehicle";
            break;
        case 4://mec
            btMechanized.BorderBrush = brush;
            updatePointsDisplay(MainMatrix.mech);
            lbSpec.Content = "+4 cards, +1XP, -1 cost: Infantry, Vehicle";
            break;
        case 5://air
            btAirborne.BorderBrush = brush;
            updatePointsDisplay(MainMatrix.airborne);
            lbSpec.Content = "+4 cards, +1XP, -1 cost: Infantry, Helicopter, Airplane";
            break;
        case 6://nav
            break;
        case 7://gen
            btGeneral.BorderBrush = brush;
            updatePointsDisplay(MainMatrix.general);
            lbSpec.Content = "no bonus";
            break;
    }
    key = Dicts.ERAlook.FirstOrDefault(x => x.Value == DAmain.sEra).Key;
    switch (key)
    {
        case 0://C
            btCatC.BorderBrush = brush;
            lbEra.Content = "+10AP";
            Deck.deckpoitstotal += 10;
            break;
        case 1://B
            btCatB.BorderBrush = brush;
            lbEra.Content = "+5AP";
            Deck.deckpoitstotal += 5;
            break;
        case 2://A
            btCatA.BorderBrush = brush;
            lbEra.Content = "+0AP";
            break;
    }
    #endregion header display
    decklist = MasterDeck.dbDeckList();
    listUnits(decklist);
    dgDeckLog.ItemsSource = LOGLIST;
    dgDeckInf.ItemsSource = INFLIST;
    dgDeckSup.ItemsSource = SUPLIST;
    dgDeckTnk.ItemsSource = TNKLIST;
    dgDeckRec.ItemsSource = RECLIST;
    dgDeckVeh.ItemsSource = VEHLIST;
    dgDeckHel.ItemsSource = HELLIST;
    dgDeckAir.ItemsSource = AIRLIST;
    displayLogUnits(MasterDeck.LOG);
    displayInfUnits(MasterDeck.INF);
    displaySupUnits(MasterDeck.SUP);
    displayTnkUnits(MasterDeck.TNK);
    displayRecUnits(MasterDeck.REC);
    displayVehUnits(MasterDeck.VEH);
    displayHelUnits(MasterDeck.HEL);
    displayAirUnits(MasterDeck.AIR);
    LBPoints.Content = Deck.deckpoints + "/" + Deck.deckpoitstotal;
    PrintDebug();*/
}

function showFlags(x)
{
    if(x[0]==1){ }
    btNATO.Opacity = x[0];
    btREDFOR.Opacity = x[1];
    btBD.Opacity = x[2];
    btCOM.Opacity = x[3];
    btEU.Opacity = x[4];
    btLJ.Opacity = x[5];
    btNORAD.Opacity = x[6];
    btSCA.Opacity = x[7];
    btNSWP.Opacity = x[8];
    btRD.Opacity = x[9];
    btRKA.Opacity = x[10];
    btANZAC.Opacity = x[11];
    btBRD.Opacity = x[12];
    btCAN.Opacity = x[13];
    btDEN.Opacity = x[14];
    btFRA.Opacity = x[15];
    btJAP.Opacity = x[16];
    btNED.Opacity = x[17];
    btNOR.Opacity = x[18];
    btROK.Opacity = x[19];
    btSWE.Opacity = x[20];
    btUK.Opacity = x[21];
    btUSA.Opacity = x[22];
    btCZS.Opacity = x[23];
    btDDR.Opacity = x[24];
    btDPRK.Opacity = x[25];
    btPOL.Opacity = x[26];
    btPRC.Opacity = x[27];
    btUSSR.Opacity = x[28];
    btDutch.Opacity = x[29];
}
function displayUSA() {
    //BLU  RED  BD   CW   EU   LJ  NORAD SCA NSWP  RD   RKA ANZAC BRD  CAN  DEN  FRA  JAP  NED  NOR  ROK  SWE  UK   USA  CZS  DDR DPRK  POL  PRC USSR
    var flagstr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0 ];
    showFlags(flagstr);
    resetEncodeDGVs();
    lbNation.Content = "+10%, +15AP";
    deckpoitstotal += 15;
}