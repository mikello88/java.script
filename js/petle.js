'use strict';
/*
Pętla for
*/

//for (var i=10 ; i>0 ; i--) {
////    console.log(i);
//}

/*
Pętla while
*/

//var it = 0;
//while (it < 10 ) {
////    console.log(it)
//}

/*
Pętla do..whle
*/

//var iter = 20;
//do {
//    console.log(iter);
//    iter++;
////    console.log(iter);
//} while (iter < 10 )
//    
/*
Przerywanie pęti - break
*/    
    
var a = 0;
while ( a < 10 ) {
    console.log(++a);
    
    if ( a == 5 ) {
        break;
    }
}

/*
Przeskakiwanie do kolejnej interacji - continue
*/

for ( var b = 0; b < 10; ++b) {
    
    if ( b==5) {
        continue;
    } else {
        console.log(b);
    }
    
    console.log("--");
}

/*
postinrementacja vs preinktrementacja
*/

for (var i=1; i<10; ) {
    console.log(++i);
}
    console.log('-----')