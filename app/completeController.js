app.controller('CompleteController', [
    '$scope',
    '$state',
    '$stateParams',

    function ($scope, $state, $stateParams) {

        $scope.form = $stateParams.form;

    }]);