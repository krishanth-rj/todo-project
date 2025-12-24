
const inputBox = document.querySelector(".inputfield");
const addButton = document.querySelector(".button");
const listContainer = document.querySelector(".list");

document.addEventListener("DOMContentLoaded", loadTasks);

addButton.addEventListener("click", addTask);

inputBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    if (inputBox.value === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerText = inputBox.value;

    let span = document.createElement("span");
    span.innerText = "✖";
    span.className = "delete";

    li.appendChild(span);
    listContainer.appendChild(li);

    inputBox.value = "";
    saveTasks();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTasks();
    } 
    else if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
        saveTasks();
    }
});

function saveTasks() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function loadTasks() {
    listContainer.innerHTML = localStorage.getItem("tasks") || "";
}

