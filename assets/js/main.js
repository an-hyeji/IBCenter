// 페이지네이션
const buttons = document.querySelectorAll('.number-btn');

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    buttons.forEach(function (btn) {
      btn.classList.remove('active');
    });

    button.classList.add('active');
  });
});

// 즐겨찾기
document.querySelector('.icon-button').addEventListener('click', function () {
  this.classList.toggle('active');
});

// 셀렉트박스

const selectBox = document.querySelector('.select-box');
const dropDownMenu = document.querySelector('.drop-down-menu');

selectBox.addEventListener('click', () => {
  dropDownMenu.style.display =
    dropDownMenu.style.display === 'block' ? 'none' : 'block';
});
