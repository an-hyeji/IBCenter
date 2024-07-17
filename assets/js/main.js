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
