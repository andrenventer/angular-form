app.config([
    '$stateProvider',
    '$urlRouterProvider',

    function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('new', {
                url: '/new',
                templateUrl: './app/new.html',
                controller: 'NewController'
            })
            .state('complete', {
                url: '/complete',
                templateUrl: './app/complete.html',
                controller: 'CompleteController',
                params: {
                    form: null
                }
            });

        $urlRouterProvider.otherwise('new');

    }]);

