$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {



        $('html,body').animate({scrollTop: target.offset().top}, 0800);
        return false;
      }
    }
  });
});

$(document).ready(function(){

  $('.navP').click(function () {
     // move dot
     var position = $(this).position().left;
     $('#indicatorBar').animate({
         'margin-left': position + 'px'
     }, 0800);

     // change all to black, then change the one I clicked to red
    // $('.navP').css('color', 'white');
   //  $(this).css('color', 'red');
 });
     
});



$(window).scroll(function() {




});

  
    