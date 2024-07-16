// 서브메뉴 토글
const listTitles = document.querySelectorAll('.list-title');

listTitles.forEach(function (listTitle) {
  const subMenu = listTitle.querySelector('.sub-menu');

  if (listTitle.querySelector('span').textContent.trim() === '투자기업관리') {
    subMenu.style.display = 'block';
    listTitle.classList.add('open');
  }

  listTitle.addEventListener('click', function (e) {
    if (!e.target.closest('.sub-menu')) {
      if (subMenu) {
        subMenu.style.display =
          subMenu.style.display === 'block' ? 'none' : 'block';
      }

      listTitle.classList.toggle('open');
    }
  });
});
