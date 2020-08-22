
$(document).ready(function(){

    dropdown('.cashback-dropdown__box');

    function dropdown(element){
        $(element).click(function(){
            if($(this).next().attr('data-active') === ('no-active')){
                $(this).next().attr('data-active', 'active');
            } else {
                $(this).next().attr('data-active', 'no-active');
            }
        })
    }


    // $('.info-btn-2').on('click', function() {
    //     if($('.info-btn-1').hasClass('active')){
    //         $('.info-btn-1').removeClass('active')
    //         $('.info-btn-2').addClass('active')
    //     } else {
    //         $('.info-btn-2').removeClass('active')
    //         $('.info-btn-1').addClass('active')
    //     }
    // })
    // $('.info-btn-1').on('click', function() {
    //     if($('.info-btn-2').hasClass('active')){
    //         $('.info-btn-2').removeClass('active')
    //         $('.info-btn-1').addClass('active')
    //     } else {
    //         $('.info-btn-1').removeClass('active')
    //         $('.info-btn-2').addClass('active')
    //     }
    // })
        function tabs(btn1, btn2, tab2, tab1){
            $(btn2).on('click', function() {
                $(btn1).removeClass('active')
                $(this).addClass('active')
                $(tab2).removeClass('none')
                $(tab1).addClass('none')
            });
        }
        tabs('.info-btn-1', '.info-btn-2', '.info-content__tab-2', '.info-content__tab-1')
        tabs('.info-btn-2', '.info-btn-1', '.info-content__tab-1', '.info-content__tab-2')
    

})

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    slidesPerView: 1.15,
    spaceBetween: 7,
    centeredSlides: true,
    
    
    breakpoints: {
     
        400:{
            slidesPerView: 1.25,
          
        },
        480:{
            slidesPerView: 1.45,
        },

       
    },

  })