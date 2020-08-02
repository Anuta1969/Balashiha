//modal 



// $('[data-modal=enter]').on('click', function() {
//  $('.overlay').fadeIn('slow');

// });

// $('.modal__close').on('click', function() {
//   $('.overlay, #enter').fadeOut('slow');
 
//  });



//  $('[data-modal2=enter]').on('click', function() {
//   $('.overlay2').fadeIn('slow');
 
//  });
 
//  $('.modal__close').on('click', function() {
//    $('.overlay2, #enter').fadeOut('slow');
  
//   });







$(document).ready(function(){
  $('.photos__slider').slick({
   
     dots: true,
     prevArrow: '<button type="button" class="slick-prev"><img src="icon/prev.png"></button>',
     nextArrow: '<button type="button" class="slick-next"><img src="icon/next.png"></button>',
     responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
        }
      },
    ]

  })
 
  
});
		




  
 

























