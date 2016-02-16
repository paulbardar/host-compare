;(function($){
	$(function(){
  		var slider = $('.ba-slider');
  		slider.slick({
        gorizontal: true,
   			dots: false,
   			infinite:false,
   			arrow: true
  		});
 	});

 	$(function(){
  		var sliderFeatures = $('.ba-slider-features');

  		sliderFeatures.slick({
   			dots: true,
   			infinite:false,
  			arrow:false,
  			prevArrow: false,
  			nextArrow:false

  		});
 	});

  var menuToggle = document.getElementById("ba-menu-toggle"),
    body = document.body;

  menuToggle.onclick = function(event){
    event.preventDefault();
    if(body.className === "ba-menu-opened"){
      body.className = "";
    } else {
      body.className = "ba-menu-opened";
    }

  }
})(jQuery);
