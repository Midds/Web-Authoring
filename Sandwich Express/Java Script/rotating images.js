var howOften = 8; // number in seconds that each image is displayed
var current = 0; //start the counter at 0
var ns6 = document.getElementById&&!document.all; //detect netscape 6

// Creating an array of images.
var items = new Array();
    items[0]="<a href='../../13389226/HTML/Menu.html#foodMenu'><img alt='sandwich 1' src='Images/Menu%20items/meatball sub banner.jpg' height='250' width='500' border='0' /></a>";
    items[1]="<a href='../../13389226/HTML/Menu.html#foodMenu'><img alt='sandwich 2' src='Images/Menu%20items/chicken wrap banner.jpg' height='250' width='500' border='0' /></a>";
    items[2]="<a href='../../13389226/HTML/Menu.html#foodMenu'><img alt='sandwich 3' src='Images/Menu%20items/english wrap banner.jpg' height='250' width='500' border='0' /></a>";
	items[3]="<a href='../../13389226/HTML/Menu.html#foodMenu'><img alt='sandwich 4' src='Images/Menu%20items/brazil sandwich banner.jpg' height='250' width='500' border='0' /></a>";
function rotater() {
    document.getElementById("placeholder").innerHTML = items[current];
    current = (current==items.length-1) ? 0 : current + 1;
    setTimeout("rotater()",howOften*1000);
}

function rotater() {
    if(document.layers) {
        document.placeholderlayer.document.write(items[current]);
        document.placeholderlayer.document.close();
    }
    if(ns6)document.getElementById("placeholderdiv").innerHTML=items[current]
        if(document.all)
            placeholderdiv.innerHTML=items[current];

    current = (current==items.length-1) ? 0 : current + 1; //increment or reset
    setTimeout("rotater()",howOften*1000);
}
window.onload=rotater;