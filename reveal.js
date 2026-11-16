document.querySelectorAll(".reveal-button").forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".animal").classList.add("is-revealed");
    button.setAttribute("aria-expanded", "true");
  });
});
 