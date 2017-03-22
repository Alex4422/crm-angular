app.factory("clientFactory", ["httpFactory", function (httpFactory) {
        console.log("client factory");

        var clientFactory = {
            client: {},
        };

        clientFactory.setClient = function (client) {
            this.client = client;
        };

        clientFactory.getClientById = function (id) {

            httpFactory.setUrl("client/" + id);
            return httpFactory.request();
        };
        

        clientFactory.insertClient = function () {

        };


        return clientFactory;
    }]);
