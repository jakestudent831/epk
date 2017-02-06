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
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
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
					side: 'left',
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

	});

})(jQuery);


// slider.
(function($) {

  $.fn.extend({

    /**
     * Creates a slider element
     *
     * @param {object} options - These are the options you may pass
     *    @param {full | fixed} options.mode
     *      if 'full' is specified, the slider's item's will occupy the entire slider. 
     *        The slider will scroll one item per move.
     *      if 'fixed' is specified, the slider's item's will be sized based on their content size.
     *        The slider will scroll a fixed amount of pixels per move.
     *    @param {int} options.scroll - if options.mode == 'fixed', then the slider will scroll
     *        this amount of pixels per move.
     */
    slider: function(options) {

        // setting options
        var defaultOptions = {
          scroll: 200,
          mode: "full"
        };
        options = $.extend(options, defaultOptions);

        // converting all selected elements into slider
        this.each(function() {

          // initializing varibale (for performance)
          var $slider = $(this);
          var $items_wrap = $(this)
            .find('.items-wrap')
            .first();

          //Hooking action listeners
          $(this)
            .find('.next-control')
            .click(next);
          $(this)
            .find('.prev-control')
            .click(prev);

          //Functions  
          function next() {
            slideFixed(-options.scroll); //slide to left
          }

          function prev() {
            slideFixed(options.scroll); //slide to right
          }

          function slideFixed(delta) {

            //No need to slide becuase the element is in view
            if ($items_wrap.prop('scrollWidth') < $slider.width()) {
              return;
            }

            var maxMarginLeft = 0;
            var minMarginLeft = $slider.width() - $items_wrap.prop('scrollWidth');

            // incrementing the margin
            var newMarginLeft = parseInt($items_wrap.css('margin-left')) + delta;

            // capping the margin if out-of-bounds
            if (newMarginLeft > maxMarginLeft) {
              newMarginLeft = maxMarginLeft;
            } else if (newMarginLeft < minMarginLeft) {
              newMarginLeft = minMarginLeft;
            }

            // set the new margin
            $items_wrap.css('margin-left', newMarginLeft);
          }

          function slideFull() {
            
            //No need to slide becuase the element is in view
            if ($items_wrap.prop('scrollWidth') < $slider.width()) {
              return;
            }

            var maxMarginLeft = 0;
            var minMarginLeft = $slider.width() - $items_wrap.prop('scrollWidth');

            // incrementing the margin
            var newMarginLeft = parseInt($items_wrap.css('margin-left')) + delta;

            // capping the margin if out-of-bounds
            if (newMarginLeft > maxMarginLeft) {
              newMarginLeft = maxMarginLeft;
            } else if (newMarginLeft < minMarginLeft) {
              newMarginLeft = minMarginLeft;
            }

            // set the new margin
            $items_wrap.css('margin-left', newMarginLeft);
          }
          
        }); //End of $().each
      } //End of function slider
  }); // End of $.fn.extend

  // init
  $(document).ready(function() {
    $('.slider').slider();
  });

})(jQuery); //End of anonymous function - the module wrapper

