"use strict";
//student Name: sanjana, sarah, madelaine
//Date: september 29, 2026
//Program: CPRG 306  - web Devlopment 2 
//
//Program Description:
// This program provides unit conversions between metric and
// imperial units for weight, distance, and temperature.
// The inputs can be entered as a single numerical value or
// as a list of numerical values separated by spaces.
// The program processes the selected conversion using a
// higher-order function that returns an arrow conversion function.
// The converted value or values are then displayed as the
// output in the appropriate converter section of the website.
// 
const findConversion = (fromUnit, toUnit) => {
    // Converts one individual number.
    const convertSingle = (value) => {
        if (fromUnit === "Kilograms" && toUnit === "Pounds") {
            return value * 2.205;
        }
        if (fromUnit === "Pounds" && toUnit === "Kilograms") {
            return value / 2.205;
        }
        if (fromUnit === "Kilometres" && toUnit === "Miles") {
            return value / 1.609;
        }
        if (fromUnit === "Miles" && toUnit === "Kilometres") {
            return value * 1.609;
        }
        if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
            return (value * 9 / 5) + 32;
        }
        if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
            return (value - 32) * 5 / 9;
        }
        throw new Error(`Unsupported conversion: ${fromUnit} to ${toUnit}`);
    };
    // Returns an arrow function that accepts either
    // one number or an array of numbers.
    return (value) => {
        if (Array.isArray(value)) {
            return value.map((item) => convertSingle(item));
        }
        return convertSingle(value);
    };
};
// ============================================================
// HANDLE CONVERSION
// Reads the selected conversion, converts the input values,
// and returns the formatted result.
// ============================================================
const handleConversion = (array, selectedElement) => {
    let fromUnit;
    let toUnit;
    // Determine the units based on the selected option.
    if (selectedElement.value === "Kilograms to Pounds") {
        fromUnit = "Kilograms";
        toUnit = "Pounds";
    }
    else if (selectedElement.value === "Pounds to Kilograms") {
        fromUnit = "Pounds";
        toUnit = "Kilograms";
    }
    else if (selectedElement.value === "Miles to Kilometres") {
        fromUnit = "Miles";
        toUnit = "Kilometres";
    }
    else if (selectedElement.value === "Kilometres to Miles") {
        fromUnit = "Kilometres";
        toUnit = "Miles";
    }
    else if (selectedElement.value === "Celsius to Fahrenheit") {
        fromUnit = "Celsius";
        toUnit = "Fahrenheit";
    }
    else {
        fromUnit = "Fahrenheit";
        toUnit = "Celsius";
    }
    // Create the conversion function.
    const convert = findConversion(fromUnit, toUnit);
    // Convert input strings into numbers.
    const numbers = array
        .filter((value) => value.trim() !== "")
        .map((value) => Number(value));
    // Check for invalid input.
    if (numbers.some((value) => Number.isNaN(value))) {
        return "Please enter numbers only.";
    }
    // Pass either a single number or an array.
    const input = numbers.length === 1
        ? numbers[0]
        : numbers;
    const result = convert(input);
    // Format an array of results.
    if (Array.isArray(result)) {
        return result
            .map((value) => value.toFixed(2))
            .join(", ");
    }
    // Format a single result.
    return result.toFixed(2);
};
//HTML ELEMENT REFRENCES
//Gets the input fields and result areas from the webpage
//so that JavaScript can read input values and display results.
const wInput = document.getElementById("w-input");
const wResult = document.getElementById("w-result");
const dInput = document.getElementById("d-input");
const dResult = document.getElementById("d-result");
const tInput = document.getElementById("t-input");
const tResult = document.getElementById("t-result");
//WEIGHT CONVERTER
//Reads the weight input values and applies the selected
//kilograms-to-pounds or pounds-to-kilograms coversion.
const handleWeightConversion = () => {
    const inputArray = wInput.value.trim().split(/\s+/);
    const selectedElement = document.getElementById("w-select-input");
    wResult.textContent = handleConversion(inputArray, selectedElement);
};
//DISTANCE CONVERTER
//Reads the distance input values and applies the selected
//miles-to-kilometres or kilometres-to-miles conversion.
const handleDistanceConversion = () => {
    const inputArray = dInput.value.trim().split(/\s+/);
    const selectedElement = document.getElementById("d-select-input");
    dResult.textContent = handleConversion(inputArray, selectedElement);
};
//TEMPERATURE CONVERTER
//Reads the temperature input values and applies the selected
//Celsius-to-Fahrenheit or Fahrenheit-to-Celsius conversion
const handleTempConversion = () => {
    const inputArray = tInput.value.trim().split(/\s+/);
    const selectedElement = document.getElementById("t-select-input");
    tResult.textContent = handleConversion(inputArray, selectedElement);
};
//BUTTON EVENT LISTENERS
//Connects each Convert button to its corresponding converter 
//function so the conversion occurs when the user clicks it.
const wButton = document.getElementById("w-button");
const dButton = document.getElementById("d-button");
const tButton = document.getElementById("t-button");
wButton.addEventListener("click", handleWeightConversion);
dButton.addEventListener("click", handleDistanceConversion);
tButton.addEventListener("click", handleTempConversion);
// ============================================================
// TAB NAVIGATION
// Shows the selected converter and hides the other converters.
// ============================================================
const weightTab = document.getElementById("weight-tab");
const distanceTab = document.getElementById("distance-tab");
const temperatureTab = document.getElementById("temperature-tab");
const weightSection = document.getElementById("weight-section");
const distanceSection = document.getElementById("distance-section");
const temperatureSection = document.getElementById("temperature-section");
// Displays the selected converter section.
const showConverter = (section, activeTab) => {
    weightSection.classList.add("hidden");
    distanceSection.classList.add("hidden");
    temperatureSection.classList.add("hidden");
    weightTab.classList.remove("text-blue-700", "border-b-2", "border-blue-700");
    distanceTab.classList.remove("text-blue-700", "border-b-2", "border-blue-700");
    temperatureTab.classList.remove("text-blue-700", "border-b-2", "border-blue-700");
    section.classList.remove("hidden");
    activeTab.classList.add("text-blue-700", "border-b-2", "border-blue-700");
};
// Weight tab
weightTab.addEventListener("click", () => {
    showConverter(weightSection, weightTab);
});
// Distance tab
distanceTab.addEventListener("click", () => {
    showConverter(distanceSection, distanceTab);
});
// Temperature tab
temperatureTab.addEventListener("click", () => {
    showConverter(temperatureSection, temperatureTab);
});
