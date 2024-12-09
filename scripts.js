$(document).ready(function() {
    $("a[href^='#']").on('click', function(e) {
      e.preventDefault();
      const target = $(this.getAttribute('href'));
      if (target.length) {
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 50
        }, 1000);
      }
    });
  
    // Scroll animation
    // $(window).on('scroll', function() {
    //   $('section').each(function() {
    //     if ($(window).scrollTop() > $(this).offset().top - $(window).height() / 2) {
    //       $(this).addClass('fade-in');
    //     }
    //   });
    // });
  });
  