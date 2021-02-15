const item1 = new items("Zapatillas", "Nike", "Air Max 3", 25000, 200);
const item2 = new items("Campera", "Adidas", "Sin frio", 15000, 10);
class items{
    constructor (tipo, marca, modelo, precio, stock){
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
    }
    verItem(){
        alert("Los items disponibles son: ");
        alert( item1.tipo + ", " + item1.marca + ", " + item1.modelo);
        alert( item2.tipo + ", " + item2.marca + ", " + item2.modelo);
    }
    comprarVarios(){
        let cantidadCompra = parseInt(prompt("Cuantas unidades desea comprar?"));
        if (cantidadCompra <= item1.stock){
            item1.stock = item1.stock - cantidadCompra;
            alert("Ha comprado " + cantidadCompra + " unidades de: " + item1.tipo + ", " + item1.marca + ", " + item1.modelo)
        }else if(cantidadCompra > item1.stock){
            alert("No hay stock disponible");
        }else{
            alert("Por favor ingresar un valor valido");
        }
    }
    consultarStock(){
        alert("El stock para el item " + item1.tipo + " " +  item1.marca + " " + item1.modelo + " " + " es " + item1.stock);
    }
}
let contador = 0;
function comprar(){
    contador = ++contador;
    alert("Acabaste de comprar: " + Object.values(item1)+". " + contador + " vez");
    item1.stock == --item1.stock;
}
function devolver(){
    if (contador <= 0){
        alert("Su carrito esta vacio");
    }else{
    contador = --contador;
    alert("Sacaste el item: " + Object.values(item1)+". " + "Su carrito tiene: " + contador + " items.")
    item1.stock == ++item1.stock;
    }
}
function devolverTodo(){
    contador = 0;
    alert("Su carrito fue limpiado");
    item1.stock = 200;
}
