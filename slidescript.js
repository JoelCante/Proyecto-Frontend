$(function () {
    $("#slider4").responsiveSlides({
      auto: true,
      pager: false,
      nav: true,
      speed: 2000,
      namespace: "callbacks",
      before: function () {
        $('.events').append("<li>before event fired.</li>");
      },
      after: function () {
        $('.events').append("<li>after event fired.</li>");
      }
    });
  });