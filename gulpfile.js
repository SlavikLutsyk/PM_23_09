const { src, dest, watch, series } = require ("gulp");
const gulp = require("gulp");
const concat = require ("gulp-concat");
//const sass = require ("gulp-sass");
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require ("gulp-autoprefixer");
const cssnano = require ("gulp-cssnano");
const rename = require ("gulp-rename");
const uglify = require ("gulp-uglify");
const pump = require ("pump");
const imagemin = require ("gulp-imagemin");
const clean = require('gulp-clean');
const browserSync =require("browser-sync").create();
var reload = browserSync.reload;
//копіювання HTML файлів в папку dist
function html_task(cb){
    pump([
        gulp.src( "app/*.html"),
        gulp.dest( "dist")
    ],
    cb);
}
exports.html = html_task;
//(У консолі прописуємо: gulp html)
//об'єднання, компіляція Sass в CSS, додавання префіксів і подальша мінімізація коду
function sass_task(cb){
    pump([
        gulp.src ( "app/sass/*.sass"),
        concat ( 'styles.sass'),
        sass (),
        autoprefixer ({
        overrideBrowserslist: [ 'last 2 versions'],
        cascade: false
        }),
        cssnano (),
        rename ({suffix: '.min'}),
        gulp.dest ( "dist/css/")
    ],
    cb
    );
}
//gulp.task('sass', sass_task);
exports.sass = sass_task;
//об'єднання і стиснення JS-файлів
function script_task(cb) {
    pump([
          gulp.src("app/js/*.js"),
          concat ( 'scripts.js'),
          uglify(),
          rename({suffix: '.min'}),
          gulp.dest('dist/js/')
      ],
      cb
    );
  }   
//gulp.task("scripts", script_task);
exports.scripts = script_task;
function img_task(cb){
    pump([
        gulp.src("app/img/*.+(jpg|jpeg|png|gif)"),
        imagemin ({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true
        }),
        gulp.dest("dist/images/")
    ],
    cb
    );
}
//gulp.task("imgs",img_task);
exports.imgs = img_task;
   //(У консолі прописуємо: gulp imgs)
   //відстежування за змінами у файлах
function watching() {
    // Serve files from the root of this project
    browserSync.init({
        server: "./app"
    });
    gulp.watch("app/*.html").on("change", reload);
    gulp.watch("app/js/*.js").on("change", reload);
    gulp.watch("app/css/*.css").on("change", reload);
    gulp.watch("app/sass/*.sass").on("change", reload);
    gulp.watch("app/images/*.+(jpg | jpeg | png | gif)").on("change", reload);
    watch ( "app/*.html",  html_task);
    watch ( "app/js/*.js",  script_task);
    watch ( "app/sass/*.sass",  sass_task);
    watch ( "app/images/*.+(jpg | jpeg | png | gif)", img_task);
}
//gulp.task('serve', watching);
exports.watch = watching;
gulp.task('clean', function(cb){
    pump([
        gulp.src("dist/*", {read : false}),
        clean()
    ],
    cb);
});
   //(У консолі прописуємо: gulp watch)
   //Запуск тасків за замовчуванням
   exports.default = series(html_task,sass_task,script_task,img_task,watching);
   