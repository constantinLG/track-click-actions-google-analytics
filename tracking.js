
//simple tracking code for conversion actions  www.KingStudio.com 
(function addTrackingOnActionElements() {
	/*
		key is conversion name set in Google Analytics
		value is the CSS selector 
	*/
	var conversionSelectors = { 'location_directions': '[href*="https://maps.app.goo.gl"]', 'phone_call': '[href*="wa.me"],[href*="tel:"]' };

	for (var conversionEventName in conversionSelectors) {
		var selector = conversionSelectors[conversionEventName];
		var trackedElements = document.querySelectorAll(selector);
		//console.log(trackedElements);

		for (var i = 0; i < trackedElements.length; i++) {
			let conversionEventToBeCalled = conversionEventName;
			trackedElements[i].addEventListener("click", function (event) {
				setLeadGoal(conversionEventToBeCalled);
				//event.preventDefault();
			});
		}
	}

	function setLeadGoal(eventName) {
		//analytics goal
		gtag('event', eventName);
		//console.log(eventName);

		return false;
	}
})();
