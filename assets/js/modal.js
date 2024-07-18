const modal = document.querySelector('.modal');
const btn = document.querySelector('.modal-button');
const closeBtn = document.querySelector('.modal-close');

btn.onclick = function () {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
};

closeBtn.onclick = function () {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
};
