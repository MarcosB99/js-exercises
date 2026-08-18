const container = document.querySelector(".container");
const subContainer = document.createElement("div");
subContainer.classList.add("sub-container")
const gridSize = document.createElement("button");
container.appendChild(gridSize);
container.appendChild(subContainer);
gridSize.textContent = "Select Grid Size";

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

for (let i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.dataset.interactions = 0;
    square.classList.add("grid-square");
    subContainer.appendChild(square);
    square.addEventListener("mouseover", () => {
        square.dataset.interactions = parseInt(square.dataset.interactions) + 1;
        if (parseInt(square.dataset.interactions) === 1) {
            square.style.backgroundColor = getRandomColor();
        }
        let currentBrightness = 1 - (parseInt(square.dataset.interactions) * 0.1);
        square.style.filter = `brightness(${currentBrightness})`;
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
        square.dataset.interactions = 0;
        square.classList.add("new-grid-square");
        let size = 100 / userInput;

        square.style.width = size + "%";
        square.style.height = size + "%";
        subContainer.appendChild(square);
        square.addEventListener("mouseover", () => {
            square.dataset.interactions = parseInt(square.dataset.interactions) + 1;
            if (parseInt(square.dataset.interactions) === 1) {
                square.style.backgroundColor = getRandomColor();
            }

            let currentBrightness = 1 - (parseInt(square.dataset.interactions) * 0.1);
            square.style.filter = `brightness(${currentBrightness})`;
        });
    }
});