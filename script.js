// var ulang = true;
// while (ulang) {
//     console.log('Hello Arik');
//     ulang = confirm('Lagi ?')
// }



// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// var noAngkot = 1;
// while (noAngkot <= jmlAngkot) {
//     if (noAngkot <= angkotBeroperasi) {
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
//     } else {
//         console.log('Angkot No. ' + noAngkot + ' tidak beroperasi dengan baik.');
//     }

//     noAngkot++
// }



// var jmlAngkot = 10;
// var angkotBeroperasi = 3;
// var noAngkot = 1;
// while (noAngkot <= angkotBeroperasi) {
//     console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
//     noAngkot++
// }

// for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
//     console.log('Angkot No. ' + noAngkot + ' tidak beroperasi dengan baik.')
// }



var jmlAngkot = 10;
var angkotBeroperasi = 3;
var noAngkot = 1;
for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= 6 && noAngkot !== 5) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    } else if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur.')
    } else {
        console.log('Angkot No. ' + noAngkot + ' tidak beroperasi dengan baik.')
    }
}