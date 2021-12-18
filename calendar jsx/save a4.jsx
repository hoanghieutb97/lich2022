app.preferences.rulerUnits = Units.PIXELS; // hệ đo pixel
var folderA4 = Folder("~/Desktop/save a4");
if (folderA4.exists) {
    alert("please delete folder 'save a4' and try it again ");
}
else {
    folderA4.create();
    jpgOption = new JPEGSaveOptions();
    jpgOption.quality = 11;

    var customerChildren = Folder("~/Desktop/save customer").getFiles("*");


    // kiem tra ten

    KiemTraThuMuc(customerChildren);

     ngay = (new Date()).getDate();
     thang = (new Date()).getMonth() + 1;

    for (var i = 0; i < customerChildren.length; i = i + 2) {
        var currentFolder = String(customerChildren[i]).split("/");   // đường dẫn thư mục là  customerChildren[i]
        currentFolder = currentFolder[currentFolder.length - 1];
        if (currentFolder.split(".").length === 1) { // chỉ chọn những folder. còn file thì không
            var ListFileChildren = Folder(customerChildren[i]).getFiles("*");
            if (ListFileChildren.length < 13) {
                alert(" co cuon mot mat khong du 13 file");
            }
            else if (ListFileChildren.length < 16) { // nếu lịch có 1 mặt 13-14 file thì làm cái này

                Folder("~/Desktop/save a4/1 mat").create();

                // lam to bia tren
                app.documents.add(2480, 3508, 300, "a4");
                app.open(File(customerChildren[i] + "/bia.jpg"));
                app.doAction("duplicate to a4", "calendar");
                app.doAction("can giua", "calendar");
                app.doAction("can le tren", "calendar");

                // lam bia duoi
                try {
                    app.open(File(customerChildren[i + 1] + "/bia.jpg"));
                    app.doAction("duplicate to a4", "calendar");
                    app.doAction("can giua", "calendar");
                    app.doAction("can le duoi", "calendar");

                } catch (error) {
                    // loi khi so quyen la le
                }
                app.doAction("hop nhat", "calendar");

                app.activeDocument.saveAs(Folder("~/Desktop/save a4/1 mat/" + i + "-" + (i + 1) + " (1).jpg"), jpgOption, true, Extension.LOWERCASE);

                // lam 12 thang
                for (var i2 = 1; i2 <= 12; i2++) {
                    app.open(File(customerChildren[i] + "/t%20(" + i2 + ").jpg"));
                    app.doAction("duplicate to a4", "calendar");
                    app.doAction("can giua", "calendar");
                    app.doAction("can le tren", "calendar");

                    try {
                        app.open(File(customerChildren[i + 1] + "/t%20(" + i2 + ").jpg"));
                        app.doAction("duplicate to a4", "calendar");
                        app.doAction("can giua", "calendar");
                        app.doAction("can le duoi", "calendar");
                    } catch (error) {
                        // loi khi  so thu muc la le
                    }

                    app.doAction("hop nhat", "calendar");

                    app.activeDocument.saveAs(Folder("~/Desktop/save a4/1 mat/" + i + "-" + (i + 1) + " (" + (i2 + 1) + ").jpg"), jpgOption, true, Extension.LOWERCASE);


                }
                


                // // lam trang cuoi
                // try {
                //     app.open(File("~/Desktop/to%20cuoi.psd"));
                //     app.activeDocument.artLayers["sku"].textItem.contents = "J" + ngay + thang + (i+1);
                //     app.doAction("duplicate to a4", "calendar");
                //     app.doAction("can giua", "calendar");
                //     app.doAction("can le tren", "calendar");

                //     app.open(File("~/Desktop/to%20cuoi.psd"));
                //     app.activeDocument.artLayers["sku"].textItem.contents = "J" + ngay + thang + (i + 2);
                //     app.doAction("duplicate to a4", "calendar");
                //     app.doAction("can giua", "calendar");
                //     app.doAction("can le duoi", "calendar");

                // } catch (error) {
                //     // loi khi so quyen la le
                // }
                // app.doAction("hop nhat", "calendar");
                // app.activeDocument.saveAs(Folder("~/Desktop/save a4/1 mat/" + i + "-" + (i + 1) + " (16).jpg"), jpgOption, true, Extension.LOWERCASE);


                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


            }






            else { // nếu lịch 2 mặt -  22 file thì làm cái này

                Folder("~/Desktop/save a4/2 mat").create();

                // lam to bia
                app.documents.add(2480, 3508, 300, "a4");
                app.open(File(customerChildren[i] + "/bia.jpg"));
                app.doAction("duplicate to a4", "calendar");
                app.doAction("can giua", "calendar");
                app.doAction("can le tren", "calendar");

                try {
                    app.open(File(customerChildren[i] + "/biasau.jpg"));
                    app.doAction("duplicate to a4", "calendar");
                    app.doAction("can giua", "calendar");
                    app.doAction("can le duoi", "calendar");
                } catch (error) {
                    app.open(File(customerChildren[i] + "/bia.jpg"));
                    app.doAction("duplicate to a4", "calendar");
                    app.doAction("can giua", "calendar");
                    app.doAction("can le duoi", "calendar");
                }
                app.doAction("hop nhat", "calendar");

                app.activeDocument.saveAs(Folder("~/Desktop/save a4/2 mat/" + currentFolder + " (1).jpg"), jpgOption, true, Extension.LOWERCASE);
                app.activeDocument.saveAs(Folder("~/Desktop/save a4/2 mat/" + currentFolder + " (2).jpg"), jpgOption, true, Extension.LOWERCASE);


                // lam 12 thang
                for (var i2 = 1; i2 <= 12; i2 = i2 + 2) {



                    app.open(File(customerChildren[i] + "/t%20(" + i2 + ").jpg"));
                    app.doAction("duplicate to a4", "calendar");
                    app.doAction("can giua", "calendar");
                    app.doAction("can le tren", "calendar");
                    app.open(File(customerChildren[i] + "/t%20(" + (i2 + 1) + ").jpg"));
                    app.doAction("duplicate to a4", "calendar");
                    app.doAction("can giua", "calendar");
                    app.doAction("can le duoi", "calendar");
                    app.doAction("hop nhat", "calendar");

                    app.activeDocument.saveAs(Folder("~/Desktop/save a4/2 mat/" + currentFolder + " (" + (i2 + 2) + ").jpg"), jpgOption, true, Extension.LOWERCASE);

                    app.open(File(customerChildren[i] + "/s%20(" + i2 + ").jpg"));
                    app.doAction("duplicate to a4", "calendar");
                    app.doAction("can giua", "calendar");
                    app.doAction("can le tren", "calendar");
                    app.open(File(customerChildren[i] + "/s%20(" + (i2 + 1) + ").jpg"));
                    app.doAction("duplicate to a4", "calendar");
                    app.doAction("can giua", "calendar");
                    app.doAction("can le duoi", "calendar");
                    app.doAction("hop nhat", "calendar");

                    app.activeDocument.saveAs(Folder("~/Desktop/save a4/2 mat/" + currentFolder + " (" + (i2 + 3) + ").jpg"), jpgOption, true, Extension.LOWERCASE);

                }
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


            }
        }

    }
}


