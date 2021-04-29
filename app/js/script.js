

jQuery(document).ready(function($) {

	$('.fa-bars').click(function(){
		$('.nav ul').slideToggle()
	})

	$(".Faq__items").not(":first").hide();
	$(".Faq__que ul li").click(function() {
		$(".Faq__que ul li").removeClass("Faq-active").eq($(this).index()).addClass("Faq-active");
		$(".Faq__items").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("Faq-active");

});

