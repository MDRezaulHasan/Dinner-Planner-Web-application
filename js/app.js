const model= new DinnerModel();
new SidebarController(model, document.body.querySelector("#sidebar"));
new SummaryController(model, document.body.querySelector("#summary"));
new SearchController(model, document.body.querySelector("#search"));

/*function onModuleChange(payload){
    document.body.textContent=payload.guests;
} */

//model.addObserver(onModuleChange);
/*model.addObserver(function(payload){
    document.body.textContent= payload.guests;
 }); */
//document.body.textContent= model.getNumberOfGuests();
