class SearchController{
    constructor(model, root){
        //new SearchView(model,root).render();
        const view= new SearchView(model,root);
        view.render();
        const searchButton=document.getElementById("searchButton")
        searchButton.addEventListener("click", function(event){
            view.updateSearchResults()
        });

        root.addEventListener("click", function(event){
            console.log(event.target);
            var clikedDish=view.isDishRepresentation(event.target);
            if(clikedDish){
                return model.getDishDetails(clikedDish)
                .then(dish=>model.addToMenu(dish));
            }
        });
    }

}
