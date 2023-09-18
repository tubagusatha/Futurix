const body = document.querySelector("body");

window.addEventListener("scroll", () => {
  if (window.scrollY > 2050 && window.scrollY < 4600) {
    body.classList.add("bodyscroll");
  } else {
    body.classList.remove("bodyscroll");
  }
});

// loading
document.addEventListener("DOMContentLoaded", function () {
  const loadingContainer = document.querySelector(".loading-container");
  const loadingBar = document.querySelector(".loading-bar");

  setTimeout(function () {
    loadingContainer.style.opacity = "0";
    loadingContainer.style.pointerEvents = "none";
    loadingContainer.style.transition = "opacity 1s";
    loadingBar.style.width = "100%";

    setTimeout(function () {
      loadingContainer.remove();
    }, 1000);
  }, 2000);
});

function showLoading() {
  document.body.classList.add("loading");
}

function hideLoading() {
  document.body.classList.remove("loading");
}

showLoading();

setTimeout(function () {
  hideLoading();
});
