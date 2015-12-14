var gulp = require('gulp'),
   notify = require('gulp-notify'),
   run = require('gulp-run'),
   del = require('del');


gulp.task('clean', function() {
  return del(['dist/*']);
});

gulp.task('build', ['clean'], function() {
  run('xelatex -output-directory ../dist/ resume.tex', {cwd: 'src/'}).exec()
    .pipe(gulp.dest('output'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*', ['build']);
});
