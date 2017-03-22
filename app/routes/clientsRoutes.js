app.config(function ($stateProvider) {
    var templateFolder = "app/templates/client/";    
    
    var clientState = {
        name: 'clients',
        url: '/clients',
        templateUrl: templateFolder + "clients.html"
    }

    $stateProvider.state(clientState);
});
