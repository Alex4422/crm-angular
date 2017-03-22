app.factory("httpFactory", ["$q", "$http", function ($q, $http) {
        var httpFactory = {
            baseUrl: "http://172.16.14.91:8888/",
            method: "GET",
            data: {},
            response: {
                valid: false,
                message: "Une Erreur s'est produite",
            },
        };
        var response = {
            valid: false,
            message: "Une erreur ",
            data: [],
        };

        httpFactory.setUrl = function (sUrl) {
            this.url = this.baseUrl + sUrl;
        };
        httpFactory.setMethod = function (sMethod) {
            this.method = sMethod;
        };
        
        httpFactory.setData = function (data) {
            this.data = data;
        };

        httpFactory.request = function () {
            var _this = this;
            if (typeof _this.url == "undefined") {
                console.log("veuillez indiquer l'url à appeler");
                return "Veuillez indiquer l'url à appeler";
            }
//            console.log(_this.data);

            return $q(function(resolve, reject) {
                $http({
                    method: _this.method,
                    url: _this.url,
                    data: _this.data,
                    headers: {
                        'Content-Type': "application/json",
                        'Accept' : 'application/json',
                      },
                }).then(function successCallback(response) {
//                    console.log("response", response.data);
                    _this.response.valid = response.data.valid;
                    _this.response.message = response.data.message;
                    _this.response.data = response.data.data;
                    _this.response.queryResponse = response;
                    
                    return resolve(_this.response);
                    
                    resolve('Hello, ' + name + '!');
                }, function errorCallback(response) {
//                    console.log("response", response);
                    _this.response.valid = false;
                    _this.response.message = "Erreur lors de la requête";
                    _this.response.queryResponse = response;
                    
                    return reject(_this.response);
                });
                
            });

            
        };



        return httpFactory;

    }]);
