
//JavaScript para la búsqueda en tiempo real -->

  // Obtener el campo de búsqueda
  const searchBox = document.getElementById("search-box");

  // Agregar un evento de escucha de entrada en el campo de búsqueda
  searchBox.addEventListener("input", function() {
    // Obtener el valor actual del campo de búsqueda
    const searchText = searchBox.value.toLowerCase();

    // Obtener todas las imágenes en la página
    const images = document.getElementsByTagName("img");

    // Recorrer todas las imágenes y ocultar las que no coincidan con el término de búsqueda
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const altText = image.alt.toLowerCase();

      if (altText.includes(searchText)) {
        // Si la imagen coincide con el término de búsqueda, mostrarla
        image.style.display = "inline-block";
      } else {
        // Si la imagen no coincide con el término de búsqueda, ocultarla
        image.style.display = "none";
      }
    }
  });