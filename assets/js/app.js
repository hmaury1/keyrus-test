var $ = require("jquery");
require('bootstrap');

$(document).ready(function(){
    console.log("the application is ready");

    /**
     * Event: validate and show notification
     * 
     */
    $('#btn-lets-go').on('click', function() {
        $('#alert-success').removeClass("show");
        $('#alert-danger').removeClass("show");
        if ($("#form-login")[0].checkValidity()) {
            $('#alert-success').addClass("show");
            setTimeout(function(){
                $('#alert-success').removeClass("show");
            }, 4000)
        } else {
            $('#alert-danger').addClass("show");
            setTimeout(function(){
                $('#alert-danger').removeClass("show");
            }, 4000)
        }
    });
}); 

