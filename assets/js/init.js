(function($) {
  $(function() {
    $('.button-collapse').sideNav();
  });
})(jQuery);
$(document).ready(function() {
  $(window).on("resize", function(e) {
    checkScreenSize();
  });
  checkScreenSize();

  function checkScreenSize() {
    var newWindowWidth = $(window).width();
    if (newWindowWidth < 601) {
      var isshow = localStorage.getItem('isshow');
      if (isshow == null) {
        localStorage.setItem('isshow', 1);
        $('.tap-target').tapTarget('open');
      }
    }
  }
});