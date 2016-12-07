//=include lib/jquery-3.1.1.min.js
//=include common.js

$(document).ready(function() {
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
