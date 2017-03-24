app.controller("interactionCtrl", ["$scope", "interactionFactory", "$stateParams", "$state", function($scope, interactionFactory, $stateParams, $state) {
    console.log("interaction controller");
    
    var clientId = $stateParams.id;
    var interactionId = $stateParams.interactionId;
    
    console.log("$state.get()", $state.get("interactionsAdd"));
    
    $scope.listInteractions = [];

    interactionFactory.getAll().then(function(data) {
//        console.log("all", data);
        $scope.listInteractions = data.data;
    });

    if (typeof interactionId != "undefined") {
    	interactionFactory.getInteractionById(interactionId).then(function (data) {
    		console.log("get ", data.data[0]);
            $scope.interaction = data.data[0];
            $scope.interaction.id = interactionId;
        });
    }

    $scope.addInteraction = function () {
        console.log("adding interaction", $scope.interaction);
        if (typeof clientId != "undefined") {
            $scope.interaction.active = (typeof $scope.interaction.active != "undefined");
	        $scope.interaction.client_id = clientId;
	    	interactionFactory.insertInteraction($scope.interaction).then(function (data) {
//	            console.log("insert inte", data);
                    $state.go("clientsInteractions", {id: clientId});
	        });
        }
    };
    
    $scope.updateInteraction = function () {
//        console.log("adding interaction", $scope.interaction);
    	interactionFactory.updateInteraction($scope.interaction).then(function (data) {
    		console.log("update inte", data);
        });
    };
    
    // false $scope.deleteInteraction = function(id) {
    $scope.deleteInteraction = function(interactionId) {
    	if (typeof interactionId != "undefined"){
	    	if (confirm('Vous etes sur  ?')) {
	        	//   false interactionFactory.deleteById(id).then(function(data) {
	        	interactionFactory.deleteById(interactionId).then(function(data) {
	        	//   false  interactionFactory.deleteById(clientId).then(function(data) {
	                console.log("I delete interactionId", data);
	            });                
	    	}
    	}
    };
    
    

}]);

