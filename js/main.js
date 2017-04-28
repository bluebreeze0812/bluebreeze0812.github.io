/*
	Spectral by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel
		.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#banner'),
			$header = $('#header'),
			$pagebanner = $('#page-banner');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
					var delay = 0;
					$(".post-panel").each(function() {
						$(this).css({
							"transition": "transform 0.75s ease" + " " + delay + "s" + ", " + 
							"opacity 0.75s ease" + " " + delay + "s" + ", " + 
							"box-shadow 0.3s"
						});
						delay += 0.15;
					});
				window.setTimeout(function() {
					$body.removeClass('is-loading');
					$(".post-panel").removeClass("post-loading");
				}, 100);
			});

		// Mobile?
			if (skel.vars.mobile)
				$body.addClass('is-mobile');
			else
				skel
					.on('-medium !medium', function() {
						$body.removeClass('is-mobile');
					})
					.on('+medium', function() {
						$body.addClass('is-mobile');
					});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly')
				.scrolly({
					speed: 1500,
					offset: $header.outerHeight()
				});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});
			}
			
			if ($pagebanner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$pagebanner.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});
			}
			
			$("#menu").children().css('outline', 'none');
			
			$("#rocket > a").on('click', function(event) {
				if (this.hash !== '') {
					event.preventDefault();
					
					var hash = this.hash;
					
					$('html, body').animate({
						scrollTop: $(hash).offset().top
					}, 900, function() {
						window.location.hash = hash;
					});
				} // end if
			});
			
//			$("#page-main").scrollex({
//				bottom: window.innerHeight,
//				terminate: function() { $("#rocket").css('opacity', 1); },
//				enter:     function() { $("#rocket").css('opacity', 0); },
//				leave:     function() { $("#rocket").css('opacity', 1); }
//			});
			$window.scroll(function() {
				var vp = document.documentElement.clientHeight;
				var now = $window.scrollTop();
				if (now >= vp) {
					$("#rocket").css('opacity', 1);
				} else {
					$("#rocket").css('opacity', 0);
				}
			});
			
			$(".contact-form").submit(function() {
				var textlen = $(this).find("textarea").val().length;
				if (textlen < 20) {
					return false;
				} else {
					return true;
				}
			});
	});

})(jQuery);
