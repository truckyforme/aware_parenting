$(document).ready(function() {
    
    $('.js--scroll-consulta').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-consulta').offset().top}, 1000); 
     });

     $('.js--scroll-cursos').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-proximoscursos').offset().top}, 1000); 
     });
    

// jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 50)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
  });
})