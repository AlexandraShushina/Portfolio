$(document).ready(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 1,
      margin: 0,
      loop: true,
      nav: true,
      navText: [
        '<svg class="changePosition" width="2.24vw" height="5.83vw" viewBox="0 0 45 114"><path d="M1.94563 56.1626L44.5915 1.46108L43.4085 0.538818L0.0543823 56.1488L43.4019 113.452L44.5981 112.547L1.94563 56.1626Z" fill="white"/></svg>',
        '<svg class="changePosition2" width="2.24vw" height="5.83vw" viewBox="0 0 45 114"><path d="M43.0544 56.1626L0.408509 1.46108L1.59149 0.538818L44.9456 56.1488L1.59814 113.452L0.401855 112.547L43.0544 56.1626Z" fill="white"/></svg>'
      ],
      dots: false,
      mouseDrag: false,
      touchDrag: false,
      autoplay: true,
      autoplayTimeout: 4000,
      smartSpeed: 300,
      autoplayHoverPause: true,
    });
  });
  