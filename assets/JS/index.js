const index = {};

index.menu = document.querySelector("#sideMenu");
index.navItem = document.querySelectorAll(".navItem");
index.home = document.querySelector("#home");
index.about = document.querySelector("#about");
index.skills = document.querySelector("#skills");
index.works = document.querySelector("#works");
index.contact = document.querySelector("#contact");
index.menuButton = document.querySelector("#menuButton");
index.scrollDown = document.querySelector("#scrollDown");
index.isOpen = false;

// Scroll function
index.scroll = function (target) {
  document
    .querySelectorAll("html,body")
    .animate({ scrollTop: document.querySelector(target).offset().top }, 500);
};

// Menu button function
index.showHideMenu = () => {
  index.menu.classList.toggle("sideMenuHide");
  index.menu.classList.toggle("sideMenuShow");
  index.isOpen = !index.isOpen;
};

// Mobile class changes on initial load
if (window.innerWidth <= 990) {
  index.menu.classList.add("sideMenuHide");
  index.menu.classList.remove("sideMenuShow");
  index.scrollDown.style.display = "none";
}

if (window.innerWidth > 990) {
  index.menu.classList.remove("sideMenuHide");
  index.menu.classList.add("sideMenuShow");
  index.scrollDown.style.display = "";
  index.isOpen = false;
} else {
  index.menu.classList.remove("sideMenuShow");
  index.menu.classList.add("sideMenuHide");
  index.isOpen = false;
  index.scrollDown.style.display = "none";
}

// Menu button click event
index.menuButton.addEventListener("click", index.showHideMenu);

// Hide menu when clicking a link
for (let i = 0; i < index.navItem.length; i++) {
  index.navItem[i].addEventListener("click", () => {
    if (index.isOpen) {
      // Hide menu when clicking a link
      index.showHideMenu();
    }
  });
}

// Document ready function
function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
