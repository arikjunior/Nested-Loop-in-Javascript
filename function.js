// function volumeKubus(a, b) {
//     var volumeA;
//     var volumeB;
//     var total;

//     volumeA = a * a * a;
//     volumeB = b * b * b;
//     total = volumeA + volumeB;
//     return total;
// }

// var a = parseInt(prompt('Masukkan nilai 1 : '));
// var b = parseInt(prompt('Masukkan nilai 2 : '));
// var hasil = volumeKubus(a, b);
// alert(hasil);


//arguments
// function tambah() {
//     var hasil = 0
//     for (var i = 0; i < arguments.length; i++) {
//         hasil += arguments[i];
//     }
//     return hasil;
// }
// var jumlah = tambah(1, 2, 3, 4, 5);
// console.log(jumlah);


//refactoring (mempersingkat dan memperkecil kodingan agar tidak terlalu banyak variabel)
// function volumeKubus(a, b) {
//     var total;
//     total = a * a * a + b * b * b;
//     return total;
// }
// var hasil = volumeKubus(8, 3);
// alert(hasil);


//function scope
//variable dalam function hanya dapat digunakan didalam function. variable global dapat digunakan dalam function

//global scope
// var a = 1;

// function tes(a) {
//     console.log(a)
// }
// tes(a);
// console.log(a);


//rekursif
// function tampilAngka(n) {
//     //basecase
//     if (n === 0) {
//         return
//     }
//     //--------
//     console.log(n)
//     return tampilAngka(n - 1)
// }
// tampilAngka(10);

// function faktorial(n) {
//     //basecase
//     if (n === 0) {
//         return 1;
//     }
//     //--------
//     // console.log(n)
//     return n * faktorial(n - 1);
// }


//function declaration
//lebih fleksibel
// function tampilPesan(nama) {
//     alert('halo ' + nama);
// }

//function expression
//lebih power full : sebagai closure, sebagai argumen untuk function lain, IIFE(Immediately Invoked Funtion Expression)
// var tampilPesan = function (nama) {
//     alert('halo ' + nama);
// }