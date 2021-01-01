const objectDragHandler = (()=>{

  let changeTaskCard = function(taskId,newCardId){
     addTaskToCardList(taskId,newCardId);
     console.log("girdim");
  }
  


  let deleteTaskFromCard = function (task,card) {
    console.log(card.taskList);
   console.log(card.taskList.indexOf(task)); 
  }
  




 
 return{
   changeTaskCard,
   deleteTaskFromCard
 }
})();