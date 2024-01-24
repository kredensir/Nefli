function searchFile() {
    // Obtener el término de búsqueda ingresado por el usuario
    var searchTerm = document.getElementById("search-input").value;
    
    // Buscar todas las imágenes en la página
    var images = document.getElementsByTagName("img");
    
    // Iterar sobre las imágenes para ocultar las que no coinciden con el término de búsqueda
    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      var altText = image.getAttribute("alt");
      
      // Si el texto alternativo de la imagen contiene el término de búsqueda, mostrar la imagen
      if (altText.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    }
  }
  