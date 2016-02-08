function idMethod() {
	return decodeURI(window.location.href.substring(window.location.href.lastIndexOf('#') + 1));
}
function phpMethodQ(needArray)/* With needArray = true, you jut get an array of name=output. If false, you gen an object of name: output */ {
	
		var stuff = window.location.href.substring(window.location.href.lastIndexOf('?') + 1);
		var array = stuff.split("&")
		if (needArray === true) {
			return array;
	}
		var i;
		var j;
		var obj = {};
		for (i=0; i<array.length; i++) {
			j = array[i];
			var o = j.substring(j.lastIndexOf('=') + 1);
			var p = j.slice(0, j.lastIndexOf('='));
			if (p === window.location.href.slice(0, window.location.href.lastIndexOf('='))) {
				return null;
			}
			eval('obj["' + p + '"] = "' + o + '";');
		}
	return obj;
}
function phpMethodH(needArray) /* This method uses # instead of ? */ {
	var stuff = window.location.href.substring(window.location.href.lastIndexOf('#') + 1);
	var array = stuff.split("&")
	if (needArray === true) {
		return array;
	}
	var i;
	var j;
	var obj = {};
	for (i=0; i<array.length; i++) {
		j = array[i];
		var o = j.substring(j.lastIndexOf('=') + 1);
		var p = j.slice(0, j.lastIndexOf('='));
		if (p === window.location.href.slice(0, window.location.href.lastIndexOf('='))) {
			return null;
		}
		eval('obj["' + p + '"] = "' + o + '";');
	}
	return obj;
}
var CODE = idMethod();
$("body").append(CODE);
