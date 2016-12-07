function initDB(){
    var DBstring;
    window.DBarr;
    ractiveDB.set({DBisNotLoaded: false});
    jQuery.get('https://aqarius90.github.io/FA_WG_Utilities/final_data.csv', function(data) {
      DBstring = new String(data);
        //DBarr = CSVToArray(DBstring);
        DBarr = jQuery.csv.toArrays(data);
        ListData();
        ractiveDB.set({DBisLoaded: true});
    });
}

function ListData(){
    window.DBveh = new Array();
    window.DBinf = new Array();
    window.DBhel = new Array();
    window.DBair = new Array();
    window.DBshp = new Array();
    DBveh[0] = DBarr[0];
    DBinf[0] = DBarr[0];
    DBhel[0] = DBarr[0];
    DBair[0] = DBarr[0];
    DBshp[0] = DBarr[0];
    
    for (var i = 0; i < DBarr[0].length; i++) {
        if(DBarr[0][i] == "MovementType"){
            for (var j = 1; j < DBarr.length; j++) {
                if(DBarr[j][i] == "Wheeled" || DBarr[j][i] == "Tracked"){
                    DBveh[DBveh.length] = DBarr[j];
                }
                else{
                    if(DBarr[j][i] == "Foot"){
                        DBinf[DBinf.length] = DBarr[j];
                    }
                    else{
                        if(DBarr[j][i] == "Air"){
                            if(DBarr[j][i-2] > 450){
                                DBair[DBair.length] = DBarr[j];
                            }
                            else{
                                DBhel[DBhel.length] = DBarr[j];
                            }
                        }
                        else{
                            if(DBarr[j][i] == "Water"){
                                DBshp[DBshp.length] = DBarr[j];
                            }
                        }
                    }      
                }              
            }
        i=DBarr.length;
        }
    }
    
    $(document).ready(function()
      {
          $("#DBtable").tablesorter();
      }
    );
}





function DisplayDB(tableData, type){
    var head = ractiveDB.get('DBhead');
    head = '';
    var body = ractiveDB.get('DBbody');
    body = '';
    //var table = document.getElementById('DBtable');
    //var tableBody = document.getElementById('DBbody');
    var tableArr = new Array();
    for (var j = 0; j < tableData.length; j++) {
        tableArr[j] = new Array();
    }
    var tmp = 0;
    for (var i = 0; i < tableData[0].length; i++) {   
        if((type == 1 && (tableData[0][i] == "Name" 
                        || tableData[0][i] == "Amphibious"
                        || tableData[0][i] == "ArmorFront"
                        || tableData[0][i] == "ArmorRear"
                        || tableData[0][i] == "ArmorSides"
                        || tableData[0][i] == "ArmorTop"
                        ))){  
            for (var k = 0; k < tableData.length; k++) {
                tableArr[k][tmp] = tableData[k][i];
            }
            tmp++; 
        }        
    }
    var table = document.getElementById('DBtable');
    var tableBody = document.getElementById('DBbody');
    
    for (var i = 0; i < tableArr.length; i++) {   
        var row = table.insertRow(i);
            for (var k = 0; k < tableArr[0].length; k++) {                
                var cell = row.insertCell(k);
                cell.innerHTML = tableArr[i][k];
            }
    }
    $(document).ready(
        function()
        {
        $("#DBtable").trigger("update");
        }
    );
}

function vehDB(){
    ractiveDB.set({DBisVeh: true});    
    ractiveDB.set({DBisInf: false});
    ractiveDB.set({DBisHel: false});
    ractiveDB.set({DBisAir: false});
    ractiveDB.set({DBisShp: false});
    DisplayDB(DBveh, 1);
}

function infDB(){
    ractiveDB.set({DBisVeh: false});    
    ractiveDB.set({DBisInf: true});
    ractiveDB.set({DBisHel: false});
    ractiveDB.set({DBisAir: false});
    ractiveDB.set({DBisShp: false});  
    DisplayDB(DBinf, 2);
}

function helDB(){
    ractiveDB.set({DBisVeh: false});    
    ractiveDB.set({DBisInf: false});
    ractiveDB.set({DBisHel: true});
    ractiveDB.set({DBisAir: false});
    ractiveDB.set({DBisShp: false});   
    DisplayDB(DBhel, 3);
}
function airDB(){
    ractiveDB.set({DBisVeh: false});    
    ractiveDB.set({DBisInf: false});
    ractiveDB.set({DBisHel: false});
    ractiveDB.set({DBisAir: true});
    ractiveDB.set({DBisShp: false});    
    DisplayDB(DBair, 4);
}
function shpDB(){
    ractiveDB.set({DBisVeh: false});    
    ractiveDB.set({DBisInf: false});
    ractiveDB.set({DBisHel: false});
    ractiveDB.set({DBisAir: false});
    ractiveDB.set({DBisShp: true}); 
    DisplayDB(DBshp, 5);   
}
