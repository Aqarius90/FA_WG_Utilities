function initDB(){
    var DBstring;
    var DBarr;
    ractiveDB.set({DBisNotLoaded: false});
    jQuery.get('https://aqarius90.github.io/FA_WG_Ulilities/final_data.csv', function(data) {
      DBstring = new String(data);
      DBarr = jQuery.csv.toArrays(data);
    });
    console.log(DBarr);
    ractiveDB.set({DBisLoaded: true});
}
