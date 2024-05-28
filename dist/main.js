
let searchForm =document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active')
  
    cart.classList.remove('active');
    loginForm.classList.remove('active')
    likes.classList.remove('active');
    navbar.classList.remove('active');
}

let cart= document.querySelector('.shopping-cart')
document.querySelector('#cart-btn').onclick=()=>{  
    cart.classList.toggle('active')
    searchForm.classList.remove('active');
  
    loginForm.classList.remove('active')
    likes.classList.remove('active');
    navbar.classList.remove('active');
   
}
let likes= document.querySelector('.likes-cart')
document.querySelector('#likes-btn').onclick=()=>{  
    likes.classList.toggle('active')
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active')

    navbar.classList.remove('active');
   
}
let loginForm =document.querySelector('.login-form');
document.querySelector('#login-btn').onclick=()=>{
    loginForm.classList.toggle('active')
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    likes.classList.remove('active');

    navbar.classList.remove('active');
}

let menu =document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>{
    menu.classList.toggle('active')
}



window.onscroll =()=>{
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active')
    likes.classList.remove('active');
    navbar.classList.remove('active');
}

const swiperHome = new Swiper('.swiper-container', {
    loop: true,
    grabCursor: true,
    slidesPerView:3,
    centeredSlides: true,
    spaceBetween: 20, 
   
                autoplay:{
                    delay:3000,
                    disableOnInteraction:false,

                },
               
});


const swiperSeller = new Swiper(".mySwiper", {
    loop: true,
    grabCursor: true,
    slidesPerView:5,
    spaceBetween: 20,

    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        300:{
            slidesPerView: 1,

        },
       480:{
            slidesPerView: 1,

        },
        640: {
          slidesPerView: 2,
      
        },
        768: {
          slidesPerView: 3,
        
        },
        1024: {
          slidesPerView: 4,
          
        },
      },
  });

const filterButtons = document.querySelectorAll(".filter_buttons button")
const filterableCards = document.querySelectorAll(".filterable_cards .card-content")

const filterCards = e =>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");


    filterableCards.forEach(card => {
card.classList.add("hide") ; 
if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
        card.classList.remove("hide")
    }
    });

  
}


filterButtons.forEach(button => button.addEventListener("click",filterCards))
