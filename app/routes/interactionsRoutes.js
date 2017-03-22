app.config(function ($stateProvider) {
    var templateFolder = "app/templates/interaction/";

    var interactionState = {
        name: 'interactions',
        url: '/interactions',
        templateUrl: templateFolder + "interactions.html"
    }
    
    var interactionShowState = {
            name: 'interactionsShow',
            url: '/interactions/{id:int}',
            templateUrl: templateFolder + "interactions-show.html"
        }
    
    var interactionAddState = {
            name: 'interactionsAdd',
            url: '/interactions/add',
            templateUrl: templateFolder + "interactions-add.html"
        }
    
    var interactionEditState = {
            name: 'interactionsEdit',
            url: '/interactions/edit/{id:int}',
            templateUrl: templateFolder + "interactions-edit.html"
        }

    $stateProvider.state(interactionState);
    $stateProvider.state(interactionShowState);
    $stateProvider.state(interactionAddState);
    $stateProvider.state(interactionEditState);

});
