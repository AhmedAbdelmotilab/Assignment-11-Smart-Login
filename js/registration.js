var userNameInput = document.getElementById('userName');
var userEmailInput = document.getElementById('userEmail');
var userPasswordInput = document.getElementById('userPassword');
var SignUpBtn = document.getElementById('signUpButton');
var usersList = [];
if (localStorage.getItem('users') !== null) {
  usersList = JSON.parse(localStorage.getItem('users'));
}
userNameInput.addEventListener('input', function () {
  validation(userNameInput, 'msgName');
});
userEmailInput.addEventListener('input', function () {
  validation(userEmailInput, 'msgEmail');
});
userPasswordInput.addEventListener('input', function () {
  validation(userPasswordInput, 'msgPassword');
});
SignUpBtn.addEventListener('click', function () {
  addUsers();
});
msgFound;
function addUsers() {
  var isFound = false;
  if (validation(userNameInput, 'msgName') && validation(userEmailInput, 'msgEmail') && validation(userPasswordInput, 'msgPassword')) {
    for (var i = 0; i < usersList.length; i++) {
      if (
        userNameInput.value.trim().toLowerCase() === usersList[i].name.toLowerCase() ||
        userEmailInput.value.trim().toLowerCase() === usersList[i].email.toLowerCase()
      ) {
        showUserMessage();
        clearForm();
        isFound = true;
      }
    }
    if (isFound === false) {
      var users = {
        name: userNameInput.value.trim(),
        email: userEmailInput.value.trim(),
        password: userPasswordInput.value.trim(),
      };
      usersList.push(users);
      localStorage.setItem('users', JSON.stringify(usersList));
      clearForm();
      showSuccessMessage();
    }
  }
}
function clearForm() {
  userNameInput.value = null;
  userEmailInput.value = null;
  userPasswordInput.value = null;
  userNameInput.classList.remove('is-valid');
  userEmailInput.classList.remove('is-valid');
  userPasswordInput.classList.remove('is-valid');
}
function validation(userInput, msgId) {
  var input = userInput.value;
  var Regex = {
    userName: /^[a-zA-Z][a-zA-Z0-9._]{2,19}$/,
    userEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    userPassword: /^.{8,}$/,
  };
  var msg = document.getElementById(msgId);
  if (Regex[userInput.id].test(input)) {
    userInput.classList.add('is-valid');
    userInput.classList.remove('is-invalid');
    msg.classList.add('d-none');
    return true;
  } else {
    userInput.classList.remove('is-valid');
    userInput.classList.add('is-invalid');
    msg.classList.remove('d-none');
    return false;
  }
}
function showUserMessage() {
  const msg = document.getElementById('msgFound');
  msg.classList.replace('d-none', 'd-flex');
  setTimeout(() => {
    msg.classList.replace('d-flex', 'd-none');
  }, 5000);
}
function showSuccessMessage() {
  const msg = document.getElementById('msgSuccess');
  msg.classList.remove('d-none');
  setTimeout(() => {
    msg.classList.add('d-none');
  }, 2000);
}
