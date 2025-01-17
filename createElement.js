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
    
    //Edit button event
    taskEditBtn.addEventListener("click",(e) =>{
           //create edit div
           createElement.createEditTask(task.container)
           task.container.classList.add("edit-mode")
           
           //replace change-----------------------------------
     
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
           
           //Cancel button------------------------------
           document.querySelector(".cancel").addEventListener("click",function(){
            task.container.classList.remove("edit-mode")
            task.container.removeChild(task.container.lastElementChild)

           })

          //Delete task button -------------------------------------
           
           document.querySelector(".delete").addEventListener("click", function(){
            var agree=confirm("Are you sure you want to delete this task")
            if(agree){ console.log(task.container.parentElement.removeChild(task.container))
            
            let deletetask=task.card.taskList.indexOf(task)
            task.card.taskList.splice(deletetask,1)
            console.log(task.card)
            }
           })
           
    })
  }


  let createCardDiv=function(card){
    let cardDiv=document.createElement("div");
    let cardIdP=document.createElement("p");
    let cardTaskDiv=document.createElement("div")
    let addTaskButton = document.createElement('button');

    addTaskButton.textContent = "Add Task";
    addTaskButton.style.margin = "10px";
    card.container=cardDiv;
    cardIdP.textContent=card.id;
   
    cardDiv.classList.add("card")
    cardDiv.object = card;

    cardDiv.appendChild(cardIdP);
    cardDiv.appendChild(cardTaskDiv);
    cardDiv.appendChild(addTaskButton);

    //Listeners
    addTaskButton.addEventListener('click',()=>{
       document.querySelectorAll('.card').forEach(cardElement => {
         cardElement.classList.add('toggleCard');
       })
       createAddCardDiv(card);
    });
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
  

    //İnputs
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

    //Edit buttons 

    let editButtons=document.createElement("div")
    editButtons.classList.add("editbuttons")

    let taskSubmitbtn=document.createElement("button")
    taskSubmitbtn.textContent="Submit"
    taskSubmitbtn.classList.add("submit")

    let taskCancelbtn=document.createElement("button")
    taskCancelbtn.textContent="Cancel"
    taskCancelbtn.classList.add("cancel")

    let taskDeletebtn=document.createElement("button")
    taskDeletebtn.textContent="Delete"
    taskDeletebtn.classList.add("delete")

    editButtons.appendChild(taskSubmitbtn)
    editButtons.appendChild(taskCancelbtn)
    editButtons.appendChild(taskDeletebtn)
  



    task.appendChild(editDiv);

    editDiv.classList.add("taskEdit")
    editDiv.appendChild(taskNameIn)
    editDiv.appendChild(taskStartDateIn)
    editDiv.appendChild(taskFinalDateIn)
    editDiv.appendChild(taskInfoIn)
    editDiv.appendChild(taskStatusIn)
    editDiv.appendChild(editButtons)

  }

  let createAddCardDiv = function(card) {
    let addCardDiv = document.createElement('div');
    let name = document.createElement('input');
    let finalDate = document.createElement('input');
    let taskInfo = document.createElement('input');
    let addButton = document.createElement('button');
    addButton.textContent = "Add"
    addCardDiv.classList.add('add-card-div');
    name.placeholder = "name";
    finalDate.placeholder = "final date";
    taskInfo.placeholder = "task info";


    addCardDiv.appendChild(name);
    addCardDiv.appendChild(finalDate);
    addCardDiv.appendChild(taskInfo);
    addCardDiv.appendChild(addButton);
    
    document.body.appendChild(addCardDiv);
    addButton.addEventListener('click',()=>{
      let task = new Task(name.value,finalDate.value,taskInfo.value);
      createTaskDiv(task);
      Controlct.addTaskList(task,card);
      Controlct.createConnection(task,card);
      updateView.domAddTaskCard(task,card);
      document.querySelectorAll('.card').forEach(element =>{
        element.classList.remove('toggleCard');
      })
      document.body.removeChild(addCardDiv);
    })
  }

  return {
    createTaskDiv,
    createCardDiv,
    createEmployeeDiv,
    createEditTask
  }

})()