const updateView = (()=>{
   const myBody = document.body;
   
   function updateCard(card,employee) {
    card.container.appendChild(employee.container)
    
    card.taskList.forEach(task => {
    card.container.appendChild(task.container)
    });
    myBody.appendChild(card.container);
   }

  return{
    updateCard
  }

})();



const eventsFunction = (()=>{

  function createEditDiv(e){
   

      //create edit div
      let task=e.target.parentElement;
      createElement.createEditTask(task)
      task.classList.add("edit-mode")
      
      //replace change 

      document.querySelector("#submit").addEventListener("click",function(){
      let hand=document.querySelector(".taskEdit")
    
      let value=document.getElementById("taskNameIn").value
      e.target.parentElement.object.changeTaskName(value)
      
      let card=e.target.parentElement.parentElement.object
      let employee=e.target.parentElement.parentElement.object.employee
      updateView.updateCard(card,employee)
      console.log(e.target.parentElement.parentElement.object.taskList)


      task.classList.remove("edit-mode")
      task.removeChild(hand)

     
    })

}
    return{
    createEditDiv,

  }

})();