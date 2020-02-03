const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')

const compile_css = () => {
  return src('./_source/_sass/styles.scss')
    .pipe(sass())
    .pipe(dest('./_site/assets'))
}
exports.default = (callback) => {
  watch('./_source/_sass/**/*.scss', { ignoreInitial: false }, compile_css)
  callback()
}
exports.build = series(compile_css)