'use strict';



/*
--Zasięg zmiennych--

W ten sposób nie kodowac!!!!!!!!!!!

*/

/* Nigdy nie nazywamy zmiennych globalnych tak jak parametrow funkcji
 nigdy nie nazywamy zmiennych globalnych tak jak zmiennych lokalnych
 nigdynie nazywamy zmiennych lokalnych tak jak parametow funkcji
 staramy sie nie uzywac zmiennych glob wewnatrz fukcji, chyba ze to konieczne*/


var liczba1= 3, liczba2 = 5, liczba3= 40;

function multiply (parametr1, parameter2, parametr3) {

  
    var result;
    
    result = parametr1 * parameter2 * parametr3;
    
    return result;
}

var wynik = multiply(liczba1, liczba2, liczba3);

console.log(wynik);