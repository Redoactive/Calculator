let firstNumber;
let secondNumber;
let operator;

let displayText = "";
const display = document.querySelector("#displayText");


function add(first, second){
    return first + second;
}
function subtract(first, second){
    return first - second;
}
function multiply(first, second){
    return first * second;
}
function divide(first, second){
    return first / second;
}
function operate(){
    let answer;
    if(oper == 0){
        answer = add(firstNumber, secondNumber);
    }
    else if(oper == 1){
        answer = subtract(firstNumber, secondNumber);
    }
    else if(oper == 2){
        answer = multiply(firstNumber, secondNumber);
    }
    else if(oper == 3){
        answer = divide(firstNumber, secondNumber);
    }
    addToDisplay(answer);
}
function addToDisplay(displayNumber){
    displayText += displayNumber;
    display.textContent = displayText;
}
function clearDisplay(){
    displayText = "";
    display.textContent = displayText;
}
function chosenOperator(number){

}