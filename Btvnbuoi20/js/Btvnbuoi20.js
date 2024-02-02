var text = document.getElementById("text");
var string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis soluta incidunt quo quis, odio aut 1500s";
var newString;
var i = 0;
function addColor(string) {
    var subString = string.slice(i, string.indexOf(" ", (i + 1)))
    if (string.indexOf(" ", (i + 1)) === -1) {
        subString = string.slice(i, (string.length));
    }
    newString = string.replace(subString, `<span style="color: red;">${subString}</span>`);
    text.innerHTML = `${newString}`;
    i = string.indexOf(" ", (i + 1));
    if (i === -1) {
        i = 0
    }
}
setInterval(function () { addColor(string) }, 500)