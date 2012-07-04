Ti.include('../cron.js');

Cron.zeroTime();
Cron.timerStart();
alert( Cron.today );

setTimeout(function () {
	alert( Cron.today );
	Cron.timerStop();
}, 10000);

setTimeout(function () {
	alert( Cron.today );
}, 15000);