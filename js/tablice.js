'use strict';


/*
Tablice
*/


var imiona = ['Monika', 'Krystian', 'Agnieszka'];

imiona[3] = 'Tania';
imiona[2] = 'Ela';

imiona.push('Geralt');

console.log(imiona);

imiona.pop();
imiona.pop();

console.log(imiona);

console.log(imiona.unshift('Robert'));

console.log(imiona);
console.log(imiona.shift());

console.log(imiona);
console.log(imiona.length);

imiona.push("Kaja");

//for (var i = 0; i < 4; i++) {
//    console.log( imiona[i] );
//}

for (var i = imiona.length-1; i >= 0; i--) {
    console.log(imiona[i]);
}

imiona.forEach(function (element,i) {
    console.log('Element nr.' + i + ' = ' + element);
});

console.log( imiona.join(' - '));

//imiona.sort();
//
//imiona.reverse();
//
//console.log(imiona);


var imionaMeskie = ['Robert', 'Mariusz', 'Andrzej'];
var zbiorImion = imionaMeskie.concat(imiona);

console.log(zbiorImion);

console.log(zbiorImion.indexOf('Mariusz') );

console.log( Array.isArray(zbiorImion) );

console.log(zbiorImion.slice(2, 5) );

zbiorImion.splice(2, 3, 'Julek', "Krzyś" );
console.log(zbiorImion);

console.log(zbiorImion.toString() );