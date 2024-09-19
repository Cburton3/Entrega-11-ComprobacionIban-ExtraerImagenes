import { bancos } from "./constantes";

export const estaBienFormadoElIban = (value: string): void => {
  const patron =
    /^[A-Z]{2}\d{2}(\s|-)?\d{4}(\s|\.|-)?\d{4}(\s|\.|-)?\d{2}(\s|\.|-)?\d{10}$/;

  const isValid = patron.test(value);

  if (isValid) {
    createPElement("El IBAN está bien formado");
    console.log("es Valido");
  } else {
    createPElement("El IBAN no está bien formado");
    console.log("no es Valido");
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
    if (bancos[i].numero === codigo) {
      bank = bancos[i].banco;
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

export const validarIban = (value: string): any | false => {
  const patron =
    /^[A-Z]{2}\d{2}(\s|-)?(?<banco>\d{4})(\s|\.|-)?(?<sucural>\d{4})(\s|\.|-)?(?<control>\d{2})(\s|\.|-)?(?<cuenta>\d{10})$/;

  const coincidencia = patron.exec(value);

  if (coincidencia) {

    const { banco, sucural, control, cuenta } = coincidencia.groups as any;
    const bankName = getBankViaNumber(banco);
    
    createPElement("El IBAN es válido");
    createPElement(`Banco: ${bankName}`);
    createPElement(`Código sucursal: ${sucural}`);
    createPElement(`Digito de control: ${control}`);
    createPElement(`Número de cuenta: ${cuenta}`);

    return true;
  } else {
    console.log("Regex did not match");
    createPElement("El IBAN no está válido");
    return false;
  }
};

const obtenerValorCampo = (): string => {
  const elementoCampo = document.querySelector("#input");

  if (elementoCampo && elementoCampo instanceof HTMLInputElement) {
    return elementoCampo.value;
  } else {
    throw new Error("No value for input found");
  }
};

const searchButton = document.querySelector("#searchButton");
if (searchButton && searchButton instanceof HTMLButtonElement) {
  searchButton.addEventListener("click", () => {
    handleIban();
    console.log("button clicked");
  });
}

const handleIban = () => {
  const userInput = obtenerValorCampo();
  estaBienFormadoElIban(userInput);
  validarIban(userInput);
};
