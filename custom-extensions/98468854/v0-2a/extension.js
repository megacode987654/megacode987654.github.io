(function(ext) {
	ext._shutdown = function() {};
	ext._getStatus = function() {
		return {status: 2, msg: 'Ready'};
	};
	ext.openLink = function(url) {
        	if (confirm("This project is attempting to send you to the following website:\n" + url + "\nContinue?")) {
var win = window.open(url, '_blank');
win.focus();
}};
ext.openProject = function(id) {
	window.location.replace("http://scratch.mit.edu/projects/" + id.toString());
}
ext.ifThenElse = function(truefalse, a, b) {
if (truefalse) {
return a;
}
return b;
}
ext.power = function(x, y) {
return Math.pow(x, y);
}
ext.destroyScratch = function() {
	$('body').text('')
}
ext.whenThis = function(thingy) {
return thingy;
}
ext.search = function(engine, query) {
if (engine==="Yahoo!") {var win = window.open("https://search.yahoo.com/search?ei=UTF-8&fr=crmas&p=" + encodeURI(query));
win.focus();
}};
	var descriptor = {
"menus": {
"searchEngines": ['Yahoo!','Google','Scratch']
},
		blocks: [
			['', 'open link %s', 'openLink', 'http://example.org/'],
['f', 'open project id: %n', 'openProject', 98468056],
['r', 'if %b then %s else %s', 'ifThenElse', null, '', ''],
['r', '%n ^ %n', 'power', 2, 3],
['f', 'cause Scrach to self-destruct', 'destroyScratch'],
['h', 'when %b', 'whenThis', null],
['', 'search %m.searchEngines for %s', 'search','Scratch', '']
        	]
	};
	ScratchExtensions.register('Code: More-Blocks', descriptor, ext);
})({});
