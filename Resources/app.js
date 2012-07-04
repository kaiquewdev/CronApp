Ti.include('/actions/cron.js');

Ti.UI.setBackgroundColor('#3a3a3a');

// Variable to set value of panel
var updatePanel = false;
var stopPanel = false;

var win = Ti.UI.createWindow({
	url: '/views/timer.js'
});

var holderTimer = Ti.UI.createView({
	top: 0,
	width: '100%',
	height: '40%',
});
win.add( holderTimer );

var timerPanel = Ti.UI.createLabel({
	text: Cron.today.toString('HH:mm:ss'),
	font: {
		fontSize: 52,
		color: '#f2f2f2'
	}
});
holderTimer.add( timerPanel );

var controlPanel = Ti.UI.createView({
	top: '45%',
	width: '100%',
	height: '50%',
});
win.add( controlPanel );

var startTimerButton = Ti.UI.createButton({
	title: 'Start Timer',
	top: '0',
	width: 150,
});
controlPanel.add( startTimerButton );

var stopTimerButton = Ti.UI.createButton({
	title: 'Stop Timer',
	top: '22%',
	width: 150,
});
controlPanel.add( stopTimerButton );

var clearTimerButton = Ti.UI.createButton({
	title: 'Clear Timer',
	top: '50%',
	width: 150,
});
controlPanel.add( clearTimerButton );

win.addEventListener('focus', function () {
	if ( updatePanel === false ) {
		Cron.zeroTime();
	}
});

startTimerButton.addEventListener('click', function () {
	if ( updatePanel === false ) {
		Cron.startTimer();
		stopPanel = false;

		updatePanel = setInterval(function () {
			timerPanel.setText( Cron.today.toString('HH:mm:ss') );
		}, 1000);
	}
});

stopTimerButton.addEventListener('click', function () {
	Cron.stopTimer();

	clearInterval( updatePanel );
	updatePanel = false;
	stopPanel = true;
});

clearTimerButton.addEventListener('click', function () {
	if ( stopPanel === true ) {
		Cron.zeroTime();
		timerPanel.setText( Cron.today.toString('HH:mm:ss') );
	}
});

win.open();