$(function(){
  $('.price-filter__input-squre').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.price-filter__label-from').text(data.from);
      $('.price-filter__label-to').text(data.to);
  },
    onChange: function (data) {
      $('.price-filter__label-from').text(data.from);
      $('.price-filter__label-to').text(data.to);
  },
  })

  $('.price-filter__input').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.price-filter__label-from--price').text(data.from);
      $('.price-filter__label-to--price').text(data.to);
  },
    onChange: function (data) {
      $('.price-filter__label-from--price').text(data.from);
      $('.price-filter__label-to--price').text(data.to);
  },
  })


  $('.price-filter__input--1').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.price-filter__label-from').text(data.from);
      $('.price-filter__label-to').text(data.to);
  },
    onChange: function (data) {
      $('.label-from--1').text(data.from);
      $('.label-to--1').text(data.to);
  },
  })
  $('.price-filter__input--2').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.price-filter__label-from').text(data.from);
      $('.price-filter__label-to').text(data.to);
  },
    onChange: function (data) {
      $('.label-from--2').text(data.from);
      $('.label-to--2').text(data.to);
  },
  })
  $('.price-filter__input--3').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.price-filter__label-from').text(data.from);
      $('.price-filter__label-to').text(data.to);
  },
    onChange: function (data) {
      $('.label-from--3').text(data.from);
      $('.label-to--3').text(data.to);
  },
  })
  $('.price-filter__input--4').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.price-filter__label-from').text(data.from);
      $('.price-filter__label-to').text(data.to);
  },
    onChange: function (data) {
      $('.label-from--4').text(data.from);
      $('.label-to--4').text(data.to);
  },
  })
  $('.price-filter__input--5').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.price-filter__label-from').text(data.from);
      $('.price-filter__label-to').text(data.to);
  },
    onChange: function (data) {
      $('.label-from--5').text(data.from);
      $('.label-to--5').text(data.to);
  },
  })
  $('.price-filter__input--6').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.price-filter__label-from').text(data.from);
      $('.price-filter__label-to').text(data.to);
  },
    onChange: function (data) {
      $('.label-from--6').text(data.from);
      $('.label-to--6').text(data.to);
  },
  })
  $('.price-filter__input--7').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.price-filter__label-from').text(data.from);
      $('.price-filter__label-to').text(data.to);
  },
    onChange: function (data) {
      $('.label-from--7').text(data.from);
      $('.label-to--7').text(data.to);
  },
  })
  $('.price-filter__input--8').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.price-filter__label-from').text(data.from);
      $('.price-filter__label-to').text(data.to);
  },
    onChange: function (data) {
      $('.label-from--8').text(data.from);
      $('.label-to--8').text(data.to);
  },
  })
  $('.price-filter__input--9').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.price-filter__label-from').text(data.from);
      $('.price-filter__label-to').text(data.to);
  },
    onChange: function (data) {
      $('.label-from--9').text(data.from);
      $('.label-to--9').text(data.to);
  },
  })
  $('.price-filter__input--10').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.price-filter__label-from').text(data.from);
      $('.price-filter__label-to').text(data.to);
  },
    onChange: function (data) {
      $('.label-from--10').text(data.from);
      $('.label-to--10').text(data.to);
  },
  })
  $('.price-filter__input--11').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.price-filter__label-from').text(data.from);
      $('.price-filter__label-to').text(data.to);
  },
    onChange: function (data) {
      $('.label-from--11').text(data.from);
      $('.label-to--11').text(data.to);
  },
  })
  $('.price-filter__input--12').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.price-filter__label-from').text(data.from);
      $('.price-filter__label-to').text(data.to);
  },
    onChange: function (data) {
      $('.label-from--12').text(data.from);
      $('.label-to--12').text(data.to);
  },
  })
  $('.price-filter__input--13').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.price-filter__label-from').text(data.from);
      $('.price-filter__label-to').text(data.to);
  },
    onChange: function (data) {
      $('.label-from--13').text(data.from);
      $('.label-to--13').text(data.to);
  },
  })





    $('.header__burger').on('click', function(){ 
        $('.burger-content').toggleClass('burger-content--active');

        // $('.product-list__filter ').toggleClass('hidden');
        // $('.main').toggleClass('off');
        $('.header__burger').toggleClass('header__burger--active');
      });

      $('.header__search-img').on('click', function(){ 
        $('.header__search-input').toggleClass('on');
        $(this).removeClass('on');
      });

      $('.select-wrapper-1').on('click', function(){ 
        $('.select-arr-1').toggleClass('rotate-arr');
      });
      $('.select-wrapper-2').on('click', function(){ 
        $('.select-arr-2').toggleClass('rotate-arr');
      });
      // $('.select-form').on('click', function(){ 
      //   $('.dropdown-arr-1').toggleClass('rotate-arr');
      //   $('.dropdown__list').toggleClass('on-flex');
      // });

      $(document).ready(function(){
        let settingsSlick = {
          dots: true,
          arrows: false,
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
            }
        if (document.documentElement.clientWidth < 1100) {
            $('.links__inner').slick(settingsSlick);
        }
 
        window.onresize = function() {
            if (document.documentElement.clientWidth < 1100) {
                if(!$(".links__inner").hasClass("slick-initialized")) $('.links__inner').slick(settingsSlick);
            } else {
                if ($(".links__inner").hasClass("slick-initialized")) $(".links__inner").slick("unslick");
            }
        }
    });

    $(document).ready(function(){
      let settingsSlick = {
              dots: true,
              arrows: false,
              infinite: false,
              speed: 300,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
              infinite: true,
          }
      if (document.documentElement.clientWidth < 850) {
          $('.types__inner').slick(settingsSlick);
      } 
      window.onresize = function() {
          if (document.documentElement.clientWidth < 850) {
              if(!$(".types__inner").hasClass("slick-initialized")) $('.types__inner').slick(settingsSlick);
          } else {
              if ($(".types__inner").hasClass("slick-initialized")) $(".types__inner").slick("unslick");
          }
      }
  });

  $(document).ready(function(){
    let settingsSlick = {
            dots: true,
            arrows: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            infinite: true,
        }
    if (document.documentElement.clientWidth < 1000) {
        $('.reviews__inner').slick(settingsSlick);
    } 
    window.onresize = function() {
        if (document.documentElement.clientWidth < 1000) {
            if(!$(".reviews__inner").hasClass("slick-initialized")) $('.reviews__inner').slick(settingsSlick);
        } else {
            if ($(".reviews__inner").hasClass("slick-initialized")) $(".reviews__inner").slick("unslick");
        }
    }
});


