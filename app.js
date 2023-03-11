import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/jPigzQBeDeK3N4h4/scene.splinecode');

const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent the default form submission behavior

  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const message = form.querySelector('#message').value;

  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('message', message);

  const url = form.action;
  const options = {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  };

  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.success) {
        // show success message and redirect to thank-you page
        alert('Thank you for your message!');
        window.location.href = form.querySelector('input[name="_next"]').value;
      } else {
        // show error message
        alert('Sorry, there was an error sending your message. Please try again later.');
      }
    })
    .catch(error => {
      console.error(error);
      // show error message
      alert('Sorry, there was an error sending your message. Please try again later.');
    });
});


