//Preloader jQuery starts
$(window).on("load", function () {
  // makes sure the whole site is loaded
  $(".preloader .content").delay(50).fadeOut("slow");
  // $('.preloader').delay(300).fadeOut('slow');
  // will fade out the white DIV that covers the website.
  $("body").delay(300).css({ overflow: "hidden" });
  setTimeout(function () {
    $("body").delay(300).css({ overflow: "auto" });
    $(".curtails_effect").addClass("active");
    $(".preloader").delay(300).fadeOut("slow");
  }, 1000);
});
//Preloader jQuery ends
// sticky header starts

// $(document).ready(function() {
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar_top").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight - 100;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});
// });
// sticky header ends
// AOS animation
$(document).ready(function () {
  AOS.init({
    duration: 1200,
    mirror: false,
    once: true,
    disable: function () {
      var maxWidth = 992;
      return window.innerWidth < maxWidth;
    },
  });
});
// header navbar class add starts here

$(".navbar-toggler").click(function () {
  $("#navbar_top").toggleClass("back_green");
});
// navbar class add ends here

// menu starts
document.addEventListener("DOMContentLoaded", function () {
  // make it as accordion for smaller screens
  if (window.innerWidth > 992) {
    document
      .querySelectorAll(".navbar .nav-item")
      .forEach(function (everyitem) {
        everyitem.addEventListener("mouseover", function (e) {
          let el_link = this.querySelector("a[data-bs-toggle]");

          if (el_link != null) {
            let nextEl = el_link.nextElementSibling;
            el_link.classList.add("show");
            nextEl.classList.add("show");
          }
        });
        everyitem.addEventListener("mouseleave", function (e) {
          let el_link = this.querySelector("a[data-bs-toggle]");

          if (el_link != null) {
            let nextEl = el_link.nextElementSibling;
            el_link.classList.remove("show");
            nextEl.classList.remove("show");
          }
        });
      });
  }
});
// menu ends
// Gallery Slides
$(document).ready(function () {
  $("#gallery_slides").owlCarousel({
    autoplay: true,
    rewind: true,
    margin: 0,
    responsiveClass: true,
    autoHeight: true,
    loop: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },

      414: {
        items: 2,
      },
      576: {
        items: 2,
      },

      600: {
        items: 3,
      },

      1024: {
        items: 4,
      },

      1180: {
        items: 5,
      },
    },
  });
});
// Testominal slider
$(document).ready(function () {
  $("#testimonial_slides").owlCarousel({
    autoplay: true,
    rewind: true,
    margin: 0,
    responsiveClass: true,
    autoHeight: true,
    loop: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },

      1180: {
        items: 1,
      },
    },
  });
});

// Magnific popup & images
$(document).ready(function () {
  $(".popup-youtube").magnificPopup({
    type: "iframe",
  });
});
$(document).ready(function () {
  $(".popup-image").magnificPopup({
    type: "image",
    mainClass: "mfp-with-zoom",
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // duration of the effect, in milliseconds
      easing: "ease-in-out", // CSS transition easing function
      opener: function (openerElement) {
        return openerElement.is("img")
          ? openerElement
          : openerElement.find("img");
      },
    },
  });
  $(".popup-image1").magnificPopup({
    type: "image",
    mainClass: "mfp-with-zoom",
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // duration of the effect, in milliseconds
      easing: "ease-in-out", // CSS transition easing function
      opener: function (openerElement) {
        return openerElement.is("img")
          ? openerElement
          : openerElement.find("img");
      },
    },
  });
  $(".popup-image2").magnificPopup({
    type: "image",
    mainClass: "mfp-with-zoom",
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // duration of the effect, in milliseconds
      easing: "ease-in-out", // CSS transition easing function
      opener: function (openerElement) {
        return openerElement.is("img")
          ? openerElement
          : openerElement.find("img");
      },
    },
  });
  $(".popup-image3").magnificPopup({
    type: "image",
    mainClass: "mfp-with-zoom",
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // duration of the effect, in milliseconds
      easing: "ease-in-out", // CSS transition easing function
      opener: function (openerElement) {
        return openerElement.is("img")
          ? openerElement
          : openerElement.find("img");
      },
    },
  });
});