$(document).ready(function(){
  let settingsSlick = {
          dots: true,
          arrows: false,
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
      }
  if (document.documentElement.clientWidth < 1000) {
      $('.blog__inner').slick(settingsSlick);
  } 
  window.onresize = function() {
      if (document.documentElement.clientWidth < 1000) {
          if(!$(".blog__inner").hasClass("slick-initialized")) $('.blog__inner').slick(settingsSlick);
      } else {
          if ($(".blog__inner").hasClass("slick-initialized")) $(".blog__inner").slick("unslick");
      }
  }
});


$(document).ready(function(){
  let settingsSlick = {
          dots: true,
          arrows: false,
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          infinite: true,
      }
  if (document.documentElement.clientWidth < 1000) {
      $('.shop__inner').slick(settingsSlick);
  } 
  window.onresize = function() {
      if (document.documentElement.clientWidth < 1000) {
          if(!$(".shop__inner").hasClass("slick-initialized")) $('.shop__inner').slick(settingsSlick);
      } else {
          if ($(".shop__inner").hasClass("slick-initialized")) $(".shop__inner").slick("unslick");
      }
  }
});


$(document).ready(function(){
  let settingsSlick = {
          dots: false,
          arrows: true,
          nextArrow: '<button type="button" class=" slick-arr--right"><img src="images/icons/arr-right.png"></button>',
          prevArrow: '<button type="button" class=" slick-arr--left"><img src="images/icons/arr-left.png"></button>',
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          infinite: true,
      }
  if (document.documentElement.clientWidth < 1300) {
      $('.service__content').slick(settingsSlick);
  } 
  window.onresize = function() {
      if (document.documentElement.clientWidth < 1300) {
          if(!$(".service__content").hasClass("slick-initialized")) $('.service__content').slick(settingsSlick);
      } else {
          if ($(".service__content").hasClass("slick-initialized")) $(".service__content").slick("unslick");
      }
  }
});


