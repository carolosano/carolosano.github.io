import Producto from "./Producto.js";
import PackAlternativo from "./packAlternativo.js";


document.addEventListener("DOMContentLoaded", () => {
  cargarPacks();
});

// Selección de los botones
const botonArmarPack = document.getElementById("botonArmarPack");
const botonFinalizarCompra = document.getElementById("finalizarCompra");

// Evento para armar el pack personalizado
botonArmarPack.addEventListener("click", armarPack);
botonFinalizarCompra.addEventListener("click", finalizarCompra);

// Endpoint de la API
const apiBaseUrl = 'packs.json';


// Función para obtener los datos de los packs desde la API
async function cargarPacks() {
  try {
    const response = await fetch(apiBaseUrl); // Ruta de la API
    if (!response.ok) throw new Error('No se pudo cargar los packs');
    
    const packsData = await response.json();

    // Crear instancias de Producto para cada pack
    const packs = packsData.map(pack => new Producto(pack.nombrePack, pack.elementos, pack.precio));
    
    // Mostrar los detalles de cada pack en la consola
    packs.forEach(pack => pack.mostrarDetalles());
    
    // Renderizar los packs en el DOM
    renderizarPacks(packs);
  } catch (error) {
    console.error('Error al cargar los packs:', error);
  }
}

// Función para renderizar los packs en el DOM
function renderizarPacks(packs) {
  const packsContainer = document.getElementById('packs-container');
  
  if (!packsContainer) {
    console.error('El contenedor de packs no existe');
    return;
  }

  packsContainer.innerHTML = packs.map(pack => `
    <div class="col-md-4 mb-4">
      <div class="card h-100 shadow">
        <div class="card-body">
          <h5 class="card-title">${pack.nombrePack}</h5>
          <ul class="list-group list-group-flush mb-3">
            ${pack.elementos.map(item => `<li class="list-group-item">${item}</li>`).join('')}
          </ul>
          <p class="card-text"><strong>Precio:</strong> $${pack.precio}</p>
          <button class="btn btn-primary agregar-pack" data-pack='${JSON.stringify(pack)}'>Agregar al carrito</button>
        </div>
      </div>
    </div>
  `).join('');

  
  const botonesAgregar = document.querySelectorAll('.agregar-pack');
  botonesAgregar.forEach(boton => {
    boton.addEventListener('click', () => {
      const pack = JSON.parse(boton.dataset.pack);
      agregarPackAlCarrito(pack, boton);
    });
  });
}




function agregarPackAlCarrito(pack, boton) {
  const carrito = document.getElementById('carrito');
  const precioTotalDisplay = document.getElementById('precioTotal');

  let carritoActual = JSON.parse(localStorage.getItem('packArmado'));

  if (
    !carritoActual || 
    !Array.isArray(carritoActual.servicios) || 
    typeof carritoActual.precioTotal === 'undefined'
  ) {
    carritoActual = {
      nombre: 'Pack Personalizado',
      servicios: [],
      precioTotal: 0
    };
  }

  // Buscar (o crear) el contenedor del mensaje de error debajo del botón
  let mensajeError = boton.nextElementSibling;
  if (!mensajeError || !mensajeError.classList.contains('mensaje-error')) {
    mensajeError = document.createElement('div');
    mensajeError.classList.add('mensaje-error');
    mensajeError.style.color = 'red';
    mensajeError.style.marginTop = '5px';
    boton.insertAdjacentElement('afterend', mensajeError);
  }

  // Verificar si el pack ya está agregado (comparando nombrePack)
  if (carritoActual.servicios.includes(pack.nombrePack)) {
    mensajeError.textContent = 'Este pack ya está en el carrito.';
    return;
  } else {
    mensajeError.textContent = ''; // limpiar mensaje si no hay error
  }

  // Agregar solo el nombre del pack al carrito
  carritoActual.servicios.push(pack.nombrePack);

  // Sumar el precio al total
  carritoActual.precioTotal = (
    parseFloat(carritoActual.precioTotal) + parseFloat(pack.precio)
  ).toFixed(2);

  // Guardar en localStorage
  localStorage.setItem('packArmado', JSON.stringify(carritoActual));

  // Actualizar el carrito en el DOM (mostrar solo nombres)
  carrito.innerHTML = `
    <ul>
      ${carritoActual.servicios.map(nombre => `<li>${nombre}</li>`).join('')}
    </ul>
  `;
  precioTotalDisplay.textContent = `Precio Total: $${carritoActual.precioTotal}`;
}




