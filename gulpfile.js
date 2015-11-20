(function () {
    'use strict';

    // Libraries to import
    var gulp = require('gulp'),
        bower = require('gulp-bower'),
        library = require('bower-files')(),
        jshint = require('gulp-jshint'),
        concat = require('gulp-concat'),
        rimraf = require('rimraf'),
        uglify = require('gulp-uglify'),
        jsonminify = require('gulp-jsonminify'),
        ngAnnotate = require('gulp-ng-annotate'),
        less = require('gulp-less'),
        jade = require('gulp-jade'),
        stylish = require('jshint-stylish'),
        CleanCSS = require('less-plugin-clean-css'),
        directory = require('./gulp/directory');

    // Install dependencies
    gulp.task('bower', function () {
        return bower({ cmd : 'install'});
    });

    // Concat all vendor javascript files, removes the debug informations and
    // reruns the uglify on minimified files
    gulp.task('javascript-vendor', ['dependencies'], function () {
        return gulp.src(library.ext('js').files)
            .pipe(concat('vendor.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest(directory.target.javascript));
    });

    // Concat all application javascript files, removes the debug informations and
    // reruns the uglify on minimified files
    gulp.task('javascript-application', ['dependencies'], function () {
        var javascript = [
            directory.source.javascript + 'application.js',
            directory.source.javascript + 'application/configuration/**/*',
            directory.source.javascript + 'application/filter/**/*',
            directory.source.javascript + 'application/service/**/*',
            directory.source.javascript + 'application/controller/**/*',
        ];

        return gulp.src(javascript)
            .pipe(concat('application.min.js'))
            .pipe(ngAnnotate({
                single_quotes : true
            }))
            .pipe(uglify())
            .pipe(gulp.dest(directory.target.javascript));
    });

    // Check for inconsistences of javascript application files
    gulp.task('jshint', ['build'], function () {
        return gulp.src(directory.target.javascript + 'application.js')
            .pipe(jshint())
            .pipe(jshint.reporter(stylish));
    });

    // Compile LESS files on css files
    gulp.task('stylesheet-vendor', ['dependencies'], function () {
        return gulp.src(directory.source.less + 'vendor.less')
            .pipe(less({
                plugins: [new CleanCSS({advanced: true})]
            }))
            .pipe(gulp.dest(directory.target.stylesheet));
    });

    gulp.task('stylesheet-application', function () {
        return gulp.src(directory.source.less + 'application.less')
            .pipe(less({
                plugins: [new CleanCSS({advanced: true})]
            }))
            .pipe(gulp.dest(directory.target.stylesheet));
    });

    gulp.task('install-fonts', function () {
        var fontDirectory = [
            'resources/assets/bower/fontawesome/fonts/*',
            'resources/assets/bower/bootswatch-dist/fonts/*'
        ];

        return gulp.src(fontDirectory)
            .pipe(gulp.dest(directory.target.assets + 'fonts'));
    });

    gulp.task('copy-data', function() {
        return gulp.src(directory.source.javascript + 'application/i18n/*.json')
            .pipe(jsonminify())
            .pipe(gulp.dest(directory.target.root + 'data'));
    });

    gulp.task('template',  function() {
        return gulp.src(directory.source.jade + '**/*.jade')
            .pipe(jade({pretty : true}))
            .pipe(gulp.dest(directory.target.root))
    });

    gulp.task('watch-template', function () {
        var watcher = gulp.watch(directory.source.jade + '**/*.jade', ['template']);

        watcher.on('change', function(event) {
            console.log('Rodando novamente!');
        });
    });

    gulp.task('watch-dependencies-bower', function () {
        var watcher = gulp.watch('bower.json', ['bower', 'javascript-vendor', 'stylesheet-vendor']);

        watcher.on('change', function(event) {
            gulp.src('bower.json');
        });
    });

    gulp.task('watch-javascript', function () {
        var watcher = gulp.watch(directory.source.javascript + '**/*.js', ['javascript-application']);

        watcher.on('change', function(event) {
            gulp.src('gulpfile.js');
        });
    });

    gulp.task('watch-stylesheet', function () {
        var watcher = gulp.watch(directory.source.less + '**/*', ['stylesheet-application']);

        watcher.on('change', function(event) {
            gulp.src('gulpfile.js');
        });
    });

    gulp.task('default', ['dependencies', 'build', 'lint', 'watch']);
    gulp.task('dependencies', ['bower']);
    gulp.task('build', ['javascript', 'stylesheet', 'template', 'copy-data']);
    gulp.task('javascript', ['javascript-vendor', 'javascript-application']);
    gulp.task('stylesheet', ['stylesheet-vendor', 'stylesheet-application', 'install-fonts']);
    gulp.task('lint', ['jshint']);
    gulp.task('watch', ['watch-dependencies-bower', 'watch-javascript', 'watch-stylesheet', 'watch-template']);
}());
