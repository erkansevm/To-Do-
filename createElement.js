const createElement = (()=>{
  
  let createTaskDiv = function(task) {
    let taskDiv = document.createElement('div');
    let taskNameP = document.createElement('p');
    let taskStarDateP = document.createElement('p');
    let taskFinalDateP = document.createElement('p');
    let taskInfoP = document.createElement('p');
    let taskStatusP = document.createElement('p');
    let taskCheckBtn=document.createElement("button")

    taskCheckBtn.classList.add("edit")
    taskCheckBtn.textContent="Edit";
    
    taskNameP.textContent = task.taskName;
    taskStarDateP.textContent = task.starDate;
    taskFinalDateP.textContent = task.finalDate;
    taskInfoP.textContent = task.taskInfo;
    taskStatusP.textContent = task.taskStatus;
    
    task.container = taskDiv;
    taskDiv.classList.add("task");
    taskDiv.classList.add("draggable");
    taskDiv.object = task;

    taskDiv.appendChild(taskNameP);
    taskDiv.appendChild(taskStarDateP);
    taskDiv.appendChild(taskFinalDateP);
    taskDiv.appendChild(taskInfoP);
    taskDiv.appendChild(taskStatusP);
    taskDiv.appendChild(taskCheckBtn);
    

    taskCheckBtn.addEventListener("click",(e) =>{
           //create edit div
           createElement.createEditTask(task.container)
           task.container.classList.add("edit-mode")
           
           //replace change 
     
           document.querySelector("#submit").addEventListener("click",function(){
           let hand=document.querySelector(".taskEdit")
         
           let value=document.getElementById("taskNameIn").value
           e.target.parentElement.object.changeTaskName(value)

           task.container.classList.remove("edit-mode")
           task.container.removeChild(task.container.lastElementChild)
           taskNameP.textContent = value
           })     
      
      taskNameP.textContent = task.taskName;
      console.log(taskNameP.textContent)
      console.log(task.taskName)
      taskStarDateP.textContent = task.starDate;
      taskFinalDateP.textContent = task.finalDate;
      taskInfoP.textContent = task.taskInfo;
      taskStatusP.textContent = task.taskStatus;
      console.log(taskDiv)
      console.log(taskNameP.textContent)
      console.log(task.taskName)
      
    })

   

  }


  let createCardDiv=function(card){
    let cardDiv=document.createElement("div");
    let cardIdP=document.createElement("p");
    let cardTaskDiv=document.createElement("div")

    card.container=cardDiv;
    cardIdP.textContent=card.id;
   
    cardDiv.classList.add("card")
    cardDiv.object = card;

    cardDiv.appendChild(cardIdP);
    cardDiv.appendChild(cardTaskDiv);

  }


  let createEmployeeDiv=function(employee){
    let employeeDiv=document.createElement("div");
    let employeeName=document.createElement("p");
    let employeeJob=document.createElement("p");

    employee.container=employeeDiv;
    
    employeeName.textContent=employee.name;
    employeeJob.textContent=employee.job;

    employeeDiv.classList.add("employee");
    employeeDiv.object = employee;


    employeeDiv.appendChild(employeeName);
    employeeDiv.appendChild(employeeJob);
  }


  let createEditTask=function(task){
    let editDiv=document.createElement("div");
    let taskNameIn=document.createElement("input")
    taskNameIn.id="taskNameIn"
    let taskStartDateIn=document.createElement("input")
    let taskFinalDateIn=document.createElement("input")
    let taskInfoIn=document.createElement("input")
    let taskSubmitbtn=document.createElement("button")
    taskSubmitbtn.textContent="Submit"
    taskSubmitbtn.id="submit"

  
    task.appendChild(editDiv);

    editDiv.classList.add("taskEdit")
    editDiv.appendChild(taskNameIn)
    editDiv.appendChild(taskStartDateIn)
    editDiv.appendChild(taskFinalDateIn)
    editDiv.appendChild(taskInfoIn)
    editDiv.appendChild(taskSubmitbtn)
  }

  return {
    createTaskDiv,
    createCardDiv,
    createEmployeeDiv,
    createEditTask
  }

})()