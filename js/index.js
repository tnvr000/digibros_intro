$(document).ready(function() {
  $('#sec-1').addClass('active');
  
  $('#sec-1').click(function() {
    $('html, body').animate({
      scrollTop: $('#one').offset().top - 144
    }, 1000);
    return false;
  });
  $('#sec-2').click(function() {
    $('html, body').animate({
      scrollTop: $('#two').offset().top - 144
    }, 1000);
    return false;
  });
  $('#sec-3').click(function() {
    $('html, body').animate({
      scrollTop: $('#three').offset().top - 144
    }, 1000);
    return false;
  });
  $('#sec-4').click(function() {
    $('html, body').animate({
      scrollTop: $('#four').offset().top - 144
    }, 1000);
    return false;
  });

  var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.60
  }

  function callback(entries) {
    if(!entries[0].isIntersecting) {
      return false;
    }
    $('.container ul li a').removeClass('active');
    $(navigationSelectorQuery(entries[0].target.id)).addClass('active')
  }

  var observer = new IntersectionObserver(callback, options)
  var targets = document.querySelectorAll('section div')
  targets.forEach(function(target) {
    observer.observe(target);
  })
});

function navigationSelectorQuery(id) {
  return ('nav a[href="#' + id + '"')
}