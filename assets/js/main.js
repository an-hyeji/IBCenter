const buttons = document.querySelectorAll('.number-btn');

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    buttons.forEach(function (btn) {
      btn.classList.remove('active');
    });

    button.classList.add('active');
  });
});
