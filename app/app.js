var app = angular.module("crmAngular", ["ui.router"]);


app.config(function ($stateProvider) {
    var templateFolder = "app/templates/";
    
    var homeState = {
        name: 'home',
        url: '/',
        templateUrl: templateFolder + "index.html"
    }
    var clientState = {
        name: 'clients',
        url: '/clients',
        templateUrl: templateFolder + "clients.html"
    }

    var interactionState = {
        name: 'interactions',
        url: '/interactions',
        templateUrl: templateFolder + "interactions.html"
    }

    $stateProvider.state(homeState);
    $stateProvider.state(clientState);
    $stateProvider.state(interactionState);
});


