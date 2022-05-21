const user = document.querySelector('.user');
const linkButton = document.querySelector('.link-button');

linkButton.addEventListener('click', () => user.classList.toggle('show-link'));