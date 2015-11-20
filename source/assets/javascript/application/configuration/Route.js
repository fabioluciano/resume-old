;(function (application) {
    'use strict';

    application.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'page/home.html',
                controller: 'ApplicationController'
            })
            .when('/habilidades', {
                templateUrl: 'page/habilidades.html',
                controller: 'HabilidadesController'
            })
            .when('/projetos', {
                templateUrl: 'page/projetos.html',
                controller: 'ProjetosController'
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
