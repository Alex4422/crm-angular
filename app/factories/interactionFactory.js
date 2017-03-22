/*app.factory("interactionFactory", ["httpFactory", function(httpFactory) {
    console.log("interactionFactory");
    var interactionFactory = {};
    return interactionFactory;
}]); */


app.factory("interactionFactory", ["httpFactory", function (httpFactory) {
//        console.log("client factory");

        var interactionFactory = {
        		interaction: {},
        };

        interactionFactory.setInteraction = function (interaction) {
            this.interaction = interaction;
        };

        interactionFactory.getInteractionById = function (id) {

            httpFactory.setUrl("interaction/" + id);
            return httpFactory.request();
        };
        

        interactionFactory.insertInteraction = function (interaction) {
            httpFactory.setUrl("interaction/add");
            httpFactory.setMethod("POST");
            httpFactory.setData(interaction);
            return httpFactory.request();
        };


        return interactionFactory;
    }]);
