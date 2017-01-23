function _resize() {
   var round_height = $(".round-wrap .item").width();
    $(".round-wrap .item .inner").css({'max-height':round_height});
    $(".round-wrap .item .inner .title").css({'height':round_height});
	
    var body_width = $("body").width();
    if (body_width < 575){
        $('.landing form').removeClass('d-flex justify-content-between align-items-center flex-nowrap'); 
    } else{
        $('.landing form').addClass('d-flex justify-content-between align-items-center flex-nowrap'); 
    }
        
}

$(document).ready(function () {
      
  if ( $( "select" ).length ) {
        $('select').styler();
   }

    _resize();
    $(window).resize(_resize)
    
    if ( $( "#set_date" ).length ) {
        $('#set_date').datepicker({
            format : 'mm-dd-yyyy',
            autoclose : true,
            todayHighlight : true,
            orientation : 'bottom',
            rtl : true,
            language :'he'
        });
    }
     
    if ( $( ".carousel" ).length ) {
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: false,
        rtl:true,
        responsive: [
            {
              breakpoint: 586,
              settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
            },
            {
              breakpoint: 778,
              settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
        }
    ]
    });
    }
       
    if ( $( "#lightgallery" ).length ) {
        $("#lightgallery").lightGallery({
            thumbnail:true
        });
    } 
    
    $(".round-wrap .item a").on('click', function(e){
         e.preventDefault();
    });

    if ( $( ".modal-slider-wrap" ).length ) {
        $('.modal-slider-wrap').slick({
            setPosition:0,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: false,
            rtl:true,
            responsive: [
                {
                  breakpoint: 586,
                  settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
                },
                {
                  breakpoint: 778,
                  settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
            }
        ]
        });
    }
    
    $('.my-modal.slider').on('shown.bs.modal', function (e) {
        $('.modal-slider-wrap').resize();
    });

    $('.landing nav .item').on('click', function(e){
         e.preventDefault();
         var link = $(this).attr('href');
            
         $('html, body').animate({
             scrollTop: $("#"+link).offset().top-270
           }, 900); 
    });
    
    var header_height = $("header").height();
    var cover_banner_height = $(".cover-banner.inner-banner").height();
   
    if($(document).scrollTop()>header_height+cover_banner_height-55){
        $(".content_nav").addClass("fixed-top");
		$(".content_nav").css({
			'margin': header_height+'px auto 0 auto'
		});
        $("#first").css({
			'padding-top': '145px'
		});
    } else{
        $(".content_nav").removeClass("fixed-top");
        $("#first").removeAttr('style');
		$(".content_nav").removeAttr('style');     
    }
    
}); 

$(document).on("scroll",function(){
    
  var header_height = $("header").height();
  var cover_banner_height = $(".cover-banner.inner-banner").height();
    
   if($(document).scrollTop()>header_height+cover_banner_height-55){
        $(".content_nav").addClass("fixed-top");
		$(".content_nav").css({
			'margin': header_height+'px auto 0 auto'
		});
       $("#first").css({
			'padding-top': '145px'
		});
    } else{
        $(".content_nav").removeClass("fixed-top");
        $("#first").removeAttr('style');
		$(".content_nav").removeAttr('style');     
    }
});