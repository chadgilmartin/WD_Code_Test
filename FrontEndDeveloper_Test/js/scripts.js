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
	$("#required-fields").hide();
	
	function isEmail(email) {						// function to verify proper email addresses
		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!regex.test(email)) {
			console.log(email);
			return false;
		}
		else {
			return true;
		}
	};												// end of email verification
	function isPhone (phone) {
		var numbers = /[0-9 -()+]+$/;
		if (!numbers.test(phone) || phone.length != 10) {
			console.log("phone: " + phone);
			return false;
		}
		else {
			return true;
		}
	}
	function isZip (zip) {
		var numbers = /[0-9 -()+]+$/;
		if (!numbers.test(zip) || zip.length != 5) {
			console.log("zip: " + zip);
			return false;
		}
		else {
			return true;
		}
	}

	$("#state-select").blur(function () {			// test state selection for shipping
		var state = $("#state-select").val();
		console.log(state);
		if (state == "CA" || state == "MA" || state == "NY") {
			$("#submit").hide();
			alert("Unfortunately we are unable to ship wine to CA, MA, and NY. We apologise for the inconvenience.");
		}
		else {
				$("#submit").show();
		}											// end state selection test
	});



	function isValid() {							// validate form for submitting

		var emailAddress = $("#email-address").val();
		var emailConfirm = $("#email-address-confirm").val();
		var phoneNumber = $("#phone").val();
		var zipCode = $("#zip").val();
		var emailCheck = false;
		var phoneCheck = false;
		var zipCheck = false;


		if( isEmail(emailAddress) && emailAddress === emailConfirm ) {		// email validation
			console.log(emailAddress, emailConfirm);
			emailCheck = true;
			console.log("email is valid");
		}
		else if (!isEmail(emailAddress)) {
			alert("Please enter a valid email address.");
			return false;
		}
		else if (emailAddress !== emailConfirm) {
			alert("email addresses must match");
		}
		else {
			console.log("email field failed")
			return false;
		}
		if (isZip(zipCode)) {									// zip code validation
			zipCheck = true;
			$("#zip-error").hide();
			console.log("zip code is valid");
		}
		else {
			$("#zip-error").show();
			console.log("zip: " + zipCode);
			return false;
		}
		if (isPhone(phoneNumber)) {								// phone number validation
			phoneCheck = true;
			$("#phone-error").hide();
			console.log("phone number is valid");
		}
		else {
			$("#phone-error").show();
			console.log("phone: " + phoneNumber);
			return false;
		}
		if (emailCheck  && phoneCheck  && zipCheck) {
			console.log("Submission is valid");
			return true;
		}
		else {
			console.log("submission error");
			return false;
		}
	}											

	 $("#submit").click( function() {						// validations for Submit button			
		if(!Modernizr.input.required) {						// Add required fields support for clients without HTML5
		console.log("required fields are filled out")
		} 
		else {
			$('form').find('input[required]').each(function () {
				$(this).attr('class', 'required ' + this.getAttribute('type'));
				$("#required-fields").show();
			});
		}
		if (isValid()) {
			return true;
		}
		else return false;

	});
	

	if(!Modernizr.input.placeholder) {							// Add placeholders for clients without HTML5 support
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
	}												// end of placeholders for clients without HTML5 
});