function KiemTraThuMuc(customerChildren) {
    for (var i = 0; i < customerChildren.length; i++) {
        var currentFolder = String(customerChildren[i]).split("/");   // đường dẫn thư mục là  customerChildren[i]
        currentFolder = currentFolder[currentFolder.length - 1]; // currentFolder  la ten thu muc

        var ListFileChildren = Folder(customerChildren[i]).getFiles("*");
        for (var j = 0; j < ListFileChildren.length; j++) {
            var name = String(ListFileChildren[j]).split("/");
            name = name[name.length - 1];
            if (
                !(name === "bia.jpg"
                    || name === "t%20(1).jpg"
                    || name === "t%20(2).jpg"
                    || name === "t%20(3).jpg"
                    || name === "t%20(4).jpg"
                    || name === "t%20(5).jpg"
                    || name === "t%20(6).jpg"
                    || name === "t%20(7).jpg"
                    || name === "t%20(8).jpg"
                    || name === "t%20(9).jpg"
                    || name === "t%20(10).jpg"
                    || name === "t%20(11).jpg"
                    || name === "t%20(12).jpg"
                    || name === "biasau.jpg"
                    || name === "s%20(1).jpg"
                    || name === "s%20(2).jpg"
                    || name === "s%20(3).jpg"
                    || name === "s%20(4).jpg"
                    || name === "s%20(5).jpg"
                    || name === "s%20(6).jpg"
                    || name === "s%20(7).jpg"
                    || name === "s%20(8).jpg"
                    || name === "s%20(9).jpg"
                    || name === "s%20(10).jpg"
                    || name === "s%20(11).jpg"
                    || name === "s%20(12).jpg"

                )

            ) alert(currentFolder);
        }

    }
}
function taoMaKhach(params) {
    
}