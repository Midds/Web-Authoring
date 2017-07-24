function HideContent(d) {
	document.getElementById(d).style.display = "none";
}
function ShowContent(d) {
	document.getElementById(d).style.display = "block";
}
function ReverseDisplay(d) {
	// When the user clicks on a menu title, if already hidden (display: none) it will change the div to display:block and show the 
	if(document.getElementById(d).style.display == "none") { document.getElementById(d).style.display = "block"; }
	else { document.getElementById(d).style.display = "none"; }
}