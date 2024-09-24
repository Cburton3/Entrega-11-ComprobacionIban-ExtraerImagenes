const getUserInput = (): string => {
  const textArea = document.getElementById("textarea");
  if (textArea && textArea instanceof HTMLTextAreaElement) {
    console.log("user Input recieved");
    return textArea.value;
  } else {
    throw new Error("No value for input found");
  }
};

export const getAllImageURL = (htmlInput: string): string[] => {
  const regex =
    // /^\s{0,}<img\ssrc=(?<link>"http:\/\/localhost:3000\/\.\/\w{1,}\.webp")\s\/>$/; //this looked for beginning and end, you didnt need that, just needed the url
    /((http|https):\/\/.{1,}(webp|jpg|png|svg))/gm; //no need to create var from this, we want whole thing
  const allLinks: string[] = [];
  let match;
  const urlList = htmlInput.match(regex);
  console.log(urlList);

  while ((match = regex.exec(htmlInput)) !== null) {
    /*everything in bracket is the condition for the while loop.if true the code is exe. repeats until gets a false*/ //RegExp.exec() is used to iterate over each match in the input string. Each time the exec() method is called, it returns the next match
    allLinks.push(match[1]); //push adds one or more elements to the end of an array. it modifies original
  }
  console.log("urls extracted", allLinks);
  return allLinks;
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

const printUrls = () => {
  const userInput = getUserInput();
  console.log(userInput);

  const urls = getAllImageURL(userInput);
  urls.forEach((url) => {
    createPElement(url);
  });
};

// const buttonElement = document.getElementById("button");
// if (buttonElement && buttonElement instanceof HTMLButtonElement) {
//   buttonElement.addEventListener("click", () => printUrls());
// }

if (typeof document !== "undefined") {
  const buttonElement = document.getElementById("button");
  if (buttonElement) {
    buttonElement.addEventListener("click", () => printUrls());
  }
}
