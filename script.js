function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      var taskList = document.getElementById("task-list");
      var taskItem = document.createElement("li");
      taskItem.innerHTML = '<span>' + taskText + '</span><button onclick="removeTask(this)">Delete</button>';
      taskList.appendChild(taskItem);
      taskInput.value = "";
    }
  }
  
  function removeTask(element) {
    var taskItem = element.parentNode;
    var taskList = taskItem.parentNode;
    taskList.removeChild(taskItem);
  }
  