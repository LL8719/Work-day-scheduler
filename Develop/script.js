var time9amEl = $('#9AM');
var time10amEl = $('#10AM');
var time11amEl = $('#11AM');
var time12pmEl = $('#12PM');
var time1pmEl = $('#1PM');
var time2pmEl = $('#2PM');
var time3pmEl = $('#3PM');
var time4pmEl = $('#4PM');
var time5pmEl = $('#5PM');

var timeArrayEl = [
	time9amEl,
	time10amEl,
	time11amEl,
	time12pmEl,
	time1pmEl,
	time2pmEl,
	time3pmEl,
	time4pmEl,
	time5pmEl,
];

function displayTime() {
	// Displays time under the title on the top of the screen
	var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
	$('#currentDay').text(rightNow);
	// stores the current time in the format "1-12 /AM or PM"
	var presentEl = dayjs().format('hA');

	// Loop to iterate over the timeArrayEl
	for (var i = 0; i < timeArrayEl.length; i++) {
		// if statement to add class/color block for the state of time
		if (presentEl > timeArrayEl[i].data('hour')) {
			timeArrayEl[i].addClass('past');
		} else if (presentEl === timeArrayEl[i].attr('data-hour')) {
			timeArrayEl[i].addClass('present');
		} else {
			timeArrayEl[i].addClass('future');
		}
	}
}

var saveButtonEl = $('.saveBtn');

saveButtonEl.on('click', function () {
	userInput = $(this).siblings('#user-input').val().trim();
	hourLog = $(this).parent().attr('id');
	console.log(userInput);
	localStorage.setItem(hourLog, userInput);
});

var hour9El = $('#hour9 .description').value;
var hour10El = $('#hour10').value;

var hoursArray = [hour9El, hour10El];

for (var i = 0; i < hoursArray.length; i++) {
	if (hoursArray === timeArrayEl) {
		localStorage.getItem('hours');
	}
}

displayTime();
setInterval(displayTime, 1000);
