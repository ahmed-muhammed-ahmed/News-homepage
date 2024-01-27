const mobileNavButton = document.querySelector(".btn-mobile-nav");
const navigation = document.querySelector(".navigation");
const allLinks = document.querySelectorAll("a:link");
const body = document.body;

mobileNavButton.addEventListener("click", function () {
  body.classList.toggle("bg-overlay");
  navigation.classList.toggle("open-nav");
});

allLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (link.classList.contains("nav-link")) {
      navigation.classList.toggle("open-nav");
    }
  });
});
