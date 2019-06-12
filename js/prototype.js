;(function($) {
	'use strict';
	$.fn.parallax = function(options) {
	    var $w = $(window);	
		var settings = $.extend({}, $.fn.parallax.defaults, options);
//		var settings = $.extend({ speed: 0.1 }, options);			
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
				if (offset + height <= scrollTop 
					|| offset >= scrollTop + windowHeight) {
					return;
				}
				var y = Math.round((offset - scrollTop) * settings.speed);
				$this.css('transform', 'translateY(' + -y + 'px)'); 		
//              $this.css('background-position', 'center ' + y + 'px');
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