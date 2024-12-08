document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("loginButton");
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");
    const messageBox = document.getElementById("messageBox");

    console.log(loginButton, emailInput, passwordInput, messageBox); // Verifica si los elementos se están encontrando

    if (loginButton) {
        loginButton.addEventListener("click", (e) => {
            console.log("Botón presionado");
            e.preventDefault();
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            // Validar que los campos no estén vacíos
            if (!email || !password) {
                showMessage("Por favor, ingresa tu correo y contraseña.");
                return;
            }

            // Simulación de inicio de sesión exitoso
            showMessage("Bienvenido a VitaCare.");
            setTimeout(() => {
                window.location.href = 'inicio.html'; // Cambia a la página deseada
            }, 2000);
        });
    }

    // Función para mostrar el mensaje en el cuadro
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
    const registerButton = document.getElementById("registerButton");
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");
    const confirmPasswordInput = document.getElementById("confirmPasswordInput");
    const messageBox = document.getElementById("messageBox");

    // Prevent the default form submission
    registerButton.addEventListener("click", (e) => {
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        // Validar que los campos no estén vacíos
        if (!name || !email || !password || !confirmPassword) {
            showMessage("Por favor, completa todos los campos.");
            return;
        }

        // Validar que las contraseñas coincidan
        if (password !== confirmPassword) {
            showMessage("Las contraseñas no coinciden.");
            return;
        }

        // Simulación de registro exitoso
        showMessage("Registro exitoso. Bienvenido a VitaCare.");
        setTimeout(() => {
            // Simulación de redirección
            window.location.href = 'inicio.html'; // Cambia a la página deseada
        }, 2000);
    });

    // Función para mostrar el mensaje en el cuadro
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
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("passwordInput");

    // Elementos para confirmar la contraseña
    const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
    const confirmPasswordInput = document.getElementById("confirmPasswordInput");

    // Alternar visibilidad de la contraseña principal
    togglePassword.addEventListener("click", () => {
        const type = passwordInput.type === "password" ? "text" : "password";
        passwordInput.type = type;
        togglePassword.innerHTML = type === "password" ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
    });

    // Alternar visibilidad de confirmar contraseña
    toggleConfirmPassword.addEventListener("click", () => {
        const type = confirmPasswordInput.type === "password" ? "text" : "password";
        confirmPasswordInput.type = type;
        toggleConfirmPassword.innerHTML = type === "password" ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
    });
});

// Función para mostrar los menús desplegables
function showBirthdateSelectors() {
    document.getElementById('birthdateSelectors').classList.remove('hidden');
}

// Rellenar opciones para el año (1940 a 2024)
const yearSelect = document.getElementById('yearSelect');
for (let year = 1940; year <= 2024; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
}

// Rellenar opciones para el día (1 a 31)
const daySelect = document.getElementById('daySelect');
for (let day = 1; day <= 31; day++) {
    const option = document.createElement('option');
    option.value = day.toString().padStart(2, '0'); // Asegura formato 01, 02, etc.
    option.textContent = day;
    daySelect.appendChild(option);
}

// Actualizar input con la fecha seleccionada
document.getElementById('yearSelect').addEventListener('change', updateBirthdate);
document.getElementById('monthSelect').addEventListener('change', updateBirthdate);
document.getElementById('daySelect').addEventListener('change', updateBirthdate);

function updateBirthdate() {
    const year = yearSelect.value;
    const month = document.getElementById('monthSelect').value;
    const day = daySelect.value;

    if (year && month && day) {
        document.getElementById('birthdateInput').value = `${year}/${month}/${day}`;
        document.getElementById('birthdateSelectors').classList.add('hidden');
    }
}

