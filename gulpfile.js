// including plugins
var gulp = require("gulp")
var minifyCSS = require("gulp-clean-css")
var autoprefixer = require("gulp-autoprefixer")
var gp_concat = require("gulp-concat")
var gp_rename = require("gulp-rename")
var gp_uglify = require("gulp-uglify")
// var less = require('gulp-less')
var to5 = require("gulp-6to5")
var path = require("path")

gulp.task("css", async function () {
    return gulp
        .src("./public/css/bootstrap.css")
        .pipe(minifyCSS())
        .pipe(autoprefixer("last 2 version", "safari 5", "ie 8", "ie 9"))
        .pipe(gp_concat("style.min.css"))
        .pipe(gulp.dest("./public/dist/css/"))
})

// gulp.task("copy-fonts", function () {
//     return gulp
//         .src(["./public/css/fonts/**"])
//         .pipe(gulp.dest("./public/dist/css/fonts/"))
// })

gulp.task(
    "style",
    gulp.series("css", async function () {}),
)

gulp.task("js", async function () {
    return gulp
        .src([
            "./public/js/jquery.js",
            "./public/js/dropzone.js",
            "./public/js/app.js",
        ])
        .pipe(gp_concat("vendor.min.js"))
        .pipe(gulp.dest("./public/dist/js/"))
        .pipe(gp_rename("vendor.min.js"))
        .pipe(gp_uglify())
        .pipe(gulp.dest("./public/dist/js/"))
})

gulp.task(
    "es6-es5",
    gulp.series("js", async function () {
        return gulp
            .src(["./src/*/**.js", "./src/*/*/**.js", "./src/server-index.js"])
            .pipe(to5())
            .pipe(gulp.dest("./public/dist/es5/"))
    }),
)

gulp.task("watch", async function () {
    gulp.watch(
        ["./src/*/**.js", "./src/*/*/**.js", "./public/js/**.js"],
        ["es6-es5"],
    )
})

gulp.task(
    "prod",
    gulp.series("style", "es6-es5", async function () {}),
)

gulp.task(
    "default",
    gulp.series("es6-es5", "watch", async function () {}),
)
