const output = document.getElementById('output');
const button = document.getElementById('submit');
const input = document.getElementById('binaryNumber');
const errorMessageLimit = document.getElementById('error-limit');
const errorMessageChar = document.getElementById('error-char');
const validEntry = true;

const calculateBaseTen = (binaryNumber) => {
  const numLength = binaryNumber.length;
  let baseTenNumber = 0;

  for (let i = 0; i < numLength; i++) {
    baseTenNumber *= 2;
    baseTenNumber += parseInt(binaryNumber[i], 10);
  }
  output.textContent = baseTenNumber
}

const inputValidation = (binaryNumber) => {
  if (binaryNumber.length > 8) {
    errorMessageLimit.classList.add('error');
  } else {
    errorMessageLimit.classList.remove('error');
  }
  if (/[^01]/.test(binaryNumber)) {
    errorMessageChar.classList.add('error');
  } else {
    errorMessageChar.classList.remove('error');
  }
  if (!(binaryNumber.length > 8) && !(/[^01]/.test(binaryNumber))) {
    calculateBaseTen(binaryNumber)
  } else {
    output.textContent = '';
  }
}

input.focus();

button.addEventListener('click', () => {
  const binaryNumber = input.value;
  inputValidation(binaryNumber);
})
