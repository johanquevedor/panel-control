function descubrirCiudad() {
    var nombre = document.getElementById("nombreInput").value;
    var ciudades = [
      { nombre: "Paris", imagen: "paris.jpg", descripcion: "París es la capital de Francia y una de las ciudades más visitadas del mundo." },
      { nombre: "Berlin", imagen: "berlin.jpg", descripcion: "Berlín es la capital de Alemania y ofrece una rica historia y vibrante cultura." },
      { nombre: "London", imagen: "london.jpg", descripcion: "Londres es la capital del Reino Unido y una ciudad llena de historia y atracciones." },
      { nombre: "Bogota", imagen: "bogota.jpg", descripcion: "Bogotá es la capital de Colombia y es conocida por su diversidad cultural y arquitectura." },
      { nombre: "Buenos Aires", imagen: "buenos-aires.jpg", descripcion: "Buenos Aires es la capital de Argentina y una ciudad famosa por su tango y arquitectura." },
      { nombre: "Rio de Janeiro", imagen: "rio-de-janeiro.jpg", descripcion: "Río de Janeiro es una ciudad brasileña famosa por sus playas y el Cristo Redentor." }
    ];
    
    var ciudadElegida = "";
    var maxCaracteresSimilares = 0;
  
    for (var i = 0; i < ciudades.length; i++) {
      var ciudad = ciudades[i];
      var caracteresSimilares = compararCaracteresSimilares(nombre, ciudad.nombre);
  
      if (caracteresSimilares > maxCaracteresSimilares) {
        maxCaracteresSimilares = caracteresSimilares;
        ciudadElegida = ciudad;
      }
    }
  
    if (ciudadElegida !== "") {
      mostrarCiudad(ciudadElegida);
    }
  }
  
  function compararCaracteresSimilares(nombre, ciudad) {
    var caracteresSimilares = 0;
  
    for (var i = 0; i < nombre.length; i++) {
      if (ciudad.toLowerCase().includes(nombre.toLowerCase().charAt(i))) {
        caracteresSimilares++;
      }
    }
  
    return caracteresSimilares;
  }
  
  function mostrarCiudad(ciudad) {
    var ciudadContainer = document.getElementById("ciudadContainer");
    ciudadContainer.innerHTML = "";
  
    var imagen = document.createElement("img");
    imagen.src = ciudad.imagen;
  
    var nombreCiudad = document.createElement("h2");
    nombreCiudad.textContent = ciudad.nombre;
  
    var descripcion = document.createElement("p");
    descripcion.textContent = ciudad.descripcion;
  
    ciudadContainer.appendChild(imagen);
    ciudadContainer.appendChild(nombreCiudad);
    ciudadContainer.appendChild(descripcion);
  }