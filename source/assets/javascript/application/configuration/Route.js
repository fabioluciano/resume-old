;(function (application) {
    'use strict';

    application.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/credencial', {
                templateUrl: 'credencial',
                controller: 'IndexCredencialController'
            })
            .otherwise({
                redirectTo: '/'
            });

            $locationProvider.html5Mode(true);
        }
    );
})(application);
