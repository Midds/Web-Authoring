function myFunction() {
			var radio1 = document.getElementById("selfCollection");
			var radio2 = document.getElementById("delivery");
			if(radio1.checked) {
				localStorage.setItem("deliveryType", "Self-Collection");
			}
			else if(radio2.checked) {
				localStorage.setItem("deliveryType", "Home Delivery");
			}
			// serializeArray is awesome and powerful
				var data = $("#sandwichOrder").serializeArray();
				console.log(data);
				// iterate over results
				$.each(data, function(i, obj) {
					
					localStorage.setItem(obj.name, obj.value);
				});	
	
		}
		// Test if there is already saved data	
		if (localStorage.getItem("flag") == "set") {
			
			// Same iteration as before
			var data = $("#sandwichOrder").serializeArray();
			
			// Only the only way we can select is by the name attribute.
			$.each(data, function(i, obj) {
				$("[name='" + obj.name +"']").val(localStorage.getItem(obj.name));
			});
		}