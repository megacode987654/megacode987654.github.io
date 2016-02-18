(function(ext) {
	ext._shutdown = function() {};
	ext._getStatus = function() {
		return {status: 2, msg: 'Ready'};
	};
	ext.thisIsThat = function(item, otherItem) {
        	return item === otherItem;
	};
	var descriptor = {
		blocks: [
			['b', '%s is %s', 'thisIsThat', '', ''],
        	]
	};
	ScratchExtensions.register('() is ()', descriptor, ext);
})({});
