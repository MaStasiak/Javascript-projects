const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahren");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result")
let temp;

function convert(){
    if(toFahrenheit.checked){
        result.textContent = "Selected to Fahrenheit";
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + "°Fahrenheits"
    }
    else if(toCelsius.checked){
        result.textContent = "Selected to Celsius";
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + " °Celsius"
    }
    else{
        result.textContent = "Select a unit"
    }
}