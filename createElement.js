const createElement = (()=>{
  
  let createTaskDiv = function(task) {
    let taskDiv = document.createElement('div');
    let taskNameP = document.createElement('p');
    let taskStarDateP = document.createElement('p');
    let taskFinalDateP = document.createElement('p');
    let taskInfoP = document.createElement('p');
    let taskStatusP = document.createElement('p');
    let taskEditBtn=document.createElement("button")

    taskEditBtn.classList.add("edit")
    taskEditBtn.textContent="Edit";
    
    taskNameP.textContent = task.taskName;
    taskStarDateP.textContent = task.startDate;
    taskFinalDateP.textContent = task.finalDate;
    taskInfoP.textContent = task.taskInfo;
    taskStatusP.textContent = task.taskStatus;
    
    task.container = taskDiv;
    taskDiv.classList.add("task");
    taskDiv.classList.add("draggable");
    taskDiv.setAttribute('draggable','true');
    taskDiv.object = task;

    taskDiv.appendChild(taskNameP);
    taskDiv.appendChild(taskStarDateP);
    taskDiv.appendChild(taskFinalDateP);
    taskDiv.appendChild(taskInfoP);
    taskDiv.appendChild(taskStatusP);
    taskDiv.appendChild(taskEditBtn);
    

    taskEditBtn.addEventListener("click",(e) =>{
           //create edit div
           createElement.createEditTask(task.container)
           task.container.classList.add("edit-mode")
           
           //replace change 
     
           document.querySelector(".submit").addEventListener("click",function(){
           let hand=document.querySelector(".taskEdit")
            
           //Name changes
           
           let taskNameInval=document.getElementById("taskNameIn").value
           if(!(taskNameInval==="")){
           e.target.parentElement.object.changeTaskName(taskNameInval)
           taskNameP.textContent = taskNameInval;
           taskNameP.textContent = task.taskName;
          }

           //Star date changes

           let taskStartDateInval=document.getElementById("taskStartDateIn").value
           if(!(taskStartDateInval==="")){
           e.target.parentElement.object.changeStartDate(taskStartDateInval)
            taskStarDateP.textContent=taskStartDateInval;
            taskStarDateP.textContent = task.startDate;
          }
           //Final date changes
           
           let taskFinalDateInval=document.getElementById("taskFinalDateIn").value
           if(!(taskFinalDateInval==="")){
           e.target.parentElement.object.changeFinalDate(taskFinalDateInval)
            taskFinalDateP.textContent=taskFinalDateInval;
            taskFinalDateP.textContent = task.finalDate;
          }

           //Info Change

          let taskInfoInval=document.getElementById("taskInfoIn").value
          if(!(taskInfoInval==="")){
           e.target.parentElement.object.changeInfo(taskInfoInval)
            taskInfoP.textContent=taskInfoInval;
            taskInfoP.textContent = task.taskInfo;
          }

           //Status Changes

           let taskStatusInval=document.getElementById("taskStatusIn").value
           if(!(taskStatusInval==="")){
           e.target.parentElement.object.changeStatus(taskStatusInval)
            taskStatusP.textContent=taskStatusInval;
            taskStatusP.textContent = task.taskStatus;
          }


           
           task.container.classList.remove("edit-mode")
           task.container.removeChild(task.container.lastElementChild)
   

           })    
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
    taskNameIn.placeholder="TaskName"

    let taskStartDateIn=document.createElement("input")
    taskStartDateIn.id="taskStartDateIn"
    taskStartDateIn.placeholder="taskStartDate"

    let taskFinalDateIn=document.createElement("input")
    taskFinalDateIn.id="taskFinalDateIn"
    taskFinalDateIn.placeholder="taskFinalDate"

    
    let taskInfoIn=document.createElement("input")
    taskInfoIn.id="taskInfoIn"
    taskInfoIn.placeholder="taskInfo"
     
    let taskStatusIn=document.createElement("input")
    taskStatusIn.id="taskStatusIn"
    taskStatusIn.placeholder="taskStatus"


    let taskSubmitbtn=document.createElement("button")
    taskSubmitbtn.textContent="Submit"
    taskSubmitbtn.classList.add("submit")


  
    task.appendChild(editDiv);

    editDiv.classList.add("taskEdit")
    editDiv.appendChild(taskNameIn)
    editDiv.appendChild(taskStartDateIn)
    editDiv.appendChild(taskFinalDateIn)
    editDiv.appendChild(taskInfoIn)
    editDiv.appendChild(taskStatusIn)
    editDiv.appendChild(taskSubmitbtn)
  }

  return {
    createTaskDiv,
    createCardDiv,
    createEmployeeDiv,
    createEditTask
  }

})()