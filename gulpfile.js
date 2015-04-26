var gulp = require('gulp'),
	wiredep = require('wiredep').stream,
	livereload = require('gulp-livereload'),
  useref = require('gulp-useref'),
  gulpif = require('gulp-if'),
  uglify = require('gulp-uglify'),
  minifyCss = require('gulp-minify-css'),
  clean = require('gulp-clean'),
  sftp = require('gulp-sftp'),
	connect = require('gulp-connect');

// build project
gulp.task('build', ['clean'], function () {
  var assets = useref.assets();

  gulp.src('./app/*.*')
    .pipe(assets)
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('dist'));
});
  
// auto adding files
gulp.task('bower', function () {
  gulp.src('./app/index.html')
    .pipe(wiredep({
      directory : "app/bower/"
    }))
    .pipe(gulp.dest('./app'));
});

//clear
gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

//upload files
// gulp.task('sftp', function () {
//     return gulp.src('dist/**/*')
//         .pipe(sftp({
//             host: '',
//             user: 'johndoe',
//             pass: '1234'
//         }));
// });


//connect to server
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port: 8888
  
  });
});

//css
gulp.task('css', function () {
	gulp.src('./app/css/*.css')
  .pipe(connect.reload());
        
});

//html
gulp.task('html', function () {
	gulp.src('./app/*.html')
	.pipe(connect.reload());
});

//js
gulp.task('js', function () {
  gulp.src('./app/js/*.js')
  .pipe(connect.reload());
});

//php
gulp.task('php', function () {
  gulp.src('./app/php/*.php')
  .pipe(connect.reload());
        
});
//watch
gulp.task('watch', function () {
	gulp.watch('bower.json', ['bower'])
  gulp.watch('./app/css/*.css', ['css'])
  gulp.watch('./app/js/*.js', ['js'])
  gulp.watch(['./app/php/*.php'], ['php'])
	gulp.watch(['./app/*.html'], ['html']);

})
//default
gulp.task('default', ['connect', 'watch', 'bower'])