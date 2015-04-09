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
    livereload: true
  });
});

gulp.task('css', function () {
	gulp.src('css/*.css')
    .pipe(prefix('last 2 versions', '> 1%', 'ie 8'))
    .pipe(connect.reload());
        
});

//html
gulp.task('html', function () {
	gulp.src('app/index.html')
	.pipe(connect.reload());
})

//watch
gulp.task('watch', function () {
	gulp.watch('bower.json', ['bower']);
	gulp.watch('css/*.css', ['css']);
	gulp.watch('app/index.html', ['css']);
})
//default
gulp.task('default', ['connect', 'html', 'css', 'watch']);