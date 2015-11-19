;(function (application) {
    'use strict';

    application
        .controller('ContactController', function($scope, $translate) {
            $translate('BIOGRAPHY').then(function(biography) {
                console.log(biography);
            });
        });

})(application);
