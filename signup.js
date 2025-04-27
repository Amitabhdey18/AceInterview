import { auth, createUserWithEmailAndPassword } from './firebase.js';

const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User successfully signed up
      alert('Signup Successful!');
      window.location.href = "dashboard.html"; // Redirect to dashboard after signup
    })
    .catch((error) => {
      // Handle errors
      alert(error.message);
    });
});
