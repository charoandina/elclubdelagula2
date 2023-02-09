/* const nombreUsuario = prompt ("Ingrese su nombre");
const edadUsuario = prompt ("Ingrese su edad");

if (edadUsuario < "18") {
    alert ("No podes entrar al Club de la Gula");
} else {
    alert ("Hola " + nombreUsuario + "! Tenes " + edadUsuario + " años, bienvenido al Club de la Gula!");
} 

let diaSemana = prompt ("¿Qué día de la semana es hoy?");
let valorComida = 0;
let bebida = 5;

switch (diaSemana) {
    case "lunes":
        alert("Hoy vendemos milanesa con pure!");
        valorComida = 20
    break;

    case "martes":
        alert("Hoy vendemos hamburguesa con papas fritas!");
        valorComida = 15
    break;

    case "miercoles":
        alert("Hoy vendemos ravioles de jamon y queso!");
        valorComida = 20
    break;

    case "jueves":
        alert("Hoy vendemos empanadas de carne!");
        valorComida = 10
    break;

    case "viernes":
        alert("Hoy vendemos pollo al horno con papa!");
        valorComida = 25
    break;

    case "sabado":
        alert("Hoy vendemos pizza!");
        valorComida = 10
    break;

    case "domingo":
        alert("Hoy vendemos asado!");
        valorComida = 25
    break;
    
    default:
        alert ("Ese no es un día de la semana");
        break;
}

const bebidaUsuario = prompt ("¿Quisieras agregar una bebida?");

if (bebidaUsuario == "si") {
    const totalConBebidaIncluida = valorComida + bebida;
    alert ("El total es de: " + totalConBebidaIncluida + "$");
} else {
    alert ("El total es de: " + valorComida + "$");
}

alert ("Gracias, vuelva prontos");
 */

// FUNCTION

/* function solicitarEdad () {
    const nombreUsuario = prompt ("Ingrese su nombre");
    const edadUsuario = prompt ("Ingrese su edad");

    if (edadUsuario < "18") {
    alert ("Lo siento, " + nombreUsuario + " no tenes la edad suficiente para ingresar al Club de la Gula");
    } else {
    alert ("Hola " + nombreUsuario + "! Tenes " + edadUsuario + " años, bienvenido al Club de la Gula!");
    } 
}

solicitarEdad (); */

class Producto {
    constructor (nombre, precio, descripcion) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }
}

const producto1 = new Producto("Milka Oreo", 300, "Un clasico mas otro clasico que no fallan nunca");
const producto2 = new Producto("Milka Chips Ahoy", 300, "Te sorpendimos con este, probalo que es una bomba");
const producto3 = new Producto("Milka con leche", 250, "El original, ese que comía la abuela");
const producto4 = new Producto("Milka Caramel", 320, "Un golazo de media cancha");
const producto5 = new Producto("Kinder Bueno", 435, "No confies en nadie que no le guste");
const producto6 = new Producto("Kinder Bueno Blanco", 450, "El original pero blanco, ¿qué más podes pedir?");
const producto7 = new Producto("Kit-Kat", 220, "Barritas del bien que sanan el corazón");

const productos =  [producto1, producto2, producto3, producto4, producto5, producto6, producto7];

function mostrarProductos() {
    alert ("Estos productos tenemos en venta hoy:")
    for (const producto of productos) {
    alert (`Nombre: ${producto.nombre}, $${producto.precio}. ${producto.descripcion}`);
}
}

mostrarProductos ();

const productoUsuario = prompt ("Ingresa el nombre del producto que quieras");
const cantidadProducto = parseInt (prompt ("¿Cuantos vas a querer?"));


if (productoUsuario == "Milka Oreo") {
    let subtotal = cantidadProducto * producto1.precio
    console.log(subtotal)
} else (productoUsuario)

switch (productoUsuario) {
    case "Milka Oreo":
    case "milka oreo":
        let subtotal = cantidadProducto * producto1.precio
        alert ("Tu pedido es: " + productoUsuario + ", y vas a querer: " + cantidadProducto + ". Será un total de: $" + subtotal )
        break;
    case "Milka Chips Ahoy":
    case "milka chips ahoy":
        let subtotal2 = cantidadProducto * producto2.precio
        alert ("Tu pedido es: " + productoUsuario + ", y vas a querer: " + cantidadProducto + ". Será un total de: $" + subtotal )
        break;
    default:
        break;
}











//ARRAY

/* const productosEnVenta = [
    {nombre: },
    {nombre: },
    {nombre: },
    {nombre: },
    {nombre: },
    {nombre: },
    {nombre: },
]

/* function mostrarProductos() {
    alert ("Estos productos tenemos en venta hoy:")
    for (const producto of productosEnVenta) {
        alert ((`Nombre: ${producto.nombre}`) + (`, $${producto.precio}`) + (`. ${producto.descripcion}`));
    } 
    alert ("¿Ya decidiste que vas a pedir?")
}

mostrarProductos (); */
/* console.log(productosEnVenta)

const eleccionCliente = prompt ("Escribí el nombre del producto que quieras")

if (eleccionCliente == "Milka Oreo") {
    const cantidadCliente = parseInt (prompt("¿Cuantos vas a querer?"));
    const subtotal = 
} */