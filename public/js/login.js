const loginFormHandler = async (event) => {
  event.preventDefault();
 

  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-pwd').value.trim();
  
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

const loginBtn = document.getElementById('login-btn')


loginBtn.addEventListener('click', loginFormHandler);
