//object proto for unit list table in ractiveDeck
var logRow = []; // [{ Nation: "", Upicture: "", Unit: "", Points: "", Cards: "", Vpicture: "", Transport: "", TPoints: "", TCards: ""}];
var infRow = []; // [{ Nation: "", Upicture: "", Unit: "", Points: "", Cards: "", Vpicture: "", Transport: "", TPoints: "", TCards: ""}];
var supRow = []; // [{ Nation: "", Upicture: "", Unit: "", Points: "", Cards: "", Vpicture: "", Transport: "", TPoints: "", TCards: ""}];
var tnkRow = []; // [{ Nation: "", Upicture: "", Unit: "", Points: "", Cards: "", Vpicture: "", Transport: "", TPoints: "", TCards: ""}];
var recRow = []; // [{ Nation: "", Upicture: "", Unit: "", Points: "", Cards: "", Vpicture: "", Transport: "", TPoints: "", TCards: ""}];
var vehRow = []; // [{ Nation: "", Upicture: "", Unit: "", Points: "", Cards: "", Vpicture: "", Transport: "", TPoints: "", TCards: ""}];
var helRow = []; // [{ Nation: "", Upicture: "", Unit: "", Points: "", Cards: "", Vpicture: "", Transport: "", TPoints: "", TCards: ""}];
var airRow = []; // [{ Nation: "", Upicture: "", Unit: "", Points: "", Cards: "", Vpicture: "", Transport: "", TPoints: "", TCards: ""}];
var navRow = []; // [{ Nation: "", Upicture: "", Unit: "", Points: "", Cards: "", Vpicture: "", Transport: "", TPoints: "", TCards: ""}];

