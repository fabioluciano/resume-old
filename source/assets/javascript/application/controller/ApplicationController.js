;(function (application) {
    'use strict';

    application
        .controller('ApplicationController', function($scope, $translate) {
            $translate('BIOGRAPHY').then(function(biography) {
                console.log(biography);
            });
        });

})(application);
