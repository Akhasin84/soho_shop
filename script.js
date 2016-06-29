$(document).ready(function(){


	$('.menu').on('click',function(){
		$('.slideRightMenu').toggle();
	});
	$('.slideRightMenu').on('mouseover', 'mouseout', function(){
		$(this).toggle();
	});


	// HEAD SLIDER ///////////////////////////////////////
	var slideWidth = parseInt($('.flexy').css('width'));
	var brandPink = '#e0aac9'
	var greyColor = '#c1c4c7'
	// console.log(slideWidth);

	$('#one').on('click', function(){
		$('.innerSlide').css('margin-left', '0px');
		$(this).css('background-color', brandPink);
		$(this).siblings().css('background-color', '#c1c4c7');
	});
	$('#two').on('click', function(){
		$('.innerSlide').css('margin-left', (slideWidth * -1)+'px');
		$(this).css('background-color', brandPink);
		$(this).siblings().css('background-color', greyColor);
	});
	$('#three').on('click', function(){
		$('.innerSlide').css('margin-left', (slideWidth * 2 * -1)+'px');
		$(this).css('background-color', brandPink);
		$(this).siblings().css('background-color', greyColor);
	});
	// ////////////////////////////////////////////////////

	// SHOW MORE //////////////////////////////////////////
	$('.showMore').on('click', function(){
		$('.secondOrder').slideToggle(500);
		// $(this).children('span'),append('<span>/Less</span>');
	});
	///////////////////////////////////////////////////////

});