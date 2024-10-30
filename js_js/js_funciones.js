let currentIndex = 0; // Índice actual del carrusel
const propiedadesLista = document.getElementById('propiedades-lista');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function mostrarPropiedades() {
    fetch('js_php/js_obtener_propiedades.php')
        .then(response => response.json())
        .then(data => {
            propiedadesLista.innerHTML = ''; // Limpiar lista antes de agregar
            data.forEach(propiedad => {
                const div = document.createElement('div');
                div.innerHTML = `
                    <h3>${propiedad.titulo}</h3>
                    <p>${propiedad.descripcion}</p>
                    <strong>Precio: ${propiedad.precio} USD</strong><br>
                    <p>Ubicación: ${propiedad.ubicacion}</p>
                    <img src="js_img/${propiedad.foto}" alt="${propiedad.titulo}" width="200">
                `;
                propiedadesLista.appendChild(div);
            });
            actualizarCarrusel(); // Actualiza la vista del carrusel después de cargar las propiedades
        })
        .catch(error => {
            console.error('Error al cargar las propiedades:', error);
        });
}

function actualizarCarrusel() {
    const items = document.querySelectorAll('.carrusel-items > div');
    const totalItems = items.length;
    propiedadesLista.style.transform = `translateX(-${currentIndex * 100}%)`; // Desplazamiento en base al índice
    
    // Controlar visibilidad de los botones
    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = currentIndex === totalItems - 1 ? 'none' : 'block';
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        actualizarCarrusel();
    }
});

nextBtn.addEventListener('click', () => {
    const totalItems = document.querySelectorAll('.carrusel-items > div').length;
    if (currentIndex < totalItems - 1) {
        currentIndex++;
        actualizarCarrusel();
    }
});

// Llama a la función cuando la página esté lista
document.addEventListener('DOMContentLoaded', mostrarPropiedades);
