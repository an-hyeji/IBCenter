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
