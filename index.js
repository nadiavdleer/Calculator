let displayedNumber = "";
let operator;
let firstNumber;
let secondNumber;
let result;

function handleNumClick(button) {
    if (displayedNumber === 0) displayedNumber = button.dataset.number;
    else displayedNumber += button.dataset.number;
    displayNumber();
}
function handleOperatorClick(button) {
    firstNumber = +displayedNumber;
    displayedNumber = ""; //clear display
    operator = button.dataset.operator;
}
function handleEqualsClick() {
    if (!secondNumber) secondNumber = +displayedNumber;
    if (!firstNumber || !secondNumber) return;
    switch (operator) {
        case "+":
            result = +firstNumber + +secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            result = firstNumber / secondNumber;
            break;
        default:
            result = displayedNumber;
    }
    result = result.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
    console.log(result);
    firstNumber = result.replaceAll(",", "");
    displayedNumber = result;
    displayNumber();
}
function handleClearClick() {
    firstNumber = "";
    secondNumber = "";
    displayedNumber = 0;
    operator = "";
    result = "";
    displayNumber();
}
function handleDecimalClick() {
    if (displayedNumber.indexOf(".") < 0) displayedNumber += ".";
    document.querySelector(".calculator__display").textContent = +displayedNumber;
}
function displayNumber() {
    document.querySelector(".calculator__display").textContent = displayedNumber;
}

document.querySelectorAll("[data-number]").forEach((one) => (one.onclick = () => handleNumClick(one)));
document.querySelectorAll("[data-operator]").forEach((one) => (one.onclick = () => handleOperatorClick(one)));
document.querySelector('[data-action="equals"]').onclick = handleEqualsClick;
document.querySelector('[data-action="clear"]').onclick = handleClearClick;
document.querySelector('[data-action="decimal"]').onclick = handleDecimalClick;
