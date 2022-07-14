// Suma productos de una tienda, aplica IVA y luego aplica un cupón 
// de descuento si este es ingresado.

//declaro las constantes de suma y resta
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
//declaro la constante de IVA
const iva = a => a * 0.21;
//declaro los productos
let precioProducto1 = 213;
let precioProducto2 = 547;
//declaro el cupón
let cupon = prompt("Ingresar cupón de descuento");
//declaro la suma de los productos con IVA aplicado
let sumaTotal = sumar(sumar(precioProducto1, iva(precioProducto1)), sumar(precioProducto2, iva(precioProducto2)));

//funcion que calcula la suma total de los productos
function precioTotal() {
    if(cupon === "DESCUENTO"){
        return restar(sumaTotal, 320); //si la palabra DESCUENTO es ingresada se aplica un cupón
    } else {
        return sumaTotal;
    }
}


