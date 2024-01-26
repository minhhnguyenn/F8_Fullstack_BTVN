// Bài 1: Tính tiền taxi
document.write(`<h2>Bài 1: Tính tiền taxi</h2>`);
var distance = 60;
var totalBill;
if (distance > 0) {
    if (distance <= 1) {
        totalBill = 15000;
        console.log(totalBill);
    } else if (distance <= 5) {
        totalBill = 15000 + (distance - 1) * 13500;
        console.log(totalBill);
    } else if (distance <= 120) {
        totalBill = 15000 + 13500 * 4 + (distance - 5) * 11000;
        console.log(totalBill);
    } else {
        totalBill = (15000 + 13500 * 4 + (distance - 5) * 11000) * 0.9;
        console.log(totalBill);
    }

} else {
    document.write(`<p>Nhập sai quãng đường</p>`)
}
document.write(`<p>Quãng đường di chuyển là ${distance} km, số tiền phải trả là ${totalBill} VND</p>`)

// Bài 2: Tính tiền điện
document.write(`<h2>Bài 2: Tính tiền điện</h2>`);
var electricUsed = 100;
var electricBill;
if (electricUsed > 0 && electricUsed % 1 === 0) {
    if (electricUsed <= 50) {
        electricBill = 1678 * electricUsed;
        console.log(electricBill);
    } else if (electricUsed <= 100) {
        electricBill = 83900 + 1734 * (electricUsed - 50);
        console.log(electricBill);
    } else if (electricUsed <= 200) {
        electricBill = 170600 + 2014 * (electricUsed - 100);
        console.log(electricBill);
    } else if (electricUsed <= 300) {
        electricBill = 372000 + 2536 * (electricUsed - 200);
        console.log(electricBill);
    } else if (electricUsed <= 400) {
        electricBill = 625600 + 2834 * (electricUsed - 300);
        console.log(electricBill);
    } else {
        electricBill = 909000 + 2927 * (electricUsed - 400)
    }
} else {
    document.write(`<p>Nhập sai số điện tiêu thụ</p>`)
}
document.write(`<p>Số điện tiêu thụ là ${electricUsed} kWh, số tiền phải trả là ${electricBill} VND</p>`)

// Bài 3: Tính giá trị biểu thức
document.write(`<h2>Bài 3: Tính giá trị biểu thức</h2>`);
var n = 10;
var s = 0;
if (n > 0 && n % 1 === 0) {
    for (i = 1; i <= n; i++) {
        console.log(i)
        s += i * (i + 1);
        console.log(s)
    }
    document.write(`<p>Số nguyên n = ${n}, giá trị S = ${s}</p>`)
} else {
    document.write(`<p>Nhập sai số n</p>`)
}

// Bài 4: Viết hàm kiểm tra số nguyên tố 
document.write(`<h2>Bài 4: Viết hàm kiểm tra số nguyên tố</h2>`);
var number = 8;
var isTrue = true;
if (number % 1 === 0) {
    for (i = 2; i <= (number / 2); i++) {
        if (number % i === 0) {
            isTrue = false;
        }
    }
}
if (isTrue && number !== 2) {
    document.write(`số ${number} là số nguyên tố `)
} else {
    document.write(`số ${number} không là số nguyên tố `)
}

// Bài 5: Vẽ tam giác số
document.write(`<h2>Bài 5: Vẽ tam giác số</h2>`);
var n = 5;
var number = 1;
for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
        document.write(`${number++}`);
    }
    document.write(`<br>`)
}

// Bài 6: Vẽ bàn cờ vua
document.write(`<h2>Bài 5: Vẽ bàn cờ vua</h2>`);
document.write(`<section>`)
for (i = 1; i <= 8; i++) {
    for (j = 1; j <= 4; j++) {
        if (i % 2 === 0) {
            document.write(`<div class="black-square"></div>`)
            document.write(`<div class="white-square"></div>`)
        } else {
            document.write(`<div class="white-square"></div>`)
            document.write(`<div class="black-square"></div>`)
        }
    }
    document.write(`<br>`);
}
document.write(`</section>`)

//Bài 7: Vẽ bảng cửu chương
document.write(`<h2>Bài 7: Vẽ bảng cửu chương</h2>`);
for (i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
        var s;
        s = i * j;
        document.write(`<span>${i}x${j}=${s} . </span>`)
    }
    document.write(`<br>`)
}

// Bài 8: Tính giá trị biểu thức không dùng vòng lặp
document.write(`<h2>Bài 8: Tính giá trị biểu thức không dùng vòng lặp</h2>`);


