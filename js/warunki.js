'use strict';
/*

Warunki

*/
var wzrostMateusz = 150;
var wzrostKai = 150;

/*
warunek if 
*/

if ( wzrostKai < wzrostMateusz) {
    console.log("Kaja jest niższa"); 
}

/*
warunek if else
*/

if (wzrostKai > wzrostMateusz) {
    console.log("Kaja jest wyższa"); 
} else {
    console.log("Kaja jest niższa");
}

/*
warunek if else if
*/

if (wzrostKai > wzrostMateusz) {
    console.log("Kaja jest wyższa");
} else if (wzrostKai = wzrostMateusz) {
    console.log("Kaja jest tego samego wzrostu");
} else {
    console.log("Kaja jest niższa");
}


/*
warunek switch
*/

var kolor = 'zielony';

switch (kolor) {
    case 'czerwony':
        console.log('kolor czerwony')
        break;
    case 'zielony':
        console.log('kolor zielony')
        break;
    case 'niebieski':    
        console.log('kolor niebieski')
        break;
    default:
        console.log('inny kolor')
             }
