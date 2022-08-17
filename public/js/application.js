const regForm = document.querySelector('#registerForm');
const logForm = document.querySelector('#loginForm');

regForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const response = await fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    }),
  });
  const responseJson = await response.json();

  if (!responseJson.isRegSuccessful) {
    const errorDiv = document.createElement('h5');
    const parent = event.target.parentElement;
    if (parent.lastChild.nodeName === 'H5') {
      parent.removeChild(parent.lastChild);
    }
    errorDiv.innerText = `Упс, что-то пошло не так, возможно вы забыли заполнить одно из полей, 
    либо пользователь с таким Email уже существует, попробуйте еще раз.`;
    parent.append(errorDiv);
    return;
  }

  window.location.href = '/';
});

logForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: event.target.email.value,
      password: event.target.password.value,
    }),
  });
  const responseJson = await response.json();

  if (!responseJson.isLogSuccessful) {
    const errorDiv = document.createElement('h5');
    const parent = event.target.parentElement;
    if (parent.lastChild.nodeName === 'H5') {
      parent.removeChild(parent.lastChild);
    }
    errorDiv.innerText = 'Неправильный email или пароль, попробуйте еще раз.';
    parent.append(errorDiv);
    return;
  }

  window.location.href = '/';
});