var ractiveHeader = new Ractive({
    el: 'ankerHeader',
    template: '#templateHeader',
    data: {
            DBisLoaded: false,
            DBisNotLoaded: true,
            sDeckString: '',
            flags: { //darken flags
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
          Buttons : { // set button color
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
          lab:{ //display bonuses
            tnation : '',
            tera: '',
            pointstally:''
          }
    }
});

var ractiveDeck = new Ractive({
    el: 'ankerDeck',
    template: '#templateDeck',
    data: {
            DBisLoaded: false,
            DBisNotLoaded: true,
            debug: '', //errcheck output
            sBinary:'', //raw deck output for debug

            //For deck overview. D for data, L for label. 11-19 for logi, 21-29 for inf etc.
            DeckView:{D11:'', D12:'', D13:'', D14:'', D15:'', D16:'', D17:'', D18:'', D19:'', D21:'', D22:'', D23:'', D24:'', D25:'', D26:'', D27:'', D28:'', D29:'', D31:'', D32:'', D33:'', D34:'', D35:'', D36:'', D37:'', D38:'', D39:'', D41:'', D42:'', D43:'', D44:'', D45:'', D46:'', D47:'', D48:'', D49:'', D51:'', D52:'', D53:'', D54:'', D55:'', D56:'', D57:'', D58:'', D59:'', D61:'', D62:'', D63:'', D64:'', D65:'', D66:'', D67:'', D68:'', D69:'', D71:'', D72:'', D73:'', D74:'', D75:'', D76:'', D77:'', D78:'', D79:'', D81:'', D82:'', D83:'', D84:'', D85:'', D86:'', D87:'', D88:'', D89:'', D91:'', D92:'', D93:'', D94:'', D95:'', D96:'', D97:'', D98:'', D99:'',
                    L11:'', L12:'', L13:'', L14:'', L15:'', L16:'', L17:'', L18:'', L19:'', L21:'', L22:'', L23:'', L24:'', L25:'', L26:'', L27:'', L28:'', L29:'', L31:'', L32:'', L33:'', L34:'', L35:'', L36:'', L37:'', L38:'', L39:'', L41:'', L42:'', L43:'', L44:'', L45:'', L46:'', L47:'', L48:'', L49:'', L51:'', L52:'', L53:'', L54:'', L55:'', L56:'', L57:'', L58:'', L59:'', L61:'', L62:'', L63:'', L64:'', L65:'', L66:'', L67:'', L68:'', L69:'', L71:'', L72:'', L73:'', L74:'', L75:'', L76:'', L77:'', L78:'', L79:'', L81:'', L82:'', L83:'', L84:'', L85:'', L86:'', L87:'', L88:'', L89:'', L91:'', L92:'', L93:'', L94:'', L95:'', L96:'', L97:'', L98:'', L99:''},

            //binds for tables
            logunits: logRow,
            infunits: infRow,
            supunits: supRow,
            tnkunits: tnkRow,
            recunits: recRow,
            vehunits: vehRow,
            helunits: helRow,
            airunits: airRow,
            navunits: navRow,

            //sort for tables
            sort: function ( array, column ) {
                array = array.slice();
                return array.sort( function ( a, b ) {
                    return a[ column ] < b[ column ] ? -1 : 1;
                });
            },

              myMethod: function() { //TODO showCard doesn't work without it.
                console.log('Hello World!');
            },
            //For unit overview. D for data, L for label. 11-19 for logi, 21-29 for inf etc.
            DetailView:{D11:'', D12:'', D13:'', D14:'', D15:'', D16:'', D17:'', D18:'', D19:'', D21:'', D22:'', D23:'', D24:'', D25:'', D26:'', D27:'', D28:'', D29:'', D31:'', D32:'', D33:'', D34:'', D35:'', D36:'', D37:'', D38:'', D39:'', D41:'', D42:'', D43:'', D44:'', D45:'', D46:'', D47:'', D48:'', D49:'', D51:'', D52:'', D53:'', D54:'', D55:'', D56:'', D57:'', D58:'', D59:'', D61:'', D62:'', D63:'', D64:'', D65:'', D66:'', D67:'', D68:'', D69:'', D71:'', D72:'', D73:'', D74:'', D75:'', D76:'', D77:'', D78:'', D79:'', D81:'', D82:'', D83:'', D84:'', D85:'', D86:'', D87:'', D88:'', D89:'', D91:'', D92:'', D93:'', D94:'', D95:'', D96:'', D97:'', D98:'', D99:'',
                      L11:'', L12:'', L13:'', L14:'', L15:'', L16:'', L17:'', L18:'', L19:'', L21:'', L22:'', L23:'', L24:'', L25:'', L26:'', L27:'', L28:'', L29:'', L31:'', L32:'', L33:'', L34:'', L35:'', L36:'', L37:'', L38:'', L39:'', L41:'', L42:'', L43:'', L44:'', L45:'', L46:'', L47:'', L48:'', L49:'', L51:'', L52:'', L53:'', L54:'', L55:'', L56:'', L57:'', L58:'', L59:'', L61:'', L62:'', L63:'', L64:'', L65:'', L66:'', L67:'', L68:'', L69:'', L71:'', L72:'', L73:'', L74:'', L75:'', L76:'', L77:'', L78:'', L79:'', L81:'', L82:'', L83:'', L84:'', L85:'', L86:'', L87:'', L88:'', L89:'', L91:'', L92:'', L93:'', L94:'', L95:'', L96:'', L97:'', L98:'', L99:''},
            //set tab headers for deck unit selection. Used mostly for indicating deck specialization bouses
            headers:{ logi: 'Logistics', infa:'Infantry', supo:"Support", tank:"Tank", reco:"Recon", vehi:"Vehicle", helo:"Helicopter", airp:"Air", nava:"Naval"}
       }
  });

var ractiveUnit = new Ractive({
   el:'ankerUnit',
  template: '#templateUnit',
  data: {
        UnitCode : "",
        Nation: "",
        Price:"",
        UnitName: "",
        isCommand: "f00",
        isRecon: "f00",
        Optics: 0,
        isProto: false,

        UnitIsLoaded: true, //debug
        isAir: false,
        isHelo: false,
        isShip: false,
        isLand: false,
        deckType: { MAR: "#f00", AIR: "#f00", MEC: "#f00", ARM: "#f00", MOT: "#f00", SUP: "#f00",},
        Armor: {FAV:"", SAV:"", RAV:"", TAV:"", FAVtype:"", SAVtype:"", RAVtype:"", TAVtype:"",},
        Universal:{
            IdentifyBaseProbability:"",
            Size:"",  //slightly bugged
            Stealth:"",
            StunDamageRegen:"",
            StunDamageToGetStunned:"",
            TimeBetweenEachIdentifyRoll:"",
            Year:"",
            MAXpacks:"",
            MAXspeed:"",
            SupressionCeiling:"",
            FuelCapacity:"",
            Autonomy:"",
            helidetectionradius:"",
            MovementType:"",
            PorteeVision:"",
            OpticalStrengthAir:"",
            OpticalStrengthGround:"",
            opticsantiradar:"",
            SupplyCapacity:"", //logi only
            SupplyPriority:"", //logi only
        },
        Helo:{
            mass:"",
            CyclicManoeuvrability:"",
            HelicopterFlyingAltitude:"",
            HelicopterHoverAltitude:"",
            MaxInclination:"",
            RotorArea:"",
            UpwardSpeed:"",
            LateralSpeed:"",
            GFactorLimit:"",
            TimeHalfTurn:"",
            AirToAirHelicopterDetectionRadius:"",
            TorqueManoeuvrability:"",
            MAXacell:"",
            MAXdcell:"",
        },
        Air:{
            ECM:"",
            AirToAirHelicopterDetectionRadius:"",
            AirplaneMinimalAltitude:"",
            AirplaneFlyingAltitude:"",
        },
        Ship:{
            MAXacell:"",
            MAXdcell:"",
            CIWS:"",
            TimeHalfTurn:"",
            ECM:"",
        },
        Land:{
            SuppressDamageRatioIfTransporterKilled:"",
            amphib:"",
            Training:"",
            MAXacell:"",
            MAXdcell:"",
        }

        //ranks:{ R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0', B0:"", B1:'', B2:'', B3:'', B4:'',},
    }
});

ractiveDeck.on( 'sort', function ( event, column ) {
  this.set( 'sortColumn', column );
});

ractiveDeck.on( 'activate', function ( event, card ) {
  showCard( card);
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
  }

  function btNATO_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "NATO";
      Deck.iNation = "000111101100";
      GUIDisplay();
      listUnits();
  }

  function btREDFOR_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "REDFOR";
      Deck.iNation = "010100101100";
      GUIDisplay();
      listUnits();
  }
  function btBD_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "BD";
      Deck.iNation = "000111100011";
      GUIDisplay();
      listUnits();
  }
  function btCOM_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "CW";
      Deck.iNation = "000111100010";
      GUIDisplay();
      listUnits();
  }
  function btEU_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "EU";
      Deck.iNation = "000111100000";
      GUIDisplay();
      listUnits();
  }
  function btLJ_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "LJUT";
      Deck.iNation = "000111100110";
      GUIDisplay();
      listUnits();
  }
  function btBRDNL_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "BDRNL";
      Deck.iNation = "000111101001";
      GUIDisplay();
      listUnits();
  }
  function btNORAD_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "NORAD";
      Deck.iNation = "000111101000";
      GUIDisplay();
      listUnits();
  }
  function btSCA_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "SCA";
      Deck.iNation = "000111100001";
      GUIDisplay();
      listUnits();
  }
  function btNSWP_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "NSWP";
      Deck.iNation = "010100100101";
      GUIDisplay();
      listUnits();
  }
  function btRD_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "RD";
      Deck.iNation = "010100100100";
      GUIDisplay();
      listUnits();
  }
  function btANZAC_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "ANZAC";
      Deck.iNation = "000100001100";
      GUIDisplay();
      listUnits();
  }
  function btBRD_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "West Germany";
      Deck.iNation = "000001101100";
      GUIDisplay();
      listUnits();
  }
  function btCAN_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "Canada";
      Deck.iNation = "000010001100";
      GUIDisplay();
      listUnits();
  }
  function btDEN_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "Denmark";
      Deck.iNation = "000010101100";
      GUIDisplay();
      listUnits();
  }
  function btFRA_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "France";
      Deck.iNation = "000001001010";
      GUIDisplay();
      listUnits();
  }
  function btJAP_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "Japan";
      Deck.iNation = "000001001100";
      GUIDisplay();
      listUnits();
  }
  function btNED_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "The Netherlands";
      Deck.iNation = "000101101100";
      GUIDisplay();
      listUnits();
  }
  function btNOR_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "Norway";
      Deck.iNation = "000011101100";
      GUIDisplay();
      listUnits();
  }
  function btROK_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "South Korea";
      Deck.iNation = "000101001100";
      GUIDisplay();
      listUnits();
  }
  function btSWE_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "Sweden";
      Deck.iNation = "000011001100";
      GUIDisplay();
      listUnits();
  }
  function btUK_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "United Kingdom";
      Deck.iNation = "000000101100";
      GUIDisplay();
      listUnits();
  }
  function btUSA_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "United States";
      Deck.iNation = "000000001100";
      GUIDisplay();
      listUnits();
  }
  function btCZS_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "Czechoslavakia";
      Deck.iNation = "010001101100";
      GUIDisplay();
      listUnits();
  }
  function btDDR_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "East Germany";
      Deck.iNation = "010000001100";
      GUIDisplay();
      listUnits();
  }
  function btDPRK_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "North Korea";
      Deck.iNation = "010010101100";
      GUIDisplay();
      listUnits();
  }
  function btPOL_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "Poland";
      Deck.iNation = "010001001100";
      GUIDisplay();
      listUnits();
  }
  function btPRC_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "China";
      Deck.iNation = "010010001100";
      GUIDisplay();
      listUnits();
  }
  function btUSSR_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "Soviet Union";
      Deck.iNation = "010000101100";
      GUIDisplay();
      listUnits();
  }

  function btISR_Click() {
      Deck.sSide = "BLU";
      Deck.iSide = 0;
      Deck.sNation = "Israel";
      Deck.iNation = "000110001100";
      GUIDisplay();
      listUnits();
  }

  function btFINPL_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "FINPL";
      Deck.iNation = "010100101010";
      GUIDisplay();
      listUnits();
  }

  function btYUCZE_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "YUCZE";
      Deck.iNation = "010100101011";
      GUIDisplay();
      listUnits();
  }

  function btFIN_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "Finland";
      Deck.iNation = "010011001100";
      GUIDisplay();
      listUnits();
  }

  function btYU_Click() {
      Deck.sSide = "RED";
      Deck.iSide = 1;
      Deck.sNation = "Yugoslavia";
      Deck.iNation = "010011101100";
      GUIDisplay();
      listUnits();
  }

  function btA()
  {
      Deck.sEra = "A";
      Deck.iEra = 2;
      GUIDisplay();
      listUnits();
  }

  function btB()
  {
      Deck.sEra = "B";
      Deck.iEra = 1;
      GUIDisplay();
      listUnits();
  }

  function btC()
  {
      Deck.sEra = "C";
      Deck.iEra = 0;
      GUIDisplay();
      listUnits();
  }

  function btMarine() {
      Deck.sSpec = "Marine";
      Deck.iSpec = 3;
      GUIDisplay();
      listUnits();
  }

  function btAirborne() {
      Deck.sSpec = "Airborne";
      Deck.iSpec = 5;
      GUIDisplay();
      listUnits();
  }

  function btMechanized() {
      Deck.sSpec = "Mechanized";
      Deck.iSpec = 4;
      GUIDisplay();
      listUnits();
  }

  function btArmoured() {
      Deck.sSpec = "Armored";
      Deck.iSpec = 1;
      GUIDisplay();
      listUnits();
  }

  function btMotorized() {
      Deck.sSpec = "Motorized";
      Deck.iSpec = 0;
      GUIDisplay();
      listUnits();
  }

  function btSupport() {
      Deck.sSpec = "Support";
      Deck.iSpec = 2;
      GUIDisplay();
      listUnits();
  }

  function btGeneral() {
      Deck.sSpec = "GEN";
      Deck.iSpec = 7;
      GUIDisplay();
      listUnits();
  }

  function btNaval() {
      Deck.sSpec = "NAV";
      Deck.iSpec = 6;
      GUIDisplay();
      listUnits();
  }

  function btDATA() {
      DataDisplay = 1;
      document.getElementById("DataButton").style.background='#0f0';  //need rework TODO
      document.getElementById("PicsButton").style.background='#fff';//need rework TODO
      GUIDisplay();
  }

  function btPICS() {
      DataDisplay = 0;
      document.getElementById("DataButton").style.background='#fff';//need rework TODO
      document.getElementById("PicsButton").style.background='#0f0';//need rework TODO
      GUIDisplay();
  }
