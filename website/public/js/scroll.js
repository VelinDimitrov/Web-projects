$(document).ready(function() {
  // waypoint for showing the go to top button
  var waypoint = new Waypoint({
    element: document.getElementById("js--waypoint-fixed-top-right"),
    handler: function(direction) {
      if (direction === "up") {
        $(".go-to-top").css({
          opacity: 0,
        });
      } else {
        $(".go-to-top").css({
          opacity: 1,
        });
      }
    }
  });
  // scrolls for each item in the side nav
  $(".js--scroll-to-hydraulic-pumps").click(function() {
    $("html,body").animate({
      scrollTop: $(".hydraulic-pumps").offset().top
    }, 1000);
  });
  $(".js--scroll-to-hydraulics-reiki").click(function() {
    $("html,body").animate({
      scrollTop: $(".hydraulics-reiki").offset().top
    }, 1000);
  });
  $(".js--scroll-to-razpredeliteli").click(function() {
    $("html,body").animate({
      scrollTop: $(".razpredeliteli").offset().top
    }, 1000);
  });
  $(".js--scroll-to-diesel").click(function() {
    $("html,body").animate({
      scrollTop: $(".diesel").offset().top
    }, 1000);
  });
  $(".js--scroll-to-pumps").click(function() {
    $("html,body").animate({
      scrollTop: $(".pumps").offset().top
    }, 1000);
  });
  $(".js--scroll-to-motors").click(function() {
    $("html,body").animate({
      scrollTop: $(".motors").offset().top
    }, 1000);
  });
  $(".js--scroll-to-automobiles").click(function() {
    $("html,body").animate({
      scrollTop: $(".automobiles").offset().top
    }, 1000);
  });
  $(".js--scroll-to-hydraulics").click(function() {
    $("html,body").animate({
      scrollTop: $(".hydraulics").offset().top
    }, 1000);
  });
  $(".go-to-top").click(function(){
    $("html,body").animate({
      scrollTop: $("#top-waypoint").offset().top
    },1000);
  });
});
