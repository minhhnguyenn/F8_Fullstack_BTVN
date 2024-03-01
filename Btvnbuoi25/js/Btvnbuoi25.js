// Bài 1
console.log("Bài 1");
function sum(...numbers) {
    var total = 0;
    for (var number of numbers) {
        var numberConvert = parseFloat(number);
        if (typeof numberConvert === 'number' && !Number.isNaN(numberConvert) && Math.abs(numberConvert) !== Infinity && !Array.isArray(number)) {
            total += numberConvert;
        } else {
            return `${number} không hợp lệ`
        }
    }
    return total;
}

console.log(sum(1, 2, 3, [7], "4"));

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
Array.prototype.push2 = function (...parameters) {
    for (var value of parameters) {
        this[this.length] = value;
    }
    return this.length
}
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
console.log(arr1.push2(arr2));
console.log(arr1)

// Bài 4
console.log("Bài 4");
Array.prototype.filter2 = function (cb) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = cb(this[index], index, this)
            if (result) {
                output.push(this[index])
            }
        }
    }
    return output
};

var array = [1, 2, 3, 4, 5, 6, 7, 8];
var evenNumbers = array.filter2(function (number) {
    return number % 2 === 0;
})
console.log(evenNumbers);

// Bài 5
var categories = [
    {
        id: 1,
        name: "Chuyên mục 1",
    },
    {
        id: 2,
        name: "Chuyên mục 2",
        children: [
            {
                id: 4,
                name: "Chuyên mục 2.1",
            },
            {
                id: 5,
                name: "Chuyên mục 2.2",
                children: [
                    {
                        id: 10,
                        name: "Chuyên mục 2.2.1",
                    },
                    {
                        id: 11,
                        name: "Chuyên mục 2.2.2",
                    },
                    {
                        id: 12,
                        name: "Chuyên mục 2.2.3",
                    },
                ],
            },
            {
                id: 6,
                name: "Chuyên mục 2.3",
            },
        ],
    },
    {
        id: 3,
        name: "Chuyên mục 3",
        children: [
            {
                id: 7,
                name: "Chuyên mục 3.1",
            },
            {
                id: 8,
                name: "Chuyên mục 3.2",
            },
            {
                id: 9,
                name: "Chuyên mục 3.3",
            },
        ],
    },
];
var select = document.getElementById("select");
var htmls = "<option>Chọn chuyên mục</option>"
function addOptions(categories, tab = "") {
    categories.forEach(function (category) {
        htmls += `<option>${tab}${category.name}</option>`;
        if (category.children) {
            addOptions(category.children, tab + "--|");
        }
    });
    return htmls;
};
var result = addOptions(categories);
select.innerHTML = htmls;