
document.addEventListener('DOMContentLoaded', () => {
   // Obtener el toggle y el elemento html
const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement; // <html>

// Cargar la preferencia de modo oscuro guardada
const savedDarkMode = localStorage.getItem('darkMode') === 'true';
if (savedDarkMode) {
    html.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

// Activar/desactivar el modo oscuro cuando el checkbox cambie
darkModeToggle.addEventListener('change', () => {
    html.classList.toggle('dark-mode');
    // Guardar la preferencia en el localStorage
    localStorage.setItem('darkMode', html.classList.contains('dark-mode'));
});


    // Bottom Navigation
    const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
    const sections = document.querySelectorAll('.section');

    bottomNavItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetSectionId = item.getAttribute('data-target');

            // Remove active from all nav items and sections
            bottomNavItems.forEach(navItem => navItem.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            // Add active to clicked nav item and corresponding section
            item.classList.add('active');
            document.getElementById(targetSectionId).classList.add('active');
        });
    });

    // Font Size Control
    const fontSizeButtons = document.querySelectorAll('.font-size-btn');

    // Load saved font size preference
    const savedFontSize = localStorage.getItem('fontSize') || 'medium';
    html.classList.add(`font-${savedFontSize}`);

    fontSizeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const size = btn.getAttribute('data-size');

            // Remove existing font classes
            html.classList.remove('font-small', 'font-medium', 'font-large');
            html.classList.add(`font-${size}`);

            // Update active button
            fontSizeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Save preference
            localStorage.setItem('fontSize', size);
        });
    });

    // Notification Toggle
    const notificationToggle = document.getElementById('notificationsToggle');
    const savedNotificationPreference = localStorage.getItem('notifications') === 'true';

    notificationToggle.checked = savedNotificationPreference;

    notificationToggle.addEventListener('change', () => {
        localStorage.setItem('notifications', notificationToggle.checked);
    });
});
// Referencias
const glucoseInput = document.getElementById('glucoseLevel');
const checkMenuButton = document.getElementById('checkMenu');
const menuMessage = document.getElementById('menuMessage');
const mealRecommendations = document.getElementById('mealRecommendations');
const menuRecommendations = document.getElementById('menuRecommendations');

// Estado de glucosa (se mostrará en color)
const glucoseStatus = document.createElement('h3');
glucoseStatus.id = 'glucoseStatus';
glucoseStatus.textContent = 'Estado de Glucosa: ';
glucoseStatus.style.color = 'gray'; // Color inicial
menuRecommendations.insertBefore(glucoseStatus, menuMessage);

