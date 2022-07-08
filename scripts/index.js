
// Turnos para el mes de noviembre
for (let i = 1; i <= 30; i++) {  
    //solicita nombre
    let ingresarNombre = prompt("¿Cómo te llamás?");
    //solicita día del mes (1 al 30)
    let ingresarNumero = prompt("¿Para que día del mes de noviembre desea su turno?");
    //en caso de que se ingrese un número mayor a 30 se detiene
    if (ingresarNumero >30){
        break;
    }
    //devuelve alerta
    alert(ingresarNombre + " se le ha asignado el turno n°"+ i + " para el día "+ ingresarNumero + " de noviembre");
}