let {
    src,
    dest
} = require('gulp'),
    gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCss = require('gulp-clean-css'),
    groupMedia = require('gulp-group-css-media-queries'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    htmlMin = require('gulp-htmlmin'),
    concat = require('gulp-concat'),
    htmlhint = require('gulp-htmlhint'),
    imagemin = require('gulp-imagemin'),
    webp = require('gulp-webp'),
    webpHtml = require('gulp-webp-html'),
    uglify = require('gulp-uglify-es').default;


function clean() {
    return del('./dist/')
}

function reloadBrowser() {

    browserSync.init({
        server: {
            baseDir: './dist/'
        },
        port: 3000,
        online: true
    })

}

function css() {
    return src('#src/scss/style.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(groupMedia())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 versions'],
            cascade: true
        }))
        .pipe(dest('dist/css/'))
        .pipe(cleanCss())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(dest('dist/css/'))
        .pipe(browserSync.stream())
}

function html() {
    return src('#src/*.html')
        .pipe(htmlhint())
        .pipe(webpHtml())
        .pipe(dest('dist/'))
        .pipe(htmlMin())
        .pipe(dest('dist/'))
        .pipe(browserSync.stream())
}

function js() {
    return src('#src/js/main.js')
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(dest('dist/js'))
        .pipe(browserSync.stream())
}

function image() {
    return src('#src/images/**/*.{jpg,svg,png,gif,ico,webp}')
        .pipe(webp({
            quality: 80
        }))
        .pipe(dest('dist/images/'))
        .pipe(src('#src/images/**/*.{jpg,svg,png,gif,ico,webp}'))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: true
            }],
            interlaced: true,
            optimizationLevel: 3
        }))
        .pipe(dest('dist/images/'))
        .pipe(browserSync.stream())
}

function scripts() {
    return src([
            'node_modules/swiper/swiper-bundle.min.js'
        ])
        .pipe(concat('libs.min.js'))
        .pipe(dest('dist/js'))
}

function styles() {
    return src([
            'node_modules/normalize.css/normalize.css',
            'node_modules/swiper/swiper-bundle.min.css'
        ])
        .pipe(concat('_libs.scss'))
        .pipe(dest('#src/scss/'))
}

function watchFiles() {
    gulp.watch(['#src/*.html'], html)
    gulp.watch(['#src/scss/**/*.scss'], css)
    gulp.watch(['#src/js/**/*.js'], js)
    gulp.watch(['#src/images/**/*.{jpg,svg,png,gif,ico,webp}'], image)
}

let build = gulp.series(clean, gulp.parallel(html, css, js, scripts, styles, image))
let watch = gulp.parallel(build, watchFiles, reloadBrowser)

exports.css = css
exports.html = html
exports.js = js
exports.styles = styles
exports.scripts = scripts
exports.image = image
exports.build = build
exports.default = watch
exports.watch = watch