// Función para obtener recomendaciones
function getRecommendations() {
    const glucoseLevel = parseFloat(glucoseInput.value);

    // Validación del input
    if (isNaN(glucoseLevel)) {
        glucoseStatus.textContent = 'Introduce un nivel válido.';
        glucoseStatus.style.color = 'gray';
        menuMessage.textContent = '';
        mealRecommendations.innerHTML = '';
        return;
    }

    let statusText = '';
    let statusColor = '';
    let recommendations = {
        desayuno: '',
        comida: '',
        cena: '',
        snack: ''
    };

    // Evaluar el nivel de glucosa
if (glucoseLevel < 70) {
    statusText = 'Estado de Glucosa: Muy Bajo';
    statusColor = 'red';
    menuMessage.textContent = 'Tu nivel de glucosa es muy bajo. Es importante actuar rápidamente. Consulta a tu médico si los síntomas persisten.';
    recommendations = {
        desayuno: '🍞 Pan blanco con mermelada y un vaso pequeño de agua con azúcar.',
        comida: '🍲 Sopa de fideos con caldo de pollo y un plátano.',
        cena: '🍚 Avena con leche y un poco de miel.',
        snack: '🍎 Manzana o un puñado de uvas.'
    };
} else if (glucoseLevel >= 70 && glucoseLevel <= 90) {
    statusText = 'Estado de Glucosa: Bajo';
    statusColor = 'blue';
    menuMessage.textContent = 'Tu nivel de glucosa está bajo. Intenta mantenerte en un rango más estable.';
    recommendations = {
        desayuno: '🥖 Pan integral con mermelada y un vaso de agua con limón.',
        comida: '🍲 Sopa de verduras y una pieza de pollo a la plancha.',
        cena: '🍚 Arroz integral con vegetales al vapor.',
        snack: '🍏 Una manzana o unas almendras.'
    };
} else if (glucoseLevel >= 90 && glucoseLevel <= 140) {
    statusText = 'Estado de Glucosa: Estable';
    statusColor = 'green';
    menuMessage.textContent = 'Tu nivel de glucosa está estable. Mantén una dieta balanceada.';
    recommendations = {
        desayuno: '🍳 Tortilla de huevo con jitomate y un par de tostadas integrales.',
        comida: '🍚 Arroz con frijoles y una pieza de pollo a la plancha.',
        cena: '🥗 Verduras cocidas con una tortilla y queso fresco.',
        snack: '🥜 Un puñado de cacahuates o yogur natural.'
    };
} else if (glucoseLevel > 140 && glucoseLevel <= 180) {
    statusText = 'Estado de Glucosa: Moderado';
    statusColor = 'yellowgreen';
    menuMessage.textContent = 'Tu nivel de glucosa está moderado. Evita carbohidratos simples y azúcares.';
    recommendations = {
        desayuno: '🍳 Claras de huevo con nopales y un par de tortillas.',
        comida: '🥣 Sopa de verduras con lentejas.',
        cena: '🥗 Ensalada de lechuga, pepino y zanahoria con limón.',
        snack: '🥕 Jícama o zanahorias crudas.'
    };
} else if (glucoseLevel > 180 && glucoseLevel <= 250) {
    statusText = 'Estado de Glucosa: Alto';
    statusColor = 'orange';
    menuMessage.textContent = 'Tu nivel de glucosa está alto. Evita carbohidratos y azúcares.';
    recommendations = {
        desayuno: '🍳 Claras de huevo con espinacas y un par de tortillas de maíz.',
        comida: '🥗 Sopa de verduras con pechuga de pollo a la plancha.',
        cena: '🥗 Ensalada con lechuga, pepino y aderezo bajo en grasa.',
        snack: '🥒 Pepinos o zanahorias en rodajas.'
    };
} else {
    statusText = 'Estado de Glucosa: Muy Alto';
    statusColor = 'red';
    menuMessage.textContent = 'Tu nivel de glucosa es muy alto. Es importante buscar atención médica inmediatamente.';
    recommendations = {
        desayuno: '🥑 Aguacate con tomate y un vaso de agua.',
        comida: '🥣 Sopa de verduras con arroz integral.',
        cena: '🥗 Ensalada de espinacas con limón y pechuga de pollo.',
        snack: '🥒 Pepinos o zanahorias crudas.'
    };
}

    // Mostrar estado de glucosa con color
    glucoseStatus.textContent = statusText;
    glucoseStatus.style.color = statusColor;

    // Mostrar recomendaciones
    mealRecommendations.innerHTML = `
        <li><strong>Desayuno:</strong> ${recommendations.desayuno}</li>
        <li><strong>Comida:</strong> ${recommendations.comida}</li>
        <li><strong>Cena:</strong> ${recommendations.cena}</li>
        <li><strong>Snack:</strong> ${recommendations.snack}</li>
    `;
}

// Evento para el botón de "Obtener Recomendaciones"
checkMenuButton.addEventListener('click', getRecommendations);

// Captura de elementos
const checkButton = document.getElementById("checksalud");
const healthLevelInput = document.getElementById("healthlevel");
const healthMessage = document.getElementById("healthMessage");
const healthRecommendations = document.getElementById("healthRecommendations");

