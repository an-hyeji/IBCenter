// 페이지네이션
const buttons = document.querySelectorAll('.number-btn');
if (buttons) {
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      buttons.forEach(function (btn) {
        btn.classList.remove('active');
      });

      this.classList.add('active');
    });
  });
}

// 즐겨찾기
const iconButton = document.querySelector('.icon-button');
if (iconButton) {
  iconButton.addEventListener('click', function () {
    this.classList.toggle('active');
  });
}

// 위아래 버튼 클릭시 영역이동
const scrollUpButton = document.querySelector('.scroll-up');
const scrollDownButton = document.querySelector('.scroll-down');
const contentWrap = document.querySelector('.content-wrap');

if (scrollUpButton && scrollDownButton && contentWrap) {
  scrollUpButton.addEventListener('click', () => {
    contentWrap.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  scrollDownButton.addEventListener('click', () => {
    contentWrap.scrollTo({
      top: contentWrap.scrollHeight,
      behavior: 'smooth',
    });
  });
}

// 테이블 선택 시 액티브
document.addEventListener('DOMContentLoaded', () => {
  const tableRows = document.querySelectorAll('table tbody tr');
  let selectedRow = null;

  if (tableRows) {
    tableRows.forEach((row) => {
      row.addEventListener('click', function () {
        if (selectedRow) {
          selectedRow.classList.remove('selected');
        }
        this.classList.add('selected');
        selectedRow = this;
      });
    });
  }
});

// 사이드메뉴 숨기기
const clickbtn = document.querySelector('.clickbtn');
const sideMenu = document.querySelector('.side');

if (clickbtn && sideMenu) {
  clickbtn.addEventListener('click', function () {
    sideMenu.classList.toggle('hide');
  });
}

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

  const subMenu = listTitle.querySelector('.sub-menu');
  if (subMenu) {
    subMenu.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
});

window.addEventListener('resize', () => console.log('resizing'));

// 체크박스
document.addEventListener('DOMContentLoaded', function () {
  const selectAllCheckbox = document.getElementById('select-all');
  if (selectAllCheckbox) {
    selectAllCheckbox.addEventListener('click', function () {
      const checkboxes = document.querySelectorAll('.checkbox');
      const isChecked = selectAllCheckbox.checked;
      checkboxes.forEach(function (checkbox) {
        checkbox.checked = isChecked;
      });
    });
  }
});
