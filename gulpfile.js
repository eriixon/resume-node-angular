"use strict";

let gulp = require('gulp'),
    jshint = require('gulp-jshint'), /*done*/
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),/*done*/
    jsmin = require('gulp-jsmin'),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css');/*done*/

gulp.task('default',['minify-css','minify-js'], function() {
    console.log("Done!");
});

gulp.task('jshintTask', function() {
    return gulp.src('public/app/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
});
gulp.task('minify-css',['concat-css'], function() {
    return gulp.src('public/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('public'));
});
gulp.task('concat-css', function () {
  return gulp.src('public/asset/css/*.css')
    .pipe(concatCss('public/index.css'))
    .pipe(gulp.dest(''));
});

gulp.task('scripts', function() {
  return gulp.src('public/app/*.js')
    .pipe(concat('public/index.js'))
    .pipe(gulp.dest(''));
});
gulp.task('minify-js',['scripts'], function () {
    gulp.src('public/*.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(''));
});