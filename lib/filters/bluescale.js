"use strict";

module.exports = function convert(bmpJSON){
    //determine if bmp has a color palette
    if(bmpJSON.hasOwnProperty('colorPalette')) {
        for(var i = 0; i < bmpJSON.colorPalette.length; i++) {
            bluescale(bmpJSON.colorPalette[i]); //call bluescale on every color in color palette
        }
    } else {
        for(var i = 0; i < bmpJSON.pixelMap.length; i++) {
            for(var j = 0; j < bmpJSON.pixelMap[i].length; j++) {
                bluescale(bmpJSON.pixelMap[i][j]); //call bluescale on every element in pixel map
            }
        }
    }
};

//remove channels other than blue
function bluescale(pixel){
    var red = colorRemove(pixel.red);
    var green = colorRemove(pixel.green);
    var blue = colorChannel(pixel.blue);

    pixel.red = red;
    pixel.green = green;
    pixel.blue = blue;
};

function colorChannel(color){
    color = color * 1;
    //scale color w/ coefficient. currently no change in color
    return color;
};

function colorRemove(color) {
    color = color * 0;
    //remove channels besides selected color via 0 coefficient
    return color;
};
