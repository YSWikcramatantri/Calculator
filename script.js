let disp_text = "";

var num1;
var num2;

function addNumbers(a, b) {
    return a + b;
}

function subtractNumbers(a, b) {
    return a - b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    return a / b;
}



function addString(x) {
    const newText = String(x);
    disp_text += newText;

    dotDecision();

    document.getElementById("display-text").innerHTML = disp_text;
}

function clearElement() {
    if (disp_text.endsWith(" ") == true) {
        disp_text = disp_text.slice(0, -3)
    } else {
        disp_text = disp_text.slice(0, -1);
    }

    dotDecision();

    document.getElementById("display-text").innerHTML = disp_text;

    if (disp_text.length == 0) {
        document.getElementById("display-text").innerHTML = "0";
    }
}

function dotDecision() {
    let slicedText = disp_text.slice(disp_text.lastIndexOf(' ') + 1);
    if (slicedText.includes('.') == true) {
        document.getElementById("dot-mark").disabled = true;
    } else {
        document.getElementById("dot-mark").disabled = false;
    }
}



function operate(x) {
    const myArray = disp_text.split(" ");
    console.log(myArray);

    for (let i = 0; i < myArray.length; i++) {
        const element = myArray[i];

        
        if (i == 0 || i % 2 == 0) {
            if (num1 == null) {
                num1 = Number(element);
            }
            num2 = Number(myArray[i+2]);
        }
        else {
            switch (element) {
                case '+':
                    num1 = addNumbers(num1, num2);
                    break;
                case '-':
                    num1 = subtractNumbers(num1, num2);
                    break;
                case 'x':
                    num1 = multiplyNumbers(num1, num2);
                    break;
                case '/':
                    num1 = divideNumbers(num1, num2);
                    break;
            }
        }
    }

    disp_text = num1.toString();
    document.getElementById("display-text").innerHTML = disp_text;

    num1 = null;
    num2 = null;
}



document.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "0":
            document.getElementById("number0").click();
            break;
        case "1":
            document.getElementById("number1").click();
            break;
        case "2":
            document.getElementById("number2").click();
            break;
        case "3":
            document.getElementById("number3").click();
            break;
        case "4":
            document.getElementById("number4").click();
            break;
        case "5":
            document.getElementById("number5").click();
            break;
        case "6":
            document.getElementById("number6").click();
            break;
        case "7":
            document.getElementById("number7").click();
            break;
        case "8":
            document.getElementById("number8").click();
            break;
        case "9":
            document.getElementById("number9").click();
            break;
        case "+":
            document.getElementById("plus-button").click();
            break;
        case "-":
            document.getElementById("minus-button").click();
            break;
        case "*":
            document.getElementById("multiply-button").click();
            break;
        case "/":
            document.getElementById("divide-button").click();
            break;
        case ".":
            document.getElementById("dot-mark").click();
            break;
        case "Enter":
            document.getElementById("eqaul-mark").click();
            break;
        case "Backspace":
            document.getElementById("clear-button").click();
            break;
    }
})