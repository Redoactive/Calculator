let firstNumber = null;
let secondNumber = null;
let operator;
let firstNumberIsIn = false;
let outputtedAnswer = false;
let inputExists = false;
let possibleToOpertate = false;
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
    if(second == 0){
        fullyClear();
        display.textContent = "( ͡° ͜ʖ ͡°)";
        return 0;
    }
    return first / second;
}
function operate(){
    if(!inputExists || !possibleToOpertate){
        console.log("No input");
        return;
    }
    if(!outputtedAnswer){
        secondNumber = parseFloat(displayText);
    }
    console.log(firstNumber + " " + operator + " " + secondNumber)
    let answer;
    if(operator == 0){ // 0+; 1-; 2*; 3/
        answer = add(firstNumber, secondNumber);
    }
    else if(operator == 1){
        answer = subtract(firstNumber, secondNumber);
    }
    else if(operator == 2){
        answer = multiply(firstNumber, secondNumber);
    }
    else if(operator == 3){
        answer = divide(firstNumber, secondNumber);
        if(answer == 0){
            return;
        }
    }
    showAnswer(answer);
}
function showAnswer(answer){
    
    displayText = roundAccurately(answer, 12);
    firstNumber = answer;
    display.textContent = displayText;
    outputtedAnswer = true;
}
function roundAccurately(num, places) {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}
function addToDisplay(displayNumber){
    if(outputtedAnswer && displayNumber == "."){
        fullyClear();
        outputtedAnswer = false;
    }
    if(firstNumberIsIn){
        possibleToOpertate = true;
    }
    if(displayText.length >=12){
        return;
    }
    if(displayNumber == "."){
        if (displayText.includes(".")){
            return;
        }
    }
    displayText += displayNumber;
    display.textContent = displayText;
    inputExists = true;
}
function clearDisplay(){
    displayText = "";
    //display.textContent = displayText;
}
function chosenOperator(number){
    
        outputtedAnswer = false;
        operator = number;
        saveNumbers();
        clearDisplay();
    
        inputExists = false;
}
function saveNumbers(){
    if (!firstNumberIsIn){
        firstNumber = parseFloat(displayText);
        firstNumberIsIn = true;
    }
    else{
        secondNumber = parseFloat(displayText);
    }
}
function fullyClear(){
    displayText = "0";
    display.textContent = displayText;
    displayText = ""
    firstNumber = null;
    secondNumber = null;
    operator = -1;
    firstNumberIsIn = false;
    inputExists = false;
}
document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case "0":
            addToDisplay(0);
            break;
        case "1":
            addToDisplay(1);
            break;
        case "2":
            addToDisplay(2);
            break;
        case "3":
            addToDisplay(3);
            break;
        case "4":
            addToDisplay(4);
            break;
        case "5":
            addToDisplay(5);
            break;
        case "6":
            addToDisplay(6);
            break;
        case "7":
            addToDisplay(7);
            break;
        case "8":
            addToDisplay(8);
            break;
        case "9":
            addToDisplay(9);
            break;
        case "+":
            chosenOperator(0);
            break;
        case "-":
            chosenOperator(1);
            break;
        case "*":
            chosenOperator(2);
            break;
        case "/":
            chosenOperator(3);
            break;
        case "Backspace":
            fullyClear();
            break;
        default:
            break;
    }
});
function singleOperator(index){
    if(!inputExists){return}
    switch (index) {
        case 0:
            let squared = parseFloat(displayText) * parseFloat(displayText);
            displayText = String(squared);
            display.textContent = displayText;
            break;
        case 1:
            let root = Math.sqrt(parseFloat(displayText));
            displayText = String(root);
            display.textContent = displayText;
            break;
        case 2:
            let opposite = parseFloat(displayText);
            opposite = -opposite;
            displayText = String(opposite);
            display.textContent = displayText;

            break;
        default:
            break;
        outputtedAnswer = false;
    }
}