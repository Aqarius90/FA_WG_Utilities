  var ractiveHeader = new Ractive({
    el: 'ankerHeader',
    template: '#templateHeader',
    data: {
            unloaded: true,
            sDeckString: '',
            flags: {
                    NATO: 'NATO',
                    REDFOR: 'REDFOR',
                    BD:   'BD',
                    COM:  'COM',
                    EU:   'EU',
                    LJ:   'LJ',
                    NORAD:'NORAD',
                    SCA:  'SCA',
                    BRDNL:'BRDNL',
                    NSWP: 'NSWP',
                    RD:   'RD',
                    RKA:  'RKA',
                    ANZAC:'ANZAC',
                    BRD:  'BRD',
                    CAN:  'CAN',
                    DEN:  'DEN',
                    FRA:  'FRA',
                    JAP:  'JAP',
                    NED:  'NED',
                    NOR:  'NOR',
                    ROK:  'ROK',
                    SWE:  'SWE',
                    UK:   'UK',
                    USA:  'USA',
                    CZS:  'CZS',
                    DDR:  'DDR',
                    DPRK: 'DPRK',
                    POL:  'POL',
                    PRC:  'PRC',
                    USSR: 'USSR',
                    FIN: 'xFIN',
                    YU:  'xYU',
                    ISR: 'xISR'
                  },
          Buttons : {
            bMarine: '#fff',
            bAirborne: '#fff',
            bMechanized: '#fff',
            bArmoured: '#fff',
            bMotorized: '#fff',
            bSupport: '#fff',
            bNaval: '#fff',
            bGeneral: '#fff',
            bA: '#fff',
            bB: '#fff',
            bC: '#fff'
          },
          lab:{
            tnation : '',
            tspec: '',
            tera: '',
            pointstally:''
          }
        }
      });
  var ractiveDeck = new Ractive({
    el: 'ankerDeck',
    template: '#templateDeck',
    data: {
          debug: '',
          sBinary:'',
          DeckView:{D11:'', D12:'', D13:'', D14:'', D15:'', D16:'', D17:'', D18:'', D19:'', D21:'', D22:'', D23:'', D24:'', D25:'', D26:'', D27:'', D28:'', D29:'', D31:'', D32:'', D33:'', D34:'', D35:'', D36:'', D37:'', D38:'', D39:'', D41:'', D42:'', D43:'', D44:'', D45:'', D46:'', D47:'', D48:'', D49:'', D51:'', D52:'', D53:'', D54:'', D55:'', D56:'', D57:'', D58:'', D59:'', D61:'', D62:'', D63:'', D64:'', D65:'', D66:'', D67:'', D68:'', D69:'', D71:'', D72:'', D73:'', D74:'', D75:'', D76:'', D77:'', D78:'', D79:'', D81:'', D82:'', D83:'', D84:'', D85:'', D86:'', D87:'', D88:'', D89:'', D91:'', D92:'', D93:'', D94:'', D95:'', D96:'', D97:'', D98:'', D99:'',
                    L11:'', L12:'', L13:'', L14:'', L15:'', L16:'', L17:'', L18:'', L19:'', L21:'', L22:'', L23:'', L24:'', L25:'', L26:'', L27:'', L28:'', L29:'', L31:'', L32:'', L33:'', L34:'', L35:'', L36:'', L37:'', L38:'', L39:'', L41:'', L42:'', L43:'', L44:'', L45:'', L46:'', L47:'', L48:'', L49:'', L51:'', L52:'', L53:'', L54:'', L55:'', L56:'', L57:'', L58:'', L59:'', L61:'', L62:'', L63:'', L64:'', L65:'', L66:'', L67:'', L68:'', L69:'', L71:'', L72:'', L73:'', L74:'', L75:'', L76:'', L77:'', L78:'', L79:'', L81:'', L82:'', L83:'', L84:'', L85:'', L86:'', L87:'', L88:'', L89:'', L91:'', L92:'', L93:'', L94:'', L95:'', L96:'', L97:'', L98:'', L99:''},
          DetailView:{D11:'', D12:'', D13:'', D14:'', D15:'', D16:'', D17:'', D18:'', D19:'', D21:'', D22:'', D23:'', D24:'', D25:'', D26:'', D27:'', D28:'', D29:'', D31:'', D32:'', D33:'', D34:'', D35:'', D36:'', D37:'', D38:'', D39:'', D41:'', D42:'', D43:'', D44:'', D45:'', D46:'', D47:'', D48:'', D49:'', D51:'', D52:'', D53:'', D54:'', D55:'', D56:'', D57:'', D58:'', D59:'', D61:'', D62:'', D63:'', D64:'', D65:'', D66:'', D67:'', D68:'', D69:'', D71:'', D72:'', D73:'', D74:'', D75:'', D76:'', D77:'', D78:'', D79:'', D81:'', D82:'', D83:'', D84:'', D85:'', D86:'', D87:'', D88:'', D89:'', D91:'', D92:'', D93:'', D94:'', D95:'', D96:'', D97:'', D98:'', D99:'',
                      L11:'', L12:'', L13:'', L14:'', L15:'', L16:'', L17:'', L18:'', L19:'', L21:'', L22:'', L23:'', L24:'', L25:'', L26:'', L27:'', L28:'', L29:'', L31:'', L32:'', L33:'', L34:'', L35:'', L36:'', L37:'', L38:'', L39:'', L41:'', L42:'', L43:'', L44:'', L45:'', L46:'', L47:'', L48:'', L49:'', L51:'', L52:'', L53:'', L54:'', L55:'', L56:'', L57:'', L58:'', L59:'', L61:'', L62:'', L63:'', L64:'', L65:'', L66:'', L67:'', L68:'', L69:'', L71:'', L72:'', L73:'', L74:'', L75:'', L76:'', L77:'', L78:'', L79:'', L81:'', L82:'', L83:'', L84:'', L85:'', L86:'', L87:'', L88:'', L89:'', L91:'', L92:'', L93:'', L94:'', L95:'', L96:'', L97:'', L98:'', L99:''},
          ranks:{
            log:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0'},
            inf:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0'},
            sup:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0'},
            tnk:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0'},
            rec:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0'},
            veh:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0'},
            hel:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0'},
            air:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0'},
            nav:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0'}
          }
       }
  });

  function btDecode(){
      Deck = new DeckAssembly();
      DeckDisAssembly();
      GUIDisplay();
      listUnits();
  }

  function btClear()
  {
      Deck = new DeckAssembly();
      GUIDisplay();
      listUnits();
      DeckExport();
  }

  function btNATO_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "NATO";
      Deck.iNation = 202;
      GUIDisplay();
      listUnits();
      DeckExport();
  }

  function btREDFOR_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "REDFOR";
      Deck.iNation = 362;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btBD_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "BD";
      Deck.iNation = 195;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btCOM_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "CW";
      Deck.iNation = 194;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btEU_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "EU";
      Deck.iNation = 192;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btLJ_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "LJUT";
      Deck.iNation = 198;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btBRDNL_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "BDRNL";
      Deck.iNation = 201;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btNORAD_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "NORAD";
      Deck.iNation = 200;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btSCA_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "SCA";
      Deck.iNation = 193;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btNSWP_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "NSWP";
      Deck.iNation = 357;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btRD_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "RD";
      Deck.iNation = 356;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btRKA_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "SOVKOR";
      Deck.iNation = 359;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btANZAC_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "ANZAC";
      Deck.iNation = 138;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btBRD_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "BRD";
      Deck.iNation = 58;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btCAN_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "CAN";
      Deck.iNation = 74;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btDEN_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "DEN";
      Deck.iNation = 90;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btFRA_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "FRA";
      Deck.iNation = 42;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btJAP_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "JAP";
      Deck.iNation = 154;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btNED_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "NED";
      Deck.iNation = 186;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btNOR_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "NOR";
      Deck.iNation = 122;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btROK_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "ROK";
      Deck.iNation = 170;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btSWE_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "SWE";
      Deck.iNation = 106;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btUK_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "UK";
      Deck.iNation = 26;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btUSA_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "USA";
      Deck.iNation = 10;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btCZS_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "CZS";
      Deck.iNation = 314;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btDDR_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "DDR";
      Deck.iNation = 266;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btDPRK_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "DPRK";
      Deck.iNation = 346;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btPOL_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "POL";
      Deck.iNation = 298;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btPRC_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "PRC";
      Deck.iNation = 330;
      GUIDisplay();
      listUnits();
      DeckExport();
  }

  function btUSSR_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "USSR";
      Deck.iNation = 282;
      GUIDisplay();
      listUnits();
      DeckExport();
  }

  function btA()
  {
      Deck.sEra = "A";
      Deck.iEra = 2;
      GUIDisplay();
      listUnits();
      DeckExport();
  }

  function btB()
  {
      Deck.sEra = "B";
      Deck.iEra = 1;
      GUIDisplay();
      listUnits();
      DeckExport();
  }

  function btC()
  {
      Deck.sEra = "C";
      Deck.iEra = 0;
      GUIDisplay();
      listUnits();
      DeckExport();
  }

  function btMarine() {
      Deck.sSpec = "MAR";
      Deck.iSpec = 3;
      GUIDisplay();
      listUnits();
      DeckExport();
  }

  function btAirborne() {
      Deck.sSpec = "AIR";
      Deck.iSpec = 5;
      GUIDisplay();
      listUnits();
      DeckExport();
  }

  function btMechanized() {
      Deck.sSpec = "MECH";
      Deck.iSpec = 4;
      GUIDisplay();
      listUnits();
      DeckExport();
  }

  function btArmoured() {
      Deck.sSpec = "ARM";
      Deck.iSpec = 1;
      GUIDisplay();
      listUnits();
      DeckExport();
  }

  function btMotorized() {
      Deck.sSpec = "MOTO";
      Deck.iSpec = 0;
      GUIDisplay();
      listUnits();
      DeckExport();
  }

  function btSupport() {
      Deck.sSpec = "SUP";
      Deck.iSpec = 2;
      GUIDisplay();
      listUnits();
      DeckExport();
  }

  function btGeneral() {
      Deck.sSpec = "GEN";
      Deck.iSpec = 7;
      GUIDisplay();
      listUnits();
      DeckExport();
  }

  function btNaval() {
      Deck.sSpec = "NAV";
      Deck.iSpec = 6;
      GUIDisplay();
      listUnits();
      DeckExport();
  }
