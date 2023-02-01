let formSubmit = document.querySelectorAll('form');
for (let i = 0; i < formSubmit.length; i++) {
  formSubmit[i].addEventListener('submit', function(evt) {
    evt.preventDefault();
    alert('Форма была успешно отправлена');
  });
}
