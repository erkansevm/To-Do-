const createElement = (()=>{
  
  let createTaskDiv = function(task) {
    let taskDiv = document.createElement('div');
    let taskNameP = document.createElement('p');
    let taskStarDateP = document.createElement('p');
    let taskFinalDateP = document.createElement('p');
    let taskInfoP = document.createElement('p');
    let taskStatusP = document.createElement('p');
    taskNameP.textContent = task.taskName;
    taskStarDateP.textContent = task.starDate;
    taskFinalDateP.textContent = task.finalDate;
    taskInfoP.textContent = task.taskInfo;
    taskStatusP.textContent = task.taskStatus;
    
    task.container = taskDiv;
    
    taskDiv.classList.add("task");

    taskDiv.appendChild(taskNameP);
    taskDiv.appendChild(taskStarDateP);
    taskDiv.appendChild(taskFinalDateP);
    taskDiv.appendChild(taskInfoP);
    taskDiv.appendChild(taskStatusP);
    
  }

  return {
    createTaskDiv
  }

})()