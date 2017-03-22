app.controller("clientCtrl", ["$scope", "clientFactory", "$stateParams", function ($scope, clientFactory, $stateParams) {
        var clientId = $stateParams.id;
//        console.log("$stateParams", clientId);
        
        $scope.listClients = [];
        
        
        clientFactory.getAll().then(function(data) {
//            console.log("all", data);
            $scope.listClients = data.data;
        });

        if (typeof clientId != "undefined") {
            clientFactory.getClientById(clientId).then(function (data) {
//                console.log("get client id", data.data[0]);
                $scope.client = data.data[0];
                $scope.client.id = clientId;
            });
        }

        $scope.addClient = function () {
//            console.log("adding client", $scope.client);
            clientFactory.insertClient($scope.client).then(function (data) {
//                console.log("insert client", data);
            });
        };
        
        $scope.updateClient = function () {
//            console.log("adding client", $scope.client);
            clientFactory.updateClient($scope.client).then(function (data) {
//                console.log("update client", data);
            });
        };
        $scope.deleteClient = function(id) {
            if (confirm('T\'es sur morray ?')) {
                clientFactory.deleteById(id).then(function(data) {
                    console.log("delete", data);
                });                
            }
        };
        
       
    }]);
