var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
const sliderShow=async ()=>{
    let slider=""
    const response=await fetch("http://localhost:1000/slider").then((res)=>{
        return res.json()
    })
    response.map((elem)=>{
        slider+=`<div class="swiper-slide">
<img src="${elem.images}" alt="${elem.alt}"/>
</div>`
    })
    document.querySelector('div.swiper-wrapper').innerHTML=slider
}
sliderShow()



