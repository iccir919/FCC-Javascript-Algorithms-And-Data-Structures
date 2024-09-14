
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const checkUserInput = () => {
    const inputNum = parseInt(numberInput.value);

    if (!inputNum || isNaN(inputNum)) {
        output.textContent = "Please enter a valid number";
    } else if (inputNum < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
    } else if (inputNum > 3999) {
        output.textContent = "Please enter a number less than or equal to 3999";
    }
}

const romanNumberToNumber = [
    [1, "I"],
    [5, "V"],
    [10, "X"],
    [50, "L"],
    [100, "C"],
    [500, "D"],
    [1000, "M"]
]

const numberToRomanNumber = (number) => {
    let result = "";

    while (number > 0) {
        
    }
}

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
})