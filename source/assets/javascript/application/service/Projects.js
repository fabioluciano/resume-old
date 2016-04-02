;(function (application) {
    'use strict';

    application
        .factory('Projects', function($http) {
            var getGithubProjects = function() {
                return $http({
                    url : 'https://api.github.com/users/fabioluciano/repos',
                    method : 'GET'
                });
            }

            return {
                getFromGithub : getGithubProjects
            }
        });

})(application);
