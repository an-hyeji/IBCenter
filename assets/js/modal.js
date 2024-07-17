const modal = document.querySelector('.modal');
const btn = document.querySelector('.modal-button');
const closeBtn = document.querySelector('.close');

btn.onclick = function () {
  modal.style.display = 'block';
};

closeBtn.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
