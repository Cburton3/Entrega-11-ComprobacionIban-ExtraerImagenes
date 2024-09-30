import { isValidIBAN } from "ibantools";
import { getBankViaNumber } from "./motor";

const getInputValue = (): string => {
  const inputField = document.querySelector("#input");
  if (inputField && inputField instanceof HTMLInputElement) {
    const transformedIban = inputField.value.replace(/[\s-]/g, ""); //quita los espacios
    console.log('Iban retrieved')
    return transformedIban;
  } else {
    throw new Error("No value for input found");
  }
};

export const isIbanFormatCorrect = (iban: string): void => {
  const isValid = isValidIBAN(iban);

  if (isValid) {
    createPElement("The IBAN is well formatted");
    console.log("Valid IBAN");
    validateIban(iban);
  } else {
    createPElement("The IBAN is not well formatted");
    console.log("Invalid IBAN");
  }
};

export const validateIban = (iban: string) => {
  const patton =
    /^[A-Z]{2}\d{2}(\s|-|\.)?(?<bank>\d{4})(\s|\.|-)?(?<branch>\d{4})(\s|\.|-)?(?<control>\d{2})(\s|\.|-)?(?<account>\d{10})$/;

  const coincidence = patton.exec(iban);
  printIbanData(coincidence);
};

const printIbanData = (coincidence: RegExpExecArray | null) => {
  if (coincidence) {
    const { bank, branch, control, account } = coincidence.groups as any;
    const bankName = getBankViaNumber(bank);
    const resultContainer = document.getElementById("results");
    if (resultContainer && resultContainer instanceof HTMLDivElement) {
      resultContainer.textContent = "";
      createPElement("The IBan is valid");
      createPElement(`BanK: ${bankName}`);
      createPElement(`Branch number: ${branch}`);
      createPElement(`Control digits: ${control}`);
      createPElement(`Account number: ${account}`);
    }
  } else {
    console.log("Regex did not match");
    const resultContainer = document.getElementById("results");
    if (resultContainer && resultContainer instanceof HTMLDivElement) {
      resultContainer.textContent = "";
      createPElement("The IBAN is not valid");
    }
  }
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

export const handleIban = () => {
  const userInput = getInputValue();
  isIbanFormatCorrect(userInput);
  validateIban(userInput);
};
