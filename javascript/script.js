const navElement = document.querySelector('.site_nav')
const hamburger_element = document.querySelector('.hamburger')

hamburger_element.addEventListener('click', () => {
    navElement.classList.toggle("site_nav_open")
    hamburger_element.classList.toggle("hamburger_open")
})

navElement.addEventListener('click', () => {
    navElement.classList.remove("site_nav_open")
    hamburger_element.classList.remove("hamburger_open")
})


$(document).ready(function(){

    $('.img_carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});