/*
	Massively by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$nav = $('#nav'),
		$main = $('#main'),
		$navPanelToggle, $navPanel, $navPanelInner;

	// Breakpoints.
	breakpoints({
		default: ['1681px', null],
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: ['361px', '480px'],
		xxsmall: [null, '360px']
	});

	/**
	 * Applies parallax scrolling to an element's background image.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._parallax = function (intensity) {

		var $window = $(window),
			$this = $(this);

		if (this.length == 0 || intensity === 0)
			return $this;

		if (this.length > 1) {

			for (var i = 0; i < this.length; i++)
				$(this[i])._parallax(intensity);

			return $this;

		}

		if (!intensity)
			intensity = 0.25;

		$this.each(function () {

			var $t = $(this),
				$bg = $('<div class="bg"></div>').appendTo($t),
				on, off;

			on = function () {

				$bg
					.removeClass('fixed')
					.css('transform', 'matrix(1,0,0,1,0,0)');

				$window
					.on('scroll._parallax', function () {

						var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);

						$bg.css('transform', 'matrix(1,0,0,1,0,' + (pos * intensity) + ')');

					});

			};

			off = function () {

				$bg
					.addClass('fixed')
					.css('transform', 'none');

				$window
					.off('scroll._parallax');

			};

			// Disable parallax on ..
			if (browser.name == 'ie'			// IE
				|| browser.name == 'edge'			// Edge
				|| window.devicePixelRatio > 1		// Retina/HiDPI (= poor performance)
				|| browser.mobile)					// Mobile devices
				off();

			// Enable everywhere else.
			else {

				breakpoints.on('>large', on);
				breakpoints.on('<=large', off);

			}

		});

		$window
			.off('load._parallax resize._parallax')
			.on('load._parallax resize._parallax', function () {
				$window.trigger('scroll');
			});

		return $(this);

	};

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Scrolly.
	$('.scrolly').scrolly();

	// Background.
	$wrapper._parallax(0.925);

	// Nav Panel.

	// Toggle.
	$navPanelToggle = $(
		'<a href="#navPanel" id="navPanelToggle">Menu</a>'
	)
		.appendTo($wrapper);

	// Change toggle styling once we've scrolled past the header.
	$header.scrollex({
		bottom: '5vh',
		enter: function () {
			$navPanelToggle.removeClass('alt');
		},
		leave: function () {
			$navPanelToggle.addClass('alt');
		}
	});

	// Panel.
	$navPanel = $(
		'<div id="navPanel">' +
		'<nav>' +
		'</nav>' +
		'<a href="#navPanel" class="close"></a>' +
		'</div>'
	)
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'right',
			target: $body,
			visibleClass: 'is-navPanel-visible'
		});

	// Get inner.
	$navPanelInner = $navPanel.children('nav');

	// Move nav content on breakpoint change.
	var $navContent = $nav.children();

	breakpoints.on('>medium', function () {

		// NavPanel -> Nav.
		$navContent.appendTo($nav);

		// Flip icon classes.
		$nav.find('.icons, .icon')
			.removeClass('alt');

	});

	breakpoints.on('<=medium', function () {

		// Nav -> NavPanel.
		$navContent.appendTo($navPanelInner);

		// Flip icon classes.
		$navPanelInner.find('.icons, .icon')
			.addClass('alt');

	});

	// Hack: Disable transitions on WP.
	if (browser.os == 'wp'
		&& browser.osVersion < 10)
		$navPanel
			.css('transition', 'none');

	// Intro.
	var $intro = $('#intro');

	if ($intro.length > 0) {

		// Hack: Fix flex min-height on IE.
		if (browser.name == 'ie') {
			$window.on('resize.ie-intro-fix', function () {

				var h = $intro.height();

				if (h > $window.height())
					$intro.css('height', 'auto');
				else
					$intro.css('height', h);

			}).trigger('resize.ie-intro-fix');
		}

		// Hide intro on scroll (> small).
		breakpoints.on('>small', function () {

			$main.unscrollex();

			$main.scrollex({
				mode: 'bottom',
				top: '25vh',
				bottom: '-50vh',
				enter: function () {
					$intro.addClass('hidden');
				},
				leave: function () {
					$intro.removeClass('hidden');
				}
			});

		});

		// Hide intro on scroll (<= small).
		breakpoints.on('<=small', function () {

			$main.unscrollex();

			$main.scrollex({
				mode: 'middle',
				top: '15vh',
				bottom: '-15vh',
				enter: function () {
					$intro.addClass('hidden');
				},
				leave: function () {
					$intro.removeClass('hidden');
				}
			});

		});

	}

})(jQuery);

// Controls styling of website based on month
var date = new Date();
var month = new Date().getMonth() + 1;

switch (month) {
	case 10:
		// Halloween
		$('#main').addClass('halloween-background');
		$('#nav').addClass('halloween-background');
		$("<h2>🎃 Happy Halloween! 🎃</h2>").insertAfter("#title-text");

		loadConfettiPreset(tsParticles);

		tsParticles.load("tsparticles", {
			"emitters": [
				{
					"position": {
						"x": 0,
						"y": 30
					},
					"rate": {
						"quantity": 5,
						"delay": 0.15
					},
					"particles": {
						"move": {
							"direction": "top-right",
							"outModes": {
								"top": "none",
								"left": "none",
								"default": "destroy"
							}
						}
					}
				},
				{
					"position": {
						"x": 100,
						"y": 30
					},
					"rate": {
						"quantity": 5,
						"delay": 0.15
					},
					"particles": {
						"move": {
							"direction": "top-left",
							"outModes": {
								"top": "none",
								"right": "none",
								"default": "destroy"
							}
						}
					}
				}
			],
			"particles": {
				"color": {
					"value": [
						"#F4831B",
						"#FF0000",
						"#902EBB",
					]
				},
				"move": {
					"decay": 0.05,
					"direction": "top",
					"enable": true,
					"gravity": {
						"enable": true
					},
					"outModes": {
						"top": "none",
						"default": "destroy"
					},
					"speed": {
						"min": 10,
						"max": 50
					}
				},
				"number": {
					"value": 0
				},
				"opacity": {
					"value": 1
				},
				"rotate": {
					"value": {
						"min": 0,
						"max": 360
					},
					"direction": "random",
					"animation": {
						"enable": true,
						"speed": 30
					}
				},
				"tilt": {
					"direction": "random",
					"enable": true,
					"value": {
						"min": 0,
						"max": 360
					},
					"animation": {
						"enable": true,
						"speed": 30
					}
				},
				"size": {
					"value": {
						"min": 2,
						"max": 4
					},
					"animation": {
						"enable": true,
						"startValue": "min",
						"count": 1,
						"speed": 16,
						"sync": true
					}
				},
				"roll": {
					"darken": {
						"enable": true,
						"value": 25
					},
					"enable": true,
					"speed": {
						"min": 5,
						"max": 15
					}
				},
				"wobble": {
					"distance": 30,
					"enable": true,
					"speed": {
						"min": -7,
						"max": 7
					}
				},
				"shape": {
					"type": "circle",
					"options": {}
				}
			}
		});
		break;
	case 12:

		// New Years
		if (date.getUTCDate() === 31) {
			$('#main').addClass('new-years-background');
			$('#nav').addClass('new-years-background');
			$("<h2>🎊 Happy New Years! 🎊</h2>").insertAfter("#title-text");

			loadConfettiPreset(tsParticles);

			tsParticles.load("tsparticles", {
				"fullScreen": {
					"zIndex": 1
				},
				"particles": {
					"number": {
						"value": 0
					},
					"color": {
						"value": [
							"#ffffff",
							"#ff0000",
							"#0000ff"
						]
					},
					"shape": {
						"type": [
							"circle",
							"square"
						],
						"options": {}
					},
					"opacity": {
						"value": 1,
						"animation": {
							"enable": true,
							"minimumValue": 0,
							"speed": 2,
							"startValue": "max",
							"destroy": "min"
						}
					},
					"size": {
						"value": 4,
						"random": {
							"enable": true,
							"minimumValue": 2
						}
					},
					"links": {
						"enable": false
					},
					"life": {
						"duration": {
							"sync": true,
							"value": 5
						},
						"count": 1
					},
					"move": {
						"enable": true,
						"gravity": {
							"enable": true,
							"acceleration": 10
						},
						"speed": {
							"min": 10,
							"max": 20
						},
						"decay": 0.1,
						"direction": "none",
						"straight": false,
						"outModes": {
							"default": "destroy",
							"top": "none"
						}
					},
					"rotate": {
						"value": {
							"min": 0,
							"max": 360
						},
						"direction": "random",
						"move": true,
						"animation": {
							"enable": true,
							"speed": 60
						}
					},
					"tilt": {
						"direction": "random",
						"enable": true,
						"move": true,
						"value": {
							"min": 0,
							"max": 360
						},
						"animation": {
							"enable": true,
							"speed": 60
						}
					},
					"roll": {
						"darken": {
							"enable": true,
							"value": 25
						},
						"enable": true,
						"speed": {
							"min": 15,
							"max": 25
						}
					},
					"wobble": {
						"distance": 30,
						"enable": true,
						"move": true,
						"speed": {
							"min": -15,
							"max": 15
						}
					}
				},
				"emitters": {
					"life": {
						"count": 0,
						"duration": 0.1,
						"delay": 0.4
					},
					"rate": {
						"delay": 0.1,
						"quantity": 150
					},
					"size": {
						"width": 0,
						"height": 0
					}
				}
			});
			break;
		}

		// Christmas
		// Controls particles, CREDIT: https://codepen.io/dariodev/pen/JRqbgK
		$('#main').addClass('christmas-background');
		$('#nav').addClass('christmas-background');
		$("<h2>🎅 Merry Christmas! 🎅</h2>").insertAfter("#title-text");

		tsParticles.load("tsparticles", {
			particles: {
				number: {
					value: 52,
					density: {
						enable: true,
						value_area: 631.3280775270874
					}
				},
				color: {
					value: "#fff"
				},
				shape: {
					type: "circle",
					stroke: {
						width: 0,
						color: "#000000"
					},
					polygon: {
						nb_sides: 5
					},
					image: {
						src: "img/github.svg",
						width: 100,
						height: 100
					}
				},
				opacity: {
					value: 0.5,
					random: true,
					anim: {
						enable: false,
						speed: 1,
						opacity_min: 0.1,
						sync: false
					}
				},
				size: {
					value: 5,
					random: true,
					anim: {
						enable: false,
						speed: 40,
						size_min: 0.1,
						sync: false
					}
				},
				line_linked: {
					enable: false,
					distance: 500,
					color: "#ffffff",
					opacity: 0.4,
					width: 2
				},
				move: {
					enable: true,
					speed: 1.5,
					direction: "bottom",
					random: false,
					straight: false,
					out_mode: "out",
					bounce: false,
					attract: {
						enable: false,
						rotateX: 600,
						rotateY: 1200
					}
				}
			},
			retina_detect: true
		});
		break;
	default:
		// Default
		$('#main').addClass('regular-background');
		$('#nav').addClass('regular-background');
}