const mobileNavButton = document.querySelector(".btn-mobile-nav");
const navigation = document.querySelector(".navigation");
const allLinks = document.querySelectorAll("a:link");

mobileNavButton.addEventListener("click", function () {
  navigation.classList.toggle("open-nav");
});

allLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (link.classList.contains("nav-link")) {
      navigation.classList.toggle("open-nav");
    }
  });
});
