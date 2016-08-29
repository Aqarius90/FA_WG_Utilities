
  var ractive = new Ractive({
    el: 'anker',
    template: '#template',
    data: {
            sDeckString: '',
            flags: {
                    nato: 'flags/nato.png',
                    redfor: 'flags/REDFOR.png',
                    BD: 'flags/BD.png',
                    COM: 'flags/COM.png',
                    EU: 'flags/EU.png',
                    LJ: 'flags/LJ.png',
                    NORAD: 'flags/NORAD.png',
                    SCA: 'flags/SCA.png',
                    BRDNL: 'flags/BRDNL.png',
                    NSWP: 'flags/NSWP.png',
                    RD: 'flags/RD.png',
                    RKA: 'flags/RKA.png',
                    ANZAC: 'flags/ANZAC.png',
                    BRD: 'flags/BRD.png',
                    CAN: 'flags/CAN.png',
                    DEN: 'flags/DEN.png',
                    FRA: 'flags/FRA.png',
                    JAP: 'flags/JAP.png',
                    NED: 'flags/NED.png',
                    NOR: 'flags/NOR.png',
                    ROK: 'flags/ROK.png',
                    SWE: 'flags/SWE.png',
                    UK: 'flags/UK.png',
                    USA: 'flags/USA.png',
                    CZS: 'flags/CZS.png',
                    DDR: 'flags/DDR.png',
                    DPRK: 'flags/DPRK.png',
                    POL: 'flags/POL.png',
                    PRC: 'flags/PRC.png',
                    USSR: 'flags/USSR.png',
                    FINb: 'flags/FINb.png',
                    YUb: 'flags/YUb.png',
                    ISRb: 'flags/ISRb.png'
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
          },
          debug: '',
          sBinary:'',
          DeckView:{D11:'', D12:'', D13:'', D14:'', D15:'', D16:'', D17:'', D18:'', D19:'', D21:'', D22:'', D23:'', D24:'', D25:'', D26:'', D27:'', D28:'', D29:'', D31:'', D32:'', D33:'', D34:'', D35:'', D36:'', D37:'', D38:'', D39:'', D41:'', D42:'', D43:'', D44:'', D45:'', D46:'', D47:'', D48:'', D49:'', D51:'', D52:'', D53:'', D54:'', D55:'', D56:'', D57:'', D58:'', D59:'', D61:'', D62:'', D63:'', D64:'', D65:'', D66:'', D67:'', D68:'', D69:'', D71:'', D72:'', D73:'', D74:'', D75:'', D76:'', D77:'', D78:'', D79:'', D81:'', D82:'', D83:'', D84:'', D85:'', D86:'', D87:'', D88:'', D89:'', D91:'', D92:'', D93:'', D94:'', D95:'', D96:'', D97:'', D98:'', D99:'',
                    L11:'', L12:'', L13:'', L14:'', L15:'', L16:'', L17:'', L18:'', L19:'', L21:'', L22:'', L23:'', L24:'', L25:'', L26:'', L27:'', L28:'', L29:'', L31:'', L32:'', L33:'', L34:'', L35:'', L36:'', L37:'', L38:'', L39:'', L41:'', L42:'', L43:'', L44:'', L45:'', L46:'', L47:'', L48:'', L49:'', L51:'', L52:'', L53:'', L54:'', L55:'', L56:'', L57:'', L58:'', L59:'', L61:'', L62:'', L63:'', L64:'', L65:'', L66:'', L67:'', L68:'', L69:'', L71:'', L72:'', L73:'', L74:'', L75:'', L76:'', L77:'', L78:'', L79:'', L81:'', L82:'', L83:'', L84:'', L85:'', L86:'', L87:'', L88:'', L89:'', L91:'', L92:'', L93:'', L94:'', L95:'', L96:'', L97:'', L98:'', L99:''},
          DetailView:{D11:'', D12:'', D13:'', D14:'', D15:'', D16:'', D17:'', D18:'', D19:'', D21:'', D22:'', D23:'', D24:'', D25:'', D26:'', D27:'', D28:'', D29:'', D31:'', D32:'', D33:'', D34:'', D35:'', D36:'', D37:'', D38:'', D39:'', D41:'', D42:'', D43:'', D44:'', D45:'', D46:'', D47:'', D48:'', D49:'', D51:'', D52:'', D53:'', D54:'', D55:'', D56:'', D57:'', D58:'', D59:'', D61:'', D62:'', D63:'', D64:'', D65:'', D66:'', D67:'', D68:'', D69:'', D71:'', D72:'', D73:'', D74:'', D75:'', D76:'', D77:'', D78:'', D79:'', D81:'', D82:'', D83:'', D84:'', D85:'', D86:'', D87:'', D88:'', D89:'', D91:'', D92:'', D93:'', D94:'', D95:'', D96:'', D97:'', D98:'', D99:'',
                      L11:'', L12:'', L13:'', L14:'', L15:'', L16:'', L17:'', L18:'', L19:'', L21:'', L22:'', L23:'', L24:'', L25:'', L26:'', L27:'', L28:'', L29:'', L31:'', L32:'', L33:'', L34:'', L35:'', L36:'', L37:'', L38:'', L39:'', L41:'', L42:'', L43:'', L44:'', L45:'', L46:'', L47:'', L48:'', L49:'', L51:'', L52:'', L53:'', L54:'', L55:'', L56:'', L57:'', L58:'', L59:'', L61:'', L62:'', L63:'', L64:'', L65:'', L66:'', L67:'', L68:'', L69:'', L71:'', L72:'', L73:'', L74:'', L75:'', L76:'', L77:'', L78:'', L79:'', L81:'', L82:'', L83:'', L84:'', L85:'', L86:'', L87:'', L88:'', L89:'', L91:'', L92:'', L93:'', L94:'', L95:'', L96:'', L97:'', L98:'', L99:''}
       }
  });

  ractive.on("sort", function(event, column){ this.set("sortColumn", column);});