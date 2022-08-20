



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
//mobil====================================================
$('.header-menu__icon').click(function (event) {
   $(this).toggleClass('active');
   $('.header-menu').toggleClass('active');
   if ($(this).hasClass('active')) {
      $('body').data('scroll', $(window).scrollTop());
   }
   $('body').toggleClass('lock');
   if (!$(this).hasClass('active')) {
      $('body,html').scrollTop(parseInt($('body').data('scroll')));
   }
});
//mobil====================================================
//ibg======================================================
function ibg() {
   $.each($('.ibg'), function (index, val) {
      if ($(this).find('img').length > 0) {
         $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
      }
   });
}
ibg();
//ibg======================================================