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
                url: '/complete/:foo?bar',
                templateUrl: './app/complete.html',
                controller: 'CompleteController',
                params: {
                    form: null
                }
            });

        $urlRouterProvider.otherwise('new');

    }]);

