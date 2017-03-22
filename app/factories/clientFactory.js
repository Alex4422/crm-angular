app.factory("clientFactory", ["httpFactory", function (httpFactory) {
//        console.log("client factory");

        var clientFactory = {
            client: {},
        };

        clientFactory.setClient = function (client) {
            this.client = client;
        };

        clientFactory.getClientById = function (id) {

            httpFactory.setMethod("GET");
            httpFactory.setUrl("client/" + id);
            return httpFactory.request();
        };
        
        clientFactory.deleteById = function (id) {
            httpFactory.setMethod("GET");
            httpFactory.setUrl("client/delete/" + id);
            return httpFactory.request();
        };
        
        
        clientFactory.getAll = function () {
            httpFactory.setUrl("clients");
            httpFactory.setMethod("GET");
            return httpFactory.request();
        };

        clientFactory.insertClient = function (client) {
            httpFactory.setUrl("client/add");
            httpFactory.setMethod("POST");
            httpFactory.setData(client);
            return httpFactory.request();
        };
        
        clientFactory.updateClient = function (client) {
            httpFactory.setUrl("client/edit/" + client.id);
            httpFactory.setMethod("POST");
            httpFactory.setData(client);
            return httpFactory.request();
        };


        return clientFactory;
    }]);
