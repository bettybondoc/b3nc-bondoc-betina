
// Change navbar color when scrolling

$(window).scroll(function() {
	var scroll = $(window).scrollTop();

	if (scroll >= 250) {
		$(".navbar").addClass("darknavbar navbar-fixed-top");
	} else {
		$(".navbar").removeClass("darknavbar");
	}
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 250) {
    $(".dropdown-menu").addClass("dropdown-menu-dark");
  } else {
    $(".dropdown-menu").removeClass("dropdown-menu-dark");
  }
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 250) {
    $(".navbar-collapse").addClass("darknavbar-collapse");
  } else {
    $(".navbar-collapse").removeClass("darknavbar-collapse");
  }
});


// Timeline action

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var items = document.querySelectorAll(".timeline li");
 
// code for the isElementInViewport function
 
function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

