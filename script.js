const mathAction = prompt ('What operation do you want to do?', '+ - * /');
const firstNum = +prompt("Enter the first number", "");
const secondNum = +prompt("Enter the second number", "");

function add(firstNum,secondNum) {
    return firstNum + secondNum;
}
    if (mathAction === "+") {
        alert(`${firstNum} ${mathAction} ${secondNum} = ${add(firstNum,secondNum)}`);
    }
function sub(firstNum,secondNum) {
        return firstNum - secondNum;
    }
    if (mathAction === "-") {
        alert(`${firstNum} ${mathAction} ${secondNum} = ${sub(firstNum,secondNum)}`);
    }
function mult(mathAction) {
        return firstNum * secondNum;
    }
    if (mathAction === "*") {
        alert(`${firstNum} ${mathAction} ${secondNum} = ${mult(firstNum,secondNum)}`);
    }
function div(mathAction) {
        return firstNum / secondNum
    }
    if (mathAction === "/") {
        alert(`${firstNum} ${mathAction} ${secondNum} = ${div(firstNum,secondNum)}`);
    }