//Belahketupat
var n = ''

//bentuk kri atas
for (i = 10; i > 0; i--) {
    for (j = 1; j <= i - 1; j++) {
        n += ' '
        n += ' '
    }
    for (y = 1; y <= 10 - i + 1; y++) {
        n += '*'
        n += ' '
    }
    for (l = 1; l <= 10 - i; l++) {
        n += '*'
        n += ' '
    }
    n += '\n'
}
//be1ntuk kiri bawah
for (i = 1; i <= 10; i++) {
    for (j = 1; j <= i; j++) {
        n += ' '
        n += ' '
    }
    for (y = 1; y <= 10 - i; y++) {
        n += '*'
        n += ' '
    }
    for (l = 1; l < 10 - i; l++) {
        n += '*'
        n += ' '
    }
    n += '\n'
}
console.log(n)

//kotak
var s = '';
for (var i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        s += '*'
        s += ' '
    }
    s += '\n'
}
console.log(s)

//segitiga 1 - 10 rata kanan
var s = '';
for (var i = 0; i < 10; i++) {
    for (j = 0; j <= i; j++) {
        s += '*';
        s += ' ';
    }
    s += '\n';
}
console.log(s);

//segitiga 10 - 1 rata kiri
var s = '';
for (var i = 10; i > 0; i--) {
    for (var j = 0; j < i; j++) {
        s += '*'
        s += ' '
    }
    s += '\n';
}
console.log(s);



//segitiga
var a = '';

for (var i = 10; i > 0; i--) {
    for (var j = 0; j < 10 + 1; j++) {
        if (j >= i) {
            a += '*'
        } else {
            a += '';
        }
        a += ' ';
    }
    a += '\n';
}
console.log(a);

//segitiga kebalik
var a = '';

for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10 + 1; j++) {
        if (j > i) {
            a += '*'
        } else {
            a += '';
        }
        a += ' ';
    }
    a += '\n';
}
console.log(a);

//Segitiga 1 - 10 rata kanan
var a = '';

for (var i = 10; i > -1; i--) {
    for (var j = 0; j <= 10 - 1; j++) {
        if (j >= i) {
            a += '*';
        } else {
            a += ' ';
        }
        a += ' '
    }
    a += '\n';
}
console.log(a);

//Segitiga 10 - 1 rata kanan
var a = '';

for (var i = 10; i > 0; i--) {
    for (var j = 10; j > 0; j--) {
        if (j > i) {
            a += ' ';
        } else {
            a += '*';
        }
        a += ' '
    }
    a += '\n';
}
console.log(a);