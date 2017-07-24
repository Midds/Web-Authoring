// The script checks if the URL has a certain string in it and will open a certain menu if it does. (Opening the menu page via the 
// nav bar will give a url of "/menu.html", opening the menu via a promotional link from the index will add extra parts to the URL
// that can be checked for)
$(document).ready(function () {
			if(window.location.href.indexOf("festiveMenu") > -1) {
			   document.getElementById('festiveMenu').style.display = 'block';
			}
			if(window.location.href.indexOf("foodMenu") > -1) {
			   document.getElementById('foodMenu').style.display = 'block';
			}
		});