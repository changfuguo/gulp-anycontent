# gulp-anycontent
- gulp流中处理file返回来的内容，如果有一些自己特殊的东西要处理，比如替换路径之类的，可以用这个实现

- 安装 npm install gulp-anycontent 


#API

	var anycontent  = require('gul-anycontent');
	gulp.task('anycontent',function (){  
		gulp.src('./js/*.html')
			.pipe(anycontent(function (contents,filepath{       
				contents = contents || '';
				contents = contents.replace(/aaa/g,'bbbb');
				return contents;
  				})
			)
			.pipe(gulp.dest('./dest/js')
	})
