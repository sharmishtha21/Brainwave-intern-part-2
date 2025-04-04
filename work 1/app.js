function addTask() {
  let inputBox = document.getElementById("task-input"); // Corrected ID
  let taskList = document.getElementById("task-list"); // Corrected ID

  if (inputBox.value === '') {
    alert("You must write something!");
  } else {
    // Create a new list item
    let li = document.createElement("li");
    li.innerHTML = `<span>${inputBox.value}</span>`; // Added span for task text

    // Create a delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "\u00d7"; // Unicode for '×'
    deleteButton.onclick = function () {
      taskList.removeChild(li); // Remove the task
    };

    // Append delete button to the list item
    li.appendChild(deleteButton);

    // Add click event to toggle 'completed' class
    li.addEventListener("click", function (e) {
      if (e.target.tagName !== "BUTTON") {
        li.classList.toggle("completed");
      }
    });

    // Append the list item to the task list
    taskList.appendChild(li);
  }

  // Clear the input box
  inputBox.value = "";
}

// Add CSS class for completed tasks
document.addEventListener("DOMContentLoaded", function () {
  let style = document.createElement("style");
  style.innerHTML = `
    .completed span {
      text-decoration: line-through;
      color: gray;
    }
  `;
  document.head.appendChild(style);
});