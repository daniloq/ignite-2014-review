//= jquery.fullPage.min
//= jquery.scrollmagic.min
//= wow
//= odometer
//= jquery.wanker
//= require_tree .

// WOW
new WOW().init();
// Animations
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

        $('.insta').addClass('flash');
        $('.insta').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
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

        $('.this').addClass('fadeInUp');
        $('.this').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('fadeInUp');
        });
      }

      if (nextIndex == 5) {
        $('.growth-dots').addClass('flipInX');
        $('.growth-dots').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('flipInX');
        });

        $('.this').addClass('fadeInUpBig');
        $('.this').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('fadeInUpBig');
        });
      }

      if (nextIndex == 6) {
        $('.this').addClass('fadeInDown');
        $('.this').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('fadeInDown');
        });

        $('.next').addClass('fadeInUp');
        $('.next').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('fadeInUp');
        });

        setTimeout(function(){
          odometer.innerHTML = 1;
        }, 300);

        setTimeout(function(){
          odometer2.innerHTML = 31;
        }, 300);

        setTimeout(function(){
          odometer3.innerHTML = 50;
        }, 300);

      }

      if (nextIndex == 7) {
        $('.dots').addClass('fadeIn');
        $('.dots').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('fadeIn');
        });

        $('.bar').addClass('fadeInLeft');
        $('.bar').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('fadeInLeft');
        });

        setTimeout(function(){
          odometer4.innerHTML = 132800;
        }, 300);
      }

      if (nextIndex == 8) {
        $('.elements').addClass('fadeInDownBig');
        $('.elements').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('fadeInDownBig');
        });

      }

      if (nextIndex == 9) {
        $('.product-1').addClass('fadeInRightBig');
        $('.product-1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('fadeInRightBig');
        });

        $('.product-2').addClass('fadeInLeftBig');
        $('.product-2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('fadeInLeftBig');
        });

      }

      if (nextIndex == 11) {
        $('.we-heart').addClass('fadeIn');
        $('.we-heart').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('fadeIn');
        });

      }

    }
  });
});
// Wanker
$(function() {
  $('[data-wanker]').wanker();
});
