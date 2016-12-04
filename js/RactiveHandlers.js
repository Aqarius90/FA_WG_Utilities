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
                    FIN: 'FIN',
                    YU:  'YU',
                    ISR: 'ISR',
                    FINPL: 'FINPL',
                    YUCZE: 'YUCZE'
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
            bC: '#fff',
            DATA: '#0f0',
            PICS: '#fff'
          },
          lab:{
            tnation : '',
            //tspec: '',
            tera: '',
            pointstally:''
          }
        }
      });

var ractiveDB = new Ractive({
   el:'ankerDB',
    template: '#templateDB',
    data: {
        DBisLoaded: false,
        DBisNotLoaded: true
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
            log:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0', B0:"", B1:'', B2:'', B3:'', B4:''},
            inf:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0', B0:"", B1:'', B2:'', B3:'', B4:''},
            sup:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0', B0:"", B1:'', B2:'', B3:'', B4:''},
            tnk:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0', B0:"", B1:'', B2:'', B3:'', B4:''},
            rec:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0', B0:"", B1:'', B2:'', B3:'', B4:''},
            veh:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0', B0:"", B1:'', B2:'', B3:'', B4:''},
            hel:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0', B0:"", B1:'', B2:'', B3:'', B4:''},
            air:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0', B0:"", B1:'', B2:'', B3:'', B4:''},
            nav:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0', B0:"", B1:'', B2:'', B3:'', B4:''}
          },
          headers:{ logi: 'Logistics', infa:'Infantry', supo:"Support", tank:"Tank", reco:"Recon", vehi:"Vehicle", helo:"Helicopter", airp:"Air", nava:"Naval"}
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
      Deck.iNation = "000111101100";
      GUIDisplay();
      listUnits();
      DeckExport();
  }

  function btREDFOR_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "REDFOR";
      Deck.iNation = "010100101100";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btBD_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "BD";
      Deck.iNation = "000111100011";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btCOM_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "CW";
      Deck.iNation = "000111100010";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btEU_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "EU";
      Deck.iNation = "000111100000";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btLJ_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "LJUT";
      Deck.iNation = "000111100110";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btBRDNL_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "BDRNL";
      Deck.iNation = "000111101001";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btNORAD_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "NORAD";
      Deck.iNation = "000111101000";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btSCA_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "SCA";
      Deck.iNation = "000111100001";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btNSWP_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "NSWP";
      Deck.iNation = "010100100101";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btRD_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "RD";
      Deck.iNation = "010100100100";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btANZAC_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "ANZAC";
      Deck.iNation = "000100001100";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btBRD_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "BRD";
      Deck.iNation = "000001101100";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btCAN_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "CAN";
      Deck.iNation = "000010001100";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btDEN_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "DEN";
      Deck.iNation = "000010101100";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btFRA_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "FRA";
      Deck.iNation = "000001001010";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btJAP_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "JAP";
      Deck.iNation = "000001001100";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btNED_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "NED";
      Deck.iNation = "000101101100";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btNOR_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "NOR";
      Deck.iNation = "000011101100";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btROK_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "ROK";
      Deck.iNation = "000101001100";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btSWE_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "SWE";
      Deck.iNation = "000011001100";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btUK_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "UK";
      Deck.iNation = "000000101100";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btUSA_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "USA";
      Deck.iNation = "000000001100";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btCZS_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "CZS";
      Deck.iNation = "010001101100";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btDDR_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "DDR";
      Deck.iNation = "010000001100";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btDPRK_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "DPRK";
      Deck.iNation = "010010101100";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btPOL_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "POL";
      Deck.iNation = "010001001100";
      GUIDisplay();
      listUnits();
      DeckExport();
  }
  function btPRC_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "PRC";
      Deck.iNation = "010010001100";
      GUIDisplay();
      listUnits();
      DeckExport();
  }

  function btUSSR_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "USSR";
      Deck.iNation = "010000101100";
      GUIDisplay();
      listUnits();
      DeckExport();
  }

  function btISR_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "ISR";
      Deck.iNation = "000110001100";
      GUIDisplay();
      listUnits();
      DeckExport();
  }

  function btFINPL_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "FINPL";
      Deck.iNation = "010100101010";
      GUIDisplay();
      listUnits();
      DeckExport();
  }

  function btYUCZE_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "YUCZE";
      Deck.iNation = "010100101011";
      GUIDisplay();
      listUnits();
      DeckExport();
  }

  function btFIN_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "FIN";
      Deck.iNation = "010011001100";
      GUIDisplay();
      listUnits();
      DeckExport();
  }

  function btYU_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "YU";
      Deck.iNation = "010011101100";
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

  function btDATA() {
      DataDisplay = 1;
      document.getElementById("DataButton").style.background='#0f0';
      document.getElementById("PicsButton").style.background='#fff';
      GUIDisplay();
  }

  function btPICS() {
      DataDisplay = 0;
      document.getElementById("DataButton").style.background='#fff';
      document.getElementById("PicsButton").style.background='#0f0';
      GUIDisplay();
  }