// Función para dar recomendaciones
checkButton.addEventListener("click", () => {
    const glucoseLevel = parseFloat(healthLevelInput.value);
    glucoseStatus.textContent = 'Estado de Glucosa: ';
    glucoseStatus.style.color = 'gray'; // Color inicial

    // Limpiar mensajes previos
healthRecommendations.innerHTML = "";

if (isNaN(glucoseLevel) || glucoseLevel <= 0) {
    healthMessage.textContent = "Por favor, introduce un nivel válido.";
    healthMessage.style.color = "grey";
    healthMessage.style.fontSize = "1.em"; // Hace el texto más grande
    healthMessage.style.fontWeight = "bold"; // Lo pone en negritas
    return;
}

if (glucoseLevel < 70) {
    healthMessage.textContent = "Tu nivel de glucosa es muy bajo.";
    healthMessage.style.color = "red";
    healthMessage.style.fontSize = "1.4em"; // Hace el texto más grande
    healthMessage.style.fontWeight = "bold"; // Lo pone en negritas
    healthRecommendations.innerHTML = `
        <li>🍊 Consume un jugo de naranja o una cucharada de miel inmediatamente.</li>
        <li>🛏️ Acuéstate y descansa durante 10-15 minutos.</li>
        <li>📞 Si los síntomas persisten, busca atención médica de inmediato.</li>
    `;
} else if (glucoseLevel >= 70 && glucoseLevel <= 90) {
    healthMessage.textContent = "Tu nivel de glucosa es bajo.";
    healthMessage.style.color = "blue";
    healthMessage.style.fontSize = "1.4em"; // Hace el texto más grande
    healthMessage.style.fontWeight = "bold"; // Lo pone en negritas
    healthRecommendations.innerHTML = `
        <li>🥗 Mantén una dieta equilibrada con comidas pequeñas y frecuentes.</li>
        <li>🚶‍♂️ Realiza ejercicio moderado al menos 30 minutos al día.</li>
        <li>💧 Hidrátate bien bebiendo agua regularmente.</li>
    `;
} else if (glucoseLevel >= 90 && glucoseLevel <= 130) {
    healthMessage.textContent = "Tu nivel de glucosa es estable.";
    healthMessage.style.color = "green";
    healthMessage.style.fontSize = "1.4em"; // Hace el texto más grande
    healthMessage.style.fontWeight = "bold"; // Lo pone en negritas
    healthRecommendations.innerHTML = `
        <li>🥗 Mantén una dieta balanceada y controla las porciones.</li>
        <li>🚶‍♂️ Haz ejercicio moderado al menos 30 minutos al día.</li>
        <li>💧 Bebe al menos 8 vasos de agua al día para mantenerte hidratado.</li>
    `;
} else if (glucoseLevel >= 130 && glucoseLevel <= 180) {
    healthMessage.textContent = "Tu nivel de glucosa es moderado.";
    healthMessage.style.color = "yellowgreen";
    healthMessage.style.fontSize = "1.4em"; // Hace el texto más grande
    healthMessage.style.fontWeight = "bold"; // Lo pone en negritas
    healthRecommendations.innerHTML = `
        <li>🥗 Evita alimentos altos en carbohidratos simples y azúcares.</li>
        <li>🚶‍♂️ Realiza ejercicio cardiovascular de 30 minutos al día.</li>
        <li>🩺 Consulta con tu médico para ajustar tu plan de control de glucosa.</li>
    `;
} else if (glucoseLevel >= 180 && glucoseLevel <= 250) {
    healthMessage.textContent = "Tu nivel de glucosa es alto.";
    healthMessage.style.color = "orange";
    healthMessage.style.fontSize = "1.4em"; // Hace el texto más grande
    healthMessage.style.fontWeight = "bold"; // Lo pone en negritas
    healthRecommendations.innerHTML = `
        <li>🥗 Disminuye el consumo de carbohidratos refinados y alimentos azucarados.</li>
        <li>🩺 Programa una consulta médica para ajustar tu tratamiento.</li>
        <li>💧 Mantente hidratado para ayudar a regular los niveles.</li>
    `;
} else {
    healthMessage.textContent = "Tu nivel de glucosa es muy alto.";
    healthMessage.style.color = "red";
    healthMessage.style.fontSize = "1.4em"; // Hace el texto más grande
    healthMessage.style.fontWeight = "bold"; // Lo pone en negritas
    healthRecommendations.innerHTML = `
        <li>🚨 Busca atención médica inmediata para evitar complicaciones.</li>
        <li>💧 Bebe agua constantemente para evitar la deshidratación.</li>
        <li>🥤 Evita el consumo de alimentos con alto contenido de azúcar y carbohidratos.</li>
    `;
}
});

