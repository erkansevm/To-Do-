const updateView = (()=>{
   const myBody = document.body;
   
   function updateCard(card) {
     myBody.appendChild(card.container);
   }
})();