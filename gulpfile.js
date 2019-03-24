var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');


// Copy All HTML files
gulp.task('copyHtml', function() {
  gulp.src('src/*.html')
    // .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

// Optimize Images
gulp.task('imageMin', () =>
  gulp.src(['src/img/*','src/img/*/*','src/img/*/*/*'])
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img'))
);


// Minify JS
gulp.task('minify', function() {
  gulp.src(['src/js/*.js','src/js/*/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Compile Sass
gulp.task('sass', function() {
  gulp.src('src/scss/*.css')
  // .pipe(concat('main.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('dist/css'));
});

// Scripts
gulp.task('scripts', function() {
  gulp.src(['src/js/*.js','src/js/*/*.js'])
    // .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));



});


gulp.task('default', ['copyHtml', 'imageMin', 'sass', 'scripts' ]);

gulp.task('watch', function() {
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/img/*', ['imageMin']);
  gulp.watch('src/sass/*.css', ['sass']);
  gulp.watch('src/*.html', ['copyHtml']);
});