const ctx = document.getElementById('progressChart').getContext('2d');

// Crear el gráfico de glucosa
const progressChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [], // Fechas o índices de registros
        datasets: [{
            label: 'Niveles de Glucosa',
            data: [], // Niveles de glucosa
            borderColor: '#3b82f6',
            fill: false,
            tension: 0.4 // Suavizar la línea
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Registro' // Eje X representa el número de registro (1°, 2°, 3°...)
                }
            },
            y: {
                min: 65, // Nivel mínimo permitido en la gráfica
                max: 400, // Nivel máximo permitido
                ticks: {
                    stepSize: 50 // Incrementos del eje Y
                },
                title: {
                    display: true,
                    text: 'Nivel de Glucosa' // Etiqueta del eje Y
                }
            }
        }
    }
});

// Cargar los datos desde localStorage al cargar la página
function loadData() {
    const savedData = localStorage.getItem('glucoseData');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        progressChart.data.labels = parsedData.labels;
        progressChart.data.datasets[0].data = parsedData.data;
        parsedData.records.forEach(record => {
            addRecordToTable(record); // Mostrar también los registros en la tabla
        });
        progressChart.update();
    }
}

// Guardar los datos en localStorage
function saveData() {
    const data = {
        labels: progressChart.data.labels,
        data: progressChart.data.datasets[0].data,
        records: savedRecords
    };
    localStorage.setItem('glucoseData', JSON.stringify(data));
}

// Agregar un nuevo dato de glucosa al gráfico y la tabla
let savedRecords = []; // Almacena los registros

function addGlucoseData(name, level, time, date) {
    const nextLabel = `Registro ${progressChart.data.labels.length + 1}`; // Etiqueta dinámica
    progressChart.data.labels.push(nextLabel); // Agregar la etiqueta
    progressChart.data.datasets[0].data.push(level); // Agregar el nivel de glucosa
    progressChart.update(); // Actualizar la gráfica

    // Guardar los datos en la tabla
    const record = {
        name: name,
        level: level,
        time: time,
        date: date
    };
    savedRecords.push(record); // Agregar el nuevo registro al array
    addRecordToTable(record); // Mostrar en la tabla
    saveData(); // Guardar en localStorage
}

// Agregar un registro a la tabla
function addRecordToTable(record) {
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const row = table.insertRow();

    const nameCell = row.insertCell(0);
    const dateCell = row.insertCell(1);
    const timeCell = row.insertCell(2);
    const levelCell = row.insertCell(3);

    nameCell.textContent = record.name;
    dateCell.textContent = record.date;
    timeCell.textContent = record.time;
    levelCell.textContent = record.level;
}

// Validar y agregar nivel de glucosa cuando se presiona el botón
document.getElementById('buttom').addEventListener('click', () => {
    const name = document.getElementById('glucoseName').value.trim();
    const level = parseFloat(document.getElementById('glucoseInput').value);
    const time = document.getElementById('glucoseTime').value;
    const date = new Date().toLocaleDateString(); // Fecha actual

    if (!name || isNaN(level) || level < 65 || level > 400 || !time) {
        showMessage('Por favor, completa todos los campos correctamente.');
    } else {
        addGlucoseData(name, level, time, date); // Agregar el dato al gráfico y la tabla
        document.getElementById('glucoseName').value = ''; // Limpiar el campo de nombre
        document.getElementById('glucoseInput').value = ''; // Limpiar el campo de nivel
        document.getElementById('glucoseTime').value = ''; // Limpiar el campo de hora
    }
});

document.getElementById('eliminar').addEventListener('click', () => {
    deleteMessage.classList.add('show');
});

deleteMessage.querySelector('.confirm').addEventListener('click', () => {
    progressChart.data.labels = [];
    progressChart.data.datasets[0].data = [];
    progressChart.update();

    document.querySelector('#dataTable tbody').innerHTML = '';
    localStorage.removeItem('glucoseData');

    deleteMessage.classList.remove('show');
    showMessage('Todos los datos han sido limpiados con éxito.');
});

deleteMessage.querySelector('.cancel').addEventListener('click', () => {
    deleteMessage.classList.remove('show');
});

