let myTasks = [];

// Get the HTML elements.
let taskForm = document.getElementById("task-form");
let taskNameInput = document.getElementById("task-name");
let taskPriorityInput = document.getElementById("task-priority");
let taskImportantInput = document.getElementById("task-important");
let taskList = document.getElementById("task-list");
let deleteAllButton = document.getElementById("delete-all-tasks");

// Create the list that will display tasks.
let userTasks = document.createElement("ul");
userTasks.id = "user-tasks";
taskList.appendChild(userTasks);

let nextTaskId = 1;

// Display all tasks.
function displayTasks() {
  userTasks.innerHTML = "";

  myTasks.forEach(function (task) {
    let listItem = document.createElement("li");

    // Display the task name.
    let taskText = document.createElement("span");
    taskText.textContent = task.name;
    listItem.appendChild(taskText);

    // Display the priority.
    let priorityText = document.createElement("span");
    priorityText.textContent = " - " + task.priority;
    listItem.appendChild(priorityText);

    // Style tasks based on priority.
    if (task.priority === "High") {
      priorityText.style.color = "red";
    } else if (task.priority === "Medium") {
      priorityText.style.color = "orange";
    } else {
      priorityText.style.color = "green";
    }

    // Highlight important tasks in red.
    if (task.isImportant) {
      listItem.style.color = "red";
    }

    // Add a strikethrough to completed tasks.
    if (task.isCompleted) {
      taskText.style.textDecoration = "line-through";
    }

    // Add a checkbox to mark the task complete.
    let completeCheckbox = document.createElement("input");
    completeCheckbox.type = "checkbox";
    completeCheckbox.checked = task.isCompleted;

    completeCheckbox.addEventListener("change", function () {
      task.isCompleted = completeCheckbox.checked;
      displayTasks();
      logTasks();
    });

    listItem.appendChild(completeCheckbox);
    listItem.appendChild(document.createTextNode(" Completed "));

    // Add a checkbox to change importance.
    let importantCheckbox = document.createElement("input");
    importantCheckbox.type = "checkbox";
    importantCheckbox.checked = task.isImportant;

    importantCheckbox.addEventListener("change", function () {
      task.isImportant = importantCheckbox.checked;
      displayTasks();
      logTasks();
    });

    listItem.appendChild(importantCheckbox);
    listItem.appendChild(document.createTextNode(" Important "));

    // Add an Edit button.
    let editButton = document.createElement("button");
    editButton.type = "button";
    editButton.textContent = "Edit";

    editButton.addEventListener("click", function () {
      let newName = prompt("Enter the new task name:", task.name);

      if (newName !== null && newName.trim() !== "") {
        task.name = newName.trim();

        let newPriority = prompt("Enter High, Medium, or Low:", task.priority);

        if (newPriority !== null) {
          newPriority = newPriority.trim().toLowerCase();

          if (
            newPriority === "high" ||
            newPriority === "medium" ||
            newPriority === "low"
          ) {
            task.priority =
              newPriority.charAt(0).toUpperCase() + newPriority.slice(1);
          }
        }

        displayTasks();
        logTasks();
      }
    });

    listItem.appendChild(editButton);

    // Add a Delete button.
    let deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
      myTasks = myTasks.filter(function (item) {
        return item.id !== task.id;
      });

      displayTasks();
      logTasks();
    });

    listItem.appendChild(deleteButton);

    // Add the task to the webpage.
    userTasks.appendChild(listItem);
  });
}

// Log the task array as JSON.
function logTasks() {
  console.log(JSON.stringify(myTasks));
}

// Add a new task.
function addTask(event) {
  event.preventDefault();

  let taskName = taskNameInput.value.trim();

  if (taskName !== "") {
    let task = {
      id: nextTaskId,
      name: taskName,
      priority: taskPriorityInput.value,
      isImportant: taskImportantInput.checked,
      isCompleted: false,
    };

    nextTaskId++;
    myTasks.push(task);

    displayTasks();
    logTasks();

    taskForm.reset();
    taskPriorityInput.value = "Medium";
  }
}

// Connect the form to the addTask function.
taskForm.addEventListener("submit", addTask);

// Delete the entire task list.
function deleteTaskList() {
  myTasks = [];
  displayTasks();
  logTasks();
}

// Connect the button to the deleteTaskList function.
deleteAllButton.addEventListener("click", deleteTaskList);

// Display the initial task list.
displayTasks();
