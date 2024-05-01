$(document).ready( function(){
        $.fn.snow({ minSize: 5, maxSize: 50, newOn: 1000, flakeColor: '#fff' });
});

////////////////////////////////////////////////////////
///////////////clock///////////////////////////
////////////////////////////////////////////////////////

$(".timecounter").TimeCircles({
	time: {
    Days: { color: "#fff" },
    Hours: { color: "#fff" },
    Minutes: { color: "#fff" },
    Seconds: { color: "#fff" }
},
	animation: "smooth",
	bg_width: 0.3,
	fg_width: 0.06,
	circle_bg_color: "rgba(199, 4, 8, 0.8)"
	}); 

////////////////////////////////////////////////////////
///////////////Section equal height///////////////////////////
////////////////////////////////////////////////////////

 

function equalizeHeight() {
    var section = $('html').not('.ie6').find('.section'); // getting the sections in all but ie8
	section.css({'min-height': (($(window).height()-5))+'px'});
    $(window).resize(function(){
        section.css({'min-height': (($(window).height()-5))+'px'});
    });
}

equalizeHeight();


////////////////////////////////////////////////////////
///////////////on scroll animation effects///////////////////////////
////////////////////////////////////////////////////////


new WOW().init();


////////////////////////////////////////////////////////
///////////////Parallax effects///////////////////////////
////////////////////////////////////////////////////////


$('div.bgParallax').each(function(){
	var $obj = $(this);

	$(window).scroll(function() {
		var yPos = -($(window).scrollTop() / $obj.data('speed')); 

		var bgpos = '50% '+ yPos + 'px';

		$obj.css('background-position', bgpos );
 
	}); 
});						


////////////////////////////////////////////////////////
///////////////back to top ///////////////////////////
////////////////////////////////////////////////////////


jQuery(document).ready(function() {
				var offset = 220;
				var duration = 500;
				jQuery(window).scroll(function() {
					if (jQuery(this).scrollTop() > offset) {
						jQuery('.back-to-top').fadeIn(duration);
					} else {
						jQuery('.back-to-top').fadeOut(duration);
					}
				});
				
				jQuery('.back-to-top').click(function(event) {
					event.preventDefault();
					jQuery('html, body').animate({scrollTop: 0}, duration);
					return false;
			})
});