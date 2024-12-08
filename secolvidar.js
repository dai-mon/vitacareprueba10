document.addEventListener("DOMContentLoaded", () => {
    const changePasswordButton = document.getElementById("changePasswordButton");
    const emailInput = document.getElementById("emailInput");
    const newPasswordInput = document.getElementById("newPasswordInput");
    const confirmPasswordInput = document.getElementById("confirmPasswordInput");
    const messageBox = document.getElementById("messageBox");

    // Acción al presionar el botón
    changePasswordButton.addEventListener("click", (e) => {
        e.preventDefault(); // Prevenir el envío del formulario

        const email = emailInput.value.trim();
        const newPassword = newPasswordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        // Validar que los campos no estén vacíos
        if (!email || !newPassword || !confirmPassword) {
            showMessage("Por favor, completa todos los campos.");
            return;
        }

        // Validar que las contraseñas coincidan
        if (newPassword !== confirmPassword) {
            showMessage("Las contraseñas no coinciden.");
            return;
        }

        // Simulación de éxito
        showMessage("Contraseña actualizada con éxito.");
        setTimeout(() => {
            // Redirigir al usuario
            window.location.href = 'inicio.html'; // Cambia a la página deseada
        }, 2000);
    });

    // Función para mostrar mensajes en el cuadro
    function showMessage(text) {
        messageBox.textContent = text;
        messageBox.classList.add("visible");

        // Ocultar mensaje automáticamente después de 3 segundos
        setTimeout(() => {
            messageBox.classList.add("hidden");
            setTimeout(() => {
                messageBox.classList.remove("visible", "hidden");
            }, 500);
        }, 3000);
    }
});
document.addEventListener("DOMContentLoaded", () => {
    // Elementos para la contraseña principal
    const toggleNewPassword = document.getElementById("toggleNewPassword");
    const newPasswordInput = document.getElementById("newPasswordInput");

    // Elementos para confirmar la contraseña
    const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
    const confirmPasswordInput = document.getElementById("confirmPasswordInput");

    // Función para alternar la visibilidad de las contraseñas
    function togglePasswordVisibility(toggleIcon, inputField) {
        toggleIcon.addEventListener("click", () => {
            const type = inputField.type === "password" ? "text" : "password";
            inputField.type = type;
            toggleIcon.innerHTML = type === "password" ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
        });
    }

    // Alternar visibilidad de la contraseña principal
    if (toggleNewPassword && newPasswordInput) {
        togglePasswordVisibility(toggleNewPassword, newPasswordInput);
    }

    // Alternar visibilidad de la contraseña de confirmación
    if (toggleConfirmPassword && confirmPasswordInput) {
        togglePasswordVisibility(toggleConfirmPassword, confirmPasswordInput);
    }

    // Elementos para el formulario
    const changePasswordButton = document.getElementById("changePasswordButton");
    const emailInput = document.getElementById("emailInput");
    const messageBox = document.getElementById("messageBox");

    // Acción al presionar el botón
    changePasswordButton.addEventListener("click", (e) => {
        e.preventDefault(); // Prevenir el envío del formulario

        const email = emailInput.value.trim();
        const newPassword = newPasswordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        // Validar que los campos no estén vacíos
        if (!email || !newPassword || !confirmPassword) {
            showMessage("Por favor, completa todos los campos.");
            return;
        }

        // Validar que las contraseñas coincidan
        if (newPassword !== confirmPassword) {
            showMessage("Las contraseñas no coinciden.");
            return;
        }

        // Simulación de éxito
        showMessage("Contraseña actualizada con éxito.");
        setTimeout(() => {
            // Redirigir al usuario
            window.location.href = 'inicio.html'; // Cambia a la página deseada
        }, 2000);
    });

    // Función para mostrar mensajes en el cuadro
    function showMessage(text) {
        messageBox.textContent = text;
        messageBox.classList.add("visible");

        // Ocultar mensaje automáticamente después de 3 segundos
        setTimeout(() => {
            messageBox.classList.add("hidden");
            setTimeout(() => {
                messageBox.classList.remove("visible", "hidden");
            }, 500);
        }, 3000);
    }
});
