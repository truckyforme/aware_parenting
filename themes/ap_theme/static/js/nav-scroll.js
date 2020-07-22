$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        var $hero =$("header")
        var $toggler =$(".navbar-toggler");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $hero.height());
        $toggler.addClass('navbar-light', $(this).scrollTop() > $hero.height());
        $toggler.removeClass('navbar-dark', $(this).scrollTop() > $hero.height());
      });
  });