            // Función para abrir el cuadro modal
            function abrirModal() {
                document.getElementById('overlay').style.display = 'flex';
                document.getElementById('modal').style.display = 'block';
            }
    
            // Función para cerrar el cuadro modal
            function cerrarModal() {
                document.getElementById('overlay').style.display = 'none';
                document.getElementById('modal').style.display = 'none';
            }
    
            // Evento click en el botón para abrir el cuadro modal
            document.getElementById('btnAbrirModal').addEventListener('click', abrirModal);