class SummaryView{
    constructor(model, root){
        this.root=root;//the DOM object corresponding to the HTML root element (the DIV) which the view will populate.
        this.model=model;
        model.addObserver(x => this.update(x));
    }
    render(){
        //this.root.innerHTML = `Dinner for <span>${this.model.getNumberOfGuests()}</span> people`;
        h("div",
            h("div", "Dinner for ", this.model.getNumberOfGuests(), " people"),
            h("div","Total price: "+ this.model.getTotalPriceSum(this.model.getIngredients()).toFixed(2)),
            h("div", h("table",{border:"1"},
                h("tr",
                    h("th",{className:"texthead"},"Ingredients"),h("th",{className:"texthead"},"Supermarket Aisle"),h("th",{className:"texthead"},"Amount")),this.model.getIngredients().sort(function(a,b){
                return a.aisle.localeCompare(b.aisle)|| a.name.localeCompare(b.name) // returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.
            }.bind(this)).map(ingrdient=> h("tr",{border:"1"},
                h("td",{className:"td"},ingrdient.name),h("td",{className:"td"},ingrdient.aisle),h("td",{className:"td"},(ingrdient.amount*this.model.getNumberOfGuests()).toFixed(2))))))
        ).render(this.root);
    }
    update(whatHappened){
        this.render();
    }
}
