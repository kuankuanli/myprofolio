const navbar = document.getElementById('navbar');

if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // 捲動超過 50px
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const navCollapse = document.getElementById('navbarNavDropdown');
  const nav = document.getElementById('navbarNavDropdown');
  const brand = document.querySelector('.navbar-brand');
  const navRightTool = document.querySelector('.nav-right-tool');

  if (nav && brand && navRightTool) {
    nav.addEventListener('show.bs.collapse', () => {
      brand.style.display = 'none';
      navRightTool.classList.add('is-open');
    });

    nav.addEventListener('hidden.bs.collapse', () => {
      brand.style.display = 'block';
      navRightTool.classList.remove('is-open');
    });
  }

  if (navCollapse && navbar) {
    navCollapse.addEventListener('show.bs.collapse', () => {
      navbar.style.backgroundColor = '#FDFCFC';
    });

    navCollapse.addEventListener('hidden.bs.collapse', () => {
      navbar.style.backgroundColor = ''; // 收合時還原
    });
  }

  // 初始化 AOS（即使沒有 navbar 也能安全執行）
  if (typeof AOS !== 'undefined') {
    AOS.init();
  }
});
