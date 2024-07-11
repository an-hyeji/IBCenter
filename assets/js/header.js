//nav-bar 버튼 클릭했을 때 이동
document.querySelector('.move-btn').addEventListener('click', function () {
  document.querySelector('.nav-wrap').classList.toggle('moved-right');
});

// 메뉴 아이콘 클릭시 사이드메뉴 나타내기
const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.querySelector('.side');

menuToggle.addEventListener('click', function () {
  sideMenu.classList.toggle('active');
});

// 서브메뉴 토글
const listTitles = document.querySelectorAll('.list-title');

listTitles.forEach(function (listTitle) {
  listTitle.addEventListener('click', function () {
    const subMenu = listTitle.querySelector('.sub-menu');
    if (subMenu) {
      subMenu.style.display =
        subMenu.style.display === 'block' ? 'none' : 'block';
    }

    listTitle.classList.toggle('open');
  });
});
