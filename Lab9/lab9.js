let currentDisplay = "0";
const act = ["+", "-", "*", "/"];

function check_point() {
    for (let i = currentDisplay.length - 1; !act.includes(currentDisplay[i]) && i>=0; i--)
        if (currentDisplay[i] === ".")
            return true;
    return false;
}

function addToDisplay(val) {
    let last_let = currentDisplay.charAt(currentDisplay.length - 1); 

    if (currentDisplay == "0" && val != "." && !act.includes(val))
        currentDisplay = val;
    else if (act.includes(val) && act.includes(last_let)) {
        currentDisplay = currentDisplay.substring(0, currentDisplay.length - 1);
        currentDisplay += val;
    }
    else if (!(act.includes(last_let) && val === ".") && !(check_point() && val === "."))
        currentDisplay += val;
        

    updateDisplay();
}

function updateDisplay() {
    const displayEl = document.getElementById("display");

    let s1 = "";
    let s2 = "";
    let i = currentDisplay.length-1;

    while (!act.includes(currentDisplay[i]) && i>=0) {
            s2 += currentDisplay.charAt(i);
            i--;
    }

    if (i===0 && act.includes(currentDisplay[i])){
            i = -1;
            s2 += currentDisplay.charAt(0);
        }

    s1 = currentDisplay.substring(0, i+1);
    s2 = s2.split('').reverse().join('');

    const el1 = "<span style=\"opacity:0.5\">" + s1 + "</span>";
    const el2 = "<span style=\"color:#000000\">" + s2 + "</span>";

    displayEl.innerHTML = el1+el2;
}

function clearDisplay() {
    currentDisplay = "0";
    updateDisplay();
}

function clearLastEl() {
    currentDisplay = currentDisplay.slice(0, -1);
    if (currentDisplay ==="") 
        currentDisplay = "0";
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(currentDisplay);
        currentDisplay = result.toString();
        updateDisplay();
    } catch (error) {
        currentDisplay = "error";
        updateDisplay();
    }
}