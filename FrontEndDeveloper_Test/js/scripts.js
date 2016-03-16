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
});
