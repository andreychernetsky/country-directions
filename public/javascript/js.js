$(document).ready(function() {

  // Hidden menu
  $( '.menu-btn, .hidden-menu__item a' ).click( function() {
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


});

var DELAY = 200;
var CURRENT_SLIDE = 1;
 var ANIMATION_DELAY = 6000;

var slider = document.querySelector('.slider');

slider.addEventListener('click', function (event) {
  if (!event.target.classList.contains('slider__icon')) return;

  CURRENT_SLIDE = parseInt(event.target.getAttribute('data-id'));
  showSliderId(CURRENT_SLIDE);
});

initSlider();

function showSliderId(id) {
  var current = slider.querySelector('[data-slide="'+ id + '"]');

  slider.querySelectorAll('.slider__slide').forEach(function(slide) {
    slide.style.opacity = 0;
    setTimeout(function() {
      slide.classList.add('hide');
    }, DELAY);
  });

  setTimeout(function() {
    current.classList.remove('hide');
    current.style.opacity = 1;
  }, DELAY)
}

function initSlider() {
  setInterval(function() {
    showSliderId(getSliderId());
  }, ANIMATION_DELAY)
}

function getSliderId() {
  CURRENT_SLIDE = CURRENT_SLIDE + 1;
  CURRENT_SLIDE = CURRENT_SLIDE % 4 === 0 ? 1 : CURRENT_SLIDE;
  return CURRENT_SLIDE;
}