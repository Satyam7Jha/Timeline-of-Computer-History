window.addEventListener("load", () => {
  const gallery = document.getElementById("Gallery");
  gallery.addEventListener("click", () =>
    window.open("../index.html", "_self")
  );
  const timeLine = document.getElementById("timeLine");
  timeLine.addEventListener("click", () =>
    window.open("./TimeLine.html", "_self")
  );

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
