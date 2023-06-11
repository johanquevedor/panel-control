function descubrirCiudad() {
    var nombre = document.getElementById("nombreInput").value;
    var ciudades = [
      { nombre: "Paris", imagen: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80", descripcion: "Paris, the romantic capital of France, is famous for its elegance and rich history. The majestic Eiffel Tower, charming boulevards and iconic museums, such as the Louvre, captivate visitors. Enjoy a stroll along the Seine River, savor delicious French cuisine and explore charming neighborhoods like Montmartre. Paris envelops you in an artistic and sophisticated atmosphere, leaving an indelible impression." },
      { nombre: "Berlin", imagen: "https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", descripcion: "Berlin, the modern capital of Germany, is a vibrant city full of history and culture. From the imposing Berlin Wall to the iconic Brandenburg Gate, every corner tells a fascinating story. The city offers a unique art scene, lively nightlife and stunning contemporary architecture. Explore its diverse neighborhoods, visit world-class museums and discover the unique energy that emanates from this cosmopolitan metropolis." },
      { nombre: "London", imagen: "https://images.unsplash.com/photo-1500380804539-4e1e8c1e7118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", descripcion: "London, the bustling capital of the United Kingdom, is a captivating blend of history and modernity. From the majestic Buckingham Palace to the iconic Tower of London, the city is home to numerous historical treasures. Immerse yourself in British culture by visiting its prestigious museums, enjoy a walk across the iconic Tower Bridge and explore the lively markets and theaters of the West End. London offers a unique experience at every turn." },
      { nombre: "Bogota", imagen: "https://images.unsplash.com/photo-1485834532228-4fcb1456f84f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", descripcion: "Bogotá, Colombia's bustling capital, is a city full of contrasts and charm. With its stunning cityscape surrounded by mountains, the city offers a unique combination of colonial history and modernity. Discover its vibrant art scene, visit the famous Gold Museum and immerse yourself in its rich gastronomic culture. Explore the charm of its historic neighborhoods such as La Candelaria and enjoy the breathtaking views from Monserrate Hill." },
      { nombre: "Buenos Aires", imagen: "https://images.unsplash.com/photo-1495317823589-e67efe1524b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", descripcion: "Buenos Aires, the elegant capital of Argentina, is known as the 'Paris of South America'. With its passion for tango, European architecture and lively nightlife, the city has an irresistible charm. Explore the colorful neighborhood of La Boca, admire the grandeur of the Teatro Colón and enjoy a delicious Argentine asado. Immerse yourself in Porteño culture as you stroll through the city's elegant streets and discover its rich history." },
      { nombre: "Rio de Janeiro", imagen: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", descripcion: "Rio de Janeiro, the fascinating Brazilian city, is a destination full of life, energy and natural wonders. Known as the 'Marvelous City,' Rio de Janeiro seduces you with its white sandy beaches, towering mountains and festive spirit. From the iconic Christ the Redeemer that watches over the city from the top of Corcovado to the iconic Sugar Loaf that rises majestically over Guanabara Bay, Rio de Janeiro's landscapes will take your breath away." }
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