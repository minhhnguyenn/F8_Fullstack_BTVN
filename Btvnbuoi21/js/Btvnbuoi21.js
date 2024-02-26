document.write(`<h1>Bài tập về nhà buổi 21</h1>`)
// bài 1
var initialArray = [1, 10, 80, 5, 4, 70, 12];
var max = initialArray[0];
var min = initialArray[0];
var indexMax = 0;
var indexMin = 0;
for (var i = 0; i < initialArray.length; i++) {
    if (max <= initialArray[i]) {
        max = initialArray[i];
        indexMax = i;
    }
    if (min >= initialArray[i]) {
        min = initialArray[i];
        indexMin = i;
    }
}
document.write(`<h2>Bài 1</h2>`)
document.write(`<p>mảng cho trước : ${initialArray}</p>`)
document.write(`<p>giá trị lớn nhất là ${max} nằm ở index = ${indexMax} </p>`)
document.write(`<p>giá trị nhỏ nhất là ${min} nằm ở index = ${indexMin} </p>`)

// bài 2
document.write(`<h2>Bài 2</h2>`)
initialArray = [3, 7, 11, 90, 80, 100, 2, 4];
document.write(`<p>mảng cho trước : ${initialArray}</p>`)
var totalPrime = 0;
var amountPrime = 0;
for (var i = 0; i < initialArray.length; i++) {
    var number = initialArray[i];
    var isTrue = true;
    if (number % 1 === 0) {
        for (j = 2; j <= (number / 2); j++) {
            if (number % j === 0) {
                isTrue = false;
            }
        }
    }
    if (isTrue && number !== 2) {
        totalPrime += initialArray[i];
        amountPrime += 1;
    }
}
if (totalPrime) {
    var averagePrime = totalPrime / amountPrime;
    document.write(`<p>trung bình số nguyên tố trong mảng cho trước là ${averagePrime}</p>`)
}

// bài 3
document.write(`<h2>Bài 3</h2>`)
initialArray = [1, 9, 2, 3, 7, 4, 5, 6, 7, 8, 9];
document.write(`<p>mảng cho trước : ${initialArray}</p>`)
var removeDuplicateArray = [];
for (var i = 0; i < initialArray.length; i++) {
    var isUnique = false;
    for (var j = 0; j < removeDuplicateArray.length; j++) {
        if (initialArray[i] === removeDuplicateArray[j]) {
            isUnique = true;
            break;
        }
    }
    if (!isUnique) {
        removeDuplicateArray[removeDuplicateArray.length] = initialArray[i]
    }
}
document.write(`<p>mảng sau khi khoại bỏ các giá trị trùng lặp: ${removeDuplicateArray}</p>`)

// bài 4



