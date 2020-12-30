const createElement = (()=>{
  
  let createTaskDiv = function(task) {
    let taskDiv = document.createElement('div');
    let taskNameP = document.createElement('p');
    let taskStarDateP = document.createElement('p');
    let taskFinalDateP = document.createElement('p');
    let taskInfoP = document.createElement('p');
    let taskStatusP = document.createElement('p');
    let taskCheckBtn=document.createElement("button")
    taskCheckBtn.textContent="Check";
    
    taskNameP.textContent = task.taskName;
    taskStarDateP.textContent = task.starDate;
    taskFinalDateP.textContent = task.finalDate;
    taskInfoP.textContent = task.taskInfo;
    taskStatusP.textContent = task.taskStatus;
    
    task.container = taskDiv;
    taskDiv.classList.add("task")

    taskDiv.appendChild(taskNameP);
    taskDiv.appendChild(taskStarDateP);
    taskDiv.appendChild(taskFinalDateP);
    taskDiv.appendChild(taskInfoP);
    taskDiv.appendChild(taskStatusP);
    taskDiv.appendChild(taskCheckBtn)
    
  }


  let createCardDiv=function(card){
    let cardDiv=document.createElement("div");
    let cardIdP=document.createElement("p");
    let cardTaskDiv=document.createElement("div")

    card.container=cardDiv;
    cardIdP.textContent=card.id;

    cardDiv.classList.add("card")
    
    cardDiv.appendChild(cardIdP);
    cardDiv.appendChild(cardTaskDiv);

  }

  return {
    createTaskDiv,
    createCardDiv
  }

})()