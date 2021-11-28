

//depemdemcies
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

// ./scss/*.sscs

// ['js/**/*.js', '!js/**/*.min.js']

//Styles tasks
gulp.task('sass', function(){
  return gulp.src('./scss/**/*.scss') // Gets all files ending with .scss in /scss and children dirs
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('./css'))
});


//Gulp Watch syntax has changed from 3.x in 4.x
gulp.task('watch', function() {
  gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});