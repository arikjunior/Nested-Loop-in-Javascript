// var angka = parseInt(prompt('Masukkan Angka: '));

// switch (angka) {
//     case 1:
//         alert('anda memasukkan angka 1');
//         break;
//     case 2:
//         alert('anda memasukkan angka 2');
//         break;
//     case 3:
//         alert('anda memasukkan angka 3');
//         break;
//     default:
//         alert('Salah');
//         break;
// }

var item = prompt("nama makanan / minuman :\n (cth: nasi, daging, susu, hamburger, softdrink");

switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('makanan/minuman sehat');
        break;
    case 'hamburger':
    case 'softdrink':
        alert('makanan/minuman kurang sehat');
        break;
    default:
        alert('Anda tidak memasukkan makanan/minuman');
        break;
}