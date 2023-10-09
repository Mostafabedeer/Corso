const navEl = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  window.scrollY >= 80
    ? navEl.classList.add("bg-dark")
    : navEl.classList.remove("bg-dark");
});
