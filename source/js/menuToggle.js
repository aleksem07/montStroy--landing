(() => {
  const menuButton = document.querySelector(".menu-nav__button");
  const menuList = document.querySelector(".menu-nav__list");

  menuButton.addEventListener("click", () => {
    let expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !expanded);
    menuButton.classList.toggle("menu__button--open");
    menuList.classList.toggle("menu__list--open");
  });
})();
