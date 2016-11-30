function initDB(){
  jQuery.get('https://aqarius90.github.io/FA_WG_Ulilities/final_data.csv', function(data) {
    console.log(data);});
    ractiveDB.set({DBisNotLoaded: false});
    ractiveDB.set({DBisLoaded: true});
}
