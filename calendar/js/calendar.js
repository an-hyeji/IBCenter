const tds = document.querySelectorAll('td');
const popup = document.getElementById('popup');
const popupContent = document.querySelector('.popup-content');
const closeBtn = document.querySelector('.close');

tds.forEach((td) => {
  td.addEventListener('click', (event) => {
    const rect = td.getBoundingClientRect();
    popup.style.top = `${rect.bottom + window.scrollY}px`;
    popup.style.left = `${rect.left + window.scrollX}px`;
    popup.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == popup) {
    popup.style.display = 'none';
  }
});
