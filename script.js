// Get the input elements
let celsiusInput = document.querySelector('#celsius > input');
let fahrenheitInput = document.querySelector('#fahrenheit > input');
let kelvinInput = document.querySelector('#kelvin > input');

// Get the "All Clear" button
let btn = document.querySelector('.button button');

// Function to round a number to two decimal places
function roundNumber(number) {
  return Math.round(number * 100) / 100;
}

// Function to check if the temperature is below absolute zero
function isInvalidTemperature(temp, limit) {
  return temp < limit;
}

// Function to handle Kelvin input
function handleKelvinInput() {
  let kTemp = parseFloat(kelvinInput.value);
  if (isInvalidTemperature(kTemp, 0)) {
    celsiusInput.value = "Error";
    fahrenheitInput.value = "Error";
    kelvinInput.value = "Error";
    return;
  }
  let cTemp = kTemp - 273.15;
  let fTemp = (kTemp - 273.15) * (9 / 5) + 32;

  celsiusInput.value = roundNumber(cTemp);
  fahrenheitInput.value = roundNumber(fTemp);
}

// Function to handle Celsius input
function handleCelsiusInput() {
  let cTemp = parseFloat(celsiusInput.value);
  if (isInvalidTemperature(cTemp, -273.15)) {
    celsiusInput.value = "Error";
    fahrenheitInput.value = "Error";
    kelvinInput.value = "Error";
    return;
  }
  let kTemp = cTemp + 273.15;
  let fTemp = (cTemp * (9 / 5)) + 32;

  fahrenheitInput.value = roundNumber(fTemp);
  kelvinInput.value = roundNumber(kTemp);
}

// Function to handle Fahrenheit input
function handleFahrenheitInput() {
  let fTemp = parseFloat(fahrenheitInput.value);
  if (isInvalidTemperature(fTemp, -459.67)) {
    celsiusInput.value = "Error";
    fahrenheitInput.value = "Error";
    kelvinInput.value = "Error";
    return;
  }
  let cTemp = (fTemp - 32) * (5 / 9);
  let kTemp = (fTemp - 32) * (5 / 9) + 273.15;
  if (isInvalidTemperature(kTemp, 0)) {
    celsiusInput.value = "Error";
    fahrenheitInput.value = "Error";
    kelvinInput.value = "Error";
    return;
  }

  celsiusInput.value = roundNumber(cTemp);
  kelvinInput.value = roundNumber(kTemp);
}

// Update other temperature fields when Celsius input changes
celsiusInput.addEventListener('input', handleCelsiusInput);

// Update other temperature fields when Fahrenheit input changes
fahrenheitInput.addEventListener('input', handleFahrenheitInput);

// Update other temperature fields when Kelvin input changes
kelvinInput.addEventListener('input', handleKelvinInput);

// Clear all input fields when the "All Clear" button is clicked
btn.addEventListener('click', () => {
  celsiusInput.value = "";
  fahrenheitInput.value = "";
  kelvinInput.value = "";
});
