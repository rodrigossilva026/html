document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let notification = document.getElementById('notification');

    if (username.length < 3) {
        alert("O usuário deve ter pelo menos 3 caracteres!");
        return;
    }

    if (password.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres!");
        return;
    }

    notification.style.display = 'block';
    notification.textContent = `Bem-vindo, ${username}!`;
});
