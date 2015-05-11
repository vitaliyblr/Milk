
$(function() {
	
	$('#coment-form').validator().on('submit', function (e) {
		if (!e.isDefaultPrevented()) {
			$('#form-uslugi').find('input, textarea').val('');
			$('#send-comment-form').modal('show');
			$('#form-comment').modal('hide');
			return false;
		};
	});
	
	$('#contact-form').validator().on('submit', function (e) {
		if (!e.isDefaultPrevented()) {
			$('#form-uslugi').find('input, textarea').val('');
			$('#send-contact-form').modal('show');
			$('#form-uslugi').modal('hide');
			return false;
		};
	});

});

