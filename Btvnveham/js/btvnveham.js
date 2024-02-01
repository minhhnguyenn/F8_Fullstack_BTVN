// Bài 1: N số fibonaci
document.write("<h2>Bài 1: N số fibonaci</h2>");
function fibonaci(m) {
    if (m <= 0 || m % 1 !== 0) {
        return false
    }
    if (m <= 2) return 1;
    return fibonaci(m - 1) + fibonaci(m - 2);
}
var result = "";
function list(m) {
    if (m > 0) {
        list(m - 1);
        result += fibonaci(m) + " ";
    }
    return result
}
var n = 8;
var b1 = list(n);
document.write(`<p> ${n} số fibonaci đầu tiên là : ${b1}</p>`);

// Bài 2: Đảo ngược số
document.write("<h2>Bài 2: Đảo ngược số</h2>");
function reverseNumber(a) {
    a = a + "";
    var b = a.length;
    a = a * 1;
    var newNumber = 0;
    for (i = 1; i <= b; i++) {
        var c;
        c = a % 10;
        a = (a - c) / 10;
        newNumber += c * (10 ** (b - i));
    }
    return newNumber;
}

var n = 213458758767;
var b2 = reverseNumber(n);
document.write(`${n} nghịch đảo lại thành ${b2}`)


// Bài 3: Viết hàm chuyển số thành chữ
document.write("<h2>Bài 3: Viết hàm chuyển số thành chữ</h2>");
function convert(a) {
    var result = "";
    for (i = 1; i <= 4; i++) {
        var b, c;
        b = a % 10;
        a = (a - b) / 10;
        switch (b) {
            case 1:
                b = "một";
                break;
            case 2:
                b = "hai"
                break;
            case 3:
                b = "ba";
                break;
            case 4:
                b = "bốn";
                break;
            case 5:
                b = "năm";
                break;
            case 6:
                b = "sáu";
                break;
            case 7:
                b = "bảy";
                break;
            case 8:
                b = "tám";
                break;
            case 9:
                b = "chín";
                break;
        }
        switch (i) {
            case 3:
                c = " trăm ";
                break;
            case 4:
                c = " ngàn ";
                break;
            default:
                c = " ";
                break;
        }
        result = b + c + result;
    }
    return result;
}

var n = 6389;
var b3 = convert(n);
document.write(`<p>${n} chuyển thành: ${b3}</p>`)
