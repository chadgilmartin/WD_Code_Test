$(document).ready(function(){
	$("#shipping-company").hide();
	$("#commercial").click(function(){
		$("#shipping-company").show();
	});
	$("#residential").click(function(){
		$("#shipping-company").hide();
	});
	$("#phone-error").hide();
	$("#zip-error").hide();
	function isEmail(email) {						// function to verify proper email addresses
		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!regex.test(email)) {
			return false;
			console.log(email);
		}
		else {
			return true;
		}
	}												// end of email verification

	$("#state-select").blur(function () {			// test state selection for shipping
		var state = $("#state-select").val();
		console.log(state);
		if (state == "CA" || state == "MA" || state == "NY") {
			$("#submit").hide();
			alert("Unfortunately we are unable to ship wine to CA, MA, and NY. We apologise for the inconvenience.");
		}
		else {
				$("#submit").show();
		}
	});												// end state selection test

	$("#submit").click(function (event) {			// validations for Submit button
		var emailAddress = $("#email-address").val();
		var emailConfirm = $("#email-address-confirm").val();
		if( isEmail(emailAddress) && emailAddress === emailConfirm ) {		// email validation
			console.log(emailAddress);
			console.log(emailConfirm);
		}
		else if (!isEmail(emailAddress)) {
			alert("Please enter a valid email address.");
			return false;
		}
		else if (emailAddress !== emailConfirm) {
			alert("email addresses must match");
			return false;
		}
		$(".phone-test").keyup(function () {		// phone number validation
			if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
				$("#phone-error").show();
				return false;
				console.log(this.value);
			}
			else if (this.value.length != 10.1) {
				$("#phone-error").show();
				return false;
				console.log(this.value);
			}
			else {
				$("#phone-error").hide();
			}
		});
		$(".zip-test").keyup(function () {			// zip code validation
			if (this.value != this.value.replace(/[^0-9\.]/g, '')){
				$("#zip-error").show();
				return false;
				console.log(this.value);
			}
			else if (this.value.length !=5) {
				$("#zip-error").show();
				return false;
				console.log(this.value);
			}
			else {
				$("#zip-error").hide();

			}
		});
	});												// end of Submit button validations
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
});
