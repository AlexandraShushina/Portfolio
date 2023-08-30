$(document).ready(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 4,
      margin: 8,
      loop: false,
      nav: true,
      navText: [
        '<svg class="changePosition" width="1.5vw" height="3vw" viewBox="0 0 18 44"><path d="M2.28595 21.6902L17.9363 1.45887L16.7498 0.541077L0.400131 21.6765L16.7432 43.4502L17.9429 42.5497L2.28595 21.6902Z" fill="white"/></svg>',
        '<svg class="changePosition2" width="1.5vw" height="3vw" viewBox="0 0 18 44"><path d="M16.0571 21.6902L0.406754 1.45887L1.5932 0.541077L17.9429 21.6765L1.59981 43.4502L0.400146 42.5497L16.0571 21.6902Z" fill="white"/></svg>'
      ],
      dots: false,
      mouseDrag: false,
      touchDrag: false,
      autoplay: false,
    });
  });
  