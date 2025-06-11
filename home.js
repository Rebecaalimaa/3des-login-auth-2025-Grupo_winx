const usuario = JSON.parse(atob(tokem.split('.')[1]));
document.querySelector('header h1').innerHTML = usuario.name;
document.querySelector('header img').src = usuario.avatar;

const options = {
    method: 'GET',
    headers: {
        'User- Agent': 'insomnia/11.1.0',
        Authorization: `Bearer $[token]`
    }
};

fetch('http://localhost:4000/posts', options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
const main = document.querySelector('main');
response.forEach(post => {
const card = document.createElement('div');
card.className = 'card';
card.innerHTML = `
<h2>${post.title}</h2>
<p>$(post.content)</p>
<p><strong>Autor :< /strong> ${post.author.name}</p>
<img src="${post.author.avatar}" alt="Avatar de ${post.author.name}" />
`;
main.appendChild(card);
});
})

.catch (err => console.error(err));

    function sair() {
        localStorage.removeItem('token');
window.location.href = '/index.html';
}