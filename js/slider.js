const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    initialSlide: 0,
    // direction: 'vertical',
    // mousewheel: true,
    // autoplay: {                        
    //     delay: 2000,  
    // },  
    // centeredSlides:true,
    pagination:{
        el: '.swiper-pagination',
        clickable: true
    },
    // breakpoints: {
    //     1242: {
    //         slidesPerView: 3,
    //         spaceBetween: 50

    //     }
    // }
});
const swiperTwo = new Swiper('.swiperTwo', {
    spaceBetween: 42,
    initialSlide: 1,
    slidesPerView: 1,

    // direction: 'vertical',
    // mousewheel: true,
    // autoplay: {                        
    //     delay: 2000,  
    // },  
    centeredSlides: true,
    pagination:{
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        2000: {
            // spaceBetween: 42,
            slidesPerView: 3
        }
    }
});