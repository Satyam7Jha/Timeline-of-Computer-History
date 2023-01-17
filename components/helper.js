window.addEventListener("load", () => {

  // slider change Logic

  const nextBtn = document.getElementById("")

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



// ------------------------------------------------------------------------------------
  var items = document.querySelectorAll("li");

  function isItemInView(item) {
    var rect = item.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function isItemOutView(item, i) {
    var rect = item.getBoundingClientRect();
    return rect.bottom < 0 || rect.bottom > window.innerHeight;
  }

  function makeCardHidden() {
    for (let i = 0; i < items.length; i++) {
      if (i == 1) isItemOutView(items[i], i);
    }
  }
  function makeCardVisible() {
    for (var i = 0; i < items.length; i++) {
      if (isItemOutView(items[i], i)) {
        items[i].classList.remove("show");
      } else if (isItemInView(items[i])) {
        items[i].classList.add("show");
      }
    }
  }

  

  // listen for events
  window.addEventListener("load", makeCardVisible);
  window.addEventListener("resize", makeCardVisible);
  window.addEventListener("scroll", makeCardVisible);

  window.addEventListener("load", makeCardHidden);
  window.addEventListener("resize", makeCardHidden);
  window.addEventListener("scroll", makeCardHidden);



});
