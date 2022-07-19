var tanya = true
while (tanya) {
    //menangkap pilihan player
    var player = prompt('pilih : gajah, semut, orang');
    //menangkap pilihan computer

    //membangkitkan bilangan random
    var computer = Math.random()

    if (computer < 0.34) {
        computer = 'gajah';
    } else if (computer >= 0.34 && computer < 0.67) {
        computer = 'orang';
    } else {
        computer = 'semut';
    }
    console.log(computer);

    //menentukan rules
    var hasil = '';
    if (player == computer) {
        hasil += 'Seri';
    }
    //Ternary
    // hasil = (computer == 'gajah') ? 'Menang' : 'Kalah';
    else if (player == 'gajah') {
        if (computer == 'orang') {
            hasil += 'Menang';
        } else {
            hasil += 'Kalah';
        }
    } else if (player == 'orang') {
        if (computer == 'semut') {
            hasil += 'Menang';
        } else {
            hasil += 'Kalah';
        }
    } else if (player == 'semut') {
        if (computer == 'gajah') {
            hasil += 'Menang'
        } else {
            hasil += 'Kalah';
        }
    } else {
        hasil = 'Inputan salah!'
    }
    //tampilkan hasilnya
    alert('Kamu memilih ' + player + ' dan Komputer memilih ' + computer + '\nMaka Hasilnya : Kamu ' + hasil)

    tanya = confirm('Main lagi?')
}

alert('Terima Kasih sudah bermain')