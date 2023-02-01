import {MIN_HEIGHT_GRID_4, MIN_HEIGHT_GRID_3, MOBI_HEIGHT, GRID_ROW_MOBI, GRID_ROW_DESKTOP, AMOUNT_CARDS, DESKTOP_HEIGHT} from '../../src/js/variables';
console.log(window.innerWidth);
import Swiper, { Navigation, Pagination } from 'swiper';
function initSliderBrands() {
  if (window.innerWidth < MOBI_HEIGHT ) {
    console.log('инициализирую слайдер');
    let slider = document.querySelector('.swiper1');
    let newSwiper = new Swiper(slider, {
      spaceBetween: 16,
      slidesPerView: 'auto',
      modules: [Navigation, Pagination],
      pagination: {
        el: '.swiper-pagination1',
        clickable: true,
      },
    });
    slider.dataset.mobile = 'true';
  }
}
function initSliderTechnics() {
  if (window.innerWidth < MOBI_HEIGHT ) {
    console.log('инициализирую слайдер');
    let slider = document.querySelector('.swiper2');
    let newSwiper = new Swiper(slider, {
      spaceBetween: 16,
      slidesPerView: 'auto',
      modules: [Navigation, Pagination],
      pagination: {
        el: '.swiper-pagination2',
        clickable: true,
      },
    });
    slider.dataset.mobile = 'true';
  }
}
function initSliderPrices() {
  if (window.innerWidth < MOBI_HEIGHT ) {
    console.log('инициализирую слайдер');
    let slider = document.querySelector('.swiper3');
    let newSwiper = new Swiper(slider, {
      spaceBetween: 16,
      slidesPerView: 'auto',
      modules: [Navigation, Pagination],
      pagination: {
        el: '.swiper-pagination3',
        clickable: true,
      },
    });
    slider.dataset.mobile = 'true';
  }
}
initSliderBrands();
initSliderTechnics();
initSliderPrices();
