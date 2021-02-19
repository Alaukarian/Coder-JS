Articulos = [{articulo: "Cuaderno Solid Slider Multicolor", precio: 200 },
            {articulo: "Cuaderno Multicross Red", precio: 210 },
            {articulo: "Cuaderno Cross Smoke Violet", precio: 300 },
            {articulo: "Cuaderno Flower Pink", precio: 400 },
            {articulo: "Cuaderno Multicross Violet", precio: 250 },
            {articulo: "Cuaderno Mountain Negro", precio: 150 }];

/*Sistema provisional de compra*/ //Ejercicio 
let Carrito = [];
let stock = [10, 5, 100, 50, 12, 1];
let contadorCarrito = 0;
class items{
    constructor (articulo, precio, stock){
        this.articulo = articulo;
        this.precio = parseInt(precio);
        this.stock = stock;
    }
comprar(){
    let cantidadItems = parseInt(prompt("Cuantos articulos quiere comprar?"));
    if ((articulo1.stock > 0) && (cantidadItems <= articulo1.stock)){
        this.stock = this.stock - cantidadItems;
        alert("Articulo: " + articulo1.articulo + " comprado.");
        console.log("Stock restante: " + articulo1.stock);
        Carrito.push(cantidadItems);
        console.log("Carrito: "+Carrito)
    }else{
        alert("No hay más stock para el articulo")
    }
}
detallesItem(){
    //Solo para probar el stringidy
    alert(JSON.stringify(articulo1.articulo)  + " Precio: $" + articulo1.precio);
    let inputCompra = prompt("Desea comprar el articulo? Y/N");
    switch (inputCompra){
        case "Y":
            articulo1.comprar();
            break;
        case "y":
            articulo1.comprar();
            break;
        case "N":
            break;
        case "n":
            break;
        default:
            break;
    }

}
}
const articulo1 = new items ("Cuaderno Solid Slider Multicolor" , 200, stock[0]);
//const articulo2 = new items [articulo2, {articulo: "Cuaderno Multicross Red", precio: 200, Stock: 30}];
const articulo3 = new items ("Cuaderno Cross Smoke Violet" , 300, stock[2]);
const articulo4 = new items ("Cuaderno Flower Pink" , 300, stock[3]);
const articulo5 = new items ("Cuaderno Multicross Violet" , 250, stock[4]);
const articulo6 = new items ("Cuaderno Mountain Negro" , 150, stock[5]);

let contador_1 = 0;
let contador_2 = 0;
let contador = 0;
//Clase DOM
function sumaProducto1(){
    contador_1 += 1;
    contador += 1;
    console.log(contador_1);
    document.getElementById("Panel_1").innerHTML = contador_1;
    document.getElementById("botonera__carrito").innerHTML = contador_1 + contador_2;
}
function restarProducto1(){
    contador_1 -= 1;
    contador -= 1;
    console.log(contador_1);
    document.getElementById("Panel_1").innerHTML = contador_1;
    document.getElementById("botonera__carrito").innerHTML = contador_1 + contador_2;
}
function sumaProducto2(){
    contador_2 += 1;
    contador += 1;
    console.log(contador_1);
    document.getElementById("Panel_2").innerHTML = contador_2;
    document.getElementById("botonera__carrito").innerHTML = contador_1 + contador_2;
}
function restarProducto2(){
    contador_2 -= 1;
    contador -= 1;
    console.log(contador_1);
    document.getElementById("Panel_2").innerHTML = contador_2;
    document.getElementById("botonera__carrito").innerHTML = contador_1 + contador_2;
}
//Se que hay un bug que podes terminar con el carrito en positivo y uno de los elementos en negativo