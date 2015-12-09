;(function (application) {
    'use strict';

    application
        .controller('ProjectController', function($scope, Projects) {
            Projects.getFromGithub().then(function(response) {
                $scope.githubProjects = response.data;
            });
        });

})(application);
