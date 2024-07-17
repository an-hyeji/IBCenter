// 사이드메뉴 토글
const listTitles = document.querySelectorAll('.list-title');

listTitles.forEach((listTitle) => {
  listTitle.addEventListener('click', function () {
    const currentSubMenu = this.querySelector('.sub-menu');

    listTitles.forEach((title) => {
      if (title !== this) {
        const otherSubMenu = title.querySelector('.sub-menu');
        if (otherSubMenu.classList.contains('active')) {
          otherSubMenu.classList.remove('active');
          title.classList.remove('open');
        }
      }
    });

    currentSubMenu.classList.toggle('active');

    this.classList.toggle('open');
  });
});
