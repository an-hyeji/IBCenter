function setTopActive(element) {
  const topMenuItems = document.querySelectorAll('.top nav ul li');
  topMenuItems.forEach(function (item) {
    item.classList.remove('active');
  });
  element.classList.add('active');
}

function setListActive(element) {
  const listMenuItems = document.querySelectorAll('.bookmark-list li');
  listMenuItems.forEach(function (item) {
    item.classList.remove('active');
  });
  element.classList.add('active');
}

const modal = document.querySelector('.bookmark-modal');
const btn = document.querySelector('.bookmark-button');
const closeBtn = document.querySelector('.modal-close');

btn.onclick = function () {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
};

closeBtn.onclick = function () {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
};

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
};

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.toggle-btn').forEach((button) => {
    button.addEventListener('click', function () {
      const underMenu = this.parentElement.nextElementSibling;
      const plusIcon = this.querySelector('img[alt="플러스 아이콘"]');
      const minusIcon = this.querySelector('img[alt="마이너스 아이콘"]');

      if (underMenu.style.display === 'block') {
        underMenu.style.display = 'none';
        plusIcon.classList.remove('hidden');
        minusIcon.classList.add('hidden');
      } else {
        underMenu.style.display = 'block';
        plusIcon.classList.add('hidden');
        minusIcon.classList.remove('hidden');
      }
    });
  });
});
