var time9amEl = $('#9AM');
var time10amEl = $('#10AM');
var time11amEl = $('#11AM');
var time12pmEl = $('#12PM');
var time1pmEl = $('#1PM');
var time2pmEl = $('#2PM');
var time3pmEl = $('#3PM');
var time4pmEl = $('#4PM');
var time5pmEl = $('#5PM');
var clearEl = document.querySelector('#clear-9');
var clear10El = document.querySelector('#clear-10');
var clear11El = document.querySelector('#clear-11');
var clear12El = document.querySelector('#clear-12');
var clear1El = document.querySelector('#clear-1');
var clear2El = document.querySelector('#clear-2');
var clear3El = document.querySelector('#clear-3');
var clear4El = document.querySelector('#clear-4');
var clear5El = document.querySelector('#clear-5');

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

//Retrieves user input from localStorage
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour1 .description').val(localStorage.getItem('hour1'));
$('#hour2 .description').val(localStorage.getItem('hour2'));
$('#hour3 .description').val(localStorage.getItem('hour3'));
$('#hour4 .description').val(localStorage.getItem('hour4'));
$('#hour5 .description').val(localStorage.getItem('hour5'));

function displayTime() {
	// Displays time under the title on the top of the screen
	var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
	$('#currentDay').text(rightNow);
	// stores the current time in the format "1-12 /AM or PM"
	var presentEl = dayjs().format('HH');

	// Loop to iterate over the timeArrayEl
	for (var i = 0; i < timeArrayEl.length; i++) {
		timeArrayEl[i].removeClass('past present future');
		// if statement to add class/color block for the state of time
		if (presentEl > timeArrayEl[i].attr('data-hour')) {
			timeArrayEl[i].addClass('past');
		} else if (presentEl === timeArrayEl[i].attr('data-hour')) {
			timeArrayEl[i].addClass('present');
		} else {
			timeArrayEl[i].addClass('future');
		}
	}
}
//Save Button
var saveButtonEl = $('.saveBtn');
//Function for the click of the save button
saveButtonEl.on('click', function () {
	userInput = $(this).siblings('.user-input').val().trim();
	hourLog = $(this).parent().attr('id');
	console.log(userInput);
	localStorage.setItem(hourLog, userInput);
});

clearEl.addEventListener('click', function () {
	$('#hour9 .description').val(localStorage.setItem('hour9', ''));
});

clear10El.addEventListener('click', function () {
	$('#hour10 .description').val(localStorage.setItem('hour10', ''));
});

clear11El.addEventListener('click', function () {
	$('#hour11 .description').val(localStorage.setItem('hour11', ''));
});

clear12El.addEventListener('click', function () {
	$('#hour12 .description').val(localStorage.setItem('hour12', ''));
});

clear1El.addEventListener('click', function () {
	$('#hour1 .description').val(localStorage.setItem('hour1', ''));
});

clear2El.addEventListener('click', function () {
	$('#hour2 .description').val(localStorage.setItem('hour2', ''));
});

clear3El.addEventListener('click', function () {
	$('#hour3 .description').val(localStorage.setItem('hour3', ''));
});

clear4El.addEventListener('click', function () {
	$('#hour4 .description').val(localStorage.setItem('hour4', ''));
});

clear5El.addEventListener('click', function () {
	$('#hour5 .description').val(localStorage.setItem('hour5', ''));
});

displayTime();
setInterval(displayTime, 1000);
