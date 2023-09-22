const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#signup-name').value.trim(); // getting input with id of 'signup-name'
  const email = document.querySelector('#signup-email').value.trim(); // getting input with id of 'signup-email'
  const password = document.querySelector('#signup-pwd').value.trim(); // getting input with id of 'signup-pwd'

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

const signupBtn = document.getElementById('signup-btn');

signupBtn.addEventListener('click', signupFormHandler);