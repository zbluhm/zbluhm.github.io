(function($){
  $(function(){

      var $window = $(window),
          $logo = $('.brand-logo');
          $contact = $('.contact-nav-link');

      function resize() {
          if ($window.width() < 760) {
              $logo.addClass('hide')
              $contact.removeClass('right')
              return $contact.addClass('left')
          }

          $contact.removeClass('left')
          $contact.addClass('right')
          $logo.removeClass('center');
          $logo.removeClass('hide');
      }

      $window
          .resize(resize)
          .trigger('resize');

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('#state-select').material_select();

  }); // end of document ready
})(jQuery); // end of jQuery name space