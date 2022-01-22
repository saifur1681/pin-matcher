// generate pin section.....
function generatePin() {
    const generatePinInputField = document.getElementById("generate-pin-input");
    const math = Math.round(Math.random() * 10000);
    const mathFourDigit = math + '';
    if (mathFourDigit.length == 4) {
        generatePinInputField.value = math;
    }
    else {
        generatePin();
    }
    // empty calc field and error message.....
    document.getElementById('yes').style.display = 'none';
    document.getElementById('no').style.display = 'none';
    document.getElementById('calc-input-field').value = "";
}

// calculator section.....
document.getElementById('calc-button').addEventListener('click', function (event) {
    const buttonTurget = event.target.innerText;
    const calcInputField = document.getElementById('calc-input-field');

    // const getButtonOnlyNumber = buttonTurget;
    if (isNaN(buttonTurget)) {
        if (buttonTurget == 'C') {
            calcInputField.value = "";
        }
    }
    else {
        const previousInputNumber = calcInputField.value;
        const currentInputNumber = previousInputNumber + buttonTurget;
        calcInputField.value = currentInputNumber;
    }
})


//  submit button section.....
function submit() {

    const generatePinInputField = document.getElementById("generate-pin-input");
    const calcInputField = document.getElementById('calc-input-field');
    const yesMessage = document.getElementById('yes');
    const noMessage = document.getElementById('no');

    if (generatePinInputField.value == calcInputField.value) {
        yesMessage.style.display = 'block';
        noMessage.style.display = 'none';
    }
    else {
        noMessage.style.display = 'block';
        yesMessage.style.display = 'none';
    }
}