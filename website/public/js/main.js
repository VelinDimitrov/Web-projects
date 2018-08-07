(function hoverLog() {
  var hoverables = Array.from(document.querySelectorAll(".hoverable"));

  hoverables.forEach(hoverable => {
    var parent = Array.from(hoverable.childNodes);

    hoverable.addEventListener("mouseover", function() {
      console.log(parent);
      parent[3].classList.add("show");
    });
    hoverable.addEventListener("mouseleave", function() {
      parent[3].classList.remove("show");
    });
  });
})();


(function resizeTextOnSmallPhones() {
  window.onload = function() {
    if (window.innerWidth < 480) {
      var headerInSlider = Array.from(document.querySelectorAll("#slider1 h1.my-5"));
      headerInSlider.forEach((slide) => {
        slide.classList.remove("display-3");
      });
    }
  };
  window.onresize = function() {
    if (window.innerWidth < 480) {
      var headerInSlider = Array.from(document.querySelectorAll("#slider1 h1.my-5"));
      headerInSlider.forEach((slide) => {
        slide.classList.remove("display-3");
      });
    } else {
      var headerInSlider = Array.from(document.querySelectorAll("#slider1 h1.my-5"));
      headerInSlider.forEach((slide) => {
        slide.classList.add("display-3");
      });
    }
  };
})();

var exports = {};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFooterYear = setFooterYear;

function setFooterYear() {
  var spanYear = document.querySelector("span.year");
  var currentYear = new Date().getFullYear();

  spanYear.textContent = currentYear;
};
setFooterYear();
