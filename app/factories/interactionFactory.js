app.factory("interactionFactory", ["httpFactory", function (httpFactory) {
//        console.log("client factory");

        var interactionFactory = {
        		interaction: {},
        };

        interactionFactory.setInteraction = function (interaction) {
            this.interaction = interaction;
        };

        interactionFactory.getInteractionById = function (id) {

        	httpFactory.setMethod("GET");
            httpFactory.setUrl("interaction/" + id);
            return httpFactory.request();
        };
        
        interactionFactory.deleteById = function (id) {
            httpFactory.setMethod("GET");
            httpFactory.setUrl("interaction/delete/" + id);
            return httpFactory.request();
        };
        
        
        interactionFactory.getAll = function () {
            httpFactory.setUrl("interactions");
            httpFactory.setMethod("GET");
            return httpFactory.request();
        };
        
        interactionFactory.insertInteraction = function (interaction) {
            httpFactory.setUrl("interaction/add");
            httpFactory.setMethod("POST");
            httpFactory.setData(interaction);
            return httpFactory.request();
        };
        
        interactionFactory.updateInteraction = function (interaction) {
            httpFactory.setUrl("interaction/edit/" + interaction.id);
            httpFactory.setMethod("POST");
            httpFactory.setData(interaction);
            return httpFactory.request();
        };
        
        


        return interactionFactory;
    }]);
