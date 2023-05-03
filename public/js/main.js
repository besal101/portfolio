(function ($) {
  "use strict";
  // 03. Scroll Top
  let scroll_top = document.getElementById("scroll_top");
  if (scroll_top) {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        scroll_top.style.display = "block";
      } else {
        scroll_top.style.display = "none";
      }
    };

    scroll_top.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }
  /////////////////////////////////////////////////////
  // 06. Header 2
  let header_bg_2 = document.querySelector(".header__area-2");
  if (header_bg_2) {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        header_bg_2.style.background = "#121212";
        header_bg_2.classList.add("sticky-2");
        if (scroll_top) {
          scroll_top.style.display = "block";
        }
      } else {
        header_bg_2.style.background = "transparent";
        header_bg_2.classList.remove("sticky-2");
        if (scroll_top) {
          scroll_top.style.display = "none";
        }
      }
    };
  }
  /////////////////////////////////////////////////////

  jQuery(document).ready(function () {
    /////////////////////////////////////////////////////
    // 29. Offcanvas Menu
    $(".offcanvas__menu").meanmenu({
      meanScreenWidth: "5000",
      meanMenuContainer: ".offcanvas__menu-wrapper",
      meanMenuCloseSize: "36px",
    });
    /////////////////////////////////////////////////////
  });

  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // 32. Menu Text Animation
  document
    .querySelectorAll(".menu-anim > li > a")
    .forEach(
      (button) =>
        (button.innerHTML =
          '<div class="menu-text"><span>' +
          button.textContent.split("").join("</span><span>") +
          "</span></div>")
    );

  setTimeout(() => {
    var menu_text = document.querySelectorAll(".menu-text span");
    menu_text.forEach((item) => {
      var font_sizes = window.getComputedStyle(item, null);
      let font_size = font_sizes.getPropertyValue("font-size");
      let size_in_number = parseInt(font_size.replace("px", ""));
      let new_size = parseInt(size_in_number / 3);
      new_size = new_size + "px";
      if (item.innerHTML == " ") {
        item.style.width = new_size;
      }
    });
  }, 1000);

  var portfolio_project_thumbs = new Swiper(".portfolio__project-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
    allowTouchMove: false,
  });
  var portfolio_project = new Swiper(".portfolio__project-slider", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".pp-prev",
      prevEl: ".pp-next",
    },
    thumbs: {
      swiper: portfolio_project_thumbs,
    },
  });
  ///////////////////////////////////////////////////

  // 59. Portfolio Main Slider
  var breakpoint = window.matchMedia("( max-width: 1300px )");
  var pp_main_wrap = document.querySelector(".portfolio__main-slider");

  if (pp_main_wrap) {
    var enableSwiper = function () {
      var pp_main = new Swiper(".portfolio__main-slider", {
        allowTouchMove: false,
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    };

    var breakpointChecker = function () {
      if (breakpoint.matches === true) {
        if (pp_main !== undefined) pp_main.destroy(true, true);
        return;
      } else if (breakpoint.matches === false) {
        return enableSwiper();
      }
    };

    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  }
})(jQuery);
