var clock = document.getElementById("clock");
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
clock.appendChild(canvas);
canvas.width = 210;
canvas.height = 210;

//buttons
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var reset = document.getElementById("reset");

//output
var output = document.getElementById("output");
var list = document.getElementById("list");

//center coordinates
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

var radius = (canvas.width / 2) - 10; //clock radius
var secDash = 6; //length of second dashes
var fiveSecDash = 10; //length of 5 second dashes
var secondHand = radius; //second hand length
var minuteHand = radius - 15; //minute hand length

//main time
var tsec = 0; // tenth of second
var sec = 0;
var min = 0;

//time of this lap
var nowTsec = 0;
var nowSec = 0;
var nowMin = 0;

//time of last lap
var lastTsec = 0;
var lastSec = 0;
var lastMin = 0;

var startCount;
var count;
var startClick = false;
var pauseClick = true;

// 60 angles for counting
var angles = [];
(function createAngles() {
	var angle;
	for (i = 0; i < 60; i++) {
		var angle = ((2 * Math.PI) / 60) * i; //angle in radians
		angles.push(angle);
	}
})();

function counting() {
	var now = new Date();

	var timeMin = now - startCount;
	nowMin = Math.floor(timeMin / 60000);
	min = nowMin + lastMin;

	var timeSec = timeMin - (nowMin * 60000);
	nowSec = Math.floor(timeSec / 1000);
	sec = nowSec + lastSec;
	if (sec > 59) {
		min += 1;
		sec -= 60;
	}

	var timeTsec = timeSec - (nowSec * 1000);
	nowTsec = Math.floor(timeTsec / 100);
	tsec = nowTsec + lastTsec;
	if (tsec > 9) {
		sec += 1;
		tsec -= 10;
	}

	render();
}