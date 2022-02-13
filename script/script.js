$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }else {
            $('.navbar').removeClass("sticky");
        }
    })
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
});

$(function() {
    var selectedClass = "";
    $(".category").click(function(){ 
    selectedClass = $(this).attr("data-rel"); 
 $("#portfolio").fadeTo(100, 0.1);
    $("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
setTimeout(function() {
  $("."+selectedClass).fadeIn().addClass('scale-anm');
  $("#portfolio").fadeTo(300, 1);
}, 300); 
    
});
});

function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "nikolina.stjepanovic1@gmail.com",
        Password : "427BB5C2A2EA7074DDBC23EE8B149012FB13", 
        To : 'nikolina.stjepanovic1@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : "Name: " + document.getElementById("name").value
                + "<br> Email: " + document.getElementById("email").value
                + "<br> Subject: " + document.getElementById("subject").value
                + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message sent succesfully")
    );
}