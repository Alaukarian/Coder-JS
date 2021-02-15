
/*Articulos = [{precio: 200, articulo: "Cuaderno Solid Slider Multicolor"},//Cuaderno Solid Slider Multicolor
            {precio: 210, articulo: "Cuaderno Multicross Red"},//Cuaderno Multicross Red
            {precio: 300, articulo: "Cuaderno Cross Smoke Violet"},//Cuaderno Cross Smoke Violet
            {precio: 400, articulo: "Cuaderno Flower Pink"}, //Cuaderno Flower Pink
            {precio: 250, articulo: "Cuaderno Multicross Violet"}, //Cuaderno Multicross Violet
            {precio: 150, articulo: "Cuaderno Mountain Negro"}]; //Cuaderno Mountain Negro*/
const preciosArray = [200, 210, 300, 400, 250, 150];

var arrayOrdenado = preciosArray.sort();

function reemplazaNumeros(){
    arrayOrdenado.splice(0,1,"Cuaderno Mountain Negro");
    arrayOrdenado.splice(1,1,"Cuaderno Solid Slider Multicolor");
    arrayOrdenado.splice(2,1,"Cuaderno Multicross Violet");
    arrayOrdenado.splice(3,1,"Cuaderno Multicross Red");
    arrayOrdenado.splice(4,1,"Cuaderno Cross Smoke Violet");
    arrayOrdenado.splice(5,1,"Cuaderno Flower Pink");
}

function buscador(){
    alert(preciosArray);
    let respuestaArray = prompt("Quiere ordenar los precios de mayor a menor? y/n");
    if (respuestaArray == "y"){
        reemplazaNumeros();
        alert(arrayOrdenado);
    }
}

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
