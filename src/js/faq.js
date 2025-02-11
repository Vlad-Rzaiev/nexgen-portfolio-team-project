import Accordion from "accordion-js";

document.addEventListener("DOMContentLoaded", function () {
    // Initializing the accordion
    const accordion = new Accordion(".accordion-container", {
        duration: 800,
        showMultiple: true,
        collapse: true,
    });

    document.querySelectorAll(".accordion-item").forEach(item => {
        const trigger = item.querySelector(".ac-trigger");
        const panel = item.querySelector(".ac-panel");
        const iconWrapper = item.querySelector(".faq-icon-wrapper");

        trigger.addEventListener("click", function () {
            if (item.classList.contains("is-active")) {
                panel.style.maxHeight = panel.scrollHeight + "px"; // add max-height for open
            } else {
                panel.style.maxHeight = "0"; //Closing smoothly
            }

            // Rotate the icon
            if (iconWrapper) {
                iconWrapper.classList.toggle("rotate", item.classList.contains("is-active"));
            }
        });
    });
});

