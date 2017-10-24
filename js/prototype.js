
;(function($) {
	'use strict';
	$.fn.parallax = function(options) {
	    var $w = $(window);
		
		var settings = $.extend({}, $.fn.parallax.defaults, options);
/*		
		var settings = $.extend({
			speed: 0.1
		}, options);		
*/		
		var windowHeight = $w.height();	
		
	    $w.resize(function() {
		    windowHeight = $w.height();
	    });
		
		return this.each(function() {
			var $this = $(this);		
			
			
			$(document).scroll(function() {
				var scrollTop = $w.scrollTop();
				
				var offset = $this.offset().top;
				var height = $this.outerHeight();	
				
				if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
					return;
				}
				
				var y = Math.round((offset - scrollTop) * settings.speed);
				$this.css('transform', 'translateY(' + -y + 'px)'); 
				
				
				// $this.css('background-position', 'center ' + y + 'px');
			});
		});
	};
	
	$.fn.parallax.defaults = {
		speed : 0.1
	};

})(jQuery);




/*
$.fn.parallax = function(s) {
    var scrollTop = $(window).scrollTop();
    var y = Math.round(scrollTop * s);
    this.css('background-position', '0 -'+ y + 'px');
};
*/



/*
;(function( $ ){
	'use strict';
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function(xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		//var paddingTop = 0;
		
		//get the starting position of each element to have parallax applied to it		
		$this.each(function(){
		    firstTop = $this.offset().top;
		});

		if (outerHeight) {
			getHeight = function(jqo) {
				return jqo.outerHeight(true);
			};
		} else {
			getHeight = function(jqo) {
				return jqo.height();
			};
		}
			
		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || xpos === null) { xpos = "50%"; }
		if (arguments.length < 2 || speedFactor === null) { speedFactor = 0.1; }
		if (arguments.length < 3 || outerHeight === null) { outerHeight = false; }
		
		// function to be called whenever the window is scrolled or resized
		function update(){
			var pos = $window.scrollTop();				

			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);

				// Check if totally above or totally below viewport
				if (top + height < pos || top > pos + windowHeight) {
					return;
				}
				
                $this.css('transform', 'translateY(' + -Math.round((firstTop - pos) * speedFactor) + 'px)'); 
				//$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
			});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);
*/