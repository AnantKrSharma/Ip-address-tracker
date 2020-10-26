const API_KEY = 'at_cu4hfDxm1O4NN25Gez1wGkXacpny2';
const IP_API_URL = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}`;

const button = document.querySelector('.header__button');

function getGeoLocation() {
  const form = document.querySelector('.header__form');
  const input = document.querySelector('.header__input');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const regexp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (!regexp.test(input.value)) {
      alert('you have entered an invalid IP address!!');
      input.value = '';
      return;
    }
    console.log('good');
  });
}

button.addEventListener('click', getGeoLocation());