$(document).ready(function(){
  let settingsSlick = {
          dots: true,
          arrows: false,
          infinite: false,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          // centerPadding: 5,
          infinite: true,
      }
      let settingsSlickLast = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
       
        infinite: true,
    }
    let settingsSlickLaster = {
      dots: true,
      arrows: false,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: 10,
      centerMode: false,
      infinite: true,
  }
  if (document.documentElement.clientWidth < 880) {
      $('.information-item-wrapper').slick(settingsSlick);
  } 
  if (document.documentElement.clientWidth < 480) {
    $(".information-item-wrapper").slick("unslick");
    $('.information-item-wrapper').slick(settingsSlickLast);
} 
if (document.documentElement.clientWidth < 430) {
  $(".information-item-wrapper").slick("unslick");
  $('.information-item-wrapper').slick(settingsSlickLaster);
} 
  window.onresize = function() {
      if (document.documentElement.clientWidth < 880) {
          if(!$(".information-item-wrapper").hasClass("slick-initialized")) $('.information-item-wrapper').slick(settingsSlick);
      } else {
          if ($(".information-item-wrapper").hasClass("slick-initialized")) $(".information-item-wrapper").slick("unslick");
      }
  }
});


// $(document).ready(function(){
//   let settingsSlick = {
//           dots: true,
//           arrows: false,
//           infinite: false,
//           speed: 300,
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           centerMode: true,
//           infinite: true,
//       }
//   if (document.documentElement.clientWidth < 1000) {
//       $('.hits__inner').slick(settingsSlick);
//   } 
//   window.onresize = function() {
//       if (document.documentElement.clientWidth < 1000) {
//           if(!$(".hits__inner").hasClass("slick-initialized")) $('.hits__inner').slick(settingsSlick);
//       } else {
//           if ($(".hits__inner").hasClass("slick-initialized")) $(".hits__inner").slick("unslick");
//       }
//   }
// });


      $('.tabs__item').on('click', function(){ 
        $('.tabs__item').removeClass('tabs__item--active');
        $('.tabs__item').removeClass('tabs__item--on');
      });
      $('.tabs__item').on('click', function(){ 
        $(this).toggleClass('tabs__item--active');
      });

      $('.tabs__item-1').on('click', function(){ 
        $('.tabs__block-1').addClass('on');
        $('.tabs__block-2').removeClass('on');
        $('.tabs__block-3').removeClass('on');
        $('.tabs__block-4').removeClass('on');
        $('.tabs__block-4').addClass('off');
      });

      $('.tabs__item-2').on('click', function(){ 
        $('.tabs__block-2').addClass('on');
        $('.tabs__block-1').removeClass('on');
        $('.tabs__block-3').removeClass('on');
        $('.tabs__block-4').removeClass('on');
        $('.tabs__block-4').addClass('off');
      });

      $('.tabs__item-3').on('click', function(){ 
        $('.tabs__block-1').removeClass('on');
        $('.tabs__block-3').addClass('on');
        $('.tabs__block-4').removeClass('on');
        $('.tabs__block-4').addClass('off');
        $('.tabs__block-2').removeClass('on');
      });

      $('.tabs__item-4').on('click', function(){ 
        $('.tabs__block-1').removeClass('on');
        $('.tabs__block-3').removeClass('on');
        $('.tabs__block-4').addClass('on');
        $('.tabs__block-2').removeClass('on');
      });

      $('.product-one__slide-thumb').slick({
        asNavFor: '.product-one__slide-big',
        focusOnSelect: true,
        slidesToScroll: 1,
        slidesToShow: 3,
        vertical: false,
        Infinite: true,
        arrows: true,
        dots: false,
        draggable: false,
        nextArrow: '<button type="button" class=" slick-arr--right"><img src="images/icons/arr-right.png"></button>',
        prevArrow: '<button type="button" class=" slick-arr--left"><img src="images/icons/arr-left.png"></button>',
        responsive: [
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
                   }
          },
          {
            breakpoint: 540,
            settings: {
              arrows: false,
              dots: true,
                   }
          },
          {
            breakpoint: 430,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
              dots: true,
                   }
          }]
    });
    $('.product-one__slide-big').slick({
        asNavFor: '.product-one__slide-thumb',
        draggable: false,
        arrows: false,
        dots: false,
    })



$('.hits__inner').slick({
  arrows: false,
  dots: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: false,
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        dots: true
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        centerMode: false,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        dots: true
      }
    }
  ]
})





$('.pagination__link').on('click', function(){ 
  $('.pagination__link--active').removeClass('pagination__link--active');
  $(this).removeClass('pagination__link--active');
  $(this).toggleClass('pagination__link--active');
});

