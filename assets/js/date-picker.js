const tds = document.querySelectorAll('td');

tds.forEach(function (td) {
  td.addEventListener('click', function () {
    const activeTd = document.querySelector('td.active');
    if (activeTd) {
      activeTd.classList.remove('active');
    }

    this.classList.add('active');
  });
});
