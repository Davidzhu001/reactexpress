var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');



gulp.task('live-server', function(){

  var server = new LiveServer('server/main.js');
  server.start();

})

gulp.task('bundle', function(){
  return browserify({
    entries:'app/main.jsx',
    debug: true,
  })
  .transform(reactify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./.tmp'));
})
gulp.task('serve', ['live-server'], function(){

  browserSync.init(null, {
    proxy:"http://localhost:3000",
    port: 9001
  });
})
