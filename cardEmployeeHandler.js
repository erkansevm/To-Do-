
const cardEmployeeHandler = (() =>{
    const createConnection = function(card,employee) {
      card.employee = employee;
      employee.card = card;
    }

    const deleteConnection = function(card,employee) {
      card.employee = undefined;
      employee.card =undefined;
    }
    
    const changeConnection = function(card,employee){
      if (card.employee != undefined) {
         deleteConnection(card,employee);
         createConnection(card,employee);
      }else{
          createConnection(card,employee);
      }
    }
     

    return{
      createConnection,
      deleteConnection,
      changeConnection
    }
})();



