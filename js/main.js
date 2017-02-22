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

function alterNav(x) {
   var linkList=document.getElementById(x);
   if (linkList.style.display === "none")
      linkList.style.display = "inline-block";
   else linkList.style.display = "none";
}