//Counters
$(".count").each(function () {
  console.log($(this).text());
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        step: function (now) {
          $(this).text(Math.ceil(now).toString().padStart(2, 0));
        },
      }
    );
});

// Porgress bar home page
$(document).ready(function () {
  $("#example-1").progress_fnc();
  $("#example-2").progress_fnc();
  $("#example-3").progress_fnc();
  $("#example-4").progress_fnc();

  $(".progressStart").on("click", function () {
    var perent = $(this).closest("div").attr("id");
    $("#" + perent).progress_fnc({
      type: "start",
    });
  });

  $(".progressReset").on("click", function () {
    var perent = $(this).closest("div").attr("id");
    $("#" + perent).progress_fnc({
      type: "reset",
    });
  });
});

(function ($) {
  $.fn.progress_fnc = function (options) {
    var settings = $.extend(
      {
        type: "start",
      },
      options
    );

    var div = $(this);
    var progress = div.find(".cssProgress");

    progress.each(function () {
      var self = $(this);
      var progress_bar = self.find(".cssProgress-bar");
      var progress_label = self.find(".cssProgress-label, .cssProgress-label2");
      var progress_value = progress_bar.data("percent");
      var percentage = parseInt(progress_value, 10) + "%";

      progress_bar.css({
        width: "0%",
        transition: "none",
        "-webkit-transition": "none",
        "-moz-transition": "none",
      });

      if (settings.type == "start") {
        progress_bar.animate(
          {
            width: percentage,
          },
          {
            duration: 1000,
            step: function (x) {
              progress_label.text(Math.round(x) + "%");
            },
          }
        );
      } else if (settings.type == "reset") {
        progress_bar.css("width", "0%");
        progress_label.text("0%");
      }
    });
  };
})(jQuery);

// Grid js
(function () {
  var $grid = $(".grid").imagesLoaded(function () {
    $(".site__wrapper").masonry({
      itemSelector: ".grid",
    });
  });
})();

// Slider in grid
(function ($) {
  $(".owl-carousel").attr("width", "100%");
});

//Cover Box animation

$(".cover_content_main ul li").hover(function () {
  $(".cover_content_main ul li").removeClass("act");
  $(this).addClass("act");
});
$(".cover_content_main2 ul li").hover(function () {
  $(".cover_content_main2 ul li").removeClass("act");
  $(this).addClass("act");
});

// Equal Height div
$(document).ready(function () {
  var title = 0;
  jQuery(".blog_single_content").each(function () {
    if ($(this).height() > title) {
      title = $(this).height();
    }
  });
  jQuery(".blog_single_content").height(title);
});

// on Resize change height
$(document).ready(function () {
  jQuery(window).resize(function () {
    jQuery(".blog_single_content").height("");
    var title = 0;
    jQuery(".blog_single_content").each(function () {
      if ($(this).height() > title) {
        title = $(this).height();
      }
    });
    jQuery(".blog_single_content").height(title);
  });
});

/* ------------------------------ Template color  ----------------------------- */

$("#setting-button").click(function (e) {
  e.preventDefault();
  if ($("#setting-button i").hasClass("fa-gear")) {
    $("#options-setting").addClass("move-right");
    $("#setting-button i").removeClass("fa-gear");
    $("#setting-button i").addClass("fa-times");
  } else {
    $("#options-setting").removeClass("move-right");
    $("#setting-button i").removeClass("fa-times");
    $("#setting-button i").addClass("fa-gear");
  }
});

/* ------------------------------ Template color  ----------------------------- */

var current_color = "default";
$(document).ready(function () {
  // Retrieve previously selected theme from localStorage
  var savedTheme = localStorage.getItem("myTheme");
  savedTheme = savedTheme === null ? "null" : savedTheme;
  var isVisible = $("#color_change").is(":visible");
  // Check if a theme was previously saved
  if (savedTheme) {
    if (isVisible) {
      elementsApplyTheme(savedTheme);
    } else {
      applyTheme(savedTheme);
    }
  }
});

