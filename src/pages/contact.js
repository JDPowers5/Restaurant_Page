function contact() {

    const content = document.getElementById("content");
    const header = document.createElement("h2");

    header.textContent = "Quinn's Contact Info"

    const fragment = document.createDocumentFragment();
    const ul = document.createElement("ul")

    const contactInfo = {
        Phone: "555-985-9999",
        Email: "QuinnsDiner@gmail.com",
        Instagram: "@quinnsdiner"
    }

    Object.entries(contactInfo).forEach(([key, value]) => {
        const li = document.createElement("li");
        li.textContent = `${key}: ${value}`;
        ul.appendChild(li);
    });

    fragment.appendChild(header)
    fragment.appendChild(ul)
    content.appendChild(fragment);

}

export { contact }