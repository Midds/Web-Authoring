//fetches the elements from local storage and puts them into the chosen div (e.g nameResult)
		document.getElementById("nameResult").innerHTML =  localStorage.getItem("customerName");
		document.getElementById("mainResult").innerHTML =  localStorage.getItem("optionsMain");
		document.getElementById("mainResult2").innerHTML =  localStorage.getItem("optionsMain2");
		document.getElementById("mainResult3").innerHTML =  localStorage.getItem("optionsMain3");
		document.getElementById("mainResult4").innerHTML =  localStorage.getItem("optionsMain4");
					
		document.getElementById("drinkResult").innerHTML =  localStorage.getItem("optionsDrink");
		document.getElementById("drinkResult2").innerHTML =  localStorage.getItem("optionsDrink2");
		document.getElementById("drinkResult3").innerHTML =  localStorage.getItem("optionsDrink3");
		document.getElementById("drinkResult4").innerHTML =  localStorage.getItem("optionsDrink4");
		
		document.getElementById("deliveryResult").innerHTML =  localStorage.getItem("deliveryType");
					
		document.getElementById("requestResult").innerHTML =  localStorage.getItem("requests");