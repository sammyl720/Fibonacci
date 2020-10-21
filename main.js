var form = document.getElementsByTagName('form')[0];
var inputButton = document.getElementsByTagName('input')[0];
var outputDiv = document.querySelector('div.output-result');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    calculateFib(Number(inputButton.value));
    inputButton.value = '';
});
var calculateFib = function (inputNumber) {
    var a = 0;
    var b = 1;
    var results = [];
    var count = 0;
    while (count < inputNumber) {
        results.push(a);
        results.push(b);
        a = a + b;
        b = a + b;
        count += 2;
    }
    var output = '';
    for (var i = 0; i < results.length; i++) {
        var element = results[i];
        output += "\n      <li class=\"list-item\">\n        <strong>Step " + (i + 1) + ":</strong> " + results[i] + "\n      </li>\n    ";
    }
    outputDiv.innerHTML = "\n    <ul class=\"output-list\">\n      " + output + "\n    </ul>\n  ";
};
