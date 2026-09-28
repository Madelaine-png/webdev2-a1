"use strict";
const findConversion = (convert) => {
    if (convert === 'Kilograms to Pounds') {
        return (kg) => kg * 2.205;
    }
    else if (convert === 'Pounds to Kilograms') {
        return (lb) => lb / 2.205;
    }
    else if (convert === 'Miles to Kilometres') {
        return (m) => m * 1.609;
    }
    else if (convert === 'Kilometres to Miles') {
        return (km) => km / 1.609;
    }
    else if (convert === 'Celcius to Fahrenheit') {
        return (c) => (c * 9 / 5) + 32;
    }
    else {
        return (f) => (f - 32) / (9 / 5);
    }
    ;
};
const handleConversion = (array, selectedElement) => {
    let output = ' ';
    const convert = findConversion(selectedElement.value);
    for (let i = 0; i < array.length; i++) {
        let from = Number(array[i]);
        from = convert(from);
        output += '\n';
        output += String(from);
    }
    ;
    return output;
};
const wInput = document.getElementById("w-input");
const wResult = document.getElementById("w-result");
const dInput = document.getElementById("d-input");
const dResult = document.getElementById("d-result");
const tInput = document.getElementById("t-input");
const tResult = document.getElementById("t-result");
const handleWeightConversion = () => {
    const inputArray = wInput.value.split(" ");
    const selectedElement = document.getElementById("w-select-input");
    wResult.textContent = handleConversion(inputArray, selectedElement);
};
const handleDistanceConversion = () => {
    const inputArray = dInput.value.split(" ");
    const selectedElement = document.getElementById("d-select-input");
    dResult.textContent = handleConversion(inputArray, selectedElement);
};
const handleTempConversion = () => {
    const inputArray = tInput.value.split(" ");
    const selectedElement = document.getElementById("t-select-input");
    tResult.textContent = handleConversion(inputArray, selectedElement);
};
const wButton = document.getElementById("w-button");
const dButton = document.getElementById("d-button");
const tButton = document.getElementById("t-button");
wButton.addEventListener("click", handleWeightConversion);
dButton.addEventListener("click", handleDistanceConversion);
tButton.addEventListener("click", handleTempConversion);
