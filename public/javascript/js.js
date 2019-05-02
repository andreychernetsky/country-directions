/*
$(function(){

  $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
    var target = $(this).attr('href'),
      bl_top = $(target).offset().top -70;
    $('body, html').animate({scrollTop: bl_top}, 700);
    return false;
  });


});
*/



$(document).ready(function() {

  // Hidden menu
  $( '.section, .hidden-menu__link' ).click( function() {
    if ( $( '.hidden-menu' ).is( ':hidden' ) ) {
      $( '.hidden-menu' ).show();
    } else {
      $( '.hidden-menu' ).hide();
    }
  });

  // Page scroll
  $("a[rel='m_PageScroll2id']").mPageScroll2id({
    offset:30
  });








