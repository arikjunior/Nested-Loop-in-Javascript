// var mahasiswa = {
//     nama: 'arik',
//     lulus: true,
//     IPSemester: [2.90, 3.14, 3.00, 3.54, 3.42, 3.25, 3.35, 3.55],
//     IPKumulatif: function () {
//         var total = 0;
//         for (var i = 0; i < this.IPSemester.length; i++) {
//             total += this.IPSemester[i];
//         }
//         return total / this.IPSemester.length;
//     }
// }


// var namaMhs = 'arik';
// var lulus = true;
// var IPSemester = [2.90, 3.14, 3.00, 3.54, 3.42, 3.25, 3.35, 3.55];

// function IPKumulatif(IPSemester) {
//     var total = 0;
//     for (var i = 0; i < IPSemester.length; i++) {
//         total += IPSemester[i];
//     }
//     return total / IPSemester.length;
// }


// var orang = {
//     nama: 'arik',
//     umur: 24,
//     pekerjaan: 'freshgraduate',
//     sapa: function () {
//         return 'Hi, nama saya ' + this.name + ' usia saya ' + this.umur + ' tahun, dan saya adalah seorang ' + this.pekerjaan;
//     }
// }


// var mhs = {
//     nama: 'arik',
//     umur: 24,
//     ips: [2.90, 3.14, 3.00, 3.54, 3.42, 3.25, 3.35, 3.55],
//     alamat: {
//         jalan: 'Jl. Jafar I/11 Beduwi',
//         kota: 'Singaraja',
//         provinsi: 'Bali'
//     }
// };


//Konsep This
//sebuah keywoard special yang secara otomatis didefinisikan oleh function.


//membuat object

//cara 1 - function declaration
function halo() {
    console.log(this);
    console.log('halo');
}
this.halo();
//this mengembalikan object global

//cara 2 - function literal
var obj = { a: 10, nama: 'arik' };
obj.halo = function () {
    console.log(this);
    console.log('halo2');
}
obj.halo();
//this mengembalikan object yang bersangkutan

//cara 3 - cunstructor function
function Halo() {
    console.log(this)
    console.log('halo3');
}
var obj1 = new Halo();
var obj2 = new Halo();
//this mengembalikan object yang baru dibuat


//Object Literal
var mhs1 = {
    nama: 'arik',
    nim: '162410102011',
    email: 'arik@gmail.com',
    jurusan: 'Teknologi Informasi'
}

var mhs2 = {
    nama: 'dewa',
    nim: '162410102031',
    email: 'dewa@gmail.com',
    jurusan: 'Teknologi Informasi'
}


//Function Declaration
function buatObjectMahasiswa(nama, nim, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Jason', '162410102011', 'jason@gmail.com', 'Teknologi Antariksa');
var mhs4 = buatObjectMahasiswa('Budi', '162410102011', 'Budi@gmail.com', 'Teknik Antariksa');


//Constructor
function Mahasiswa(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
}

var mhs5 = new Mahasiswa('Faris', '152030401', 'Kedokteran');




