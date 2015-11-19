;(function (application) {
    'use strict';

    application.config(function($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'data/data-',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('pt_br');
        $translateProvider.useSanitizeValueStrategy('sanitize');
        $translateProvider.useLocalStorage();
    });
})(application);