function mostrarCarritoDesdeStorage() {
  const carrito = document.getElementById('carrito');
  const precioTotalDisplay = document.getElementById('precioTotal');
  
  const carritoActual = JSON.parse(localStorage.getItem('packArmado'));
  
  if (!carritoActual) return;

  carrito.innerHTML = `
    <ul>
      ${carritoActual.servicios.map(servicio => `<li>${servicio}</li>`).join('')}
    </ul>
  `;
  precioTotalDisplay.textContent = `Precio Total: $${carritoActual.precioTotal}`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Limpiar carrito al refrescar la página
  localStorage.removeItem('packArmado');

  mostrarCarritoDesdeStorage();
});





// Función para armar el pack personalizado
function armarPack() {
  const checkboxes = document.querySelectorAll('.form-check-input');
  const carrito = document.getElementById('carrito');
  const precioTotalDisplay = document.getElementById('precioTotal');

  let serviciosSeleccionados = [];
  let precioTotal = 0;

  checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
          const [servicio, precio] = checkbox.value.split('|');
          serviciosSeleccionados.push(servicio);
          precioTotal += parseFloat(precio);
      }
  });

  // Crear el pack alternativo
  const pack = new PackAlternativo('Pack Personalizado', serviciosSeleccionados);
  pack.precioTotal = precioTotal.toFixed(2);

  // Guardar el pack en el localStorage
  localStorage.setItem('packArmado', JSON.stringify(pack));

  // Actualizar el carrito en el DOM
  if (serviciosSeleccionados.length > 0) {
    carrito.innerHTML = `
      <ul>
        ${serviciosSeleccionados.map(servicio => `<li>${servicio}</li>`).join('')}
      </ul>
    `;
    precioTotalDisplay.textContent = `Precio Total: $${pack.precioTotal}`;
  } else {
    carrito.innerHTML = '<p>No hay servicios seleccionados.</p>';
    precioTotalDisplay.textContent = 'Precio Total: $0';
  }
}

// Función para finalizar la compra
function finalizarCompra() {
  const carrito = document.getElementById('carrito');
  const precioTotalDisplay = document.getElementById('precioTotal');

  if (carrito.innerHTML.trim() === '' || precioTotalDisplay.textContent === 'Precio Total: $0') {
      Swal.fire({
        title: 'Error',
        text: 'Tu carrito está vacío. Por favor selecciona servicios.',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
  } else {
      // Obtener los servicios seleccionados desde el DOM
      const checkboxes = document.querySelectorAll('.form-check-input');
      let detalleServicios = [];
      let precioTotal = 0;

      checkboxes.forEach(checkbox => {
          if (checkbox.checked) {
              const [servicio, precio] = checkbox.value.split('|');
              detalleServicios.push({
                  nombre: servicio,
                  precio: parseFloat(precio)
              });
              precioTotal += parseFloat(precio);
          }
      });

      // Crear el objeto de compra
      const compra = {
          servicios: detalleServicios,
          precioTotal: precioTotal.toFixed(2)
      };

      // Guardar la compra en el localStorage
      localStorage.setItem('compraFinalizada', JSON.stringify(compra));

      // Confirmación y reinicio del carrito
      Swal.fire({
        title: '¡Compra Finalizada!',
        text: '¡Gracias por tu compra! Los detalles de tu pack han sido guardados.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
      carrito.innerHTML = '<p>No hay servicios seleccionados.</p>';
      precioTotalDisplay.textContent = 'Precio Total: $0';
  }
}


