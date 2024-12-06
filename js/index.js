var userEmailInput = document.getElementById('userEmail');
var userPasswordInput = document.getElementById('userPassword');
var loginBtn = document.getElementById('loginButton');
var usersList = [];
if (localStorage.getItem('users') !== null) {
  usersList = JSON.parse(localStorage.getItem('users'));
}
loginBtn.addEventListener('click', function () {
  userLogin();
});
function userLogin() {
  if (userEmailInput.value.trim() === '' || userPasswordInput.value.trim() === '') {
    showInputRequiredMessage();
    return;
  }
  var emailExists = false;
  var passwordCorrect = false;
  for (var i = 0; i < usersList.length; i++) {
    var currentUser = usersList[i];
    var emailMatch = userEmailInput.value.trim().toLowerCase() === currentUser.email.toLowerCase();
    var passwordMatch = userPasswordInput.value === currentUser.password;
    if (emailMatch) {
      emailExists = true;
      if (passwordMatch) {
        localStorage.setItem('userLoginName', currentUser.name);
        window.location = '/Assignment-11-Smart-Login/pages/home.html';
        return;
      }
    }
  }
  if (emailExists && !passwordCorrect) {
    showPasswordMessage();
  } else if (!emailExists && passwordCorrect) {
    showEmailMessage();
  } else if (!emailExists && !passwordCorrect) {
    showNotFoundMessage();
  }
}
function showEmailMessage() {
  const msg = document.getElementById('msgEmailNotFound');
  msg.classList.replace('d-none', 'd-flex');
  setTimeout(() => {
    msg.classList.replace('d-flex', 'd-none');
  }, 5000);
}
function showPasswordMessage() {
  const msg = document.getElementById('msgPasswordNotFound');
  msg.classList.replace('d-none', 'd-flex');
  setTimeout(() => {
    msg.classList.replace('d-flex', 'd-none');
  }, 5000);
}
function showNotFoundMessage() {
  const msg = document.getElementById('msgNotFound');
  msg.classList.replace('d-none', 'd-flex');
  setTimeout(() => {
    msg.classList.replace('d-flex', 'd-none');
  }, 5000);
}
function showInputRequiredMessage() {
  const msg = document.getElementById('msgInputsRequired');
  msg.classList.remove('d-none');
  setTimeout(() => {
    msg.classList.add('d-none');
  }, 5000);
}
