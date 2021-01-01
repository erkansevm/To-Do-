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