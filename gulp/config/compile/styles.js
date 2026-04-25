const
  gulp = require('gulp'),
  cssImport = require('gulp-cssimport'),
  sass = require('sass'),
  gulpSass = require('gulp-sass')(sass),
  $ = require('gulp-load-plugins')();

gulp.task('styles', function () {
  return gulp.src('app/styles/*.scss')
    .pipe($.plumber())
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(cssImport())
    .pipe(gulp.dest('public/styles'));
});
