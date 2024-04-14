const loginForm = document.querySelector("#loginForm");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
const submittedUsername = localStorage.getItem(USERNAME_KEY);

function onloginSubmit(event){
  event.preventDefault();
  const receivedUsername = loginInput.value;
  localStorage.setItem(USERNAME_KEY, receivedUsername);
  paintGreeting(receivedUsername);
  loginForm.classList.add(HIDDEN_CLASSNAME);
}

function paintGreeting(receivedUsername){
  greeting.innerText = `Hello, ${receivedUsername}\nLet's get it!!!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (submittedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onloginSubmit);
} else{
  paintGreeting(submittedUsername);
}