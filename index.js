var through2 = require('through2');

module.exports = function (fnProcess){
	function process(file,enc,callback) {
		if(file.isNull()){
			this.push(file);
			return callback();
		}
		if(file.isStream()) {
			 return this.emit('error', new gutil.PluginError('gulp-anycontent',  'Streaming not supported'));
		}
		if(file.isBuffer()){
			var contents = file.contents.toString('utf8');
			if(fnProcess && typeof fnProcess == 'function'){
				contents = fnProcess(contents, file.path) || contents;
			}
			var outfile = file.clone();
			outfile.contents = new Buffer(contents);
		}
		
		this.push(outfile);
		return callback();
	}
	
	return through2.obj(process);
}
