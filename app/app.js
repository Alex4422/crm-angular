var app = angular.module("crmAngular", ["ui.router"]);


app.config(function ($stateProvider) {
    var templateFolder = "app/templates/";
    
    var homeState = {
        name: 'home',
        url: '/',
        templateUrl: templateFolder + "index.html"
    }

    $stateProvider.state(homeState);
});


