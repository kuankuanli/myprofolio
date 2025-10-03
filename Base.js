var LineBtn = document.getElementById("Line-btn");
var WebBtn = document.getElementById("Web-btn");
var APPBtn = document.getElementById("APP-btn");
var ScreenBtn = document.getElementById("Screen-btn");
var TablewareBtn = document.getElementById("Tableware-btn");
var ProductBtn = document.getElementById("Product-btn");
var InviteBtn = document.getElementById("Invite-btn");
var DMBtn = document.getElementById("DM-btn");

function goHome() {
    window.location.assign("../Home.html");
}

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // 捲動超過 50px
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const navCollapse = document.getElementById('navbarNavDropdown');
  const nav = document.getElementById('navbarNavDropdown');
  const brand = document.querySelector('.navbar-brand');
  const navRightTool = document.querySelector('.nav-right-tool');

  nav.addEventListener('show.bs.collapse', () => {
    brand.style.display = 'none';
    navRightTool.classList.add('is-open');
  });

  nav.addEventListener('hidden.bs.collapse', () => {
    brand.style.display = 'block';
    navRightTool.classList.remove('is-open');
  });

  navCollapse.addEventListener('show.bs.collapse', () => {
    navbar.style.backgroundColor = '#FDFCFC';
  });

  navCollapse.addEventListener('hidden.bs.collapse', () => {
    navbar.style.backgroundColor = ''; // 收合時還原
  });
});


    AOS.init();

