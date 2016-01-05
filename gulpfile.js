'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
	gulp.src('./scss/anvil.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./docs/css'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./scss/**/*.scss', ['sass']);
});

