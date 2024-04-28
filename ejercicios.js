document.addEventListener("DOMContentLoaded", funciones);

function funciones() {
    // Función para cambiar el color de fondo de la tabla
    function cambiarColorFondo(color) {
        document.querySelector('.redTable').style.backgroundColor = color;
    }

    // Función para aumentar el tamaño de fuente de la tabla
    function aumentarTamañoFuente() {
        var tabla = document.querySelector('.redTable');
        var tamañoActual = window.getComputedStyle(tabla, null).getPropertyValue('font-size');
        var tamañoNuevo = parseInt(tamañoActual) + 2;
        tabla.style.fontSize = tamañoNuevo + 'px';
    }

    // Función para resetear el tamaño de fuente de la tabla
    function resetearTamañoFuente() {
        document.querySelector('.redTable').style.fontSize = 'inherit';
    }

    // Event Listeners para los botones
    document.getElementById('cambiarColorBtn').addEventListener('click', function() {
        var color = prompt('Introduce un color en formato hexadecimal (#RRGGBB):');
        if (color) {
            cambiarColorFondo(color);
        }
    });

    document.getElementById('aumentarFuenteBtn').addEventListener('click', aumentarTamañoFuente);

    document.getElementById('resetearFuenteBtn').addEventListener('click', resetearTamañoFuente);
}
