function menu () {
    const content = document.getElementById("content");

    const dl = document.createElement("dl");
    const fragment = document.createDocumentFragment();

    const menu = [
        {
            name: "Garden Salad",
            description: "Arugula and spinach leaves. Tomatoes, onion, sunflower seeds topped with a raspberry vinaigrette."
        },
        {
            name: "Mashed Potatoes",
            description: "Golden yukon steamed potatoes. Seasoned with butter, chives, basil, salt and pepper."
        },
        {
            name: "Sweets and Beets",
            description: "Sweet potatoes and red beets roasted and seasoned with olive oil, salt and pepper."
        },
        {
            name: "Egg Scramble",
            description: "Duck eggs scrambled with goat milk seasoned with basil, tomatoes, salt and pepper."
        }
    ]


    menu.forEach(item => {
        const dt = document.createElement("dt");
        const dd = document.createElement("dd");

        dt.textContent = item.name;
        dd.textContent = item.description;

        dl.appendChild(dt);
        dl.appendChild(dd);
    })

    fragment.appendChild(dl);
    content.appendChild(fragment);

}

export{ menu }
