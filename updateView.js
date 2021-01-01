const updateView = (()=>{
   const myBody = document.body;
   
   function updateCard(card,employee) {
    card.container.insertBefore(employee.container,card.container.lastElementChild);
    
    card.taskList.forEach(task => {
    card.container.insertBefore(task.container,card.container.lastElementChild);
    });
    myBody.appendChild(card.container);
   }
   
   function domAddTaskCard(task,card) {
     card.container.insertBefore(task.container,card.container.lastElementChild);
   }

  return{
    updateCard,
    domAddTaskCard
  }

})();