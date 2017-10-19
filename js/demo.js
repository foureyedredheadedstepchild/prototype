(function() {
  var parallax = document.querySelectorAll(".section-parallax"), speed = 0.5;
  window.onscroll = function() {
    [].slice.call(parallax).forEach(function(el, i) {
      
	  var windowYOffset = window.pageYOffset - 2823 / 2, elementOffset = el.offsetTop, elBackgrounPos = "50% " + (windowYOffset - elementOffset) * speed+ "px";
      el.style.backgroundPosition = elBackgrounPos;
    });
  };
})();
