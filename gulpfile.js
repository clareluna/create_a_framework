var gulp = require('gulp');
var jshit = require('gulp-jshint');
var gulpMocha = require('gulp-mocha');

gulp.task('jshint', function() {
	return gulp.src(['server.js', 'test/*.js', 'lib/*.js']).pipe(jshint()).pipe(jshint.reporter('default'))
});

gulp.task('test', function() {
	return gulp.src('test/*.js').pipe(gulpMocha());
});

gulp.task('default', ['jshint', 'test']);