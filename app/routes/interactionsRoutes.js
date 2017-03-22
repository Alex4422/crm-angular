app.config(function ($stateProvider) {
    var templateFolder = "app/templates/interaction/";

    var interactionState = {
        name: 'interactions',
        url: '/interactions',
        templateUrl: templateFolder + "interactions.html"
    }

    $stateProvider.state(interactionState);
});
