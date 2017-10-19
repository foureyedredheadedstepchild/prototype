(function() {
  var parallax = document.querySelectorAll(".section-parallax"), speed = 0.5;
  window.onscroll = function() {
    [].slice.call(parallax).forEach(function(el, i) {
      
	  var windowYOffset = window.pageYOffset, elementOffset = el.offsetTop / 2, elBackgrounPos = "50% -" + (windowYOffset) * speed + "px";
      el.style.backgroundPosition = elBackgrounPos;
    });
  };
})();