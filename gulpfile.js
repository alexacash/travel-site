var gulp  = require('gulp');
    watch = require('gulp-watch');

gulp.task('default', function(){
	console.log("hooooray, gulp");
});

gulp.task('html', function(){
	console.log("something USEFUL");
});

gulp.task('watch', function(){

	watch('./app/index.html', function(){
		gulp.start('html');
	});

});