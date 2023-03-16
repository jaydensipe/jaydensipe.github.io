/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$main = $('#main');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: ['361px', '480px'],
		xxsmall: [null, '360px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});


	// Nav.
	var $nav = $('#nav');

	if ($nav.length > 0) {

		// Shrink effect.
		$main
			.scrollex({
				mode: 'top',
				enter: function () {
					$nav.addClass('alt');
				},
				leave: function () {
					$nav.removeClass('alt');
				},
			});

		// Links.
		var $nav_a = $nav.find('a');

		$nav_a
			.scrolly({
				speed: 1000,
				offset: function () { return $nav.height(); }
			})
			.on('click', function () {

				var $this = $(this);

				// External link? Bail.
				if ($this.attr('href').charAt(0) != '#')
					return;

				// Deactivate all links.
				$nav_a
					.removeClass('active')
					.removeClass('active-locked');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
				$this
					.addClass('active')
					.addClass('active-locked');

			})
			.each(function () {

				var $this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
				if ($section.length < 1)
					return;

				// Scrollex.
				$section.scrollex({
					mode: 'middle',
					initialize: function () {

						// Deactivate section.
						if (browser.canUse('transition'))
							$section.addClass('inactive');

					},
					enter: function () {

						// Activate section.
						$section.removeClass('inactive');

						// No locked links? Deactivate all links and activate this section's one.
						if ($nav_a.filter('.active-locked').length == 0) {

							$nav_a.removeClass('active');
							$this.addClass('active');

						}

						// Otherwise, if this section's link is the one that's locked, unlock it.
						else if ($this.hasClass('active-locked'))
							$this.removeClass('active-locked');

					}
				});

			});

	}

	// Scrolly.
	$('.scrolly').scrolly({
		speed: 1000
	});

})(jQuery);

// Controls styling of website based on month
var date = new Date();
var month = new Date().getMonth() + 1;

switch (month) {
	case 10:
		// Halloween
		$('#main').addClass('halloween-background');
		$("<p>Happy Halloween! 🎃</p>").insertAfter("#name-text");

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
			$("<p>Happy New Years! 🎊</p>").insertAfter("#name-text");
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
		$("<p>Merry Christmas! 🎅</p>").insertAfter("#name-text");


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
		$('#main').addClass('regular-background');;
}
