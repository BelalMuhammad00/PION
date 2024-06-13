/*---------------------------------------------------------------------------------
/*
/* Main JS
/*
-----------------------------------------------------------------------------------*/  

(function($) {

// animate on scroll
	AOS.init();

	// typing animation 
	  var typed = new Typed('#element', {
		strings: ['Market Research and Analysis', 'Strategy Development.','Branding and Identity','Creative Services','Digital Marketing','Advertising ','Public Relations','Consulting and Training'],
		typeSpeed: 60,
		backSpeed: 60,
		
		loop:true,
		smartBackspace: true,
	  });
	

	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function() {
	console.log('callback - particles.js config loaded');
  });

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {

      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      });       

  	})


  	/*----------------------------------------------------*/
  	/* Flexslider
  	/*----------------------------------------------------*/
  	$(window).load(function() {

	  	$('#hero-slider').flexslider({
	   	namespace: "flex-",
	      controlsContainer: ".hero-container",
	      animation: 'fade',
	      controlNav: true,
	      directionNav: false,
	      smoothHeight: true,
	      slideshowSpeed: 7000,
	      animationSpeed: 600,
	      randomize: false,
	      before: function(slider){
			   $(slider).find(".animated").each(function(){
			   	$(this).removeAttr("class");
			  	});			  	
			},
			start: function(slider){
			   $(slider).find(".flex-active-slide")
			           	.find("h1").addClass("animated fadeInDown show")
			           	.next().addClass("animated fadeInUp show");
			           		
			   $(window).trigger('resize');		  			 
			},
			after: function(slider){
			 	$(slider).find(".flex-active-slide")
			           	.find("h1").addClass("animated fadeInDown show")
			           	.next().addClass("animated fadeInUp show");			  
			}
	   });

	   $('#testimonial-slider').flexslider({
	   	namespace: "flex-",
	      controlsContainer: "",
	      animation: 'slide',
	      controlNav: true,
	      directionNav: false,
	      smoothHeight: true,
	      slideshowSpeed: 7000,
	      animationSpeed: 600,
	      randomize: false,
	   });

   });


   /*----------------------------------------------------*/
	/* Adjust Primary Navigation Background Opacity
	------------------------------------------------------*/
   $(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
      var header = $('#main-header');

	   if ((y > h + 30 ) && ($(window).outerWidth() > 768 ) ) {
	      header.addClass('opaque');	      
	   }
      else {
         if (y < h + 30) {
            header.removeClass('opaque');
         }
         else {
            header.addClass('opaque');
         }
      }

	});


   /*----------------------------------------------------*/
  	/* Highlight the current section in the navigation bar
  	------------------------------------------------------*/

	document.addEventListener("DOMContentLoaded", function() {
		const sections = document.querySelectorAll("section");
		const navLinks = document.querySelectorAll("#nav a");
	  
		function highlightNavLink() {
		  const scrollPosition = window.scrollY;
	  
		  sections.forEach(section => {
			const top = section.offsetTop - 50;
			const bottom = top + section.clientHeight;
	  
			if (scrollPosition >= top && scrollPosition < bottom) {
			  navLinks.forEach(link => {
				link.classList.remove("current");
				if (link.getAttribute("href") === `#${section.id}`) {
				  link.classList.add("current");
				}
			  });
			}
		  });
		}
	  
		highlightNavLink();
	  
		window.addEventListener("scroll", highlightNavLink);
	  });

   /*----------------------------------------------------*/
  	/* FitText Settings
  	------------------------------------------------------ */
  	setTimeout(function() {

   	$('#hero-slider h1').fitText(1, { minFontSize: '30px', maxFontSize: '49px' });

  	}, 100);


  	/*-----------------------------------------------------*/
  	/* Mobile Menu
   ------------------------------------------------------ */  
   var menu_icon = $("<span class='menu-icon'>Menu</span>");
  	var toggle_button = $("<a>", {                         
                        id: "toggle-btn", 
                        html : "",
                        title: "Menu",
                        href : "#" } 
                        );
  	var nav_wrap = $('nav#nav-wrap')
  	var nav = $("ul#nav");  
   
   /* if JS is enabled, remove the two a.mobile-btns 
  	and dynamically prepend a.toggle-btn to #nav-wrap */
  	nav_wrap.find('a.mobile-btn').remove(); 
  	toggle_button.append(menu_icon); 
   nav_wrap.prepend(toggle_button); 

  	toggle_button.on("click", function(e) {
   	e.preventDefault();
    	nav.slideToggle("fast");     
  	});

  	if (toggle_button.is(':visible')) nav.addClass('mobile');
  	$(window).resize(function() {
   	if (toggle_button.is(':visible')) nav.addClass('mobile');
    	else nav.removeClass('mobile');
  	});

  	$('ul#nav li a').on("click", function() {      
   	if (nav.hasClass('mobile')) nav.fadeOut('fast');      
  	});


  	/*----------------------------------------------------*/
  

   /*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/
    $('.item-wrap a').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 300,
       showCloseBtn: false,
       mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });


   /*----------------------------------------------------*/
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */  	 
	$('input, textarea').placeholder()  

   
	/*----------------------------------------------------*/

	
	// ------------------------------------------------------*/

	/* local validation */
	
		emailjs.init({
			publicKey: 'Vzk3M-TaYLFhb9m93',
		  });
	
	
	document.getElementById('contactForm').addEventListener('submit', function(event) {
		var valid = true;
		var templateId ="template_kkt7lud" ;

		var service = "service_zpkmr2o";
		const form1 = this;
		// Name validation
		var name = document.getElementById('Name');
		var nameError = document.getElementById('nameError');
		if (name.value.length < 2) {
			valid = false;
			nameError.classList.remove('hidden');
		} else {
			nameError.classList.add('hidden');
		}

		// Email validation
		var email = document.getElementById('email');
		var emailError = document.getElementById('emailError');
		if (!email.validity.valid) {
			valid = false;
			emailError.classList.remove('hidden');
		} else {
			emailError.classList.add('hidden');
		}

		// Phone validation
		var phone = document.getElementById('phone');
		var phoneError = document.getElementById('phoneError');
		var phonePattern = /^(010|011|012|015)\d{8}$/;
		if (!phone.value && !phonePattern.test(phone.value)) {
			valid = false;
			phoneError.classList.remove('hidden');
		} else {
			phoneError.classList.add('hidden');
		}

		// Message validation
		var message = document.getElementById('message');
		var messageError = document.getElementById('messageError');
		if (message.value.trim() === "") {
			valid = false;
			messageError.classList.remove('hidden');
		} else {
			messageError.classList.add('hidden');
		}

		
		
		// Prevent form submission if validation fails
		if (valid) {
			emailjs.sendForm(service, templateId, this)
			.then(() => {
				console.log('SUCCESS!');
			}, (error) => {
				console.log('FAILED...', error);
			});
		
		} else {
			event.preventDefault();
		
			document.getElementById('submit-loader').classList.remove('hidden');
		

	
		}
	
	
	
	

	


	}); 

// animate on scroll for headers


	//end  animate on scroll for headers

})(jQuery);

