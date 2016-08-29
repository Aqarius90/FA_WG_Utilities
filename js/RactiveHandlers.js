
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
          sBinary:''
       }
  });

  ractive.on("sort", function(event, column){ this.set("sortColumn", column);});