$('.footer__item-title--1').on('click', function(){ 
  $('.footer__item-menu--1').toggleClass('on-flex');
  $('.footer__item-arr--1').toggleClass('footer__item-arr--active');
});
$('.footer__item-title--2').on('click', function(){ 
  $('.footer__item-menu--2').toggleClass('on-flex');
  $('.footer__item-arr--2').toggleClass('footer__item-arr--active');
});
$('.footer__item-title--3').on('click', function(){ 
  $('.footer__item-menu--3').toggleClass('on-flex');
  $('.footer__item-arr--3').toggleClass('footer__item-arr--active');
});
$('.footer__item-title--4').on('click', function(){ 
  $('.footer__item-menu--4').toggleClass('on-flex');
  $('.footer__item-arr--4').toggleClass('footer__item-arr--active');
});


$('.menu__title--1').on('click', function(){ 
  $('.menu__list--1').toggleClass('menu__list--on');
  $('.menu__title--arr--1').toggleClass('menu__title--arr-active');
});
$('.menu__title--2').on('click', function(){ 
  $('.menu__list--2').toggleClass('menu__list--on');
  $('.menu__title--arr--2').toggleClass('menu__title--arr-active');
});
$('.menu__title--3').on('click', function(){ 
  $('.menu__list--3').toggleClass('menu__list--on');
  $('.menu__title--arr--3').toggleClass('menu__title--arr-active');
});
$('.menu__title--4').on('click', function(){ 
  $('.menu__list--4').toggleClass('menu__list--on');
  $('.menu__title--arr--4').toggleClass('menu__title--arr-active');
});
$('.menu__title--5').on('click', function(){ 
  $('.menu__list--5').toggleClass('menu__list--on');
  $('.menu__title--arr--5').toggleClass('menu__title--arr-active');
});
$('.menu__title--6').on('click', function(){ 
  $('.menu__list--6').toggleClass('menu__list--on');
  $('.menu__title--arr--6').toggleClass('menu__title--arr-active');
});


$('.pagination-more').on('click', function(){ 
  $('.blog-page__more').addClass('on');
});

$('.pagination-more').on('click', function(){ 
  $('.reviews__inner-more').addClass('on-flex');
});

$('.complectation__title').on('click', function(){ 
  $('.complectation__content').toggleClass('on');
  $('.complectation__title-arr').toggleClass('rotate-arr--zero');
});

// $('.tabs-mini').on('click', function(){ 
//   $('.complectation__content').toggleClass('on');
// });

$('.technology__proects-btn').on('click', function(){ 
  $('.technology__proects-inner--more').addClass('on-flex');
});

$('.cooperation__person--1').on('click', function(){ 
  $('.cooperation__person-content--1').toggleClass('on');
  $('.cooperation__person-arr--1').toggleClass('cooperation__person-arr--active');
  $('.cooperation__person--1').toggleClass('cooperation__person--active');
});
$('.cooperation__person--2').on('click', function(){ 
  $('.cooperation__person-content--2').toggleClass('on');
  $('.cooperation__person-arr--2').toggleClass('cooperation__person-arr--active');
  $('.cooperation__person--2').toggleClass('cooperation__person--active');
});
$('.cooperation__person--3').on('click', function(){ 
  $('.cooperation__person-content--3').toggleClass('on');
  $('.cooperation__person-arr--3').toggleClass('cooperation__person-arr--active');
  $('.cooperation__person--3').toggleClass('cooperation__person--active');
});
$('.cooperation__person--4').on('click', function(){ 
  $('.cooperation__person-content--4').toggleClass('on');
  $('.cooperation__person-arr--4').toggleClass('cooperation__person-arr--active');
  $('.cooperation__person--4').toggleClass('cooperation__person--active');
});
$('.cooperation__person--5').on('click', function(){ 
  $('.cooperation__person-content--5').toggleClass('on');
  $('.cooperation__person-arr--5').toggleClass('cooperation__person-arr--active');
  $('.cooperation__person--5').toggleClass('cooperation__person--active');
});
$('.cooperation__person--6').on('click', function(){ 
  $('.cooperation__person-content--6').toggleClass('on');
  $('.cooperation__person-arr--6').toggleClass('cooperation__person-arr--active');
  $('.cooperation__person--6').toggleClass('cooperation__person--active');
});

