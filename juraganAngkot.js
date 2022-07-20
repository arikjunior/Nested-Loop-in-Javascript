var penumpang = [];

var tambahPenumpang = function (namaPenumpang, penumpang) {
    //Jika angkot kosong
    if (penumpang.length == 0) {
        // tambah penumpang diawal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;

    } else {
        // terlusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            //jika ada kursi kosong
            if (penumpang[i] == undefined) {
                //tambah penumpang dikursi tersebut
                penumpang[i] = namaPenumpang
                //kembalikan isi array & keluar dari function
                return penumpang
            }
            //jika ada nama penumpang yang sama
            else if (penumpang[i] == namaPenumpang) {
                //tampilkan pesan kesalahan
                console.log(namaPenumpang + ' Sudah ada dalam angkot')
                //kembalikan isi array & keluar dari function
                return penumpang;

            }
            //jika seluruh kursi terisi
            else if (i == penumpang.length - 1) {
                //tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                //kembalikan isi array & keluar dari function
                return penumpang;
            }
        }

    }
}

var hapusPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        //menampilkan pesan penumpang kosong
        console.log('Penumpang masih kosong')
        //kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        //telusuri seluruh kursi penumpang dari awal
        for (var i = 0; i < penumpang.length; i++) {
            //jika menulis nama penumpang yang sama dengan nama penumpang
            if (penumpang[i] == namaPenumpang) {
                //turunkan penumpang menjadi undefined
                penumpang[i] = undefined;
                //kembalikan isi array & keluar dari function
                return penumpang;
            }
            //jika nama yang dicari tidak ada dalam angkot
            else if (i == penumpang.length - 1) {
                //tampilkan pesan nama tersebut tidak ada
                console.log('Nama ' + namaPenumpang + ' tidak ada dalam angkot');
                //kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
}