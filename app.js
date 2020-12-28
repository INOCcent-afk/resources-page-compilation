// !!!!!!!!!!!!!!!!!!!! JAVASCRIPT FOR NAVBAR!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!! JAVASCRIPT FOR NAVBAR!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!! JAVASCRIPT FOR NAVBAR!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!! JAVASCRIPT FOR NAVBAR!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!! JAVASCRIPT FOR NAVBAR!!!!!!!!!!!!!!!!!!!!

const telBtn = document.querySelector(".tel");
const contactPopOut = document.querySelector(".contact-us-popout");
const navigation = document.querySelector(".navigation");
const contactCloseBtn = document.querySelector(".contact-us-closeBtn");
const menu = document.querySelector(".menu");
const menuPopOut = document.querySelector(".menu-popout");
const menuCloseBtn = document.querySelector(".menu-closeBtn");

const applicationDropdown = document.querySelector(".application-mobile-links");
const applicationDropdownLinks = document.querySelectorAll(
  ".application-mobile-links li"
);
const productsDropdown = document.querySelector(".products-mobile-links");
const productsDropdownLinks = document.querySelectorAll(
  ".products-mobile-links li"
);
const aboutDropdown = document.querySelector(".about-mobile-links");
const aboutDropdownLinks = document.querySelectorAll(".about-mobile-links li");
const desktopContactBtn = document.querySelector(".desktop-nav-contact-us");

telBtn.addEventListener("click", () => {
  if (window.scrollY == 0) {
    contactPopOut.style.right = "0px";
    contactPopOut.style.display = "flex";
    navigation.style.transform = "translateX(-280px)";
    navigation.style.pointerEvents = "none";
    navigation.classList.remove("contactPopOutClassMobile");
    document.body.style.overflow = "hidden";
  } else {
    window.scrollTo(0, 0);
  }
});

menu.addEventListener("click", () => {
  if (window.scrollY == 0) {
    menuPopOut.style.right = "0";
    menuPopOut.style.display = "flex";
    navigation.style.transform = "translateX(-280px)";
    navigation.style.pointerEvents = "none";
    navigation.classList.remove("contactPopOutClassMobile");
    document.body.style.overflow = "hidden";
  } else {
    window.scrollTo(0, 0);
  }
});
menuCloseBtn.addEventListener("click", () => {
  menuPopOut.style.right = "-280px";
  menuPopOut.style.display = "none";
  navigation.classList.add("contactPopOutClassMobile");
  navigation.style.pointerEvents = "all";
  document.body.style.overflow = "auto";
});

contactCloseBtn.addEventListener("click", () => {
  if (window.innerWidth >= 1200) {
    contactPopOut.classList.remove("contactPopOutClass");
    navigation.classList.remove("navigationDeskClass");
    navigation.style.pointerEvents = "all";
    contactPopOut.style.display = "none";
  } else {
    contactPopOut.style.right = "-280px";
    contactPopOut.style.display = "none";
    navigation.classList.add("contactPopOutClassMobile");
    navigation.style.pointerEvents = "all";
  }
  document.body.style.overflow = "auto";
});

applicationDropdown.addEventListener("click", () => {
  applicationDropdown.classList.toggle("applicationHideDropdown");
  applicationDropdownLinks.forEach((link) => {
    link.classList.toggle("dropdownsBorderLi");
  });
});
productsDropdown.addEventListener("click", () => {
  productsDropdown.classList.toggle("productsHideDropdown");
  productsDropdownLinks.forEach((link) => {
    link.classList.toggle("dropdownsBorderLi");
  });
});
aboutDropdown.addEventListener("click", () => {
  aboutDropdown.classList.toggle("aboutHideDropdown");
  aboutDropdownLinks.forEach((link) => {
    link.classList.toggle("dropdownsBorderLi");
  });
});

desktopContactBtn.addEventListener("click", () => {
  if (window.scrollY == 0) {
    contactPopOut.classList.add("contactPopOutClass");
    contactPopOut.classList.add("contactPopOutClass");
    navigation.classList.add("navigationDeskClass");
    navigation.style.pointerEvents = "none";
    document.body.style.overflow = "hidden";
  } else {
    window.scrollTo(0, 0);
  }
});
