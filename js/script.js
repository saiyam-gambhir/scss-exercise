$(document).ready(function(){

	$('header li a').click(function(){
			var hash = $(this.hash).offset().top;
			$('html, body').animate({ scrollTop : hash }, 500);
			$('header li').removeClass('active');
			$(this).parent('li').addClass('active');
			return false;
	});

});