function showMessage(messageText) {
    const message = document.createElement('div');
    message.className = 'message show';
    message.innerHTML = `<p>${messageText}</p><button>Cerrar</button>`;
    document.body.appendChild(message);

    message.querySelector('button').addEventListener('click', () => {
        message.remove();
    });

    setTimeout(() => {
        if (message.parentNode) {
            message.remove();
        }
    }, 3000);
}


// Cargar los datos cuando se carga la página
window.addEventListener('load', loadData);

//moodSection 
const moodCards = document.querySelectorAll(".mood-card");
const moodHistory = document.getElementById("moodHistory");
let savedMoods = []; // Almacenará los estados de ánimo registrados

// Cargar los datos de localStorage al cargar la página
function loadMoodData() {
    const savedData = localStorage.getItem("moodData");
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        savedMoods = parsedData;
        savedMoods.forEach(record => {
            addMoodToHistory(record); // Mostrar en la lista
        });
    }
}

// Guardar los datos en localStorage
function saveMoodData() {
    const data = JSON.stringify(savedMoods);
    localStorage.setItem("moodData", data);
}

// Agregar un estado de ánimo al historial
function addMoodToHistory(record) {
    const moodItem = document.createElement("li");
    moodItem.textContent = `${record.timestamp} - ${record.mood}`;
    moodHistory.appendChild(moodItem);
}

// Manejar el evento de selección de estado de ánimo
moodCards.forEach(card => {
    card.addEventListener("click", () => {
        const mood = card.getAttribute("data-mood");
        const timestamp = new Date().toLocaleString();

        // Crear el registro
        const record = { mood, timestamp };
        savedMoods.push(record); // Agregar al array
        addMoodToHistory(record); // Mostrar en la lista
        saveMoodData(); // Guardar en localStorage
    });
});

// Limpiar los registros
document.getElementById("limpiar").addEventListener("click", () => {
    // Limpiar el historial de estados de ánimo
    savedMoods = [];
    moodHistory.innerHTML = ''; // Limpiar la lista mostrada

    // Eliminar los datos de localStorage
    localStorage.removeItem("moodData");
});

// Limpiar los registros
document.getElementById("limpiar").addEventListener("click", () => {
    // Limpiar el historial de estados de ánimo
    savedMoods = [];
    moodHistory.innerHTML = ''; // Limpiar la lista mostrada

    // Eliminar los datos de localStorage
    localStorage.removeItem("moodData");

    // Mostrar mensaje de éxito en un cuadro de texto
    showMessage("Todos los registros han sido eliminados.");
});


// Función para mostrar el mensaje en un cuadro de texto
function showMessage(messageText) {
    const message = document.createElement('div');
    message.className = 'message show';
    message.innerHTML = `<p>${messageText}</p><button>Cerrar</button>`;
    document.body.appendChild(message);

    // Cerramos el mensaje al hacer clic en el botón "Cerrar"
    message.querySelector('button').addEventListener('click', () => {
        message.remove();
    });

    // El cuadro de mensaje se cierra automáticamente después de 3 segundos
    setTimeout(() => {
        if (message.parentNode) {
            message.remove();
        }
    }, 3000);
}

// Cargar los datos al inicio
window.addEventListener("load", loadMoodData);

// Referencia al toggle de modo oscuro
const darkModeToggle = document.getElementById('darkModeToggle');

// Función para alternar modo oscuro
darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', darkModeToggle.checked);
    localStorage.setItem('darkMode', darkModeToggle.checked); // Guardar preferencia en localStorage
});

// Aplicar modo oscuro según la preferencia guardada
document.addEventListener('DOMContentLoaded', () => {
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    darkModeToggle.checked = darkModeEnabled;
    document.body.classList.toggle('dark-mode', darkModeEnabled);
});

// Mostrar/ocultar el menú desplegable
document.getElementById("userButton").addEventListener("click", function () {
    const menu = document.getElementById("userMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Cerrar sesión y redirigir a index.html
document.getElementById("logoutButton").addEventListener("click", function () {
    window.location.href = "index.html";
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener("click", function (event) {
    const menu = document.getElementById("userMenu");
    const button = document.getElementById("userButton");
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.style.display = "none";
    }
});
