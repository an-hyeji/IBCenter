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
