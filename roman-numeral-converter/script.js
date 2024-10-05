
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const handleUserInput = (e) => {
    output.textContent = "";
    const userInput = numberInput.value;
    if (isValidInput(userInput)) {
        output.textContent = numberToRomanNumber(userInput).toString();
    }
}

const isValidInput = (userInput) => {
    if (!userInput || isNaN(userInput)) {
        output.textContent = "Please enter a valid number";
        return false;
    } else if (userInput < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
        return false;
    } else if (userInput > 3999) {
        output.textContent = "Please enter a number less than or equal to 3999";
        return false
    } else {
        return true;
    }
}

const numberToRomanNumberMap = [
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"]
]

const numberToRomanNumber = (number) => {
    let result = "";

    while (number != 0) {
        for(let i = numberToRomanNumberMap.length - 1; i >= 0; i--) {
            let currentNumber = numberToRomanNumberMap[i][0];
            if (number >= currentNumber) {
                result += numberToRomanNumberMap[i][1];
                number -= currentNumber;
                break;
            }
        }
    }

    return result;
}

convertBtn.addEventListener("click", handleUserInput);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handleUserInput();
    }
})