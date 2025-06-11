const Login = document.getElementById('Login');
Login.addEventListener('submit', e => {
e.preventDefault();

const body = {
user: login.email.value,
psw: login.senha.value
}

const options = {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(body)

};

fetch('http://localhost:4000/login', options)
.then(response => response.json())
.then(response =>{
if(response.message)
alert(response.message);
else if(response.token) {
localStorage.setItem('token', response.token);
window.location.href = './home.html';
}
})

.catch(err => console.error(err));

});