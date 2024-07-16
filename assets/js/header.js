//사이드메뉴 토글
const listTitles = document.querySelectorAll('.list-title');

listTitles.forEach((listTitle) => {
  listTitle.addEventListener('click', function () {
    const activeSubMenus = document.querySelectorAll('.sub-menu.active');
    activeSubMenus.forEach((subMenu) => {
      subMenu.classList.remove('active');
    });

    const subMenu = this.querySelector('.sub-menu');
    subMenu.classList.toggle('active');
  });
});
