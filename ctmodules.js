var Controlct = (() => {

    function addTaskList(task,card){
        card.taskList.push(task)
    }

    function deleteList(task,card){
        let hand=card.taskList.indexOf(task)
        card.taskList.splice(hand,1)
        
    }
    return {
        addTaskList,
        deleteList

    };

})();



let card1=new Card("Furkan",1)

let task1=new Task("Design","2/1/21","Tasarım kısmı halledielecek")

let task2=new Task("Design","2/1/22","Tasarım kısmı halledielecek")
task2.changeTask("Tasarım","20/1/2021","Tasarım yapılacak")
task2.changeTask("sex")
Controlct.addTaskList(task2,card1)
Controlct.addTaskList(task1,card1)
Controlct.deleteList(task1,card1)

console.log(card1)