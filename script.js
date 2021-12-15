const mathAction = prompt ('What operation do you want to do?', '+ - * /');
const firstNum = +prompt("Enter the first number", "");
const secondNum = +prompt("Enter the second number", "");

function add(mathAction) {
    if (mathAction === "+") {
        alert(`${firstNum} ${mathAction} ${secondNum} = ${firstNum + secondNum}`);
        return firstNum + secondNum;
    }
}

function sub(mathAction) {
    if (mathAction === "-") {
        alert(`${firstNum} ${mathAction} ${secondNum} = ${firstNum * secondNum}`);
        return firstNum - secondNum;
    }
}

function mult(mathAction) {
    if (mathAction === "*") {
        alert(`${firstNum} ${mathAction} ${secondNum} = ${firstNum - secondNum}`);
        return firstNum * secondNum;
    }
}

function div(mathAction) {
    if (mathAction === "/") {
        alert(`${firstNum} ${mathAction} ${secondNum} = ${firstNum / secondNum}`);
        return firstNum / secondNum;
    }
}