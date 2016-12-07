//=include lib/jquery-3.1.1.min.js
//=include common.js

$(document).ready(function() {

	// close modal
	$('.modal-close').click(function(e) {
		e.preventDefault();
		$(this).parent().hide();
	});

	$('.modal-open').click(function(e) {
		e.preventDefault();
		$('.modal-js').show();
	});


	// blur
	$('input').each(function(){
		var placeholder = $(this).attr('placeholder');

		$(this).focus(function(){
			$(this).attr('placeholder', '');
		});
		$(this).blur(function(){
			$(this).attr('placeholder', placeholder);
		});
	});

	//nav
	$('.js-nav-btn').on('click', function() {
		$('.js-nav').toggleClass('is-active');
		return false;
	});
	$('body').on('click', function() {
		$('.js-nav').removeClass('is-acitve');
	});
	$('.js-nav').on('click', function(event) {
		event.stopPropagation();
	});
});
