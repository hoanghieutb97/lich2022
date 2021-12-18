app.preferences.rulerUnits = Units.PIXELS; // hệ đo pixel


// tao folder a5
var folderA5 = Folder("~/Desktop/save a5");
if (!folderA5.exists) { folderA5.create(); }

// tao folder save customer
var folderCustomer = Folder("~/Desktop/save customer");
if (!folderCustomer.exists) { folderCustomer.create(); }


var w=app.activeDocument.width;
var h=app.activeDocument.height;
if(w==="2480 px" && h==="1754 px"){
    try {
        var thisDocument = app.activeDocument.name;
        var nameSave = thisDocument.split(".")[0];
        var fileName = Folder("~/Desktop/save a5/" + nameSave);
        jpgOption = new JPEGSaveOptions();
        jpgOption.quality = 12;
        app.activeDocument.saveAs(fileName, jpgOption, true, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    
    } catch (error) {
        alert("have no thing to do !");
    
    }
}
else{
    alert("crop document ve co 2480px : 1754px");
}
