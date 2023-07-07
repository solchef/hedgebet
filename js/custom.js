AOS.init({
	duration: 800,
	easing: 'slide',
	once: true
});

$(function(){

	'use strict';

	$(".loader").delay(200).fadeOut("slow");
  $("#overlayer").delay(200).fadeOut("slow");	

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$('body').find('.js-menu-toggle').removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$('body').find('.js-menu-toggle').addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
					$('body').find('.js-menu-toggle').removeClass('active');
				}
	    }
		});
	}; 
	siteMenuClone();

	var owlPlugin = function() {
		if ( $('.owl-2-slider').length > 0 ) {
			var owl2 = $('.owl-2-slider').owlCarousel({
		    loop: true,
		    autoHeight: true,
		    margin: 40,
		    autoplay: true,
		    smartSpeed: 700,
		    items: 2,
		    stagePadding: 0,
		    nav: true,
		    dots: true,
		    navText: ['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>'],
		    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        800: {
							items:2
	        },
	        1000:{
	            items:2
	        },
	        1100:{
	            items:2
	        }
	    	}
			});

			$('.js-custom-next-v2').click(function(e) {
				e.preventDefault();
				owl2.trigger('next.owl.carousel');
			})
			$('.js-custom-prev-v2').click(function(e) {
				e.preventDefault();
				owl2.trigger('prev.owl.carousel');
			})
		}
		if ( $('.owl-3-slider').length > 0 ) {
			var owl3 = $('.owl-3-slider').owlCarousel({
		    loop: true,
		    autoHeight: true,
		    margin: 40,
		    autoplay: true,
		    smartSpeed: 700,
		    items: 4,
		    stagePadding: 0,
		    nav: true,
		    dots: true,
		    navText: ['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>'],
		    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        800: {
							items:2
	        },
	        1000:{
	            items:2
	        },
	        1100:{
	            items:3
	        }
	    	}
			});
		}
		
		if ( $('.owl-4-slider').length > 0 ) {
			var owl4 = $('.owl-4-slider').owlCarousel({
		    loop: true,
		    autoHeight: true,
		    margin: 10,
		    autoplay: true,
		    smartSpeed: 700,
		    items: 4,
		    nav: false,
		    dots: true,
		    navText: ['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>'],
		    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        800: {
							items:2
	        },
	        1000:{
	            items:3
	        },
	        1100:{
	            items:4
	        }
	    	}
			});
		}
		

		if ( $('.owl-single-text').length > 0 ) {
			var owlText = $('.owl-single-text').owlCarousel({
		    loop: true,
		    autoHeight: true,
		    margin: 0,
		    autoplay: true,
		    smartSpeed: 1200,
		    items: 1,
		    nav: false,
		    navText: ['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>']
			});
		}
		if ( $('.owl-single').length > 0 ) {
			var owl = $('.owl-single').owlCarousel({
		    loop: true,
		    autoHeight: true,
		    margin: 0,
		    autoplay: true,
		    smartSpeed: 800,
		    mouseDrag: false,
		    touchDrag: false,
		    items: 1,
		    nav: false,
		    navText: ['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>'],
		    onChanged: changed,
			});

			function changed(event) {
				var i = event.item.index;
				if ( i == 0 || i == null) {
					i = 1;
				} else {
					i = i - 1;

					$('.js-custom-dots a').removeClass('active');
					$('.js-custom-dots a[data-index="'+i+'"]').addClass('active');
				}				
			}

			$('.js-custom-dots a').each(function(i) {
				var i = i + 1;
				$(this).attr('data-index', i);
			});

			$('.js-custom-dots a').on('click', function(e){
				e.preventDefault();
				owl.trigger('stop.owl.autoplay');
				var k = $(this).data('index');
				k = k - 1;
				owl.trigger('to.owl.carousel', [k, 500]);
			})

		}

	}
	owlPlugin();

	var OnePageNavigation = function() {
    var navToggler = $('.site-menu-toggle');
   	$("body").on("click", ".site-nav .site-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
      e.preventDefault();
      var hash = this.hash;
      
        $('html, body').animate({

          scrollTop: $(hash).offset().top
        }, 400, 'easeInOutExpo', function(){
          window.location.hash = hash;
        });

    });

    // $("#menu li a[href^='#']").on('click', function(e){
    //   e.preventDefault();
    //   navToggler.trigger('click');
    // });

    $('body').on('activate.bs.scrollspy', function () {
      // console.log('nice');
      // alert('yay');
    })
  };
  OnePageNavigation();

  var scrollWindow = function() {
    $(window).scroll(function(){
      var $w = $(this),
          st = $w.scrollTop(),
          navbar = $('.js-site-navbar'),
          sd = $('.js-scroll-wrap'), 
          toggle = $('.site-menu-toggle');

      // if ( toggle.hasClass('open') ) {
      //   $('.site-menu-toggle').trigger('click');
      // }
      

      if (st > 150) {
        if ( !navbar.hasClass('scrolled') ) {
          navbar.addClass('scrolled');  
        }
      } 
      if (st < 150) {
        if ( navbar.hasClass('scrolled') ) {
          navbar.removeClass('scrolled sleep');
        }
      } 
      if ( st > 350 ) {
        if ( !navbar.hasClass('awake') ) {
          navbar.addClass('awake'); 
        }
        
        if(sd.length > 0) {
          sd.addClass('sleep');
        }
      }
      if ( st < 350 ) {
        if ( navbar.hasClass('awake') ) {
          navbar.removeClass('awake');
          navbar.addClass('sleep');
        }
        if(sd.length > 0) {
          sd.removeClass('sleep');
        }
      }
    });
  };
  scrollWindow();

	var counter = function() {
		
		$('.count-numbers').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ut-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.counter > span').each(function(){
					var $this = $(this),
						num = $this.data('number');
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 5000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	// jarallax
	var jarallaxPlugin = function() {
		if ( $('.jarallax').length > 0 ) {
			$('.jarallax').jarallax({
		    speed: 0.2
			});
		}
	};
	jarallaxPlugin();

	

	var accordion = function() {
		$('.btn-link[aria-expanded="true"]').closest('.accordion-item').addClass('active');
	  $('.collapse').on('show.bs.collapse', function () {
		  $(this).closest('.accordion-item').addClass('active');
		});

	  $('.collapse').on('hidden.bs.collapse', function () {
		  $(this).closest('.accordion-item').removeClass('active');
		});
	}
	accordion();

	var links = $('.js-hover-focus-one .service-sm')
		.mouseenter(function(){
			links.addClass('unfocus');
			$(this).removeClass('unfocus');
		}).mouseleave(function(){
			$(this).removeClass('unfocus');
			links.removeClass('unfocus');
		})


		

})



        /* ----------------------------------------------------------- */
        /*  SIGN IN
        /* ----------------------------------------------------------- */
        let login2fa = false;

        $("#login-form").submit(function (e) {

            e.preventDefault(); // avoid to execute the actual submit of the form.

            var form = $(this).serializeArray().reduce(function (obj, item) {
                obj[item.name] = item.value;
                return obj;
            }, {});
            let action = login2fa ? 'login/2fa' : 'login';
             form.brand = 'easybitmarkets';
             form.captcha = ''
            $.ajax({
                type: 'POST',
                url: 'https://rest.siera.tech/v1/platform/auth/' + action,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify(form), // serializes the form's elements.
                success: function (data, textStatus, request) {
                    if (data.status === 200) {
                        login2fa = !!data.data.two_factors;
                        if(login2fa){
                            let field2fa = '<div class="form-group">' +
                                '<input class="form-control" name="token" id="code" placeholder="CODE" type="text" required>' +
                                '</div>';
                            $("#password").parent().after(field2fa);
                            $("#code").focus();
                        }else{
                            let token = request.getResponseHeader('Authorization');
                            cookies.set('Authorization', token, {path: '/', domain: 'easybitmarkets.com'});
                            location.href = 'https://app.easybitmarkets.com/';
                        }
                    } else {
                        notifyInvalidLogin.error(data.data);
                    }
                }
            });
        });
        /* ----------------------------------------------------------- */
        /*  AFFILIATE }*-* SOURCE = hashSource *-*{
        /* ----------------------------------------------------------- */

        const affi = document.createElement('a');
        affi.href = window.location;
        const urlSource = affi.search;
        if (urlSource.split('source=').length >= 2) {
            const typeSource = urlSource.split('source=');
            let hashSource = '';
            if(typeSource.length > 1) hashSource = typeSource[1];
            document.cookie = `source=${hashSource}; max-age=3600`;
        }
        function getCookie(source) {
            let matches = document.cookie.match(new RegExp(
                "(?:^|; )" + source.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }
        const affiSource = getCookie('source');
        /* ----------------------------------------------------------- */
        /*  SIGN UP
        /* ----------------------------------------------------------- */

        $("#button-submit").click(function () {
            $(".error").hide();
            let passOne = $("#password").val();
            let passTwo = $("#password2").val();
            if (passOne != passTwo) {
                $("#password").css({"border": "1px solid red"});
                $("#password2").css({"border": "1px solid red"});
                $(".invalid-pass").css({"display": "block"}).delay(2000).fadeOut(300);
                $("#button-submit").attr('type', 'button');
                setTimeout(() => {
                    $("#password").css({"border": ""});
                    $("#password2").css({"border": ""});
                    $("#password").val('');
                    $("#password2").val('');
                }, 2000);
            } else {
                $("#button-submit").attr('type', 'submit');
            }
        });
        $("#form").submit(function (e) {

            e.preventDefault(); // avoid to execute the actual submit of the form.

            var form = $(this).serializeArray().reduce(function (obj, item) {
                obj[item.name] = item.value;
                return obj;
            }, {});
            form['source'] = affiSource;
            form['brand'] = 'easybitmarkets';
            form['phone'] = form['phone'].replace(/ /g, '')

            $.ajax({
                type: 'POST',
                url: 'https://rest.siera.tech/v1/platform/registration',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify(form), // serializes the form's elements.
                success: function (data, textStatus, request) {
                    if (data.data === 'VALIDATION_EMAIL_ALREADY_EXIST') {
                        $(".email-reg-error").css({"display": "block"});
                        $("#email").addClass();
                    }
                    if (data.status === 200) {
                      cookies.set('Authorization', data.__token, {path: '/', domain: 'easybitmarkets.com'});
                      location.href = 'https://app.easybitmarkets.com/';

                        // $("#registration-box").html(`
                        // <div class="white">
                        // <h1>SUCCESS</h1>
                        // <h4>Thank you for registration!</h4>
                        // <h4>The confirmation account link was sent to your email.</h4>
                        // </div>`);
                    }
                }
            });
        });

        $("#select_country").click(function() {
            $(".block_country_select").css({"border": "1px solid green"});
        });
        /* ----------------------------------------------------------- */
        /*  SIGN OUT
        /* ----------------------------------------------------------- */


        $("body").on('click', '#logout', function (e) {
            e.preventDefault();
            cookies.del('Authorization', {path: '/', domain: '.easybitmarkets.com'});
            location.href = './';
        });

        /* ----------------------------------------------------------- */
        /*  FORGOT PASSWORD START
        /* ----------------------------------------------------------- */

        $( "#forgot-password" ).click(function() {
            $("#login-form").removeAttr("style").hide();
            $("#forgot-form").show();
        });
        $( "#forgot-password--back" ).click(function() {
            $("#login-form").show();
            $("#forgot-form").removeAttr("style").hide();
        });

        $("#forgot-form").submit(function (e) {
            e.preventDefault(); // avoid to execute the actual submit of the form.
            const form = $(this).serializeArray().reduce(function (item) {
                return item.value;
            });
            form['brand'] = 'easybitmarkets';

            $.ajax({
                type: 'POST',
                url: 'https://rest.siera.tech/v1/platform/user/forgot/password/' + form.value,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                data: JSON.stringify(form), 
                success: function(data) {
                    if (data.data === 'CAN_NOT_FIND_USER') {
                        $("#forgot-password-input").css({"border": "1px solid red"});
                        $(".invalid-email").css({"display": "block"})
                    }
                    if (data.status === 200) {
                        cookies.del('Authorization', {path: '/', domain: '.easybitmarkets.com'});
                        $("#forgot-form").html(`<h1 class="white title--center">SUCCESS</h1>
                            <h4 class="white title--center">An instruction message was sent to your email.</h4>`);
                    }
                }
            });
        });

        /* ----------------------------------------------------------- */
        /*  FORGOT PASSWORD }*-* TOKEN = hash *-*{ start
        /* ----------------------------------------------------------- */

        const parser = document.createElement('a');
        parser.href = window.location;
        const urlToken = parser.search;
        const type = urlToken.split('token=');
        let hash = '';
        if(type.length > 1) hash = type[1];

        /* ----------------------------------------------------------- */
        /*  FORGOT PASSWORD }*-* TOKEN = hash *-*{ end
        /* ----------------------------------------------------------- */

        $("#forgot-form-password").submit(function (e) {

            e.preventDefault(); // avoid to execute the actual submit of the form.

            var form = $(this).serializeArray().reduce(function (obj, item) {
                obj[item.name] = item.value;
                return obj;
            }, {});

            console.log(form);

            $.ajax({
                type: 'POST',
                url: 'https://app.easybitmarkets.com:8085/user/restore/' + hash,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify(form), // serializes the form's elements.
                success: function (data) {
                    if (data.data === 'CAN_NOT_FIND_USER') {
                        $("#password-change").css({"border": "1px solid red"});
                        $(".invalid-email").css({"display": "block"})
                    }
                    if (data.data === 'INVALID_TOKEN') {
                        $(".invalid-token").css({"display": "block"})
                    }
                    if (data.data === 'Success') {
                        $("#forgot-form-password").html(`<h1 class="white">SUCCESS</h1>
                            <h4 class="white">Your password changed</h4>`);
                    }
                }
            });
        });


        const items = document.querySelectorAll(".accordion a");
function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}
items.forEach(item => item.addEventListener('click', toggleAccordion));


        /* ----------------------------------------------------------- */
        /*  FORGOT PASSWORD END
        /* ----------------------------------------------------------- */



