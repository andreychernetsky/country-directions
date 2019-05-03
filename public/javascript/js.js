$(document).ready(function () {

  $('ul.nav-main a[href^="#"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500);
    $('ul.nav-main a[href^="#"]').css({
      'color': '#212121'
    });
    $(this).css({
      'color': '#004bee'
    });
    return false;
  });

  /* Выпадающее меню */
  $('.menu-icon').click(function(){
    $('.nav-main').slideToggle(500);
    $('ul').css({
      'display':'flex', 'flex-direction':'column'
    })
    if($('.menu-icon').html()=='<i class="fas fa-bars"></i>') {
      $(this).html('<i class="fas fa-times"></i>')
    } else {
      $(this).html('<i class="fas fa-bars"></i>')
    }
  });

  /* Кнопка наверх */
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0)
      $('#toTop').fadeIn();
    else
      $('#toTop').fadeOut();
  });
  $('#toTop').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
  });
});

var btn = document.querySelectorAll('button');
for (var i =0; i<btn.length; i++) {
  btn[i].style.outline = 'none';
}
