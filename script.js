const mathAction = prompt ('What operation do you want to do?', '+ - / *');
const firstNum = +prompt("Enter the first number", "");
const secondNum = +prompt("Enter the second number", "");
function add(mathAction) {
    if (mathAction === "+") {
        alert(`${firstNum} ${mathAction} ${secondNum} = ${firstNum + secondNum}`);
        return;
    }
}
function sub(mathAction) {
    if (mathAction === "*") {
        alert(`${firstNum} ${mathAction} ${secondNum} = ${firstNum * secondNum}`);
        return;
    }
}
function mult(mathAction) {
    if (mathAction === "-") {
        alert(`${firstNum} ${mathAction} ${secondNum} = ${firstNum - secondNum}`);
        return;
    }
}
function div(mathAction) {
    if (mathAction === "/") {
        alert(`${firstNum} ${mathAction} ${secondNum} = ${firstNum / secondNum}`);
        return;
    }
}
const resultAdd = add(mathAction, firstNum, secondNum);
const resultSub = sub(mathAction, firstNum, secondNum);
const resultMult = mult(mathAction, firstNum, secondNum);
const resultDiv = div(mathAction, firstNum, secondNum);