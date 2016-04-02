;(function (application) {
    'use strict';

    application
        .factory('Accounts', function($http) {
            var getAccounts = function() {
                return $http({
                    url : '/data/accounts.json',
                    method : 'GET'
                });
            }

            return {
                getAccounts : getAccounts
            }
        });

})(application);
