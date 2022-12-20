const menü = document.querySelector(".hamburger");
const sideNav = document.querySelector("#sideNav");

menü.addEventListener("click", () => {
  sideNav.style.right === "-250px"
    ? (sideNav.style.right = "0px")
    : (sideNav.style.right = "-250px");
});
