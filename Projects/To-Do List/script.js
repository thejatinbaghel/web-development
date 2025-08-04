document.addEventListener("DOMContentLoaded", () => {
const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach(task => {
    renderTask(task);
});

addTaskButton.addEventListener("click", () =>{
    const taskText = todoInput.value.trim();
    if(taskText==="") return;

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    }

    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);
    todoInput.value = "";
    console.log(tasks);
});

function renderTask(task){
    const li = document.createElement('li');
    li.setAttribute("data-id", task.id);
    li.innerHTML = `
    <span>${task.text}</span>
    <button class="deleteButton">delete</button>
    `;

    li.addEventListener("click", (e) => {
        if(e.target.tagName === 'BUTTON') return;
        task.completed = !task.completed;
        li.classList.toggle('completed');
        saveTasks();
    })

    li.querySelector('button').addEventListener("click", (e) => {
        e.stopPropagation();
        tasks = tasks.filter(t => t.id !== task.id);
        li.remove();
        saveTasks();
    })
    taskList.appendChild(li);
}

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
})