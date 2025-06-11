document.addEventListener("DOMContentLoaded", () => {
  const login = document.getElementById('login');

  login.addEventListener('submit', e => {
    e.preventDefault(); 

    const body = {
      user: login.email.value,
      psw: login.senha.value
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };

    fetch('http://localhost:3000/login', options)
      .then(response => response.json()
        .then(data => ({ status: response.status, body: data })))
      .then(result => {
        if (result.status === 200 && result.body.token) {
          localStorage.setItem('token', result.body.token);
          alert(`Bem-vinda, ${result.body.nome}`);
          window.location.href = './home.html';
        } else {
          alert(result.body.message || "Erro ao fazer login.");
        }
      })
      .catch(err => {
        console.error("Erro de conexão:", err);
        alert("Erro de conexão com o servidor.");
      });
  });
});
