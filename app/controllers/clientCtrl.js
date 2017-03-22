app.controller("clientCtrl", ["$scope", "clientFactory", function($scope, clientFactory) {
    console.log("client controller");
    
    var client = clientFactory.getClientById(1).then(function(data) {
//        console.log(data);
    });
    
    
//    $scope.addClient = function() {
////        clientFactory
//       console.log("adding client", $scope.client);
//    };
}]);
