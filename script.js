document.addEventListener("DOMContentLoaded", function () {
    const formLogin = document.getElementById("login");

    formLogin.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = formLogin.email.value.trim();
        const senha = formLogin.senha.value.trim();

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        const usuario = usuarios.find(user =>
            atob(user.email) === email && atob(user.senha) === senha
        );

        if (usuario) {
            alert(`Bem-vindo(a), ${usuario.nome}!`);
            window.location.href = "home.html";
        } else {
            alert("Email ou senha incorretos, ou usuário não cadastrado.");
        }
    });
});
