(function(ext) {
	ext._shutdown = function() {};
	ext._getStatus = function() {
		return {status: 2, msg: 'Ready'};
	};
	ext.alert = function(x) {
        	alert(x);
	};
	ext.confirm = function(x) {
		return confirm(x);	
	};
	ext.prompt = function(x) {
		return prompt(x);
	};
	var descriptor = {
		blocks: [
			['', 'alert %s', 'alert', 'Hello World'],
			['b', 'confirm %s', 'confirm', 'Continue?'],
			['r', 'prompt %s', 'prompt', 'What\'s your name?'],
        	]
	};
	ScratchExtensions.register('Dialog Boxes', descriptor, ext);
})({});
