// ES


let nombre = prompt("Ingrese su nombre por favor:")
// alert("Bienvenidx " + nombre + " a nuestra página Web")


let numero = prompt("Ingresa su edad: ")



while (nombre == String) {
    alert("Bienvenidx a nuestra página web " + nombre);
    
 if (nombre != String) {
    alert("Ingrese un nombre valido")
}}

function saludar(nombre, mensaje) {
    alert(mensaje + nombre)
}

saludar(nombre, "que bueno que estes de vuelta ")


// primera funcion como de filtro para elegir packs

function elegirPack() {
    // Solicito al usuario que elija un pack
    var packSeleccionado = prompt("Elige un pack: 1. Branding, 2. Video, 3. Imágenes");

    // valido la selección del usuario usando condicionales
    if (packSeleccionado === "1") {
        alert("Elegiste el Pack Branding.");
        console.log("Pack seleccionado: Branding.");
    } else if (packSeleccionado === "2") {
        alert("Elegiste el Pack Video.");
        console.log("Pack seleccionado: Video.");
    } else if (packSeleccionado === "3") {
        alert("Elegiste el Pack Imágenes.");
        console.log("Pack seleccionado: Imágenes.");
    } else {
        alert("Opción no válida. Por favor elige una opción correcta.");
        console.log("Selección no válida.");
    }
}

// le doy funcionalidad al fomrulario de contacto




// constructor cliente

function Cliente(nombre, email) {
    this.nombre = nombre;
    this.email = email;

    // Método que muestra la información del cliente
    this.mostrarInfo = function() {
        console.log("Cliente: " + this.nombre + ", Email: " + this.email);
    };
}

// Constructor de Consulta

function Consulta(cliente, mensaje) {
    this.cliente = cliente;
    this.mensaje = mensaje;

    // Metodo para mostrar la consulta
    this.mostrarConsulta = function() {
        console.log("Consulta de " + this.cliente.nombre + ": " + this.mensaje);
    };
}

// Func. para procesar el formulario y crear los objetos
function procesarFormulario() {
    // aca obtendria valores del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var consultaTexto = document.getElementById('consulta').value;

    // Validacion
    if (nombre === "" || email === "" || consultaTexto === "") {
        alert("Por favor, completa todos los campos.");
        return;  // No continúa si faltan datos
    }

    // Crea un objeto Cliente
    var cliente = new Cliente(nombre, email);
    cliente.mostrarInfo();  // Mostrar info del cliente en consola

    // Crea un objeto Consulta vinculado al cliente
    var consulta = new Consulta(cliente, consultaTexto);
    consulta.mostrarConsulta();  // Mostrar info de la consulta en consola

    alert("Consulta enviada correctamente.");
}

// Asignar la función al botón de enviar
document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault();  // Prevenir el envío del formulario
    procesarFormulario();  // Procesar el formulario y crear objetos
});