// Function to apply and store selected theme
function applyTheme(theme) {
  // $("link[rel*=skin]").remove();
  console.log({ theme });
  if (theme === "teal") {
    $("head").append(
      '<link rel="stylesheet skin" href="assets/css/teal-styles.css" type="text/css" />'
    );
    // current_color = "teal";
  } else if (theme === "blue") {
    $("head").append(
      '<link rel="stylesheet skin" href="assets/css/yellow-styles.css" type="text/css" />'
    );
    // current_color = "blue";
  } else if (theme === "brown") {
    $("head").append(
      '<link rel="stylesheet skin" href="assets/css/pink-styles.css" type="text/css" />'
    );
    // current_color = "brown";
  } else if (theme === "purple") {
    $("head").append(
      '<link rel="stylesheet skin" href="assets/css/pista-styles.css" type="text/css" />'
    );
    // current_color = "purple";
  } else if (theme === "peach") {
    $("head").append(
      '<link rel="stylesheet skin" href="assets/css/blue-styles.css" type="text/css" />'
    );
    // current_color = "peach";
  } else {
    $("head").append(
      '<link rel="stylesheet skin" href="assets/css/default-styles.css" type="text/css" />'
    );
    // current_color = "default";
  }
  // Store currently selected theme in localStorage
  localStorage.setItem("myTheme", theme == "default" ? null : theme);
}

function elementsApplyTheme(theme) {
  $("link[rel*=skin]").remove();

  if (theme === "teal") {
    $("head").append(
      '<link rel="stylesheet skin" href="../assets/css/teal-styles.css" type="text/css" />'
    );
    current_color = "teal";
  } else if (theme === "blue") {
    $("head").append(
      '<link rel="stylesheet skin" href="../assets/css/yellow-styles.css" type="text/css" />'
    );
    current_color = "blue";
  } else if (theme === "brown") {
    $("head").append(
      '<link rel="stylesheet skin" href="../assets/css/pink-styles.css" type="text/css" />'
    );
    current_color = "brown";
  } else if (theme === "purple") {
    $("head").append(
      '<link rel="stylesheet skin" href="../assets/css/pista-styles.css" type="text/css" />'
    );
    current_color = "purple";
  } else if (theme === "peach") {
    $("head").append(
      '<link rel="stylesheet skin" href="../assets/css/blue-styles.css" type="text/css" />'
    );
    current_color = "peach";
  } else {
    $("head").append(
      '<link rel="stylesheet skin" href="../assets/css/default-styles.css" type="text/css" />'
    );
    current_color = "default";
  }
  // Store currently selected theme in localStorage
  localStorage.setItem("myTheme", theme == "default" ? null : theme);
}

//Default
$("#reset-color").click(function (e) {
  e.preventDefault();
  var isVisible = $("#color_change").is(":visible");
  if (isVisible) {
    elementsApplyTheme("default");
  } else {
    applyTheme("default");
  }
});

//Teal
$("#teal").click(function (e) {
  e.preventDefault();
  var isVisible = $("#color_change").is(":visible");
  if (isVisible) {
    elementsApplyTheme("teal");
  } else {
    applyTheme("teal");
  }
});

//Blue
$("#blue").click(function (e) {
  e.preventDefault();
  var isVisible = $("#color_change").is(":visible");
  if (isVisible) {
    elementsApplyTheme("blue");
  } else {
    applyTheme("blue");
  }
});

//Brown
$("#brown").click(function (e) {
  e.preventDefault();
  var isVisible = $("#color_change").is(":visible");
  if (isVisible) {
    elementsApplyTheme("brown");
  } else {
    applyTheme("brown");
  }
});

//Purple
$("#purple").click(function (e) {
  e.preventDefault();
  var isVisible = $("#color_change").is(":visible");
  if (isVisible) {
    elementsApplyTheme("purple");
  } else {
    applyTheme("purple");
  }
});

//Peach
$("#peach").click(function (e) {
  e.preventDefault();
  var isVisible = $("#color_change").is(":visible");
  if (isVisible) {
    elementsApplyTheme("peach");
  } else {
    applyTheme("peach");
  }
});
