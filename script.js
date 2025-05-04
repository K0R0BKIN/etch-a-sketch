const container = document.querySelector("#container");

for (let i = 0; i < 16*16; i++) {
    const div = document.createElement("div");
    div.classList.add("div");
    container.appendChild(div);
}

container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("div")) {
        e.target.style.backgroundColor = "black";
    }
});