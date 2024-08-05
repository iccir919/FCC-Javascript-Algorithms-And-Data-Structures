const userInput = document.getElementById("text-input");
const submitButton = document.getElementById("check-btn");
const resultText = document.getElementById("result")


function isPalindrome(text) {
    if ( text.length === 1 ) return true;

    for ( let i = 0; i < text.length / 2; i++ ) {
        if ( text[i] !== text[text.length - 1 - i] ) {
            return false;
        }
    }
    return true
}

function cleanText(text) {
    text = text.toLowerCase();
    text = text.replace(/[^a-z0-9]/g, "")
    return text;
}

function checkInput() {
    const submittedInput = userInput.value;

    if ( submittedInput.length === 0 ) {
        alert("Please input a value");
        return;
    }

    if ( isPalindrome(cleanText(submittedInput)) ) {
        resultText.textContent = `${submittedInput} is a palindrome`
    } else {
        resultText.textContent = `${submittedInput} is not a palindrome`
    }

}

submitButton.addEventListener("click", checkInput);