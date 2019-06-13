;(function($) {
	'use strict';
	$.fn.isInViewport = function() {
	  var offsetTop = $(this).offset().top;
	  var outerHeight = offsetTop + $(this).outerHeight();
	  var scrollTop = $(window).scrollTop();
	  var height = scrollTop + $(window).height();
	  return outerHeight > scrollTop && offsetTop < height;
	};
})(jQuery);

;(function($) {
	'use strict';
	$.fn.parallax = function(options) {
		var defaults = $.extend({}, $.fn.parallax.defaults, options);
//		var defaults = $.extend({ depth: 0.1 }, options);
		var $window = $(window);	
		var windowHeight = $window.height();	
	    $window.resize(function() {
		    windowHeight = $window.height();
/*			
            console.log('%c' + windowHeight, "background: red; 
			                                  color: white; 
											  padding-left:10px;");
*/
	    });	
		return this.each(function() {
			var $this = $(this);		
			
			$(document).scroll(function() {
				// vertical scrollbar position...
				var scrollTop = $window.scrollTop();
				var offset = parseInt($this.offset().top);
				var height = $this.outerHeight(true);	
/*	
				if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
					return;
				}
*/				
			    var visible = $this.isInViewport();
				
				if (visible) {
					var y = Math.round((offset - scrollTop) * defaults.depth);
					$this.css('transform', 'translateY(' + y + 'px)');
				}
			});
		});
	};
	$.fn.parallax.defaults = {
		depth : 0
	};
})(jQuery);