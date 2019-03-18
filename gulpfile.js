var gulp = require('gulp');
// gulp.task('hello',function(){
//     console.log('hello thom!');
// });
var sass = require('gulp-sass');
// gulp.task('sass',function(){
//     return sulp.src('soyrce-file')
//     .pipe(sass())
//     .pipe(gulp.dest('destination'))
// });
gulp.task('sass',function(){
    return gulp.src('app/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});