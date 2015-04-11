var gulp = require('gulp'),
	wiredep = require('wiredep').stream,
	prefix = require('gulp-autoprefixer'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect');

gulp.task('bower', function () {
  gulp.src('./app/index.html')
    .pipe(wiredep({
      directory : "app/bower/"
    }))
    .pipe(gulp.dest('./app'));
});

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

//watch
gulp.task('watch', function () {
	gulp.watch('bower.json', ['bower'])
	gulp.watch('./app/css/*.css', ['css'])
  gulp.watch('./app/js/*.js', ['js'])
	gulp.watch(['./app/*.html'], ['html']);
})
//default
gulp.task('default', ['connect', 'watch'])