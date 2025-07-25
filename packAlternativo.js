// Archivo packAlternativo.js

class PackAlternativo {
  constructor(nombre, items) {
    this.nombre = nombre;
    this.items = items;
    this.precioTotal = 0; 
  }

  // Calcula el precio total
  calcularPrecioTotal(precios) {
    this.precioTotal = precios.reduce((total, precio) => total + parseFloat(precio), 0);
  }

  // Muestra los servicios
  mostrarServicios() {
    return this.items.map(servicio => `- ${servicio}`).join('\n');
  }
}



export default PackAlternativo;
