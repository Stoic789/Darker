Description:
This package provides a set of functions for working with colors in the hexadecimal format. The package includes functions for converting hexadecimal color codes to RGB values, comparing the brightness of two colors, sorting an array of colors by brightness, and setting the background color of elements in a webpage.

Functionality:

darkerColor(hex1, hex2): 
Returns the hex code for the color that is darker out of the two provided.

hexToRgb(hex):
 Converts a hexadecimal color code to an object with properties for the red, green, and blue values.

isDarker(hex1, hex2):
 Returns a Boolean indicating whether the first color is darker than the second.

sortColors(colors):
 Sorts an array of hex color codes by brightness, with the darkest colors appearing first.


setBackgroundColors(colors, ids):
Sets the background color of elements in a webpage with the matching ids, to the corresponding color in the colors array.


Installation:
To install the package, run " npm install darker " in your command line.

Usage:
To use the package in your code, 
import it with const hexColorUtils = require('darker');.
Then you can call the functions from the package by referencing them through the imported object,
for example hexColorUtils.darkerColor('#000000', '#ffffff').
