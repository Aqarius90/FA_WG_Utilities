function initDB(){
    var DBstring;
    window.DBarr;
    ractiveDB.set({DBisNotLoaded: false});
    jQuery.get('https://aqarius90.github.io/FA_WG_Ulilities/final_data.csv', function(data) {
      DBstring = new String(data);
        //DBarr = CSVToArray(DBstring);
        DBarr = jQuery.csv.toArrays(data);
        ractiveDB.set({DBisLoaded: true});
        ListData();
    });
}

function vehDB(){
    ractiveDB.set({DBisVeh: true});    
    ractiveDB.set({DBisInf: false});
    ractiveDB.set({DBisHel: false});
    ractiveDB.set({DBisAir: false});
    ractiveDB.set({DBisShp: false});  
}

function infDB(){
    ractiveDB.set({DBisVeh: false});    
    ractiveDB.set({DBisInf: true});
    ractiveDB.set({DBisHel: false});
    ractiveDB.set({DBisAir: false});
    ractiveDB.set({DBisShp: false});  
}

function helDB(){
    ractiveDB.set({DBisVeh: false});    
    ractiveDB.set({DBisInf: false});
    ractiveDB.set({DBisHel: true});
    ractiveDB.set({DBisAir: false});
    ractiveDB.set({DBisShp: false});   
}
function airDB(){
    ractiveDB.set({DBisVeh: false});    
    ractiveDB.set({DBisInf: false});
    ractiveDB.set({DBisHel: false});
    ractiveDB.set({DBisAir: true});
    ractiveDB.set({DBisShp: false});    
}
function shpDB(){
    ractiveDB.set({DBisVeh: false});    
    ractiveDB.set({DBisInf: false});
    ractiveDB.set({DBisHel: false});
    ractiveDB.set({DBisAir: false});
    ractiveDB.set({DBisShp: true});    
}


//DisplayDB();
function DisplayDB(){
    function createTable(tableData) {
        var table = document.getElementById('DBtable');
        var tableBody = document.getElementById('DBbody');
        
        DBarr.forEach(function(rowData) {
            var row = document.createElement('tr');
        
            rowData.forEach(function(cellData) {
              var cell = document.createElement('td');
              cell.appendChild(document.createTextNode(cellData));
              row.appendChild(cell);
            });
        
            tableBody.appendChild(row);
          });
        
          table.appendChild(tableBody);
          document.body.appendChild(table);
    }

createTable([["row 1, cell 1", "row 1, cell 2"], ["row 2, cell 1", "row 2, cell 2"]]);
}