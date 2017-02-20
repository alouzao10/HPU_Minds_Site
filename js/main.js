$(document).ready(function() {
   $(window).scroll(function() {
      if ($(window).scrollTop() > 280) {
         $('.navbar').addClass('navbar-fixed');
      }
      if ($(window).scrollTop() < 281) {
         $('.navbar').removeClass('navbar-fixed');
      }
   });
});