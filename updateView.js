const updateView = (()=>{
   const myBody = document.body;
   
   function updateCard(card,employee) {

    card.container.appendChild(employee.container)
    
    card.taskList.forEach(task => {
    let cardTaskLi=document.createElement("div")
    cardTaskLi.appendChild(task.container)
    
    card.container.appendChild(cardTaskLi)
    });
    myBody.appendChild(card.container);
   }

  return{
    updateCard
  }

})();

const eventsFunction = (()=>{

  function createEditDiv(e){
    if(e.target.innerHTML==="Edit"){

      //create edit div
      let task=e.target.parentElement;
      createElement.createEditTask(task)
      task.classList.add("edit-mode")

      //replace change 
      document.querySelector("#submit").addEventListener("click",function(){
      let hand=document.querySelector(".taskEdit")
      task.classList.remove("edit-mode")
      task.removeChild(hand)
    })
  }

}
    return{
    createEditDiv,

  }

})();