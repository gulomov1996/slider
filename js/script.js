"use strict"
window.addEventListener('DOMContentLoaded',()=>{
const socialMenu = document.querySelector('.socialNetworks'),
    open = document.querySelector('.socialNetworks .openCloseBtn.open'),
    close = document.querySelector('.socialNetworks .openCloseBtn.close'),
    forAnimate = document.querySelector(".socialNetworks .forAnimate"),
    listItem02 = document.querySelector('.socialNetworks .networksList li:nth-child(2)'),
    listItem03 = document.querySelector('.socialNetworks .networksList li:nth-child(3)'),
    listItem04 = document.querySelector('.socialNetworks .networksList li:nth-child(4)'),
    clickWindow = document.querySelector('.windowClick')

    open.addEventListener('click', ()=>{
        open.style.display = "none";
        close.style.display = "flex";
        forAnimate.style.backgroundColor = 'rgb(12, 14, 133)'
        socialMenu.classList.add('active')
        listItem02.classList.add('active')
        listItem03.classList.add('active')
        listItem04.classList.add('active')
    })
    close.addEventListener('click', ()=>{
        open.style.display = "flex";
        close.style.display = "none";
        socialMenu.classList.remove('active')
        listItem02.classList.remove('active')
        listItem03.classList.remove('active')
        listItem04.classList.remove('active')
    })

    new Swiper('.swiperHero', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
        el: '.swiper-scrollbar',
        },
    });
    const swiper = new Swiper('.swiperHero', {
        autoplay: {
          delay: 10000,
        },
    });
    

})