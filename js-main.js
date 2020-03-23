$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 550) {
        $(".navbar").addClass("navbar-color");
        $(".logo-visitando").addClass("logo-size");
        $(".nav-item").addClass("nav-size");
        
    } else{
        $(".navbar").removeClass("navbar-color");
        $(".logo-visitando").removeClass("logo-size");
        $(".nav-item").removeClass("nav-size");

    }
});


$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('main#conteudo').offset().top }, 'slow');
      return false;
  });
});



AOS.init();


