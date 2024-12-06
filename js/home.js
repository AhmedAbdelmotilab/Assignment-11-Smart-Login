var userName = localStorage.getItem('userLoginName');
var user = document.getElementById('user');
var logOut = document.getElementById('logOut');
user.innerHTML = userName;
logOut.addEventListener('click', function () {
  clearLocalStorage();
});
function clearLocalStorage() {
  localStorage.removeItem('userLoginName');
  window.location = '/Assignment-11-Smart-Login/index.html';
}
