// Bài tập về nhà buổi 17 - Nguyễn Ngọc Minh

// Bài 1
var a1 = -1;
var b1 = -2;
console.log(`giá trị của a là ${a1}; giá trị của b là ${b1}`)
console.log('Hoán vị giá trị a và b')
a1 = a1 + b1;
b1 = a1 - b1;
a1 = a1 - b1;
console.log(`giá trị của a là ${a1}; giá trị của b là ${b1}`)

// bài 2: Thực hiện phép toán
var s = 10 + 20 + 5 ** 10 / 2;
console.log(`S = ${s}`)

// Bài 3: Tìm số lớn nhất
var a3 = 20, b3 = 2, c3 = 20;
console.log(`ba số cần tìm số lớn nhất là ${a3}, ${b3}, ${c3}`)
var max;
max = a3;
if (max <= b3) {
    max = b3
}
if (max <= c3) {
    max = c3
}
console.log(`số lớn nhất là ${max}`)

// Bài 4: Kiểm tra số cùng dấu
var a4 = 1, b4 = -10;
console.log(`a = ${a4} và b = ${b4}`)
if (a4 * b4 > 0) {
    console.log('a và b cùng dấu');

} else console.log('a và b khác dấu');

// Bài 5: sắp xếp các số theo thứ tự tăng dần
var a5 = 1, b5 = 5, c5 = 4;
var reArrange;
console.log(`dãy số cho trước: ${a5}, ${b5}, ${c5}`)
if (a5 > b5) {
    reArrange = a5;
    a5 = b5;
    b5 = reArrange;
}
if (a5 > c5) {
    reArrange = a5;
    a5 = c5;
    c5 = reArrange;
}
if (b5 > c5) {
    reArrange = b5;
    b5 = c5;
    c5 = reArrange;
}
console.log(`Dãy số sau khi đã sắp xếp ${a5} ${b5} ${c5}`);