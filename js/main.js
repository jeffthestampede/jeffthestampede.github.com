$(function(){
  $("#slides").slidesjs({
    width: 740,
    height: 328
  });
});

$(document).ready(function() {

  $('.slidesjs-previous ').html('<i class="icon-chevron-left icon-large"></i>').css({'color': 'black', 'text-decoration': 'none'});
  $('.slidesjs-next ').html('<i class="icon-chevron-right icon-large"></i>').css({'color': 'black', 'text-decoration': 'none'});


});

$(document).ready(function() {
  $('.menu').localScroll();
});


