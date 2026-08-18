const container = document.querySelector(".container");
const subContainer = document.createElement("div");
subContainer.classList.add("sub-container")
const gridSize = document.createElement("button");
container.appendChild(gridSize);
container.appendChild(subContainer);
gridSize.textContent = "Select Grid Size";

for (let i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    subContainer.appendChild(square);
    square.addEventListener("mouseover", () => {
        square.classList.add("hovered");
    })
}

gridSize.addEventListener("click", () => {
    let userInput = parseInt(prompt("Please provide a grid size number: "));
    if (userInput < 1 || userInput > 100 || isNaN(userInput)) {
        alert("You need to chose a number between 1 and 100");
        return
    }
    subContainer.innerHTML = "";
    for (let i = 0; i < userInput * userInput; i++) {
        const square = document.createElement("div");
        square.classList.add("new-grid-square");
        let size = 100 / userInput;

        square.style.width = size + "%";
        square.style.height = size + "%";
        subContainer.appendChild(square);
        square.addEventListener("mouseover", () => {
            square.classList.add("hovered");
        });
    }
});