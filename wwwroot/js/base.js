const navbar = document.getElementById('navbar');

//滑鼠滾動 __px 後， navbar 會變成實色背景
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 56);
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
      navbar.classList.add('menu-open');
    });

    nav.addEventListener('hidden.bs.collapse', () => {
      brand.style.display = 'block';
      navbar.classList.remove('menu-open');
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

//圖片放大
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("img01");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".zoom-img").forEach(img => {
      img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      captionText.textContent = img.alt;

      // 🔒 鎖住背景滾動
      document.body.classList.add("modal-open");
      });
  });

  closeBtn.addEventListener("click", () => {
      modal.style.display = "none";

      // 🔓 還原滾動
      document.body.classList.remove("modal-open");
  });

  modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
});
