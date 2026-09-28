const findConversion = (convert: string) => {
    if (convert === 'Kilograms to Pounds') {
        return (kg: number): number => kg * 2.205 ;

    } else if (convert === 'Pounds to Kilograms') {
        return (lb: number): number => lb / 2.205 ;

    } else if (convert === 'Miles to Kilometres') {
        return (m: number): number => m * 1.609;

    } else if (convert === 'Kilometres to Miles') {
        return (km: number): number => km / 1.609;

    } else if (convert === 'Celcius to Fahrenheit') {
        return (c: number): number => (c * 9/5) + 32;

    } else {
        return (f: number): number => (f - 32) / (9/5);

    };
};
const handleConversion = (array: string[], selectedElement: HTMLSelectElement): string => {
    let output: string = ' ';
    const convert = findConversion(selectedElement.value);
    for (let i = 0; i< array.length; i++) {
        let from: number = Number(array[i]);
        from = convert(from);
        output += '\n';
        output += String(from);
    };
    return output;
};

const wInput = document.getElementById("w-input") as HTMLInputElement;
const wResult = document.getElementById("w-result") as HTMLParagraphElement;
const dInput = document.getElementById("d-input") as HTMLInputElement;
const dResult = document.getElementById("d-result") as HTMLParagraphElement;
const tInput = document.getElementById("t-input") as HTMLInputElement;
const tResult = document.getElementById("t-result") as HTMLParagraphElement;

const handleWeightConversion = () => {
    const inputArray: string[] = wInput.value.split(" ");
    const selectedElement = document.getElementById("w-select-input") as HTMLSelectElement;
    wResult.textContent = handleConversion(inputArray, selectedElement);
};
const handleDistanceConversion = () => {
    const inputArray: string[] = dInput.value.split(" ");
    const selectedElement = document.getElementById("d-select-input") as HTMLSelectElement;
    dResult.textContent = handleConversion(inputArray, selectedElement);
};
const handleTempConversion = () => {
    const inputArray: string[] = tInput.value.split(" ");
    const selectedElement = document.getElementById("t-select-input") as HTMLSelectElement;
    tResult.textContent = handleConversion(inputArray, selectedElement);
};

const wButton = document.getElementById("w-button") as HTMLButtonElement;
const dButton = document.getElementById("d-button") as HTMLButtonElement;
const tButton = document.getElementById("t-button") as HTMLButtonElement;
wButton.addEventListener("click", handleWeightConversion);
dButton.addEventListener("click", handleDistanceConversion);
tButton.addEventListener("click", handleTempConversion);