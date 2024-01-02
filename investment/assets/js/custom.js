// JS for accordion FAQs page
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordionTitle ");

  accordionItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      // Toggle the active class to show/hide content
      if (
        item.parentElement.nextElementSibling &&
        item.parentElement.nextElementSibling.tagName === "DD"
      ) {
        item.classList.toggle("active");
        item.parentElement.nextElementSibling.classList.toggle(
          "accordionItemCollapsed"
        );
      }
    });
  });
});
AOS.init({
  duration: 650,
  once: true
});
// AOS animation
// Owl carasul width banner with slider
// owl carousel
var carousel = function () {
  $(".carousel-car").owlCarousel({
    center: true,
    loop: true,
    autoplay: true,
    items: 1,
    margin: 30,
    stagePadding: 0,
    nav: false,
    navText: [
      '<span class="ion-ios-arrow-back">',
      '<span class="ion-ios-arrow-forward">',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".carousel-testimony").owlCarousel({
    center: true,
    loop: true,
    items: 1,
    margin: 30,
    stagePadding: 0,
    nav: false,
    navText: [
      '<span class="ion-ios-arrow-back">',
      '<span class="ion-ios-arrow-forward">',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
};
carousel();

// ========js for the counter
const counterUp = window.counterUp.default;

let counterItems = document.querySelectorAll(".counter");
let counterItemsObserver = new IntersectionObserver(function (
  entries,
  observer
) {
  entries.forEach(function (entry) {
    let counterItem = entry.target;

    if (entry.isIntersecting && !counterItem.classList.contains("is-visible")) {
      counterUp(counterItem, {
        duration: 2000,
        delay: 16,
      });
      counterItem.classList.add("is-visible");
      counterItemsObserver.unobserve(counterItem);
    }
  });
});
counterItems.forEach(function (counterItem) {
  counterItemsObserver.observe(counterItem);
});

// owl carousel
$(".service-owl").owlCarousel({
  loop: true,
  margin: 10,
  center: true,
  loop: true,
  autoplay: true,
  items: 1,
  stagePadding: 0,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".brand-owl").owlCarousel({
	loop: true,
	autoplay: true,
	items: 1,
	stagePadding: 0,
	nav: false,
	dots:false,
	responsive: {
	  0: {
		items: 3,
	  },
	  600: {
		items: 3,
	  },
	  1000: {
		items: 5,
	  },
	},
  });
  

// scroll nav fixed
$(window).on('scroll resize load', function(){
  var scrollPos = $(window).scrollTop();
  // console.log('scrollposition', scrollPos);
  if(scrollPos > 100){
    $('#nav-fixed').addClass('fixed_nav');
  }else{
    $('#nav-fixed').removeClass('fixed_nav');
  }
})

// testimonial owl slider reviews
$('.owl-carousel.testimonial-owl').owlCarousel({
  loop: true,
	autoplay: true,
	items: 1,
  margin:20,
	stagePadding: 5,
	nav: false,
  center:false,
  responsive:{
      0:{
          items:1
      },
      800:{
          items:2
      }
  }
})


// isotope js
var grid = $(".portfolio-item").isotope({
  // options
  itemSelector: ".item",
  layoutMode: "fitRows",
});

$(".portfolio-menu ul li").click(function () {
  $(".portfolio-menu ul li").removeClass("active");
  $(this).addClass("active");
  var category = $(this).data("filter");
  grid.isotope({
    filter: category,
  });
});
// popup images
// document.addEventListener("DOMContentLoaded", function () {
//   const portfolioItems = document.querySelectorAll(".item");

//   portfolioItems.forEach(function (item) {
//     const image = item.querySelector("img");
//     const popupContainer = document.createElement("div");
//     popupContainer.classList.add("popup-container");
//     popupContainer.innerHTML = `<img class="popup-image" src="${image.src}" alt="">`;
//     document.body.appendChild(popupContainer);

//     item.addEventListener("click", function () {
//       popupContainer.style.display = "flex";
//     });

//     popupContainer.addEventListener("click", function () {
//       popupContainer.style.display = "none";
//     });
//   });
// });