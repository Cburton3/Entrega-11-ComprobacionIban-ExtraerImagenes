import { printUrls } from "./ui";

export const cargarAplicacion = () => {
  if (typeof document !== "undefined") {
    const buttonElement = document.getElementById("button");
    if (buttonElement) {
      buttonElement.addEventListener("click", () => printUrls());
    }
  }
};

document.addEventListener("DOMContentLoaded", cargarAplicacion);
