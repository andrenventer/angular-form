app.factory('API', [
    '$http',

    function ($http) {

        var url = 'http://think-a-doo.net/ThinkadooAdmin/api/form/';

        var apiObject = {};

        apiObject.create = function (form) {
            return $http.post(url, form).success(function (data) {
                return data;
            });
        };

        return apiObject;

    }]);
