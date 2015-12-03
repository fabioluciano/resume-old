;(function (application) {
    'use strict';

    application.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
<<<<<<< HEAD
                templateUrl: 'page/home.html',
=======
                templateUrl: 'page/skills.html',
>>>>>>> d9b209821bf96103b957d19f3805c9d1562ef2f2
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
