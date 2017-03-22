/*app.controller("interactionCtrl", ["$scope", function($scope) {
        console.log("interaction controller");
}]);*/

app.controller("interationCtrl", ["$scope", "interactionFactory", function($scope, interactionFactory) {
    console.log("interaction controller");
    
    var client = interactionFactory.getInteractionById(1).then(function(data) {
//        console.log(data);
    });
    
    
//    $scope.addClient = function() {
////        clientFactory
//       console.log("adding client", $scope.client);
//    };
}]);

