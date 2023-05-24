/* Hago un buscador de productos para mi tienda Juguetería */

/* dentro del array coloco mis objetos, en este caso serán los articulos de mi tienda */

const articulos = [
    {
      id: 1,
      categoria: "hobby",
      edad: "a partir de 8 años",
      nombreProducto: "avion radio control",
      precio: 25000
    },
    {
      id: 2,
      categoria: "hobby",
      edad: "a partir de 8 años",
      nombreProducto: "auto radio control",
      precio: 14000
    },
    {
      id: 3,
      categoria: "peluches",
      edad: "de 0 a 3 Años",
      nombreProducto: "Oso panda",
      precio: 8000
    },
    {
      id: 4,
      categoria: "muñecos",
      edad: "de 0 a 3 Años",
      nombreProducto: "Muñeco de tela Spiderman",
      precio: 6000
    },
    {
      id: 5,
      categoria: "deportes",
      edad: "4 a 8 años",
      nombreProducto: "Pelota Pulpito",
      precio: 5000
    },
    {
        id: 6,
        categoria: "deportes",
        edad: "6 años en adelante",
        nombreProducto: "Juego pelota paleta",
        precio: 6500
      },
      {
        id: 7,
        categoria: "Didáctico",
        edad: "5 a 12 años",
        nombreProducto: "Ladrillos encastrables",
        precio: 12000
      }
  ];
  
  /* Creo una funcion buscarProducto, para buscar por valor uso el método find--
  En el bucle aplico toString para que los valores sean tomados como strings, luego uso includes para asegurarme que el valor buscado está incluido en las cadenas de texto (si lo encuentra retornará true)*/
  function buscarProducto(valor) {
    const productoEncontrado = articulos.find((producto) => {
      for (let clave in producto) {
        if (producto[clave].toString().includes(valor)) {
          return true;
        }
      }
      return false;
    });
  
    if (productoEncontrado) {
      alert(`Producto encontrado:\n\nID: ${productoEncontrado.id}\nCategoría: ${productoEncontrado.categoria}\nEdad: ${productoEncontrado.edad}\nNombre: ${productoEncontrado.nombreProducto}\nPrecio: ${productoEncontrado.precio}`);
    } else {
      alert('Producto no encontrado');
    }
  
    /* ingreso un mensaje de por si el usuario quiere seguir buscando productos */

    const continuarBuscando = confirm("Quieres seguir buscando productos");
    if (continuarBuscando) {
      let nuevaBusqueda = prompt("ingresa tu busqueda por : \n\n id\nCategoría\nEdad\nNombre\nPrecio");
      buscarProducto(nuevaBusqueda);
    }
  }
  /* Mensaje de entrada - Busqueda*/
  let busqueda = prompt("ingresa tu busqueda por : \n\n id\nCategoría\nEdad\nNombre\nPrecio");
  buscarProducto(busqueda);
  
  


  
  