$(function () {

    const mainProductSlide = new Swiper('.main_product_slide', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
      
          pagination: {
            el: '.main_product .page',
            clickable: true,
           
          },
          navigation: {
            nextEl: '.main_product .arrows .prev',
            prevEl: '.main_product .arrows .next',
          },
       
    });

    const lenis = new Lenis()

    // lenis.on('scroll', (e) => {
    //     console.log(e)
    // })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);

    
    AOS.init();




})