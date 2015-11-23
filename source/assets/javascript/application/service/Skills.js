;(function (application) {
    'use strict';

    application
        .factory('Skills', function($http) {
            $http.get('/data/skills.json');
        });

})(application);
