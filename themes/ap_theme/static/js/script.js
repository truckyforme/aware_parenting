$(document).ready(function() {
    
    $('.js--scroll-consulta').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-consulta').offset().top}, 1000); 
     });

     $('.js--scroll-cursos').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-proximoscursos').offset().top}, 1000); 
     });
    
     /* Navigation scroll */
     $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });
})