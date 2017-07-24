function setConfidence(newVal) {
		document.getElementById("confidenceDisplay").innerHTML = newVal + '%';
	}
	
	function invalidHandler(evt) {
		// find the label for this form controllers
		var label = evt.srcElement.parentElement.getElementsByTagName("label")[0];
		
		//set the labels text color to red
		label.style.color = 'red';
		
		// stop the event from propagating higher
		evt.stopPropagation();
		
		// stop the browsers default handling of the validation error
		evt.preventDefault();
	}
	
	function loadDemo() {
		//register an event hander on the form to handleEvent
		// all inalid control notifications
		document.sandwichOrder.addEventListener("invalid", invalidHandler, true);
	}
	
	
	window.addEventListener("load", loadDemo, false);