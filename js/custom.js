
// ISOTOPE FILTER
jQuery(document).ready(function($){

  if ( $('.iso-box-wrapper').length > 0 ) { 

      var $container  = $('.iso-box-wrapper'), 
        $imgs     = $('.iso-box img');

      $container.imagesLoaded(function () {

        $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
        });

        $imgs.load(function(){
          $container.isotope('reLayout');
        })

      });

      //filter items on button click

      $('.filter-wrapper li a').click(function(){

          var $this = $(this), filterValue = $this.attr('data-filter');

      $container.isotope({ 
        filter: filterValue,
        animationOptions: { 
            duration: 750, 
            easing: 'linear', 
            queue: false, 
        }                
      });             

      // don't proceed if already selected 

      if ( $this.hasClass('selected') ) { 
        return false; 
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

        return false;
      }); 

  }

});


// PRELOADER JS
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


// jQuery to collapse the navbar on scroll //
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});


/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function(){

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();


  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


  // NIVO LIGHTBOX
  $('.iso-box-section a').nivoLightbox({
        effect: 'fadeScale',
    });


  // HOME BACKGROUND SLIDESHOW
  $(function(){
    jQuery(document).ready(function() {
    $('#home').backstretch([
       "images/home-bg-slideshow1.jpg", 
       "images/home-bg-slideshow2.jpg",
       "images/home-bg-slideshow2.jpg",
        ],  {duration: 2000, fade: 750});
    });
  })

});

 // bottom to top
 $(window).on("scroll", function () {
  $(this).scrollTop() > 100 ? $(".back_top").fadeIn() : $(".back_top").fadeOut()
}), $(".back_top").click(function () {
  return $("html, body").animate({
      scrollTop: 0
  }, 800), !1
})

// preloader
$(window).on("load", function () {
  $(".lds-ellipsis").fadeOut(), $(".preloader").delay(333).fadeOut("slow"), $("body").delay(333)
});

// dark mode
const pipe = document.querySelector(".pipe");
const container = document.querySelector(".container-dark");
const icon = document.querySelector(".container-dark i");

pipe.addEventListener("click", function () {
  container.classList.toggle("move");

  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon-stars");

  document.body.classList.toggle("change-bg");
});