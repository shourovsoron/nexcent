//For Navigation


let mobileMenuBtn = document.querySelector(".mobile-menu-btn");

const primaryNav=document.querySelector(".primary-navigation");



mobileMenuBtn.addEventListener('click', ()=>{
    primaryNav.toggleAttribute("data-visible");

    if(primaryNav.hasAttribute("data-visible")){
        mobileMenuBtn.innerHTML='<i class="fa-solid fa-xmark"></i>'
    }else{
      
       mobileMenuBtn.innerHTML='<i class="fa-solid fa-bars"></i>'
    }
});


//Navigation End




var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logo-slider").appendChild(copy);


const swiper = new Swiper('.swiper1', {
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

});

