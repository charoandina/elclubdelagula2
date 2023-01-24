const nombreUsuario = prompt ("Ingrese su nombre");
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
