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

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.

displayTime();
setInterval(displayTime, 1000);
