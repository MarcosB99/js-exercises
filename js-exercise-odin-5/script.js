const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const redText = document.createElement("p");
redText.textContent = "Hey, I'm red!"
redText.style.color = "red";

const blueTitle = document.createElement("h3");
blueTitle.textContent = "I'm a blue h3!";
blueTitle.style.color = "blue";

const subContainer = document.createElement("div");
subContainer.setAttribute("style", "background-color: pink; border: 2px solid black;");

const title = document.createElement("h1");
title.textContent = "Im in a div";

const para = document.createElement("p");
para.textContent = "ME TOO!";

const button = document.createElement("button");
button.setAttribute("onclick", "alert('Hello World')");
button.textContent = "Click me";

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btnSecond = document.querySelector("#btn-second");
btnSecond.addEventListener("click", () => {
    alert("Hello again, World");
});

function alertFunction() {
    alert("YAY! You did it");
}

function alertFunctionTwo() {
    alert("YAY! You also did it");
}

const btnThird = document.querySelector("#btn-third");
btnThird.onclick = alertFunctionTwo;

btnThird.addEventListener("click", function (e) {
    e.target.style.background = "blue";
})

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    })
})

container.appendChild(content);
container.appendChild(redText);
container.appendChild(blueTitle);
subContainer.appendChild(title);
subContainer.appendChild(para);
container.appendChild(subContainer);
container.appendChild(button);