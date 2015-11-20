;(function (application) {
    'use strict';

    application.config(function($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'data/',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('pt_br');
        $translateProvider.useSanitizeValueStrategy('escapeParameters');
        $translateProvider.useLocalStorage();
    });
})(application);
