// SheSafe — script.js
// Mobile nav toggle + contact form validation

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('header nav');
navToggle.addEventListener('click', () => nav.classList.toggle('nav-open'));

function validateForm() {
  const fields = [
    { id: 'name', emailCheck: false },
    { id: 'email', emailCheck: true },
    { id: 'message', emailCheck: false },
  ];
  let valid = true;

  fields.forEach(({ id, emailCheck }) => {
    const input = document.getElementById(id);
    const group = input.closest('.form-group');
    group.classList.remove('error');
    const prev = group.querySelector('.error-msg');
    if (prev) prev.remove();

    const msg = !input.value.trim()
      ? 'This field is required'
      : emailCheck && !input.validity.valid
        ? 'Please enter a valid email address'
        : '';

    if (msg) {
      group.classList.add('error');
      const err = document.createElement('p');
      err.className = 'error-msg';
      err.textContent = msg;
      group.appendChild(err);
      valid = false;
    }
  });

  if (valid) {
    document.getElementById('contact-form').hidden = true;
    document.getElementById('form-success').hidden = false;
  }
  return valid;
}

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});

if (typeof module !== 'undefined') module.exports = { validateForm };
