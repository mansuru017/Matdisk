//Nama : M Tholhah Mansur
//NIM  : 20190801050
//Buatlah Program untuk mencari n! (n Faktorial) dengan menggunakan looping for.

console.log("=============================================");

var room = require ('readline-sync');

var faktorial = 1;
var n = 0;
var n = parseInt(room.question("= Masukkan Nilai : "));
for (var a=1; a<=n; a++){
    faktorial = a*faktorial;
}
console.log("= Faktorial Dari "+n+" adalah : ["+faktorial+"]" );
console.log("=============================================");