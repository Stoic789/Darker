
function darkerColor(hex1, hex2) {
    // Convert hex color codes to RGB values
    let color1 = hexToRgb(hex1);
    let color2 = hexToRgb(hex2);
  
    // Compare the brightness of the two colors
    let brightness1 = (color1.r * 299 + color1.g * 587 + color1.b * 114) / 1000;
    let brightness2 = (color2.r * 299 + color2.g * 587 + color2.b * 114) / 1000;
  
    if (brightness1 > brightness2) {
        return hex2;
       
    } else {
        return hex1;
        
    }
}

// Hex to RGB conversion function
function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function isDarker(hex1, hex2) {
    // Convert hex color codes to RGB values
    let color1 = hexToRgb(hex1);
    let color2 = hexToRgb(hex2);

    // Compare the brightness of the two colors
    let brightness1 = (color1.r * 299 + color1.g * 587 + color1.b * 114) / 1000;
    let brightness2 = (color2.r * 299 + color2.g * 587 + color2.b * 114) / 1000;
  
    return brightness1 < brightness2;
}


function sortColors(colors) {
    colors.sort(function(color1, color2) {
        return isDarker(color1, color2);
    });
    return colors;
}

function setBackgroundColors(colors, ids) {
    for (let i = 0; i < ids.length; i++) {
        let element = document.getElementById(ids[i]);
        element.style.backgroundColor = colors[i];
    }
}


module.exports = {
    darkerColor,
    hexToRgb,
    isDarker,
    sortColors,
    setBackgroundColors,



}