var tanya = true;                       //by : @arikjunior
while (tanya) {
    var nyawa = 3;
    var random = Math.floor(Math.random() * 10) + 1;
    var hasil = '';

    while (nyawa >= 1) {
        alert('Mulai menebak angka 1-10 dengan ' + nyawa + ' kesempatan')
        var tebak = parseInt(prompt('Tebak angka 1-10: '))
        if (tebak == random) {
            hasil = 'Benar';
            alert('Anda menebak ' + tebak + ' Tebakan ' + hasil + ', Jawabannya : ' + random);
            break;
        } else if (tebak > random) {
            hasil = 'Besar';
            alert('Anda menebak ' + tebak + ' jawaban Salah, angka terlalu ' + hasil);
            nyawa -= 1;
        } else if (tebak < random) {
            hasil = 'Rendah';
            alert('Anda menebak ' + tebak + ' jawaban Salah, angka terlalu ' + hasil);
            nyawa -= 1;
        }
        if (nyawa == 0) {
            alert('Kesempatan habis. Anda gagal menebak angka : ' + random);
        }
    }
    tanya = confirm('Ulang lagi?');
}
alert('Terima Kasih');