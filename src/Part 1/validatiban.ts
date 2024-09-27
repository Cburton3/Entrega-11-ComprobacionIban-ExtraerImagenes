import {handleIban} from './ui'

const cargarAplicacion = () => {
    const searchButton = document.querySelector("#searchButton");
    if (searchButton && searchButton instanceof HTMLButtonElement) {
      searchButton.addEventListener("click", () => {
        handleIban();
        console.log("button clicked");
      });
    }
  };

  document.addEventListener("DOMContentLoaded", cargarAplicacion);
  