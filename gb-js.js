$(document).ready(function(){
	
	"use strict";
	
	$('.next').on('click', function(){
		var currentImg = $('.active');
		var nextImg = currentImg.next();
		
		if(nextImg.length){
			currentImg.fadeOut().removeClass('active').css('z-index', -10);
			nextImg.fadeIn().addClass('active').css('z-index', 10);
		} else {
		  $('.home-inner-slide img:first').fadeIn().addClass('active');
		}
	});

	$('.prev').on('click', function(){
		var currentImg = $('.active');
		var prevImg = currentImg.prev();
		
		if(prevImg.length){
			currentImg.fadeOut().removeClass('active').css('z-index', -10);
			prevImg.fadeIn().addClass('active').css('z-index', 10);
		} else {
			$('.home-inner-slide img:last').fadeIn().addClass('active');
			currentImg.fadeOut().removeClass('active').css('z-index', -10);
			prevImg.fadeIn().addClass('active').css('z-index', 10);
		}
	});
	
	$('#cake2').hide();
	$('#cake3').hide();
	$('#fruit-cake-description').hide();
	$('#marble-cake-description').hide();
	$('#hidden-fruit-cake-description').hide();
	$('#hidden-marble-cake-description').hide();
	$('#cupcake2').hide();
	$('#cupcake3').hide();
	$('#vanillacup-description').hide();
	$('#redcup-description').hide();
	$('#hidden-vanillacup-description').hide();
	$('#hidden-redcup-description').hide();
	$('#pastry2').hide();
	$('#pastry3').hide();
	$('#pastry4').hide();
	$('#pastry5').hide();
	$('#brownie-description').hide();
	$('#cookie-description').hide();
	$('#donut-description').hide();
	$('#creampuff-description').hide();
	$('#hidden-brownie-description').hide();
	$('#hidden-cookie-description').hide();
	$('#hidden-donut-description').hide();
	$('#hidden-creampuff-description').hide();
	
	$('#cheesecake').click(function() {
		$('#cake2').hide();
		$('#cake3').hide();
		$('#fruit-cake-description').hide();
		$('#marble-cake-description').hide();
		$('#cake1').fadeIn();
		$('#cheese-cake-description').fadeIn();
	});
	
	$('#fruitcake').click(function(){
		$('#cake1').hide();
		$('#cake3').hide();
		$('#cheese-cake-description').hide();
		$('#marble-cake-description').hide();
		$('#cake2').fadeIn();
		$('#fruit-cake-description').fadeIn();
	});
	
	$('#marblecake').click(function(){
		$('#cake1').hide();
		$('#cake2').hide();
		$('#cheese-cake-description').hide();
		$('#fruit-cake-description').hide();
		$('#cake3').fadeIn();
		$('#marble-cake-description').fadeIn();
	});

	$('#hidden-cheese').click(function() {
		$('#cake2').hide();
		$('#cake3').hide();
		$('#hidden-fruit-cake-description').hide();
		$('#hidden-marble-cake-description').hide();
		$('#cake1').fadeIn();
		$('#hidden-cheese-cake-description').fadeIn();
	});

	$('#hidden-fruit').click(function(){
		$('#cake1').hide();
		$('#cake3').hide();
		$('#hidden-cheese-cake-description').hide();
		$('#hidden-marble-cake-description').hide();
		$('#cake2').fadeIn();
		$('#hidden-fruit-cake-description').fadeIn();
	});
	
	$('#hidden-marble').click(function(){
		$('#cake1').hide();
		$('#cake2').hide();
		$('#hidden-cheese-cake-description').hide();
		$('#hidden-fruit-cake-description').hide();
		$('#cake3').fadeIn();
		$('#hidden-marble-cake-description').fadeIn();
	});

	$('#chococup').click(function() {
		$('#cupcake2').hide();
		$('#cupcake3').hide();
		$('#vanillacup-description').hide();
		$('#redcup-description').hide();
		$('#cupcake1').fadeIn();
		$('#chococup-description').fadeIn();
	});

	$('#vanillacup').click(function() {
		$('#cupcake1').hide();
		$('#cupcake3').hide();
		$('#chococup-description').hide();
		$('#redcup-description').hide();
		$('#cupcake2').fadeIn();
		$('#vanillacup-description').fadeIn();
	});

	$('#redcup').click(function() {
		$('#cupcake1').hide();
		$('#cupcake2').hide();
		$('#chococup-description').hide();
		$('#vanillacup-description').hide();
		$('#cupcake3').fadeIn();
		$('#redcup-description').fadeIn();
	});
	
	$('#hidden-chococup').click(function() {
		$('#cupcake2').hide();
		$('#cupcake3').hide();
		$('#hidden-vanillacup-description').hide();
		$('#hidden-redcup-description').hide();
		$('#cupcake1').fadeIn();
		$('#hidden-chococup-description').fadeIn();
	});
	
	$('#hidden-vanillacup').click(function() {
		$('#cupcake1').hide();
		$('#cupcake3').hide();
		$('#hidden-chococup-description').hide();
		$('#hidden-redcup-description').hide();
		$('#cupcake2').fadeIn();
		$('#hidden-vanillacup-description').fadeIn();
	});

	$('#hidden-redcup').click(function() {
		$('#cupcake1').hide();
		$('#cupcake2').hide();
		$('#hidden-chococup-description').hide();
		$('#hidden-vanillacup-description').hide();
		$('#cupcake3').fadeIn();
		$('#hidden-redcup-description').fadeIn();
	});

	$('#macaroon').click(function() {
		$('#pastry2').hide();
		$('#pastry3').hide();
		$('#pastry4').hide();
		$('#pastry5').hide();
		$('#brownie-description').hide();
		$('#cookie-description').hide();
		$('#donut-description').hide();
		$('#creampuff-description').hide();
		$('#pastry1').fadeIn();
		$('#macaroon-description').fadeIn();
	});
	
	$('#brownie').click(function() {
		$('#pastry1').hide();
		$('#pastry3').hide();
		$('#pastry4').hide();
		$('#pastry5').hide();
		$('#macaroon-description').hide();
		$('#cookie-description').hide();
		$('#donut-description').hide();
		$('#creampuff-description').hide();
		$('#pastry2').fadeIn();
		$('#brownie-description').fadeIn();
	});

		$('#cookie').click(function() {
		$('#pastry1').hide();
		$('#pastry2').hide();
		$('#pastry4').hide();
		$('#pastry5').hide();
		$('#macaroon-description').hide();
		$('#brownie-description').hide();
		$('#donut-description').hide();
		$('#creampuff-description').hide();
		$('#pastry3').fadeIn();
		$('#cookie-description').fadeIn();
	});
	
		$('#donut').click(function() {
		$('#pastry1').hide();
		$('#pastry2').hide();
		$('#pastry3').hide();
		$('#pastry5').hide();
		$('#macaroon-description').hide();
		$('#brownie-description').hide();
		$('#cookie-description').hide();
		$('#creampuff-description').hide();
		$('#pastry4').fadeIn();
		$('#donut-description').fadeIn();
	});
	
		$('#creampuff').click(function() {
		$('#pastry1').hide();
		$('#pastry2').hide();
		$('#pastry3').hide();
		$('#pastry4').hide();
		$('#macaroon-description').hide();
		$('#brownie-description').hide();
		$('#cookie-description').hide();
		$('#donut-description').hide();
		$('#pastry5').fadeIn();
		$('#creampuff-description').fadeIn();
	});
	
	$('#hidden-macaroon').click(function() {
		$('#pastry2').hide();
		$('#pastry3').hide();
		$('#pastry4').hide();
		$('#pastry5').hide();
		$('#hidden-brownie-description').hide();
		$('#hidden-cookie-description').hide();
		$('#hidden-donut-description').hide();
		$('#hidden-creampuff-description').hide();
		$('#pastry1').fadeIn();
		$('#hidden-macaroon-description').fadeIn();
	});
	
	$('#hidden-brownie').click(function() {
		$('#pastry1').hide();
		$('#pastry3').hide();
		$('#pastry4').hide();
		$('#pastry5').hide();
		$('#hidden-macaroon-description').hide();
		$('#hidden-cookie-description').hide();
		$('#hidden-donut-description').hide();
		$('#hidden-creampuff-description').hide();
		$('#pastry2').fadeIn();
		$('#hidden-brownie-description').fadeIn();
	});
	
		$('#hidden-cookie').click(function() {
		$('#pastry1').hide();
		$('#pastry2').hide();
		$('#pastry4').hide();
		$('#pastry5').hide();
		$('#hidden-macaroon-description').hide();
		$('#hidden-brownie-description').hide();
		$('#hidden-donut-description').hide();
		$('#hidden-creampuff-description').hide();
		$('#pastry3').fadeIn();
		$('#hidden-cookie-description').fadeIn();
	});
	
		$('#hidden-donut').click(function() {
		$('#pastry1').hide();
		$('#pastry2').hide();
		$('#pastry3').hide();
		$('#pastry5').hide();
		$('#hidden-macaroon-description').hide();
		$('#hidden-brownie-description').hide();
		$('#hidden-cookie-description').hide();
		$('#hidden-creampuff-description').hide();
		$('#pastry4').fadeIn();
		$('#hidden-donut-description').fadeIn();
	});
	
		$('#hidden-creampuff').click(function() {
		$('#pastry1').hide();
		$('#pastry2').hide();
		$('#pastry3').hide();
		$('#pastry4').hide();
		$('#hidden-macaroon-description').hide();
		$('#hidden-brownie-description').hide();
		$('#hidden-cookie-description').hide();
		$('#hidden-donut-description').hide();
		$('#pastry5').fadeIn();
		$('#hidden-creampuff-description').fadeIn();
	});

});

var slideIndex = 1;
showSlides(slideIndex);

function incrementSlides(arg) {
	"use strict";
  showSlides(slideIndex += arg);
}

function currentSlide(arg) {
	"use strict";
  showSlides(slideIndex = arg);
}

function showSlides(arg) {
	"use strict";
  var i;
  var slides = document.getElementsByClassName("eachSlide");
  var dots = document.getElementsByClassName("dot");
  if (arg > slides.length) {
	  slideIndex = 1;
  } 
  if (arg < 1) {
	  slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}