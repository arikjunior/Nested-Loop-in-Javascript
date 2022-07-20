// var myFunc = function () {
//     alert('hello world');
// }
// var myArr = ['teks', 2, false, myFunc(), [4, 5, 6]];
// console.log(myArr[3]);


// 1. Menambahkan array
// var arr = [];
// arr[0] = 'arik';
// arr[1] = 'messi';
// arr[2] = 'ronaldo';
// arr[3] = 'neymar';
// console.log(arr[0]);

// 2. Menghapus array
// var arr = ['satu', 'dua', 'tiga'];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan array
// var arr = ['arik', 'dewa', 'reza', 'yazid', 'rafli'];
// for (var i = 0; i < arr.length; i++) {
//     console.log('Jagoan ke-' + (i + 1) + ' bernama ' + arr[i]);
// }


// Method pada array
// 1. Join
// var arr = ['arik', 'junior', 'neymar', 'messi'];
// console.log(arr.join('-'));

// 2.push & pop
// arr.push('doddy','fitri'); //menambah element terakhir
// arr.pop(); //menghapus element terakhir

// 3. unshif & shift
// arr.unshift('ambar', 'wati'); //menambah element pertama
// arr.shift(); //menghapus element pertama

// 4. splice
// arr.splice(2, 0, 'ronaldo'); // menambah element ditengah-tengah
//splice (indexAwal, mauDihapusBerapa, elementBaru1, elementBaru2)

// 5. slice
// var arr = ['arik', 'junior', 'ronaldo', 'neymar', 'messi'];
// var arr2 = arr.slice(1, 3) //mengambil indexd idi arrray yang baru
// arr.slice(indexAwal, indexAkhir)


// 6.foreach //pengulangan
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// angka.forEach(function (e) {
//     console.log(e);
// })

// var arr = ['arik', 'junior', 'ronaldo', 'neymar', 'messi'];
// arr.forEach(function (e, i) {
//     console.log('Mahasiswa ke-' + (i + 1) + ' bernama ' + e);
// });


// 7.map //membentuk array baru yang di dapat dari array itu sendiri dan di map() ini sendiri dapat mengembalikan nilai return.
// var angka = [1, 2, 5, 3, 6, 8, 4, 7];
// var baru = angka.map(function (e) {
//     return e * 2;
// })
// console.log(baru.join(' - '))


// 8.sort //mengurutkan angka dari terkecil ke besar
// var angka = [1, 4, 3, 5, 2, 8, 7, 6, 20, 10, 50, 30];
// console.log(angka.join('-'))
// angka.sort(function (a, b) {
//     return a - b; //function digunakan ketika angka lebih dari 9
// });
// console.log(angka.join('-'))


// 9.filter //bisa mencari banyak nilai
var angka = [1, 4, 3, 5, 2, 8, 7, 6, 20, 10, 50, 30];
var angka2 = angka.filter(function (x) {
    return x > 4;
});
console.log(angka2.join('-'))


// 10.find //hanya mencari satu nilai saja
var angka = [1, 4, 3, 5, 2, 8];
var angka2 = angka.find(function (e) {
    return e > 4;
})
console.log(angka2);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// console.log(arr2.join('-'));