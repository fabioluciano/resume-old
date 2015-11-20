;(function (application) {
    'use strict';

    application.config(function($translateProvider) {
        $translateProvider
            .useStaticFilesLoader({
                prefix: 'data/',
                suffix: '.json'
            })
            .determinePreferredLanguage()
            .useSanitizeValueStrategy('escapeParameters')
            .fallbackLanguage('pt_BR');
    });
})(application);
