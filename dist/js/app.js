const html = document.documentElement;

const app = () => {
  return {
    tab: "new",
    productTab: "components",
    isMenuActive: false,
    modal: null,

    selectTab(tab) {
      this.tab = tab;
      this.productTab = tab;
    },

    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },

    openModal(modal) {
      this.modal = modal;
    },

    closeModal() {
      this.modal = null;
    },

    changeQty(el, plus) {
      const item = el.closest(".cart__item_qty");
      const input = item.querySelector(".cart__item_qty-count");
      let currentValue = input.value;

      if (plus) {
        currentValue < 10 ? (input.value = Number(currentValue) + 1) : null;
      } else {
        currentValue > 0 ? (input.value = Number(currentValue) - 1) : null;
      }

      input.dispatchEvent(new Event("change", { bubbles: true }));
      document.querySelector("[name='update_cart']").click();
    },
  };
};

const hero = document.getElementById("hero-slider");
if (hero && window.innerWidth <= 768) {
  window.addEventListener("resize", () => {
    window.location.reload();
  });

  new Swiper(hero, {
    slidesPerView: "auto",
    spaceBetween: 10,
  });
}

const promo = document.getElementById("promo-slider");
if (promo) {
  const distanceToLeft = document.querySelector(".container").getBoundingClientRect();

  new Swiper(promo, {
    slidesPerView: "auto",
    slidesOffsetBefore: distanceToLeft.left,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      320: {
        spaceBetween: 15,
      },
      768: {
        spaceBetween: 25,
      },
    },
  });
}

const certs = document.getElementById("certs-slider");
if (certs) {
  new Swiper(certs, {
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    navigation: {
      prevEl: ".certs .slider__arrows_item--prev",
      nextEl: ".certs .slider__arrows_item--next",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
}

const catalog = document.querySelectorAll(".products .catalog__container");
if (catalog.length > 0) {
  catalog.forEach((item) => {
    new Swiper(item, {
      spaceBetween: 20,
      observer: true,
      observeParents: true,
      navigation: {
        prevEl: ".products .slider__arrows_item--prev",
        nextEl: ".products .slider__arrows_item--next",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        600: {
          slidesPerView: 2,
        },
        968: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });
  });
}

const productThumbs = document.getElementById("product-thumbs");
const productGallery = document.getElementById("product-gallery");
if (productThumbs && productGallery) {
  const thumbsSlider = new Swiper(productThumbs, {
    slidesPerView: 5,
    mousewheel: true,
    spaceBetween: 20,
    loop: true,
    slidesPerSlide: 1,
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      600: {
        slidesPerView: 4,
        spaceBetween: 5,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      1400: {
        direction: "vertical",
      },
    },
  });

  const gallerySlider = new Swiper(productGallery, {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    thumbs: {
      swiper: thumbsSlider,
    },
  });
}
