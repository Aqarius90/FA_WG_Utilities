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
            log:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0', B0:"", B1:'', B2:'', B3:'', B4:''},
            inf:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0', B0:"", B1:'', B2:'', B3:'', B4:''},
            sup:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0', B0:"", B1:'', B2:'', B3:'', B4:''},
            tnk:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0', B0:"", B1:'', B2:'', B3:'', B4:''},
            rec:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0', B0:"", B1:'', B2:'', B3:'', B4:''},
            veh:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0', B0:"", B1:'', B2:'', B3:'', B4:''},
            hel:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0', B0:"", B1:'', B2:'', B3:'', B4:''},
            air:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0', B0:"", B1:'', B2:'', B3:'', B4:''},
            nav:{  R0:"r000", R1:"r001", R2:"r010", R3:"r011", R4:"r100", A0:"0", A1:'0', A2:'0', A3:'0', A4:'0', B0:"", B1:'', B2:'', B3:'', B4:''}
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

/*
//ch-47c US, no stats
// TH-495 availability increased
// Number of packs of Humvee increased from 5 to 7
// Sheridan service date fixed to fit with the MGM-51C that it is armed with.
// LVTP-7A1 availability increased by one step
//- M2 Bradley availability increased by one step
//- Redeye & Stingers now have access to Bradley as transport
//- Marder 1/A1/A2 armor increased from 3/2/1/1 to 4/2/1/1, availability increased by one step
//- Marder 1A3 armor changed from 4/3/2/2 to 5/3/2/2
//HMV availability increased by one step
???- Kutei now have access to HMV as transport
//VAB T-20 availability increased by one step
//- FV510 Warrior MILAN avaialbility increased by one step
//- FV432 is now available to Territorials

SWEDEN:
- STRV 103B & STRV 103C are amphibious (how have we miss that for so long ?! :shock: )
- PVHKP 9A price reduced from 50$ to 40$
- PVTGB 9031 m/77 & PVTGB 9031 m/84 accuracy difference between HE and AP fixed
- PATGB XA-180 armor reduced from 2/2/1/1 to 1/1/1/1, availability increased by one step.
- EPBV 302A armor increased from 2/1/1/1 to 4/2/1/1.
- EPVB 3022 armor increased from 2/1/1/1 to 4/2/1/1.
- STRF 9040 armor increased from 4/3/2/2 to 5/3/2/2.
- RBS 70 & RBS 90 now carry 8 missiles.
- Rover RBS 70 & Rover RBS 90 removed from Mechanized deck

USSR:
- T-72 obr 1989 price increased from 135$ to 140$
- BRDM-2U optics changed from poor to medium as other command units
- T-62MV1's HE gun range fixed to match AP range
- BMD-1 price reduced from 15$ to 10$
- BMD-1P price reduced from 20$ to 15$
- BMP-1 series armor increased from 2/1/1/1 to 3/1/1/1 (BMP-1D armor unchanged)
- BMP-2 series armor increased from 2/2/1/1 to 4/2/1/1, price increased from 20$ to 25$
- BMP-2D armor changed from 3/3/2/1 to 4/3/1/1, price increased from 20$ to 25$
- BMP-2 obr 86 armor increased from 3/2/1/1 to 4/3/1/1, price increased from 25$ to 30$
- BMP-3 armor increased from 3/2/2/1 to 5/4/2/1, price increased from 35$ to 40$, missile loadout increased from 4 to 6
- BTR-90 armor increased from 2/2/1/1 to 3/2/1/1, optics increased from poor to medium
- BTR-T armor increased from 7/3/2/2 to 13/5/2/2, price increased from 20$ to 25$
- SU-122 price reduced from 20$ to 15$, HE power reduced from 5 to 4
- Su-27M veterancy reduced from elite to hardened
- MiG-27K price reduced from 145$ to 135$

POLAND:
- BTR-40 can now transports recon infantry, price increased from 10$ to 15$ (optics remain good)
- BWP-1 & BWP-2 armor modification like USSR
- Topaz & Topaz-2A armor increase from 1/1/1/1 to 2/1/1/1

E-GERMANY:
- SPW-40 now transports recon infantry, price increased from 10$ to 15$ (optics remain good)
- Fla-Kom Strela-2 access to Mi-8 Removed
- Wachregiment speed increased from 25kmh to 30kmh
- SPW-50PK armor increased from 1/1/1/1 to 2/1/1/1 [Disclaimer: the SPW-50PU command variant was forgotten, it'll be fixed in a next patch]
- BMP-1 series armor increased from 2/1/1/1 to 3/1/1/1
- BMP-2 series armor increased from 2/2/1/1 to 4/2/1/1
- Mot-Schützen & Mot-Schützen '90 availavility reduced by one step to be in line with other shock troops

CSSR:
- BVP-1 series armor increased from 2/1/1/1 to 3/1/1/1
- BVP-2 armor increased from 2/2/1/1 to 4/2/1/1
- BVP-2 vz. 86 armor increased from 3/2/1/1 to 4/3/1/1
- Vysadkari '90 availability increased by one step
- Granatomet' AGS-17 noise increased to match MG

CHINA:
- HJ-9 missile guidance changed from SACLOS to SALH, speed increased
- ZZC-55 now transports Liè Rén, price increased from 10$ to 15$ (optics remain good)
- HN-5A access to Mi-8 removed
- PTZ-59 statistics corrected based on the ZTZ-59-II, accuracy increased from 40 to 50, rate of fire reduced from 7 to 6.
- PGZ-95 now can fire all its missiles in a row
- ZTS-63-II speed increased from 60kmh to 70kmh, gun range increased from 2100m to 2275m, price increased from 40$ to 45$
- WZ-551 availability increased by one step
- ZTZ-85-IIA price reduced from 85$ to 80$
- ZBD-86 ammo loadout fixed from 20 to 40 ammo like other BMP-1
- ZTQ-62 & ZTQ-62-1 rate of fire increased from 6 RPM to 8 RPM
- ZSD-63A armor reduced from 2/1/1/1 to 1/1/1/1
- ZSD-90 armor increased from 2/2/1/1 to 4/2/1/1
- Lu Zhandui '75 & '90 number of men per squad reduced from 15 to 10, price reduced by 5 points, number of rockets reduced from 12 to 8
- PGZ-63 price reduced from 15$ to 10$

N-KOREA:
- Type-63 range & fuel capacity were inverted
- T-72M's HE gun range fixed to match AP range
- BTR-50PK armor increased from 1/1/1/1 to 2/1/1/1
- VTT-323 price reduced from 15$ to 10$
- VTT-323 Susong-Po price reduced from 20$ to 15$
- VTT-323 Hwasung-Chong price reduced from 20$ to 15$
- Ch'onma-ho IV rerolled as Ch'onma-Ho V to fit the model
- All variants of Humvee' HP increased from 5 to 10 [Disclaimer: M966 TOW-2 & M1025 CP were forgotten, they'll be fixed in a next patch]
- All variants of Stalwart' HP increased from 5 to 10
- Eastern Block availability bonus removed
- All variants of Osa AK's price increased from 40$ to 45$ [Disclaimer: Polish 9K33M2 Romb was forgotten, it'll be fixed in a next patch]


@Gq8AEEg=

*/
