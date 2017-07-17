//Pseudo Code
// create variables for time of day
// create variable for day and month
// create variable to concat time variables

// create div with id for time;

// connect time to be 




function digitalClock(){
	// var clockFace = document.createElement('div');
	// var monthDay = document.createElement('div');
	// clockFace.setAttribute('id', 'myClock');
	// monthDay.setAttribute('id', 'monthDay');

//gets current time
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	var month = date.getMonth();
	var day = date.getDay();

// adding zero's
	if(second < 10){
		second = "0" + second;
	}
	if(minute < 10){
		minute = "0" + minute;
	}
	if(hour < 10){
		hour = "0" + hour;
	}

//concats time and date variables
	var currentTime = '#'+ hour + minute + second;
	

// populates HTML 'div's'
	document.getElementById('clock').innerHTML = currentTime;
	
// sets the refresh
	setInterval(digitalClock, 500);

// sets background color
	document.bgColor = currentTime;


}
digitalClock();