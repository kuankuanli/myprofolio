function initHeader() {
  const navbarCollapse = document.getElementById('navbarNavDropdown');
  const resumeBtnSm = document.querySelector('.download-resume_sm');
  const navRightTool = document.querySelector('.nav-right-tool');

  if (!navbarCollapse || !resumeBtnSm) {
    console.warn('navbar 或履歷按鈕不存在');
    return;
  }

  resumeBtnSm.style.display = 'none';

  navbarCollapse.addEventListener('show.bs.collapse', () => {
    resumeBtnSm.style.display = 'block';
    navRightTool.style.padding = '0';
  });

  navbarCollapse.addEventListener('hidden.bs.collapse', () => {
    resumeBtnSm.style.display = 'none';
  });

  // 監聽螢幕寬度是否進入 desktop
  const mq = window.matchMedia('(min-width: 992px)');

  function handleBreakpointChange(e) {
    if (e.matches) {
      // 進入桌機版 → 強制隱藏 sm 按鈕
      resumeBtnSm.style.display = 'none';
    } else {
      // mobile → 判斷 menu 是否已展開
      resumeBtnSm.style.display = navbarCollapse.classList.contains('show') ? 'block' : 'none';
    }
  }

  // 初次執行（避免一載入就在桌機卻殘留）
  handleBreakpointChange(mq);

  // 監聽旋轉 / resize
  mq.addEventListener('change', handleBreakpointChange);
}