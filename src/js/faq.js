
import Accordion from "accordion-js"; 

document.addEventListener("DOMContentLoaded", function () {
  
    const accordion = new Accordion(".accordion-container", {
        duration: 800,
        showMultiple: false,
        collapse: true,
    });

   
    const triggers = document.querySelectorAll('.ac-trigger');

    triggers.forEach((trigger) => {
        trigger.addEventListener('click', function () {
            const item = this.closest('.accordion-item');
            item.classList.toggle('is-active'); 

            const panel = item.querySelector('.ac-panel');
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null; 
                panel.style.opacity = 0; 
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px'; 
                panel.style.opacity = 1; 
            }
        });
    });
});