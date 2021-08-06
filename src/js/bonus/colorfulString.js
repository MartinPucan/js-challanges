"use strict";

function getColorfulString(title) {
    let color = '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0');
    console.log("%c" + title, "color:" + color)
}

getColorfulString("Hello")
getColorfulString("world")