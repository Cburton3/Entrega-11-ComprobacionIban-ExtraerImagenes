import { getAllImageURL } from "./motor";

const getUserInput = (): string => {
  const textArea = document.getElementById("textarea");
  if (textArea && textArea instanceof HTMLTextAreaElement) {
    console.log("user Input recieved");
    return textArea.value;
  } else {
    throw new Error("No value for input found");
  }
};

const createPElement = (text: string): void => {
  const resultContainer = document.getElementById("results");
  const pElement = document.createElement("p");
  if (
    resultContainer &&
    resultContainer instanceof HTMLDivElement &&
    pElement &&
    pElement instanceof HTMLParagraphElement
  ) {
    pElement.textContent = text;
    resultContainer.appendChild(pElement);
    console.log("urls printed");
  }
};

export const printUrls = () => {
  const userInput = getUserInput();
  console.log(userInput);

  const urls = getAllImageURL(userInput);
  urls.forEach((url) => {
    createPElement(url);
  });
};
