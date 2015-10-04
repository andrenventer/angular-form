app.controller('NewController', [
    '$scope',
    '$state',
    'API',

    function ($scope, $state, API) {

        $scope.form = {};

        $scope.sendForm = function (form) {
            API.create(form).then(function () {
                $state.go('complete', {form: form});
            });
        };

    }]);