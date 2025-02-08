function convert() {
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var temperature = parseFloat(document.getElementById('temperature').value)

    var convertedValue
    var resultUnit
    var explanation = '';

    switch (fromUnit) {
        case 'C' :
            if (toUnit === 'F') {
                convertedValue = (temperature * 9/5) + 32
                resultUnit = 'F'
            } else if (toUnit === 'K') {
                convertedValue = temperature + 273.15 
                resultUnit = 'K'
            } else {
                convertedValue = temperature 
                resultUnit = 'C'
            }

        case "F" :
            if (toUnit === 'C') {
                convertedValue = (temperature - 32) * 5/9
                resultUnit = 'C'
            } else if (toUnit === 'K') {
                convertedValue = (temperature - 32)* 5/9 + 273.15
                resultUnit = 'K'
            } else {
                convertedValue = temperature
                resultUnit = 'F'
            }

        case "K" :
            if (toUnit === 'C') {
                convertedValue = temperature - 273.15
                resultUnit = 'C'
            } else if (toUnit === 'F') {
                convertedValue = (temperature - 273.15) * 9/5 + 32
                resultUnit = 'F'
            } else {
                convertedValue = temperature 
                resultUnit = 'K'
            }
        break;
    }

    if (fromUnit === 'C' && toUnit === 'F') {
        explanation = temperature + "°C * (9/5) + 32 = " + convertedValue.toFixed(2) + "°F";
    } else if (fromUnit === 'C' && toUnit === 'K') {
        explanation = temperature + "°C + 273.15 = " + convertedValue.toFixed(2) + "°K";
    } else if (fromUnit === 'F' && toUnit === 'C') {
        explanation = "(" + temperature + "°F - 32) * (5/9) = " + convertedValue.toFixed(2) + "°C";
    } else if (fromUnit === 'F' && toUnit === 'K') {
        explanation = "(" + temperature + "°F - 32) * (5/9) + 273.15 = " + convertedValue.toFixed(2) + "K";
    } else if (fromUnit === 'K' && toUnit === 'C') {
        explanation = temperature + "K - 273.15 = " + convertedValue.toFixed(2) + "°C";
    } else if (fromUnit === 'K' && toUnit === 'F') {
        explanation = "(" + temperature + "K - 273.15) * (9/5) + 32 = " + convertedValue.toFixed(2) + "°F";
    }
    
    console.log(explanation);
    document.getElementById('explanation').innerText = explanation;
    document.getElementById('result').value = convertedValue.toFixed(2) + ' ' + resultUnit;
}