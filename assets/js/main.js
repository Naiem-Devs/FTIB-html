(function($) {
  "use strict";
  
  $('select').niceSelect(); 

 // menu 
 $('.siteBar-btn').click( function (){ 
  $('.mobile-menu').toggleClass('siteBar');   
}); 


  // Home Hero slider
  $(".h_slider_blk").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  })

  // COMPETICIONES slider
  $(".compet_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  });
 


})(jQuery);
