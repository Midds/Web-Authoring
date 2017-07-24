$(document).ready(function() {
 
        //Calculate the height of <header>
        //Use outerHeight() instead of height() if have padding
        var aboveHeight = $('#logo').outerHeight();
 
	//when scroll
        $(window).scroll(function(){
 
	        //if scrolled down more than the header’s height
                if ($(window).scrollTop() > aboveHeight){
 
	        // if yes, add “fixed” class to the <nav ul>
	        // add padding top to the #content 
            //    (value is same as the height of the nav)
                $('nav ul').addClass('fixed').next()
                .css('padding-top','60px');
 
                } else {
 
	        // When scrolling up or less than aboveHeight, remove the fixed nav bar.
                $('nav ul').removeClass('fixed').next()
                .css('padding-top','0');
                }
        });
});