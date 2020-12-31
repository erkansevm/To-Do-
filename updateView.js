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
