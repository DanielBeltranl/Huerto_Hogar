document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registroForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const usuario = document.getElementById('usuario').value.trim();
        const email = document.getElementById('email').value.trim();
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
            showCustomAlert('Por favor, ingresa un nombre de usuario.');
            return;
        }

        if (!validateEmail(email)) {
            showCustomAlert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        if (!validarPassword(password)) {
            showCustomAlert('La contraseña debe tener al menos una mayúscula y mínimo 6 caracteres.');
            return;
        }

        showCustomAlert('Registro exitoso');
        // form.submit(); // Descomenta esta línea si quieres enviar el formulario realmente***

    });

    function validarPassword(password) {
        // Al menos una mayúscula y mínimo 6 caracteres
        const regex = /^(?=.*[A-Z]).{6,}$/;
        return regex.test(password);
    }

    function validateEmail(email) {
        // Expresión regular simple para validar email
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

});
