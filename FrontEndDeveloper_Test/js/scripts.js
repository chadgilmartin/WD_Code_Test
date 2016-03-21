$(document).ready(function(){
    $("#shipping-company").hide();
    $("#commercial").click(function(){
        $("#shipping-company").show();
    });
    $("#residential").click(function(){
        $("#shipping-company").hide();
    });
    $('.numbersOnly').keyup(function () {
    	if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
    		this.value = this.value.replace(/[^0-9\.]/g, '');
		}
	});
	function isEmail(email) {
	var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!regex.test(email)) {
			return false;
		}
		else {
			return true;
		}
	}
	$("#submit").click(function (event) {
		var emailAddress = $("#email-address").val();
		if( isEmail(emailAddress) ) {
			console.log(emailAddress);
		}
		else {
			alert("Please enter a valid email address.");
			return false
		}
	});
});

if(!Modernizr.input.placeholder){
	$('[placeholder]').focus(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		}
	}).blur(function() {
		var input = $(this);
		if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		}
	}).blur();
	$('[placeholder]').parents('form').submit(function() {
		$(this).find('[placeholder]').each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
			}
		})
	});
}
