app.config(function ($stateProvider) {
    var templateFolder = "app/templates/client/";    
    
    var clientState = {
        name: 'clients',
        url: '/clients',
        templateUrl: templateFolder + "clients.html"
    }
    
    var clientShowState = {
        name: 'clientsShow',
        url: '/clients/{id:int}',
        templateUrl: templateFolder + "clients-show.html"
    }
    
    var clientAddState = {
        name: 'clientsAdd',
        url: '/clients/add',
        templateUrl: templateFolder + "clients-add.html"
    }
    
    var clientEditState = {
        name: 'clientsEdit',
        url: '/clients/edit/{id:int}',
        templateUrl: templateFolder + "clients-edit.html"
    }
    
    var clientInteractionsState = {
        name: 'clientsInteractions',
        url: '/clients/{id:int}/interactions',
        templateUrl: templateFolder + "clients-interactions.html"
    }
    
    $stateProvider.state(clientState);
    $stateProvider.state(clientAddState);
    $stateProvider.state(clientEditState);
    $stateProvider.state(clientShowState);
    $stateProvider.state(clientInteractionsState);
});
