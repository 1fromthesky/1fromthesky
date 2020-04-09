const { src, dest, task, series, watch, parallel } = require("gulp");
const rm = require( "gulp-rm" )
const sass = require("gulp-sass");
sass.compiler = require("node-sass");
const sassGlob = require("gulp-sass-glob");
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;
// const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const gulpif = require("gulp-if");
const uglify = require("gulp-uglify");
const {DIST_PATH, SRC_PATH, STYLES_LIBS, JS_LIBS} = require("./gulp.config")
const env = process.env.NODE_ENV;

const toClean = [
   "${DIST_PATH}/*.html",
   "${DIST_PATH}/*.css",
   "${DIST_PATH}/*.js"
];

task("clean", () => {
   return src(toClean, { read: false }).pipe( rm());
});

task("copy:html", () => {
   return src(`${SRC_PATH}/*.html`)
      .pipe(dest(DIST_PATH))
      .pipe(reload({ stream: true }));
});

task("styles", () => {
   return src([...STYLES_LIBS, "src/css/main.scss"])
      .pipe(gulpif(env == "dev", sourcemaps.init()))
      .pipe(concat("main.min.scss"))
      .pipe(sassGlob())
      .pipe(sass().on("error", sass.logError))
      // .pipe(
      //    autoprefixer({
      //       browsers: ["last 2 versions"],
      //       cascade: true
      //    })
      // )
      .pipe(gulpif(env == "prod", cleanCSS()))
      .pipe(gulpif(env == "dev", sourcemaps.write()))
      .pipe(dest(DIST_PATH))
      .pipe(reload({ stream: true }));
});

task("scripts", () => {
   return src([...JS_LIBS, "src/scripts/*.js"])
      .pipe(gulpif(env == "dev", sourcemaps.init())) 
      .pipe(concat("main.min.js", {newLine: ";"}))
      .pipe(gulpif(env == "prod",
         babel({
            presets: ["@babel/env"]
         })
      ))
      .pipe(gulpif(env == "prod", uglify()))
      .pipe(gulpif(env == "dev", sourcemaps.write()))
      .pipe(dest(DIST_PATH))
      .pipe(reload({ stream: true }));
});

task("server", () => {
   browserSync.init({
      server: {
         baseDir: "./dist"
      },
      open: true
   });
});

task("watch", () => {
   watch("./src/*.html", series("copy:html"));
   watch("./src/css/**/*.scss", series("styles"));
   watch("./src/scripts/*.js", series("scripts"));
});

task("default",
   series(
   "clean", 
   parallel("copy:html", "styles", "scripts"), 
   parallel("watch", "server"))
);

task(
   "build",
   series("clean", parallel("copy:html", "styles", "scripts")) 
);