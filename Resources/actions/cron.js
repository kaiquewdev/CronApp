Ti.include('./date.js');

var Cron = (function () {
	var core = function () {};

	// Zero time default object
	var zero = {
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0,
	};

	core.prototype = {
		today: (function () {
			return Date.today();
		} ()),

		zeroTime: function () {
			var self = this;

			return self.today.set( zero );
		},

		// Flag to timer
		timerRunning: false,

		// Start timer
		timerStart: function () {
			var self = this,
				output = false;

			// Create timer, increase by one second
			self.timerRunning = setInterval(function () {
				self.today.add({
					second: 1
				});
			}, 1000);

			if ( self.timerRunning ) {
				output = true;
			}

			return output;
		},

		// Stop timer
		timerStop: function () {
			var self = this,
				output = false;

			clearInterval( self.timerRunning );
			self.timerRunning = false;

			if ( !self.timerRunning ) {
				output = true;
			}

			return output;
		},

		inherit: core,
	};

	return new core;
} ());