$(document).ready(function() {

    // add nice scroll to body
    $('body').niceScroll({
        cursorcolor:'#000',
        cursorwidth:'10px',
        cursorborder:'none'
    });

    //dropdown hover
        $('.nav .dropdown').hover(function() {
              $('.dropdown-menu').css('display','block');
        }, function() {
            $('.dropdown-menu').css('display','none');
        })


        $(window).scroll(function() {
             //cosmetics section
        if ($(window).scrollTop() >= $('.header-section').height()/2) {
            $('.appear').eq(0).delay(600).fadeIn(5000).animate({top: '0', opacity: '1'});
            $('.appear').eq(1).delay(1000).fadeIn(5000).animate({top: '0', opacity: '1'});
            $('.appear').eq(2).delay(1200).fadeIn(5000).animate({top: '0', opacity: '1'});
            $('.appear').eq(3).delay(1500).fadeIn(5000).animate({top: '0', opacity: '1'});
        }

        //quality section
        if ($(window).scrollTop() >= $('.header-section').height() && $('.cosmetics-section').height() && $('.products-section').height()/2) {
            $('.scroll-top').eq(0).delay(600).fadeIn(5000).animate({top: '0', opacity: '1'});
            $('.scroll-top').eq(1).delay(1000).fadeIn(5000).animate({top: '0', opacity: '1'});
            $('.scroll-top').eq(2).delay(1200).fadeIn(5000).animate({top: '0', opacity: '1'});
        }
           })
       



        //customer section 

    //     $(window).resize(function(){
            
    //   }).resize();


        if ($(window).width() <= 620 ) {
            $('.customer').slick({
                    slidesToShow: 1,
                    dots: false,
                    infinite: true,
                    speed: 300,
                    touchMove: false,
                    slidesToScroll: 1,
                    draggable: true,
                    centerMode: true,
            });
            
            $('.slick-prev, .slick-next').addClass('hidden-xs');
        } 
        else {
            $('.customer').slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                touchMove: false,
                slidesToScroll: 1,
                draggable: true,
                centerMode: true
            });
            $('.slick-prev, .slick-next').removeClass('hidden-xs');
        }

        
        
})