import { bancos } from "./constantes";

export const isIbanFormatCorrect = (value: string): void => {
  const patron =
    /^[A-Z]{2}\d{2}(\s|-)?\d{4}(\s|\.|-)?\d{4}(\s|\.|-)?\d{2}(\s|\.|-)?\d{10}$/;

  const isValid = patron.test(value);

  if (isValid) {
    createPElement("The IBAN is well formatted");
    console.log("Valid IBAN");
  } else {
    createPElement("The IBAN is not well formatted");
    console.log("Invalid IBAN");
  }
};

// const ibantools = require('ibantools');
// const iban = electronicFormatIBAN('NL91 ABNA 0417 1643 00'); // 'NL91ABNA0517164300'
// ibantools.isValidIBAN(iban);

// // If you want to know reason why IBAN is invalid
// ibantools.validateIBAN('NL91ABNA0517164300');
// // Returns { valid: false, errorCodes: [iban.ValidationErrorsIBAN.WrongIBANChecksum] }

// // Validate BIC
// ibantools.isValidBIC('ABNANL2A');

//Extraeyendo informacion
//we can extract both the number and the letter separately in the following way:
//segment what you wanna separate with () so (?<parteNumerica>\d{8})

// const getBankNumber = (banks: Banco): string => {
//   bancos.forEach((banco) => {
//     if (banco.numero === codigo) return banco.banco;
//   });
//   return
// };

export const getBankViaNumber = (codigo: string): string => {
  let bank = "";
  for (let i = 0; i < bancos.length; i++) {
    if (bancos[i].number === codigo) {
      bank = bancos[i].bank;
    }
  }
  return bank;
};

const createPElement = (text: string): void => {
  const resultContainer = document.getElementById("results");
  const pElement = document.createElement("p");
  pElement.textContent = text;
  if (
    resultContainer &&
    resultContainer instanceof HTMLDivElement &&
    pElement &&
    pElement instanceof HTMLParagraphElement
  ) {
    resultContainer.appendChild(pElement);
  }
};

export const validateIban = (value: string): any | false => {
  const patton =
    /^[A-Z]{2}\d{2}(\s|-|\.)?(?<bank>\d{4})(\s|\.|-)?(?<branch>\d{4})(\s|\.|-)?(?<control>\d{2})(\s|\.|-)?(?<account>\d{10})$/;

  const coincidence = patton.exec(value);

  if (coincidence) {

    const { bank, branch, control, account } = coincidence.groups as any;
    const bankName = getBankViaNumber(bank);
    
    createPElement("The IBan is valid");
    createPElement(`BanK: ${bankName}`);
    createPElement(`Branch number: ${branch}`);
    createPElement(`Control digits: ${control}`);
    createPElement(`Account number: ${account}`);

    return true;
  } else {
    console.log("Regex did not match");
    createPElement("The IBAN is not valid");
    return false;
  }
};

const getInputValue = (): string => {
  const inputField = document.querySelector("#input");

  if (inputField && inputField instanceof HTMLInputElement) {
    return inputField.value;
  } else {
    throw new Error("No value for input found");
  }
};

// if(typeof document !== 'undefined') {
//   const searchButton = document.querySelector("#searchButton");
//   if(searchButton) {
//     searchButton.addEventListener("click", () => {
//       handleIban();
//       console.log("button clicked");
//     });
//   }
// }

const searchButton = document.querySelector("#searchButton");
if (searchButton && searchButton instanceof HTMLButtonElement) {
  searchButton.addEventListener("click", () => {
    handleIban();
    console.log("button clicked");
  });
}

const handleIban = () => {
  const userInput = getInputValue();
  isIbanFormatCorrect(userInput);
  validateIban(userInput);
};
