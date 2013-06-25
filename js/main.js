$(document).ready(function() {

  $("#slides").slidesjs();
  $('.slidesjs-previous ').html('<i class="icon-chevron-left icon-large"></i>').css({'color': 'black', 'text-decoration': 'none'});
  $('.slidesjs-next ').html('<i class="icon-chevron-right icon-large"></i>').css({'color': 'black', 'text-decoration': 'none'});
  $('.menu').localScroll();

});



