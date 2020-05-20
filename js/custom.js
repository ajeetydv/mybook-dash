


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

$(".drop-list").click(function (e) {
  e.stopPropagation();
  $(".account-widget").toggleClass('opensidemenu');
});

$("body").click(function () {
$(".account-widget").removeClass('opensidemenu');
});

$(".account-frm span").click(function (e) {
e.stopPropagation();
$(".editable-fields").toggleClass('openfield');
});

/* For Image upload */

var loadFile = function(event) {
var output = document.getElementById('output');
output.src = URL.createObjectURL(event.target.files[0]);
output.onload = function() {
  URL.revokeObjectURL(output.src) // free memory
}
};



/* js for card design */

$( function() {
  jQuery( ".field-set, .social-list, .upload-preview, .usertitle-preview h3, .usertitle-preview h6" ).draggable();

} );


$( ".delenode" ).click(function() {
$( "#printcredetials1" ).remove();
});

$(".custom-opn").click(function (e) {
  e.stopPropagation();
  $(".common-widgets").toggleClass('showwid');
});




$(document).ready(function () {
          $('#linkIncrease').click(function () {
              modifyFontSize('increase');
          });

          $('#linkDecrease').click(function () {
              modifyFontSize('decrease');
          });

        

          function modifyFontSize(flag) {
              var divElement = $('#printcredetials1');
              var currentFontSize = parseInt(divElement.css('font-size'));

              if (flag == 'increase')
                  currentFontSize += 2;
              else if (flag == 'decrease')
                  currentFontSize -= 2;
              else
                  currentFontSize = 16;

              divElement.css('font-size', currentFontSize);
          }
      });

$(document).ready(function(){
  $("#colourPickerText").change(function(){
     $("#printcredetials1").css("color",$("#colourPickerText").val());
 });



});

/* yaaha se hai ram babu */

$(document).ready(function(){
  $(".custominputfield").keyup(function(){
     $("#"+$(this).attr("data")).html($(this).val());
    
 });



});


var loadFile = function(event) {
var output = document.getElementById('showlogo');
output.src = URL.createObjectURL(event.target.files[0]);
output.onload = function() {
  URL.revokeObjectURL(output.src) // free memory
}
};
