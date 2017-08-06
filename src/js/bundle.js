//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/foundation-sites/dist/js/foundation.js
//= ../../bower_components/slick-carousel/slick/slick.js


/*
 * Custom js
 */
$( document ).ready(function() {
	$('.slider').slick({
		dots: false,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear',
        autoplay: true
	});
    $('.slider2').slick({
        dots: true,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear',
        autoplay: true
    });
$('.company-program').on('click', '.item', function(event) {
    event.preventDefault();
  $(this).parent().find('.selected').removeClass('selected')
  $(this).addClass('selected')
    console.log($(this).parent().find('.selected'))
});
$('#mobile-menu').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('selected');
        $('.nav').toggleClass('active');
    });
  //tabs 
  $('[data-show-tab]').on('click', function(event) {
    event.preventDefault();
    $('[data-show-tab]').removeClass('active');
    $(this).addClass('active');
    $('[data-tab]').hide();
    $('[data-tab]').filter("[data-tab='"+$(this).data('showTab')+"']").show();
  });
  //end tabs
	//map
//Местоположение: долгота, широта и коэффициент увеличения
  // var latitude = 55.769259,
  //   longitude = 37.648912,
  //   map_zoom = 16;

  // // Адрес до иконки с маркером
  // // var marker_url = 'img/logo-map.png';
    
  
  // var main_color = '#fece8d', //основной цвет
  //   saturation_value= -5,//насыщенность
  //   brightness_value= 2; //яркость

  
    
  // //Создание точки на карте
  // var map_options = {
  //       center: new google.maps.LatLng(latitude, longitude),
  //       zoom: map_zoom,
  //       panControl: false,
  //       zoomControl: true,
  //       mapTypeControl: true,
  //       streetViewControl: false,
  //       mapTypeId: google.maps.MapTypeId.ROADMAP,
  //       scrollwheel: false,
  //       styles: style
  //   }
  //   //Инициализация карты
  // var map = new google.maps.Map(document.getElementById('google-container'), map_options);
});
 $(document).foundation();