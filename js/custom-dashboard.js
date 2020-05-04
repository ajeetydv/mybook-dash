$(".drop-list").click(function (e) {
    e.stopPropagation();
    $(".account-widget").toggleClass('opensidemenu');
});

$("body").click(function (e) {
    e.stopPropagation();
    $(".account-widget").removeClass('opensidemenu');
});


$(document).ready(function () {
    var owl = $('.newsvideo');
    owl.owlCarousel({
      items: 2,
      loop: true,
      nav:true,
      margin: 25,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      autoplayHoverPause: true,
    
      responsive: {
        0: {
          items: 1,
          nav: true,
          dots: true,
          loop: true
        },
        300: {
          items: 1,
          nav: true,
          dots: true,
          loop: true
        },
  
        800: {
          items: 2,
          nav: true,
          dots: false,
          loop: true
        },
  
        1800: {
          items: 2,
          nav: true,
          dots: false,
          loop: true
        }
      }
    });
    $('.play').on('click', function () {
      owl.trigger('play.owl.autoplay', [3000])
    })
    $('.stop').on('click', function () {
      owl.trigger('stop.owl.autoplay')
    })
  
  
  })
  