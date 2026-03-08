function addTask() {
    let input = document.getElementById("taskInput");
    let deadline = document.getElementById("deadlineInput");

    let taskText = input.value;
    let deadlineDate = deadline.value;

    if (taskText === "") return;

    let li = document.createElement("li");

    li.innerHTML = `
<div class="task-info">
<span onclick="toggleTask(this)">${taskText}</span>
<small>Deadline: ${deadlineDate}</small>
</div>

<div>
<button onclick="editTask(this)">✏️</button>
<button onclick="deleteTask(this)">❌</button>
</div>
`;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
    deadline.value = "";
}

function deleteTask(btn) {
    btn.parentElement.parentElement.remove();
}

function toggleTask(task) {
    task.classList.toggle("completed");
}

function editTask(btn) {
    let task = btn.parentElement.parentElement.querySelector("span");
    let newTask = prompt("Edit tugas:", task.innerText);

    if (newTask) {
        task.innerText = newTask;
    }
}