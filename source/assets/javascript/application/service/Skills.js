;(function (application) {
    'use strict';

    application
        .factory('Skills', function($http) {
            var getSkills = function() {
                return $http({
                    url : '/data/skills.json',
                    method : 'GET'
                });
            }

            return {
                getSkills : getSkills
            }
        });

})(application);
