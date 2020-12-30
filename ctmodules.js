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

