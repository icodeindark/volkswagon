// initialize slider
var swiper = new Swiper('.swiper-container',{
    spaceBetween: 0,
    effect: 'cube',
    speed:3000,

    pagination: {
        el:'.swiper-pagination',
        clickable:true,
    },
    autoplay: {
        delay:3000,
        },
});