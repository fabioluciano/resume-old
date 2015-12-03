;(function (application) {
    'use strict';

    application.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'page/home.html',
                controller: 'ApplicationController'
            })
            .when('/projetos', {
                templateUrl: 'page/projects.html',
                controller: 'ProjectController'
            })
            .when('/solucoes', {
                templateUrl: 'page/solutions.html',
                controller: 'SolutionController'
            })
            .when('/contato', {
                templateUrl: 'page/contact.html',
                controller: 'ContactController'
            })
            .otherwise({
                redirectTo: '/'
            });

            $locationProvider.html5Mode(true);
        }
    );
})(application);
