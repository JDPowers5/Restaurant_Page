import { homepage } from "./pages/homepage.js"
import { contact } from "./pages/contact.js"
import { menu } from "./pages/menu.js"
import  "./styles/styles.css"

homepage();

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        if(button.classList.contains("active")){return};

        const content = document.getElementById("content");
        content.innerHTML = ""

        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        switch(button.id){
        case "homepage":
            homepage();
            break;
        case "contact":            
            contact();
            break;
        case "menu":
            menu();
            break;
        }
    });
});

