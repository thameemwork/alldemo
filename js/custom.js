$(document).ready(function(){
 
  $('.ham-icon').click(function(){
    $('.my-sidenav').css('max-width', '380px');
  });
  $('.cross-btn').click(function(){
    $('.my-sidenav').css('max-width', '0px');
  });
   $("#hide_click").click(function () {
        $('.my-sidenav').css('max-width', '0px');
    });
  $(".menu-icon").on("click", function() {
    $("nav").toggleClass("showing");
  });
  $(".service-tab li.item").on("click", function()
  {
    $(".service-tab li.item").removeClass('active');
     $("this").addClass('active');
  });
  $(".my-sidenav").accordion();      
  
	$(window).on("scroll", function() {
      
	// Sticky nev Effect
			   if($(this).scrollTop() > 50) {
                 $('#header').addClass("sticky");	
               } 
               else {
                 $('#header').removeClass("sticky");
               } 
			  

    });
	
   
});

$('.banner-slide.owl-carousel').owlCarousel({
 animateOut: 'zoomOut',
  animateIn: 'slideInUp',
  autoplay: false,
  autoplayTimeout:2000,
  loop: true,
  nav: true,
  dots:true,
  touchDrag: true,
  mouseDrag: false,
  items:1,
  responsive: {
    0: {
     items: 1
   },
   600: {
     items:1
   },
   1000: {
     items: 1
   }
 }
});
   var windowWidth = $(window).width(); 
      if(windowWidth > 767){
       $('.banner-slide-mbl').removeClass('owl-carousel').css('display','none');
    }
    else{
       $(document).ready(function(){
        $('.banner-slide-mbl').owlCarousel({
          animateOut: 'zoomOut',
          animateIn: 'slideInUp',
          autoplay: false,
          autoplayTimeout:2000,
          loop: true,
          nav: true,
          dots:true,
          touchDrag: true,
          mouseDrag: false,
          items:2,
          responsive: {
            0: {
             items: 1
           },
           600: {
             items:1
           },
           1000: {
             items: 2
           }
         }
        });
      });
    }
	var windowWidth = $(window).width(); 
      if(windowWidth > 767){
       $('.service-tab').removeClass('owl-carousel');
    }
    else{
       $(document).ready(function(){
        $('.service-tab').owlCarousel({
          animateIn: 'fadeInRight',
          autoplay: false,
          autoplayTimeout:2000,
          loop: true,
          nav: false,
          dots:true,
          touchDrag: true,
          mouseDrag: false,
          items:2,
          responsive: {
            0: {
             items: 1
           },
           600: {
             items:1
           },
           1000: {
             items: 2
           }
         }
        });
      });
    }

$('.marquee-slider.owl-carousel').owlCarousel({
  autoplay: false,
  autoplayTimeout:5000,
  loop: true,
  nav: true,
  dots:false,
  touchDrag: true,
  mouseDrag: false,
  slideBy: 6,
  items:6,
  responsive: {
    0: {
     items: 1
   },
   600: {
     items:2
   },
   1024: {
     items: 5
   },
   1025: {
     items: 6
   }
 }
});

$('.joureny-slider.owl-carousel').owlCarousel({ 
  animateOut: 'zoomOut',
  animateIn: 'zoomIn',
  autoplay: true,
  autoplayTimeout:5000,
  smartSpeed: 1000,
  loop: true,
  nav: false,
  dots:false,
  touchDrag: true,
  mouseDrag: false,
  URLhashListener:true,
  autoplayHoverPause:true,
  startPosition: '#slide1',
  items:1,
  responsive: {
    0: {
     items: 1
   },
   600: {	 
     items:1
   },
   1000: {
     items: 1
   }
 }
});
$('.joureny-slider.owl-carousel').on('changed.owl.carousel', function (event) {
    var current = event.item.index;
    var hash = $(event.target).find(".owl-item").eq(current).find(".item").attr('data-hash');
    $('.' + hash).addClass('active');
});
$('.joureny-slider.owl-carousel').on('change.owl.carousel', function (event) {
    var current = event.item.index;
    var hash = $(event.target).find(".owl-item").eq(current).find(".item").attr('data-hash');
    $('.' + hash).removeClass('active');
});

$('.gallery-slider.owl-carousel').owlCarousel({
  autoplay: false,
  autoplayTimeout:5000,
  smartSpeed: 2000,
  loop: true,
  nav: false,
  dots:true,
  touchDrag: true,
  mouseDrag: false,
  items:1,
  responsive: {
    0: {
     items: 1
   },
   600: {
     items:1
   },
   1000: {
     items: 1
   }
 }
});
$('.nabet-slider.owl-carousel').owlCarousel({
  autoplay: true,
  autoHeight:true,
  autoplayTimeout:6000,
  smartSpeed: 2000,
  loop: true,
  nav: false,
  dots:true,
  touchDrag: true,
  mouseDrag: false,
  responsive: {
    0: {
     items: 1
   },
   600: {
     items:1
   },
   1000: {
     items: 1
   }
 }
});

$('.nabet-slider-mbl.owl-carousel').owlCarousel({
  autoplay: true,
  autoHeight:true,
  autoplayTimeout:6000,
  smartSpeed: 1000,
  loop: true,
  nav: false,
  dots:true,
  touchDrag: true,
  mouseDrag: false,
  responsive: {
    0: {
     items: 1
   },
   600: {
     items:1
   },
   1000: {
     items: 1
   }
 }
});

$('#leadership-section').on('click','.director-modal',function(){
   var id = $(this).attr('data');
   $.ajax({
        url: 'aos/main/action.php',
        type: 'post',
        data: 'id=' + id +'&getleader=true',
        dataType: 'json',
        success: function(data) {
            $('#ldr-img').attr('src',data[0]['img']);     
            $('#ldr-nm').html(data[0]['nm']);     
            $('#ldr-desg').html(data[0]['full_desig']);     
            $('#ldr-descp').html(data[0]['descrip']);     
            $("#myModal1").modal("show");
            return false;
        }
    });
});

$('#certifications-section').on('click','.certification-modal',function(){
	var id = $(this).attr('data');
	$.ajax({
        url: 'aos/main/action.php',
        type: 'post',
        data: 'id=' + id +'&getcertification=true',
        dataType: 'json',
        success: function(data) {
            $('#cert-iframe').attr('src',data[0]['pdf']);     
            $("#myModal2").modal("show");
            return false;
        }
    });
});


$('#glry-section').on('click', '.glry-modal', function () {
    var id = $(this).attr('data');
    $("#myModal3").modal("show");
	$(".popup-glry").trigger("to.owl.carousel", [id]);
});