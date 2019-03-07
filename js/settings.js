// ----------------------------------------------------------
// LEVIDIO PERSONAL BRANDING - CV 2
// March, 5 2018
// Huda - RootPixel
// ----------------------------------------------------------

var width = $(window).width();
var scroll = $(window).scrollTop();

$(document).ready(function () {
	//smoothscroll
	$("a[target=self]").on('click', function(event) {
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 100},'slow');
		return false;
	});

	// Get Viewport: Remove attribute on small device
	if (width < 575) {
		$('div').removeAttr('data-wow-delay');
	}
});

// Fixed menu when scrolling
$(window).scroll(function (event) {
	var scroll = $(window).scrollTop();
	if(scroll > 0){
		$('nav').addClass('navbar-purple');
	} else{
		$('nav').removeClass('navbar-purple');
	}

});

// Tooltip
$('[data-toggle="tooltip"]').tooltip();

// Wow JS
new WOW().init();
