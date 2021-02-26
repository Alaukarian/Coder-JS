var carrito = [];
const articulos = ["item1", "item2", "item3"];
let contador = [0, 0, 0];
let suma1 = document.getElementById("btnSumar1");
    suma1.addEventListener('click', sumarItem1());
let suma2 = document.getElementById("btnSumar2");
    suma2.addEventListener('click', sumarItem2());
let suma3 = document.getElementById("btnSumar3");
    suma3.addEventListener('click', sumarItem3());

function sumarItem1(){
    contador[0] +=1;
    carrito.push(articulos[0]);
}

function sumarItem2(){
    contador[1] +=1;
    carrito.push(articulos[1]);
}

function sumarItem3(){
    contador[2] +=1;
    carrito.push(articulos[2]);
}
function restaItem1(){
    if (contador[0] >= 0){
        contador[0] -=1;
        articulos.pop();
        }alert("Valor invalido");
}

function restaItem2(){
    if (contador[1] >= 0){
        contador[1] -=1;
        articulos.pop();
        }alert("Valor invalido");
}

function restaItem3(){
    if (contador[2] >= 0){
    contador[2] -=1;
    articulos.pop();
    }alert("Valor invalido");
}

