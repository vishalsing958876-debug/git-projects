function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("task-list");

  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle completion
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";
      deleteBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // prevent triggering line-through toggle
       taskList.removeChild(li);
     });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
