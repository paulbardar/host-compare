;(function($){
  $(document).foundation();
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

})(jQuery);
