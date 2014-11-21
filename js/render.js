function render() {

	var angle;

	var sinAngle;
	var cosAngle;

	var startPointX;
	var startPointY;
	var endPointX;
	var endPointY;
	var numberClock;

	context.clearRect(0, 0, canvas.width, canvas.height);

	//main circle
	context.beginPath();
	context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
	context.strokeStyle = "black";
	context.lineWidth = 3;
	context.stroke();
	context.closePath();
	//center dot
	context.beginPath();
	context.arc(centerX, centerY, 5, 0, 2 * Math.PI);
	context.fillStyle = "black";
	context.fill();
	context.closePath();

	context.translate(centerX, centerY);


	for (var i = 0, max = angles.length; i < max; i++) {

		angle = angles[i];

		sinAngle = Math.sin(angle);
		cosAngle = Math.cos(angle);

		if (i % 5 === 0) {
			context.lineWidth = 3;
			startPointX = sinAngle * (radius - fiveSecDash);
			startPointY = cosAngle * (radius - fiveSecDash);
			endPointX = sinAngle * radius;
			endPointY = cosAngle * radius;
		} else {
			context.lineWidth = 1;
			startPointX = sinAngle * (radius - secDash);
			startPointY = cosAngle * (radius - secDash);
			endPointX = sinAngle * radius;
			endPointY = cosAngle * radius;
		}
		context.beginPath();
		context.moveTo(startPointX, startPointY);
		context.lineTo(endPointX, endPointY);
		context.stroke();	
	}


	//minute hand
	angle = angles[min];

	sinAngle = Math.sin(angle);
	cosAngle = Math.cos(angle);

	context.beginPath();
	context.moveTo(0, 0);
	context.lineWidth = 3;
	context.strokeStyle = "black";
	endPointX = sinAngle * minuteHand;
	endPointY = -cosAngle * minuteHand;
	context.lineTo(endPointX, endPointY);
	context.stroke();
	context.closePath();


	//second hand
	angle = angles[sec];

	sinAngle = Math.sin(angle);
	cosAngle = Math.cos(angle);

	context.beginPath();
	context.lineWidth = 2;
	context.strokeStyle = "red";
	context.moveTo(0, 0);
	endPointX = sinAngle * secondHand;
	endPointY = -cosAngle * secondHand;
	context.lineTo(endPointX, endPointY);
	context.stroke();
	context.closePath();


	//number clock
	numberClock = min + ":" + sec + ":" + tsec;
	context.font = "20px monospace";
	context.fillText(numberClock, -30, 50);

	context.translate(-centerX, -centerY);
}

render();
