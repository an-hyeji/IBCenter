const tds = document.querySelectorAll('td');
const popup = document.getElementById('popup');
const popupContent = document.querySelector('.popup-content');
const closeBtn = document.querySelector('.close');

tds.forEach((td) => {
  td.addEventListener('click', () => {
    popup.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target == popup) {
    popup.style.display = 'none';
  }
});
