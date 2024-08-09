function setTopActive(element) {
  const topMenuItems = document.querySelectorAll('.top nav ul li');
  topMenuItems.forEach(function (item) {
    item.classList.remove('active');
  });
  element.classList.add('active');
}

// function setListActive(element) {
//   const listMenuItems = document.querySelectorAll('.list-box .list ul li');
//   listMenuItems.forEach(function (item) {
//     item.classList.remove('active');
//   });
//   element.classList.add('active');
// }

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
