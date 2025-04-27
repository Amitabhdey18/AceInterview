import { auth, signInWithEmailAndPassword } from './firebase.js';

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert('Login Successful!');
      window.location.href = "dashboard.html"; // Move to dashboard after login
    })
    .catch((error) => {
      alert(error.message);
    });
});
