function addTask(){
let input = document.getElementById("taskInput");
let taskText = input.value;

if(taskText === "") return;

let li = document.createElement("li");

li.innerHTML = `
<span onclick="toggleTask(this)">${taskText}</span>
<div>
<button onclick="editTask(this)">✏️</button>
<button onclick="deleteTask(this)">❌</button>
</div>
`;

document.getElementById("taskList").appendChild(li);

input.value="";
}

function deleteTask(btn){
btn.parentElement.parentElement.remove();
}

function toggleTask(task){
task.classList.toggle("completed");
}

function editTask(btn){
let task = btn.parentElement.parentElement.querySelector("span");
let newTask = prompt("Edit tugas:", task.innerText);

if(newTask){
task.innerText = newTask;
}
}