start.addEventListener("click", function() {
	if (!startClick) {
		startCount = new Date();
		count = setInterval(counting, 20);
		startClick = true;
		pauseClick = false;
	}
});


pause.addEventListener("click", function() {
	if (!pauseClick) {
		clearInterval(count);

		var li = document.createElement("li");
		li.innerHTML = nowMin + " : " + nowSec + " : " + nowTsec;
		list.appendChild(li);

		lastTsec += nowTsec;
		if (lastTsec > 9) {
			lastSec += 1;
			lastTsec -=10;
		}
		lastSec += nowSec;
		if (lastSec > 59) {
			lastMin += 1;
			lastSec -= 60;
		}
		lastMin += nowMin;

		start.innerHTML = "Continue";
		startClick = false;
		pauseClick = true;
	}
});


reset.addEventListener("click", function() {
	clearInterval(count);

	tsec = 0;
	sec = 0;
	min = 0;
	nowTsec = 0;
	nowSec = 0;
	nowMin = 0;
	lastTsec = 0;
	lastSec = 0;
	lastMin = 0;
	list.innerHTML = "";
	render();

	start.innerHTML = "Start";
	startClick = false;
	pauseCllick = true;
});