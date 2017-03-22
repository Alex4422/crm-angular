app.config(function ($stateProvider) {
    var templateFolder = "app/templates/interaction/";

    var interactionState = {
        name: 'interactions',
        url: '/interactions',
        templateUrl: templateFolder + "interactions.html"
    }
    
    var interationAddState = {
            name: 'interactionsAdd',
            url: '/interactions/add',
            templateUrl: templateFolder + "interactions-add.html"
        }

    $stateProvider.state(interactionState);
    $stateProvider.state(interactionAddState);
});
