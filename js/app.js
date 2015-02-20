$(function(){
	$('.phone').addClass('hidden');
	$('#contact').change(function(){
		if ($(this).val() === 'email'){
			$('.phone').addClass('hidden');
			$('.email').removeClass('hidden');
		} else {
			$('.email').addClass('hidden');
			$('.phone').removeClass('hidden');
		}
	});
	$('.close, .learn-more').on('click', function(){
		$('.modal').hide();
	});
});