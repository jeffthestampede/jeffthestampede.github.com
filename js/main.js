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

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#info").click(function() {
   scrollToAnchor('info');
});

$("#work").click(function() {
   scrollToAnchor('work');
});

$("#contact").click(function() {
   scrollToAnchor('contact');
});



