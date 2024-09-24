const getUserInput = (): string => {
  const textArea = document.getElementById("textarea");
  if (textArea && textArea instanceof HTMLTextAreaElement) {
    console.log("user Input recieved");
    return textArea.value;
  } else {
    throw new Error("No value for input found");
  }
};

//use filter to create a new array??

export const getAllImageURL = (htmlInput: string): string[] => {
  const regex =
    // /^\s{0,}<img\ssrc=(?<link>"http:\/\/localhost:3000\/\.\/\w{1,}\.webp")\s\/>$/;
    /(http|https):\/\/.{1,}(webp|jpg|png|svg)/gm;
  const allLinks: string[] = [];
  let match;
  const urlList = htmlInput.match(regex);
  console.log(urlList);

  while ((match = regex.exec(htmlInput)) !== null)/*everything in bracket is the condition for the while loop.if true the code is exe. repeats until gets a false*/ {
    //RegExp.exec() is used to iterate over each match in the input string. Each time the exec() method is called, it returns the next match
    allLinks.push(match[1]); //push adds one or more elements to the end of an array. it modifies original
  }
  // console.log('urls extracted', allLinks);
  return allLinks;

  //CON MATCHALL()

  // const matches = [
  //   ...htmlInput.matchAll(regex),
  // ]; /*gives all matches in iterable format -means that it gives each match one  at a time (its like it gives you a for loop of the result instead of teh actual result) */
  // //the spread operator (...) allows you to spread the iterator into an array. (it collects the values one by one into an array)
  // const allLinks = matches.map((match) => match[1]); //extracts links from each match. loops through the array and extract the first capture group (the actual URL) from each match.
  // console.log("urls extracted", allLinks);
  // return allLinks;

  // const coincidence = regex.exec(htmlInput);//this is the only way to  Execute the regex on the input string

  // if(coincidence) {
  //     const link = coincidence[1];
  // }

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
  console.log(userInput)

  const urls = getAllImageURL(userInput);
   urls.forEach((url) => {
    createPElement(url);
  });
};

//Para ello tienes que crear una expresión regular que busque un tag que empieza por <img y que acaba con > y que tenga dentro un atributo src=" y dentro la url de la imagen.

const buttonElement = document.getElementById("button");
if (buttonElement && buttonElement instanceof HTMLButtonElement) {
  buttonElement.addEventListener("click", () => printUrls());
}
