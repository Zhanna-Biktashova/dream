$(function(){

  var acc = document.getElementsByClassName("question__accordion-title");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  $('.slider__inner').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider-next.svg" alt=""></button>',
  });

  // $('.menu__btn').on('click', function () {
  //   $('.menu__inner').slideToggle();
  // });

});