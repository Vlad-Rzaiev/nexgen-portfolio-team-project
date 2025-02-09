
import Accordion from "accordion-js";

document.addEventListener("DOMContentLoaded", function () {
  const existingAccordions = document.querySelectorAll(".ac");
  existingAccordions.forEach(acc => acc.classList.remove("is-active"));

  new Accordion(".accordion-container", {
    duration: 800,
    showMultiple: false,
    collapse: true,
    
  });
});


    