
let myTasks = [];

// Create the unordered list
let taskList = document.getElementById("task-list");
let userTasks = document.createElement("ul");

// Give the list an ID
userTasks.id = "user-tasks";

// Add the list to the task-list div
taskList.appendChild(userTasks);

// Get the Add Task button
let addTaskButton = document.getElementById("add-task");

// Add a click event listener
addTaskButton.addEventListener("click", function () {
    // Get the task name
    let taskName = document.getElementById("task-name").value;

    // Check that the input is not empty
    if (taskName !== "") {
        // Store the task in the array
        myTasks.push(taskName);

        // Create a new list item
        let listItem = document.createElement("li");

        // Add the task text to the list item
        listItem.textContent = taskName;

        // Add the list item to the unordered list
        userTasks.appendChild(listItem);

        // Clear the input field
        document.getElementById("task-name").value = "";
    }
});
