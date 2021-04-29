
$(document).ready(function() {
	$('#form2').submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert('cool!');
		});
		return false;
	});
});
