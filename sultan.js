var ulang = true;

while (ulang) {

    var us = parseInt(prompt('Masukkan uang yang anda punya: '));
    var uang = us;
    var catatan = '';
    var belanjaan = '';
    var a = 100;
    var b = 50;
    var c = 200;
    var d = 300;

    alert('Anda memiliki uang sebesar Rp.' + uang + ' \nSelamat Berbelanja');
    while (uang > 0) {
        var e = prompt('Mau berbelanja apa ? \nmobil, motor, rumah, hotel');
        if (e == 'mobil') {
            if (uang >= a) {
                catatan = 'Anda membeli mobil seharga Rp.' + a;
                alert(catatan);
                uang -= a;
                belanjaan += 'Mobil ';
                alert('Sisa uang anda ' + uang);
            } else {
                alert('Uang kurang sultan');
            }
        } else if (e == 'motor') {
            if (uang >= b) {
                catatan = 'Anda membeli motor seharga Rp.' + b;
                alert(catatan);
                uang -= b;
                belanjaan += 'Motor ';
                alert('Sisa uang anda ' + uang);
            } else {
                alert('Uang kurang sultan');
            }
        } else if (e == 'rumah') {
            if (uang >= c) {
                catatan = 'Anda membeli rumah seharga Rp.' + c;
                alert(catatan);
                uang -= c;
                belanjaan += 'Rumah ';
                alert('Sisa uang anda ' + uang);
            } else {
                alert('Uang kurang sultan');
            }
        } else if (e == 'hotel') {
            if (uang >= d) {
                catatan = 'Anda membeli hotel seharga Rp.' + d;
                alert(catatan);
                uang -= d;
                belanjaan += 'Hotel ';
                alert('Sisa uang anda ' + uang);
            } else {
                alert('Uang kurang sultan');
            }
        } else {
            catatan = 'Tidak terjual';
            alert(catatan);
        }
    }
    if (uang == 0) {
        alert('Uang sudah habis sultan Rp.' + uang + '\n' +
            'Hasil belanjaan sultan adalah : ' + belanjaan);
    }
    ulang = confirm('Mau menabung lagi?');
}
alert('Terima Kasih Sultan!');