

const display= document.getElementById("display");


function appendToDisplay(input){
    display.value += input;
}


function calculate(){
    try {

        display.value += "="+eval(display.value);
    }
    catch(error) {
        display.value = "There is an error";
    }
}

function clearDisplay(){
    display.value = "";
}