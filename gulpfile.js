/// <vs AfterBuild='default' />
var gulp = require('gulp');
var inject = require('gulp-inject');
var wiredep = require('wiredep');
var sources = require('./sources.json');
gulp.task('index', function () {
    var target = gulp.src('./app/index.html');

    wiredep({ src: './app/index.html'});
    return target.pipe(inject(gulp.src(sources, {read: false}), {ignorePath: 'app/', addRootSlash: false}))
        .pipe(gulp.dest('./app/'));
});