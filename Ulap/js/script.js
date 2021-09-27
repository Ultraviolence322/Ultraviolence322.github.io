$(document).ready(function() {
	$(window).scroll(function(){
		if($(window).scrollTop()>100){
			$('.header__top').addClass('header__fixed');	
		}else{
			$('.header__top').removeClass('header__fixed');	
		}
	});
	$("a[href^='#']").click(function(){
		var down = $(this).attr('href');
		$('html, body').animate({scrollTop: $(down).offset().top+'px'});
		return false;
	})
	$('.header__get, .header__get2').click(function(){
		$('.header__connect').fadeIn();
		$('body').css('overflow','hidden')
	})
	$('.form-close').click(function(){
		$('.header__connect').fadeOut();
		$('body').css('overflow','auto ')
	})

	var mixer = mixitup('.portfolio__items');

 	 $('.portfolio__items').magnificPopup({
 	 	delegate: 'a',
		type: 'image',
		gallery:{enabled:true}

	});

 	$('.popup-youtube').magnificPopup({
		type: 'iframe',
		iframe: {
		  patterns: {
		    youtube: {
		      index: 'youtube.com/',
		      id: 'v=', 
		      src: 'https://www.youtube.com/embed/%id%?autoplay=1'
		    }
		  },
		  srcAction: 'iframe_src',
		}
	}); 


 	$('.Clients__items').slick({
	  infinite: true,
	  dots: true,
	  arrows: false,
	  autoplay: true,
	  autoplaySpeed: 5000
	});

 	$('.header__bar').click(function(){
 		$('.header__menu').fadeIn();
 		$('.header__bar').hide();
 		$('.header__close').fadeIn();
 	})

	if($(window).width() < 1000) {
	  $('li, a').click(function(){
	 		$('.header__menu').fadeOut();
	 		$('.header__close').hide();
	 		$('.header__bar').fadeIn();
 		})
	} else {
	  $('.header__close').click(function(){
	 		$('.header__menu').fadeOut();
	 		$('.header__close').hide();
	 		$('.header__bar').fadeIn();
 		})
	}
 	$(document).scroll(function(){
 		$('section[id], header[id]').each(function(){
 			var id = $(this).attr('id');
 			if($(this).offset().top-80 < $(window).scrollTop()){
 				$('.header__nav ul a').removeClass('header__active');
 				$('.header__nav ul a[href="#'+id+'"]').addClass('header__active');
 			}
 		})
 	})
});			

