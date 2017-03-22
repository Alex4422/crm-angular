app.config(function ($stateProvider) {
    var templateFolder = "app/templates/client/";    
    
    var clientState = {
        name: 'clients',
        url: '/clients',
        templateUrl: templateFolder + "clients.html"
    }
    
    var clientAddState = {
        name: 'clientsAdd',
        url: '/clients/add',
        templateUrl: templateFolder + "clients-add.html"
    }
    
    $stateProvider.state(clientState);
    $stateProvider.state(clientAddState);
});
