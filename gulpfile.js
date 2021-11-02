/* New Gulpfile format.  Sweet!  */
const { series, dest, run } = require('gulp');

function clean(cb) {
  del(['dist/*']);
  cb();
}

function build(cb) {
  run('xelatex -output-directory ../dist/ resume.tex', {cwd: 'src/'}).exec().pipe(dest('output'));
  cb();
}

exports.build = build;
exports.clean = clean;
exports.default = series(clean, build);
