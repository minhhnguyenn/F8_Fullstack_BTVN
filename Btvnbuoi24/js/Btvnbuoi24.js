// Bài 1
console.log("Bài 1");
function sum(...numbers) {
    var total = 0;
    for (var number of numbers) {
        if (typeof number === "number" && number !== NaN) {
            total += number;
        } else {
            return `${number} không hợp lệ`
        }
    }
    return total;
}
console.log(sum(1, 2, 5))
// Bài 2
console.log("Bài 2");
Object.prototype.getCurrency = function (value) {
    var string = String(Number(value));
    var length = string.length;
    for (var i = length - 3; i > 0;) {
        string = string.slice(0, i) + "," + string.slice(i);
        i = i - 3;
    }
    return `${string} đ`;

}
console.log(getCurrency("120000000"));


// Bài 3
console.log("Bài 3");

// Bài 4
console.log("Bài 4");
var array = [1, 4, 5, 7];
Array.prototype.reduce2 = function (callback, result) {
    var i = 0;
    if (arguments.length < 2) {
        result = this[0];
        i = 1;
    };
    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this)
    }
    return result;
}

console.log(array.reduce2(function (a, b) {
    return a + b
}, 10))
