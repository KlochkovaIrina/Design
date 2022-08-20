//Adaptive functions
$(window).resize(function (event) {
   adaptive_function();
});
function adaptive_header(w, h) {
   var headerMenu = $('.header-menu');
   var headerLang = $('.header__menu_list');
   if (w < 700) {
      if (!headerLang.hasClass('done')) {
         headerLang.addClass('done').appendTo(headerMenu);
      }
   } else {
      if (headerLang.hasClass('done')) {
         headerLang.removeClass('done').prependTo($('.header__menu'));
      }
   }

}
function adaptive_function() {
   var w = $(window).outerWidth();
   var h = $(window).outerHeight();
   adaptive_header(w, h);
}
adaptive_function();