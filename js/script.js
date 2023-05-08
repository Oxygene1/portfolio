/*
	Cosmix by TEMPLATE STOCK
	templatestock.co @templatestock
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

/* ==============================================
  	 Main-Slider
  	=============================================== */
$(document).ready(function () {
  var owl = $("#owl-slider");

  owl.owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    singleItem: true,
    transitionStyle: "fade",
  });
});

/* ==============================================
  	  Progress Bar
  	=============================================== */
$(".experience").bind(
  "inview",
  function (event, visible, visiblePartX, visiblePartY) {
    if (visible) {
      $.each($("div.progress-bar"), function () {
        $(this).css("width", $(this).attr("aria-valuemax") + "%");
      });
      $(this).unbind("inview");
    }
  }
);

/* ==============================================
  	 Preloader
  	=============================================== */

(function () {
  $(window).load(function () {
    $("#pre-status").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
  });
})();

/* ==============================================
  	 Pretty Photo
  	=============================================== */

$("a[rel^='prettyPhoto']").prettyPhoto({
  social_tools: false,
});

/* ==============================================
  	  WOW Javascripts 
  	=============================================== */

new WOW().init();

/* ==============================================
  	  Testimonials
  	=============================================== */

$(document).ready(function () {
  var owl = $("#owl-testi");

  owl.owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    singleItem: true,
    transitionStyle: "fade",
  });
});

/* ==============================================
  	  Smooth Scroll
  	=============================================== */

$(function () {
  $("a.scroll").click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top - 50,
          },
          1000
        );
        return false;
      }
    }
  });
});

/* ==============================================
  	  Navbar-Fixed-Top
  	=============================================== */

$(window).bind("scroll", function () {
  var navHeight = $(window).height() - 100;
  if ($(window).scrollTop() > navHeight) {
    $(".navbar").addClass("on");
  } else {
    $(".navbar").removeClass("on");
  }
});

/* ==============================================
  	 ToolTip
  	=============================================== */

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

/* ==============================================
  	  Nice Scroll 
  	=============================================== */

$("html").niceScroll({
  scrollspeed: 100,
  mousescrollstep: 38,
  cursorwidth: 5,
  cursorborder: 0,
  cursorcolor: "#333",
  autohidemode: true,
  zindex: 999999999,
  horizrailenabled: false,
  cursorborderradius: 0,
});

/* ==============================================
  	  Count
  	=============================================== */

$("#fun-facts").bind(
  "inview",
  function (event, visible, visiblePartX, visiblePartY) {
    if (visible) {
      $(this)
        .find(".timer")
        .each(function () {
          var $this = $(this);
          $({ Counter: 0 }).animate(
            { Counter: $this.text() },
            {
              duration: 2000,
              easing: "swing",
              step: function () {
                $this.text(Math.ceil(this.Counter));
              },
            }
          );
        });
      $(this).unbind("inview");
    }
  }
);

/* ==============================================
  	  Clients
  	=============================================== */

var owl = $("#client-slider");

owl.owlCarousel({
  itemsCustom: [
    [0, 2],
    [450, 3],
    [600, 3],
    [700, 4],
    [1000, 5],
    [1200, 5],
    [1400, 5],
    [1600, 5],
  ],
  pagination: false,
  autoPlay: 3000, //Set AutoPlay to 3 seconds
});

/*====================================
    Portfolio Isotope Filter
    ======================================*/

$(window).load(function () {
  "use strict";
  var $portfolio_selectors = $(".portfolio-filter >li>a");
  var $portfolio = $(".portfolio-items");
  $portfolio.isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });

  $portfolio_selectors.on("click", function () {
    $portfolio_selectors.removeClass("active");
    $(this).addClass("active");
    var selector = $(this).attr("data-filter");
    $portfolio.isotope({ filter: selector });
    return false;
  });
});

/*====================================
    Fullscreen burger menu
 ======================================*/
$(".menu-trigger, .mobilenav").click(function () {
  $(".mobilenav").fadeToggle(500);
});
$(".menu-trigger, .mobilenav").click(function () {
  $(".top-menu").toggleClass("top-animate");
  $(".mid-menu").toggleClass("mid-animate");
  $(".bottom-menu").toggleClass("bottom-animate");
});

/* ========================================================================
     On click menu item animate to the section
   ========================================================================== */
$(".mobilenav li, .back-to-top").on("click", function () {
  var target = $(this).data("rel");
  var $target = $(target);
  $("html, body").stop().animate(
    {
      scrollTop: $target.offset().top,
    },
    900,
    "swing"
  );
});

/*====================================
       Index-03-Main-Slider
    ======================================*/

$(document).ready(function () {
  $("#owl-main-slider").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,

    // "singleItem:true" is a shortcut for:
    // items : 1,
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false
  });
});

/* ==============================================
  	     Parallex-javascript
  	=============================================== */

// $("#testimonials").stellar();
// $("#slider-parallax").stellar();

// $(function () {
//   $.stellar({
//     horizontalScrolling: false,

//     verticalOffset: 40,
//   });
// });

/* ==============================================
  	      Index-05-text-Slider
  	=============================================== */
$(document).ready(function () {
  $("#owl-text-slider").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,

    // "singleItem:true" is a shortcut for:
    // items : 1,
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false
  });
});

// document.getElementById("btn-down").addEventListener("click", downloadPDF);

function downloadPDF() {
  var link = document.createElement("a");
  link.href = "../books/Abdulganiyu-Ibrahim.docx";
  link.download = "Abdulganiyu-Ibrahim.docx";
  link.dispatchEvent(new MouseEvent("click"));
}

document.getElementById("myButton").addEventListener("click", function (event) {
  event.preventDefault();
  // Other code goes here
});

function sendEmail() {
  var from_name = document.getElementById("from_name").value;
  var from_email = document.getElementById("from_email").value;
  let from_phone = document.getElementById("from_phone").value;
  var message = document.getElementById("message").value;
  let alertresponse = document.getElementById("alertresponse");
  // Use EmailJS to send the email
  emailjs
    .send("service_ajo817t", "template_75vn9zs", {
      from_name: from_name,
      from_email: from_email,
      message: message,
      from_phone: from_phone,
    })
    .then(function () {
      let success = `Message successfully sent!`;
      setTimeout(function () {
        alertresponse.innerHTML = `<p class="successMessage">${success}</p>`;
      }, 2000);
    })
    .catch(function (error) {
      setTimeout(function () {
        console.log(error);
        let errorMessage = `there was an error while sending your message`;
        alertresponse.innerHTML = `<p class="errorMessage">${errorMessage}</p>`;
      }, 2000);
    });
}
