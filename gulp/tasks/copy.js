var config = require('../config'),
	gulp = require('gulp'),
	imagemin = require('gulp-imagemin');

gulp.task('copy', function() {
	gulp.src(config.src.img + '**/*.*') //find  img
		.pipe(imagemin()) //minify
		.pipe(gulp.dest(config.build.img)); //create "img" folder

	gulp.src(config.src.fonts + '*.*') //find fonts
		.pipe(gulp.dest(config.build.fonts)); //create "fonts" folder

	gulp.src(config.src.video + '*.*') //find video
		.pipe(gulp.dest(config.build.video)); //create "video" folder
});
