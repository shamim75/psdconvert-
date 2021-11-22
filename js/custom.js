$(document).ready(function(){

    $(window).on('scroll', function(){
        var scrolling = (this).scrollingTop();

        if(scrolling > 700){
            $('.navbar').addClass('nav-bg');
        }
        else{
            $('.navbar').removeClass('nav-bg');
        }

    });
    // banner chat slider
    $('.banner-chat-slider').slick({
        arrows: false,
        slidesToShow: 4,
        SlidesToScroll: 1,
        vertical : true,
        autoplay: true,
    });

    // portfolio popup gallery 
    
    $('.venobox').venobox(); 

    // fun counter

    $('.counter').counterUp({
        delay: 10,
        time: 1000,
        autoplay: true,
    });

    // testimonial slider

    $('.test-slider').slick({
        arrows: false,
        slidesToShow: 2,
        responsive: [ 
            {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                  SlidesToScroll: 1,
                //   Infinity: true,
                //   dots: false,
                  arrows: false,
                  autoplay: true,
                }
            },

            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  SlidesToScroll: 1,
                //   Infinity: true,
                //   dots: false,
                  arrows: false,
                  autoplay: true,
                }
            },

            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1,
                  SlidesToScroll: 1,
                //   Infinity: true,
                //   dots: false,
                  arrows: false,
                  autoplay: true,
                }
            },

        ]

    });
});