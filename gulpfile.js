const { src, dest, task, series, watch } = require('gulp');
const rm = require( 'gulp-rm' )
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
// const autoprefixer = require('gulp-autoprefixer');
// const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

sass.compiler = require('node-sass');

const styles = [
   'node_modules/normalize.css/normalize.css',
   'src/styles/css/main.scss'
]

const lids = [
   'node_modules/jquery/dist/jquery.js',
   'src/styles/scripts/*.js'
]

task('clean', () => {
   return src('dist/**/*', { read: false }).pipe( rm());
});

task('copy:html', () => {
   return src('src/styles/*.html')
      .pipe(dest('dist'))
      .pipe(reload({ stream: true }));
});

task('styles', () => {
   return src(styles)
      .pipe(sourcemaps.init())
      .pipe(concat('main.min.scss'))
      .pipe(sassGlob())
      .pipe(sass().on('error', sass.logError))
      // .pipe(
      //    autoprefixer({
      //       browsers: ["last 2 versions"],
      //       cascade: true
      //    })
      // )
      // .pipe(gcmq()) 
      .pipe(cleanCSS())
      .pipe(sourcemaps.write())
      .pipe(dest('dist'))
      .pipe(reload({ stream: true }));
});

task('scripts', () => {
   return src(lids)
      .pipe(sourcemaps.init())
      .pipe(concat('main.min.js', {newLine: ';'}))
      // .pipe(
      //    babel({
      //       presets: ['@babel/env']
      //    })
      // )
      // .pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(dest('dist'))
      .pipe(reload({ stream: true }));
});

task('server', () => {
   browserSync.init({
      server: {
         baseDir: "./dist"
      },
      open: true
   });
});

watch('./src/styles/css/*.scss', series('styles'));
watch('./src/styles/*.html', series('copy:html'));
watch('./src/styles/scripts/*.js', series('scripts'));

task('default', series('clean', 'copy:html', 'styles', 'scripts', 'server'));