var pageY = 0;
var height = 0;
var width = 0;
var feetNum = 1;

function onLoad() {
	getResolution();
	getY();
	
	for (var i = 0; i < 10; i++) {
		addFeetIndicator();
	}
}

// Changing a height of wrapper based on a window height
var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};

addEvent(window, "resize", function(event) {
	getResolution();
});

addEvent(window, "scroll", function(event) {
	getY();
	var win = $(window);
	
	if ($(document).height() - ( win.height() * 2 ) <= win.scrollTop()) {
		for (var i = 0; i < 10; i++) {
		addFeetIndicator();
		}
	}
});

function addFeetIndicator() {
	var str1 = "<p class='center gauge'>";
	var str2 = 50 * feetNum;
	var str3 = "ft</p>";
	var res = str1.concat(str2,str3);
	$("#underground").append(res);
	feetNum++;
// 	console.log(feetNum);
}

function getY() {
	pageY = window.pageYOffset;
// 	console.log(pageY+height);
}

function getResolution() {
	width = $(window).width();
	height = $(window).height();
}