$('.cooperation__person--7').on('click', function(){ 
  $('.cooperation__person-content--7').toggleClass('on');
  $('.cooperation__person-arr--7').toggleClass('cooperation__person-arr--active');
  $('.cooperation__person--7').toggleClass('cooperation__person--active');
});
$('.cooperation__person--8').on('click', function(){ 
  $('.cooperation__person-content--8').toggleClass('on');
  $('.cooperation__person-arr--8').toggleClass('cooperation__person-arr--active');
  $('.cooperation__person--8').toggleClass('cooperation__person--active');
});
$('.cooperation__person--9').on('click', function(){ 
  $('.cooperation__person-content--9').toggleClass('on');
  $('.cooperation__person-arr--9').toggleClass('cooperation__person-arr--active');
  $('.cooperation__person--9').toggleClass('cooperation__person--active');
});
$('.cooperation__person--10').on('click', function(){ 
  $('.cooperation__person-content--10').toggleClass('on');
  $('.cooperation__person-arr--10').toggleClass('cooperation__person-arr--active');
  $('.cooperation__person--10').toggleClass('cooperation__person--active');
});
$('.cooperation__person--11').on('click', function(){ 
  $('.cooperation__person-content--11').toggleClass('on');
  $('.cooperation__person-arr--11').toggleClass('cooperation__person-arr--active');
  $('.cooperation__person--11').toggleClass('cooperation__person--active');
});
$('.cooperation__person--12').on('click', function(){ 
  $('.cooperation__person-content--12').toggleClass('on');
  $('.cooperation__person-arr--12').toggleClass('cooperation__person-arr--active');
  $('.cooperation__person--12').toggleClass('cooperation__person--active');
});


$('.cooperation__person-name').on('click', function(){ 
  $('.cooperation__person-name').removeClass('cooperation__person-name--active');
  $(this).toggleClass('cooperation__person-name--active');
});


$('.reverse-connect__position-btn').on('click', function(){ 
  $('.reverse-connect__position-btn').removeClass('reverse-connect__position-btn--active');
  $(this).toggleClass('reverse-connect__position-btn--active');
});

});



// полифил для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach){
  NodeList.prototype.forEach = function (callback, thisArg){
    thisArg = thisArg || window;
    for (var i = 0; i <this.length; i++){
      callback.call(thisArg, this[i], i, this);
    };
  };
};

document.querySelectorAll('.dropdown').forEach(function(dropDownWrapper){

        const dropDownBtn = dropDownWrapper.querySelector('.dropdown-btn');
        const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
        const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
        const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
        const dropDownArr = dropDownWrapper.querySelector('.dropdown-arr');

        // клик по кнопке - открыть/закрыть select
          dropDownBtn.addEventListener('click', function(){
          dropDownList.classList.toggle('on-flex');
          dropDownArr.classList.toggle('rotate-arr');
        })

        dropDownListItems.forEach(function(listItem){
          listItem.addEventListener('click', function(e) {
            e.stopPropagation();
            dropDownBtn.innerText = this.innerText;
            dropDownInput.value = this.dataset.value;

            dropDownList.classList.remove('on-flex');
            dropDownArr.classList.remove('rotate-arr');
          });
        });

        // клик вне дропдауна - закрвть дропдаун
        document.addEventListener('click', function(e){
          if(e.target !== dropDownBtn){
            dropDownList.classList.remove('on-flex');
            dropDownArr.classList.remove('rotate-arr');
          }
        });

        document.addEventListener('keydown', function(e) {
          if(e.key === 'Tab' || e.key ==='Escape'){
            dropDownList.classList.remove('on-flex');
            dropDownArr.classList.remove('rotate-arr');
          }
        });    
});

const prev = document.querySelector('.pagination-next');
const next = document.querySelector('.pagination-next');
const pagItem = document.querySelectorAll('.pagination__link');
const actives = document.querySelectorAll('.pagination__link--active');

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;
  if(currentActive > pagItem.length){
    currentActive = pagItem.length;
  }
  update();
});

// prev.addEventListener('click', () => {
//   currentActive--;
//   if(currentActive < 1){
//     currentActive = 1;
//   }
//   update();
// });

function update(){
  pagItem.forEach((pagItem, idx) => {
    if (idx < currentActive){
      pagItem.classList.add('pagination__link--active');
    } else {
      pagItem.classList.remove('pagination__link--active');
    }
  });

  const actives = document.querySelectorAll('.pagination__link--active');

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === pagItem.length){
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}