// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/2.jpg", 
	 		 "images/3.jpg",
			 "images/4.jpg",
			 "images/5.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})