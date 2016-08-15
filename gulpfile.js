var gulp = require('gulp')
    ,browserify = require('gulp-browserify')
    ,webserver = require('gulp-webserver')
    ,sass = require("gulp-sass")
;

var src = 'source'
    ,app = 'build'
;

gulp.task('js', function() {
  console.log('building them jsx goodies!');
  return gulp.src( src + '/js/app.js' )
    .pipe(browserify({
      transform: 'reactify',
      debug: true
    }))
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(gulp.dest(app + '/js'));
});


// gulp.task('html', function() {
//   gulp.src( app + '/**/*.html');
// });


gulp.task('sass', function() {
     gulp.src(src + '/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(app + '/css'))
});

gulp.task('watch', function() {
  gulp.watch( src + '/js/**/*', ['js']);
  gulp.watch( src + '/sass/**/*.scss', ['sass']);
  //gulp.watch([ app + '/**/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src( app + '/')
    .pipe(webserver({
        livereload: true,
        open: true
    }));
});

gulp.task('default', ['watch', 'js', 'sass', 'webserver']);
