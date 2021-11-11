const { src, dest, parallel, series, watch } = require ('gulp');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const imagecomp = require('compress-images');
const del = require('del');


function browsersync() {
   browserSync.init({
      server: { baseDir: '.' },
      online: true
   });
}

function scripts() {
   return src([
      'js/script.js'
   ])
   .pipe(concat('script.min.js'))
   .pipe(uglify())
   .pipe(dest('js'))
   .pipe(browserSync.stream());
}

function styles() {
   return src('sass/style.sass')
   .pipe(sass())
   .pipe(concat('style.min.css'))
   .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
   .pipe(cleancss())
   .pipe(dest('css'))
   .pipe(browserSync.stream());
}

async function img() {
	imagecomp(
		"img/src/**/*", // Берём все изображения из папки источника
		"img/dest/", // Выгружаем оптимизированные изображения в папку назначения
		{ compress_force: false, statistic: true, autoupdate: true }, false, // Настраиваем основные параметры
		{ jpg: { engine: "webp", command: false } }, // Сжимаем и оптимизируем изображеня
      { png: { engine: "webp", command: false } },
		{ svg: { engine: "svgo", command: "--multipass" } },
		{ gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
		function (err, completed) { // Обновляем страницу по завершению
			if (completed === true) {
				browserSync.reload();
			}
		}
	);
}

function cleanimg() {
   return del('img/dest/*', { force: true });
}

function startwatch() {
   watch(['sass/**/*.sass', '!css/**/*.min.css'], styles);
   watch(['js/**/*.js', '!js/**/*.min.js', 'sass/**/*sass'], scripts);
   watch('**/*.html').on('change', browserSync.reload);
   watch('img/src/**/*', img);
}

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.img = img;
exports.cleanimg = cleanimg;

exports.default = parallel(styles, scripts, browsersync, startwatch);