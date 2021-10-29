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

  $('#two').waypoint(function() {
    $('.container ul li').children().removeClass('active');
    $('#sec-2').addClass('active');
  }, { offset: 100 });
  $('#three').waypoint(function() {
    $('.container ul li').children().removeClass('active');
    $('#sec-3').addClass('active');
  }, { offset: 100 });
  $('#four').waypoint(function() {
    $('.container ul li').children().removeClass('active');
    $('#sec-4').addClass('active');
  }, { offset: 100 });
  $('#one').waypoint(function() {
    $('.container ul li').children().removeClass('active');
    $('#sec-1').addClass('active');
  }, { offset: 0 });
});