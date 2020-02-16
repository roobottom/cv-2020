const { src, dest, watch, series } = require('gulp')
const less = require('gulp-less')
const prince = require('prince')
const util = require('util')

const css = () => {
  return src('./_source/_less/styles.less')
    .pipe(less())
    .pipe(dest('./_site/assets'))
}

const pdf = () => {
  prince()
    .inputs('./_site/index.html')
    .output('./_site/jon-roobottom-cv.pdf')
    .execute()
    .then(function () {
      console.log('PDF generated OK')
    }, function() {
        console.log('PDF generation failed', util.inspect(error))
    })
}


exports.default = (callback) => {
  watch('./_source/_less/**/*.less', { ignoreInitial: false }, css)
  watch('./_site/index.html', pdf)
  callback()
}
exports.build = (callback) => {
  series(css, pdf)
  callback()
}