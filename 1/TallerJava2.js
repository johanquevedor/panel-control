function mayorArray(array) {
    if (array.length === 0) {
      return null;
    }
  
    if (array.length === 1) {
      return array[0];
    }
  
    let mayor = array[0];
    let index = 1;
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > mayor) {
        mayor = array[i];
      }
    }
  
    console.log("Elementos del array:");
    while (index <= array.length) {
      console.log(array[index - 1]);
      index++;
    }
  
    let contadorImpares = 0;
    let i = 0;
  
    do {
      if (array[i] % 2 !== 0) {
        contadorImpares++;
      }
      i++;
    } while (i < array.length);
  
    return mayor;
  }
  
  const array = [5, 8, 2, 10, 3];
  const resultado = mayorArray(array);
  console.log("Número mayor:", resultado);