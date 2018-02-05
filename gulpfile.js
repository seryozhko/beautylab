const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

gulp.task('sass', () => gulp.src(['src/scss/*.scss'])
  .pipe(sass())
  .pipe(gulp.dest('public/css'))
  .pipe(browserSync.stream()));

gulp.task('serve', () => {
  browserSync.init({ server: './public' });
  gulp.watch('src/scss/*.scss').on('change', gulp.series('sass', browserSync.reload));
  gulp.watch('public/*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('sass', 'serve'));