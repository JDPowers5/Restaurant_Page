import girlChef from "../images/girl_chef.jpg"

function homepage() {

    const homeButton = document.getElementById("homepage");
    homeButton.classList.add("active");

    const content = document.getElementById("content");

    const image = document.createElement("img");
    image.src = girlChef;
    image.alt = "young girl dressed as chef";

    const header = document.createElement("h1")
    header.textContent = "Welcome to Quinn's Diner"

    const span = document.createElement("span")
    span.textContent = `Quinn's Diner was inspired by our daugther Quinn! At a young age Quinn enjoyed 
                     picking our fresh raspberries from our garden so much. She inspired us to grow 
                     all of our own food. Since then we have expanded our garden and we would like to 
                     share with you our favorite recipes with every item sourced here right outside 
                     the diner! Bon Appétit!`

    const fragment = document.createDocumentFragment();
    fragment.appendChild(image);
    fragment.appendChild(header);
    fragment.appendChild(span);

    content.appendChild(fragment);
}

export { homepage }