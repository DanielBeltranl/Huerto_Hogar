document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const usuario = document.getElementById('usuario').value.trim();
        const password = document.getElementById('password').value.trim();

        function showCustomAlert(message) {
            const alertDiv = document.getElementById('customAlert');
            alertDiv.textContent = message;
            alertDiv.classList.remove('hidden');
            alertDiv.style.display = 'block';
            setTimeout(() => {
                alertDiv.classList.add('hidden');
                alertDiv.style.display = 'none';
            }, 2500);
        }

        if (!usuario) {
            showCustomAlert('Por favor, ingresa tu usuario.');
            return;
        }

        if (!password) {
            showCustomAlert('Por favor, ingresa tu contraseña.');
            return;
        }

        // Aquí iría la validación real contra una base de datos o backend
        // Simulación de login exitoso
        showCustomAlert('Login exitoso');
        setTimeout(function() {
            window.location.href = '../index.html'; // Redirige a la página principal
        }, 2000);
    });
});
