// Variables
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let taskToEditIndex = null;

// Initialize app
document.addEventListener("DOMContentLoaded", displayTasks);

// Add Task
document.getElementById("add-task-btn").addEventListener("click", () => {
  const taskInput = document.getElementById("task-input");
  const task = taskInput.value.trim();
  if (task) {
    tasks.push({ text: task, completed: false });
    saveTasks();
    displayTasks();
    taskInput.value = "";
  }
});

// Display Tasks
function displayTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = `task-item ${task.completed ? "completed" : ""}`;
    li.innerHTML = `
            <span onclick="toggleTask(${index})">${task.text}</span>
            <div>
              <button class="done-btn" onclick="toggleTask(${index})">
                  ${task.completed ? "Undo" : "Done"}
              </button>
              <button onclick="showEditModal(${index})">Edit</button>
              <button onclick="showDeleteModal(${index})">Delete</button>
            </div>
        `;
    taskList.appendChild(li);
  });
}

// Toggle Task Completion
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  displayTasks();
}

// Filter Tasks
function filterTasks(filter) {
  let filteredTasks = [];
  if (filter === "completed")
    filteredTasks = tasks.filter((task) => task.completed);
  else if (filter === "active")
    filteredTasks = tasks.filter((task) => !task.completed);
  else filteredTasks = tasks;
  displayFilteredTasks(filteredTasks);
}

function displayFilteredTasks(tasks) {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = `task-item ${task.completed ? "completed" : ""}`;
    li.innerHTML = `
            <span onclick="toggleTask(${index})">${task.text}</span>
            <div>
              <button class="done-btn" onclick="toggleTask(${index})">
                  ${task.completed ? "Undo" : "Done"}
              </button>
              <button onclick="showEditModal(${index})">Edit</button>
              <button onclick="showDeleteModal(${index})">Delete</button>
            </div>
        `;
    taskList.appendChild(li);
  });
}

// Save Tasks to Local Storage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Show Edit Modal
function showEditModal(index) {
  taskToEditIndex = index;
  document.getElementById("edit-task-input").value = tasks[index].text;
  document.getElementById("edit-modal").style.display = "flex";
}

// Confirm Edit
document.getElementById("confirm-edit").addEventListener("click", () => {
  const newTaskText = document.getElementById("edit-task-input").value.trim();
  if (newTaskText) {
    tasks[taskToEditIndex].text = newTaskText;
    saveTasks();
    displayTasks();
    closeModal("edit-modal");
  }
});

// Show Delete Modal
function showDeleteModal(index) {
  taskToEditIndex = index;
  document.getElementById("delete-modal").style.display = "flex";
}

// Confirm Delete
document.getElementById("confirm-delete").addEventListener("click", () => {
  tasks.splice(taskToEditIndex, 1);
  saveTasks();
  displayTasks();
  closeModal("delete-modal");
});

// Close Modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}
