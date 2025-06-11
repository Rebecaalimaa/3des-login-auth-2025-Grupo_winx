const token = localStorage.getItem('token');

if (!token) {
  alert("Você precisa estar logado.");
  window.location.href = "/index.html";
}

const usuario = JSON.parse(atob(token.split('.')[1]));
document.querySelector('header h1').innerHTML = usuario.name;
document.querySelector('header img').src = usuario.avatar;

const options = {
  method: 'GET',
  headers: {
    'User-Agent': 'insomnia/11.1.0',
    Authorization: `Bearer ${token}`
  }
};

fetch('http://localhost:3000/posts', options)
  .then(response => response.json())
  .then(response => {
    const main = document.querySelector('main');
    response.forEach(post => {
      const authorName = post.author?.name || 'Autor desconhecido';
      const authorAvatar = post.author?.avatar || 'https://via.placeholder.com/50'; 

      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <p><strong>Autor:</strong> ${authorName}</p>
        <img src="${authorAvatar}" alt="Avatar de ${authorName}" />
      `;
      main.appendChild(card);
    });
  })
  .catch(err => console.error(err));

function sair() {
  localStorage.removeItem('token');
  window.location.href = '/index.html';
}
