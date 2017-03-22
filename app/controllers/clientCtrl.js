app.controller("clientCtrl", ["$scope", "clientFactory", function($scope, clientFactory) {
//    console.log("client controller");
    
    var client = clientFactory.getClientById(1).then(function(data) {
        console.log("get client id",data);
    });
    
    
    
    
    $scope.addClient = function() {
       console.log("adding client", $scope.client);
       clientFactory.insertClient($scope.client).then(function(data) {
           console.log("insert client", data);
       });
    };
}]);
