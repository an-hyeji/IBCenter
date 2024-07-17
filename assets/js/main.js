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

// 위아래 버튼 클릭시 영역이동
const scrollUpButton = document.querySelector('.scroll-up');
const scrollDownButton = document.querySelector('.scroll-down');
const contentWrap = document.querySelector('.content-wrap');

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
