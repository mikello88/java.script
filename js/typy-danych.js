'use strict';

/*

Typ liczbowy

*/

var wyplata = 5000;
var premia = 2500;
var calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);

/*

Typ logiczny - boolean

*/

var czyJestSmog;
czyJestSmog = false;

if (czyJestSmog) {
    console.log("Jest SMOG");
} else {
    console.log("Nie ma SMOGa");
}

/*

Typy specjalne - undfined / null

*/

var niezdefioniowanaZmienna;
var nullowaZmienna = null;



console.log(niezdefioniowanaZmienna);
console.log(nullowaZmienna);

var imieStudenta = "Michał";
console.log(imieStudenta.indexOf('c'));