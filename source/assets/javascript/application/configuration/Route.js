;(function (application) {
    'use strict';

    application.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'page/home.html',
                controller: 'ApplicationController'
            })
            .when('/habilidades', {
                templateUrl: 'page/skills.html',
                controller: 'SkillsController'
            })
            .when('/projetos', {
                templateUrl: 'page/projects.html',
                controller: 'ProjectsController'
            })
            .when('/solucoes', {
                templateUrl: 'page/solutions.html',
                controller: 'SolutionsController'
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
