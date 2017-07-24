$(document).ready(function () {
    function init() {
		// if customerName exists in local storage then it puts it into the customer name form field
        if (localStorage["customerName"]) {
            $('#customerName').val(localStorage["customerName"]);
        }
        if (localStorage["addressOne"]) {
            $('#addressOne').val(localStorage["addressOne"]);
        }
		if (localStorage["addressTwo"]) {
            $('#addressTwo').val(localStorage["addressTwo"]);
        }
		if (localStorage["city"]) {
            $('#city').val(localStorage["city"]);
        }
		if (localStorage["postcode"]) {
            $('#postcode').val(localStorage["postcode"]);
        }
		if (localStorage["phone"]) {
            $('#phone').val(localStorage["phone"]);
        }
		if (localStorage["selfCollection"]) {
            $('#selfCollection').val(localStorage["selfCollection"]);
        }
		if (localStorage["optionsMain"]) {
			$("#optionsMain2").css({ display: "inline" });
            $('#optionsMain').val(localStorage["optionsMain"]);
        }
		if (localStorage["optionsMain2"]) {
			$("#optionsMain3").css({ display: "inline" });
            $('#optionsMain2').val(localStorage["optionsMain2"]);
        }
		if (localStorage["optionsMain3"]) {
			$("#optionsMain4").css({ display: "inline" });
            $('#optionsMain3').val(localStorage["optionsMain3"]);
        }
		if (localStorage["optionsMain4"]) {
            $('#optionsMain4').val(localStorage["optionsMain4"]);
        }
		if (localStorage["optionsDrink"]) {
			$("#optionsDrink2").css({ display: "inline" });
            $('#optionsDrink').val(localStorage["optionsDrink"]);
        }
		if (localStorage["optionsDrink2"]) {
			$("#optionsDrink3").css({ display: "inline" });
            $('#optionsDrink2').val(localStorage["optionsDrink2"]);
        }
		if (localStorage["optionsDrink3"]) {
			$("#optionsDrink4").css({ display: "inline" });
            $('#optionsDrink3').val(localStorage["optionsDrink3"]);
        }
		if (localStorage["optionsDrink4"]) {
            $('#optionsDrink4').val(localStorage["optionsDrink4"]);
        }
		if (localStorage["requests"]) {
            $('#requests').val(localStorage["requests"]);
        }
		if (localStorage["deliveryType"] == 'Self-Collection') {
			radiobtn = document.getElementById("selfCollection");
			radiobtn.checked = true;
        }
		if (localStorage["deliveryType"] == 'Home Delivery') {
			radiobtn = document.getElementById("delivery");
			radiobtn.checked = true;
        }
		
    }
	init();
});

$('.stored').change(function () {
    localStorage[$(this).attr('name')] = $(this).val();
});
