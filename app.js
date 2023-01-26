
let clickBtn = document.querySelector(".click_btn");
let mobileMenu = document.querySelector(".mobile_menu");



clickBtn.addEventListener("click" , function(){
mobileMenu.classList.toggle("active");
clickBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
if(mobileMenu.classList.contains("active")){
  clickBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
}

});






$('.multiple_items').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });