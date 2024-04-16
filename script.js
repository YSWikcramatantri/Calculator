let disp_text = "";
var result = 0;

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

    if (disp_text.includes(".") == true) {
        document.getElementById("dot-mark").disabled = true;
    }
    else {
        document.getElementById("dot-mark").disabled = false;

    }

    document.getElementById("display-text").innerHTML = disp_text;
}

function clearElement() {
    disp_text = disp_text.slice(0, -1);

    if (disp_text.includes(".") == true) {
        document.getElementById("dot-mark").disabled = true;
    }
    if (disp_text) {
        
    }
    else {
        document.getElementById("dot-mark").disabled = false;
    }

    document.getElementById("display-text").innerHTML = disp_text;

    if (disp_text.length == 0) {
        document.getElementById("display-text").innerHTML = "0";
        console.log("worked");
    }
}

function operate(x) {

}


