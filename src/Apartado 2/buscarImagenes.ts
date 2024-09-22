//use filter to create a new array
//set event listening to button
//make var for userInput

const getUserInput = (): string => {
    const textArea = document.getElementById('textarea');
    if(textArea && textArea instanceof HTMLTextAreaElement) {
        return textArea.value;
    } else {
        throw new Error('No value for input found')
    }
};

const userInput = getUserInput()

// const buttonElement = document.getElementById('button');
// buttonElement?.addEventListener('click', () => getAllImageURL());