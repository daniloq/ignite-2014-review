//= jquery.fullPage.min
//= jquery.scrollmagic.min
//= wow
//= odometer
//= jquery.wanker
//= require_tree .

new WOW().init();
$(document).ready(function() {
  $('#fullpage').fullpage({
    onLeave: function(index, nextIndex, direction){

      if (nextIndex == 2) {
        $('.ignite-logo').addClass('rotateIn');
        $('.ignite-logo').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('rotateIn');
        });

        $('.lets-work').addClass('fadeInLeftBig');
        $('.lets-work').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('fadeInLeftBig');
        });
      }

      if (nextIndex == 3) {
        $('.humans').addClass('fadeInDownBig');
        $('.humans').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('fadeInDownBig');
        });

        $('.newbies').addClass('fadeInUpBig');
        $('.newbies').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('fadeInUpBig');
        });

        $('.insta2').addClass('flash');
        $('.insta2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('flash');
        });
      }

      if (nextIndex == 4) {
        $('.disciplines').addClass('fadeInUp');
        $('.disciplines').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('fadeInUp');
        });

        $('.discipline-numbers').addClass('fadeInDown');
        $('.discipline-numbers').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('fadeInDown');
        });
      }

      if (nextIndex == 5) {
        $('.growth-dots').addClass('flipInX');
        $('.growth-dots').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('flipInX');
        });
      }
    }
  });
});
$(function() {
  $('[data-wanker]').wanker();
});
