document.addEventListener('DOMContentLoaded', () => {

  // 初始化 AOS（即使沒有 navbar 也能安全執行）
  if (typeof AOS !== 'undefined') {
    AOS.init();
  }

  // 點擊圖片放大功能
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("img01");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");
  const zoomImgs = document.querySelectorAll(".zoom-img");

  // 如果頁面沒有 modal，直接結束（避免報錯）
  if (!modal || !closeBtn || zoomImgs.length === 0) return;

  zoomImgs.forEach(img => {
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
    document.body.classList.remove("modal-open");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });
});