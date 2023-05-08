function toggleControl(divId) {
	var page = document.getElementById(divId);
	var divs = document.querySelectorAll(".page-container").forEach(function(pg){
		if(pg !== page) {
			pg.style.display = "none";
		}
	});
	page.style.display = "block";
}

function toggleActive(element){
	document.querySelectorAll(".active").forEach(function(btn){
		if(btn!== element) {
			btn.classList.remove("active");
		}
	});
	element.classList.add("active");
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {navSticky()};

// Get the navbar
var navbar = document.getElementById("topNav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function navMedia() {
  var x = document.getElementById("topNav");
  if (x.className === "topNav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}