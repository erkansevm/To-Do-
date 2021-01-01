const objectDragHandler = (()=>{

  let changeTaskCard = function(task,card){
     addTaskToCard(task,card);
     console.log(card);
  }

  let deleteTaskFromCard = function (task,card) {
   let index = card.taskList.indexOf(task); 
   card.taskList.splice(index,1);
  }
  
  let addTaskToCard = function (task, card) {
    card.taskList.push(task);
  }
  
  let filterEmployeeByJob = function (job) {
    const cardList = document.body.querySelectorAll('.card');
    const filteredCards = [];
    cardList.forEach(card => {
      if (card.object.employee.job == job) {
        filteredCards.push(card);
      }
       document.body.removeChild(card);
    }
    )
    filteredCards.forEach(card => {
      document.body.appendChild(card);
    })
  }
 
 return{
   changeTaskCard,
   deleteTaskFromCard,
   filterEmployeeByJob
 }
})();