app.controller("interactionCtrl", ["$scope", "interactionFactory", "$stateParams", function($scope, interactionFactory, $stateParams) {
    console.log("interaction controller");
    
    var interactionId = $stateParams.id;
    
    $scope.listInteractions = [];

    interactionFactory.getAll().then(function(data) {
//        console.log("all", data);
        $scope.listInteractions = data.data;
    });

    if (typeof interactionId != "undefined") {
    	interactionFactory.getInteractionById(interactionId).then(function (data) {
//            console.log("get ", data.data[0]);
            $scope.interaction = data.data[0];
            $scope.interaction.id = interactionId;
        });
    }

    $scope.addInteraction = function () {
        console.log("adding interaction", $scope.interaction);
    	interactionFactory.insertInteraction($scope.interaction).then(function (data) {
//            console.log("insert inte", data);
        });
    };
    
    $scope.updateInteraction = function () {
//        console.log("adding interaction", $scope.interaction);
    	interactionFactory.updateInteraction($scope.interaction).then(function (data) {
//            console.log("update inte", data);
        });
    };
    $scope.deleteInteraction = function(id) {
        if (confirm('Vous etes sur  ?')) {
        	interactionFactory.deleteById(id).then(function(data) {
                console.log("delete", data);
            });                
        }
    };
    
    

}]);

