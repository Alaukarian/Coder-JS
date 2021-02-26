var carrito = [];
const carroVacio = [];
const articulos = ["item1", "item2", "item3"];
let contador = [0, 0, 0];
/*
let suma1 = document.getElementById("btnSumar1");
    suma1.addEventListener("click", sumarItem1());
let suma2 = document.getElementById("btnSumar2");
    suma2.addEventListener('click', sumarItem2());
let suma3 = document.getElementById("btnSumar3");
    suma3.addEventListener('click', sumarItem3());
let resta1 = document.getElementById("btnSumar1");
    resta1.addEventListener("click", restaItem1());
let resta2 = document.getElementById("btnSumar2");
    resta2.addEventListener('click', restaItem2());
let resta3 = document.getElementById("btnSumar3");
    resta3.addEventListener('click', restaItem3());
*/
//Los argumentos de arriba no funcionaban, ejecutaban directamente las funciones, no esperaban al click.

function sumarItem1(){
    contador[0] +=1;
    document.getElementById("item1Input").innerHTML = contador[0];
    carrito.push(articulos[0]);
    console.log(carrito);
    document.getElementById("generalPanel").innerHTML = carrito;
}

function sumarItem2(){
    contador[1] +=1;
    document.getElementById("item2Input").innerHTML = contador[1];
    carrito.push(articulos[1]);
    console.log(carrito);
    document.getElementById("generalPanel").innerHTML = carrito;
}

function sumarItem3(){
    contador[2] +=1;
    document.getElementById("item3Input").innerHTML = contador[2];
    carrito.push(articulos[2]);
    console.log(carrito);
    document.getElementById("generalPanel").innerHTML = carrito;
}
function restaItem1(){
    if (contador[0] > 0){
        contador[0] -=1;
        document.getElementById("item1Input").innerHTML = contador[0];
        carrito.pop();
        console.log(carrito);
        }else{alert("Valor invalido");
        }document.getElementById("generalPanel").innerHTML = carrito;
        if(carrito.length == carroVacio.length){
            document.getElementById("generalPanel").innerHTML = "Tu carrito esta vacio!";
        }
    }

function restaItem2(){
    if (contador[1] > 0){
        contador[1] -=1;
        document.getElementById("item2Input").innerHTML = contador[1];
        carrito.pop();
        console.log(carrito);
        }else{alert("Valor invalido");
}document.getElementById("generalPanel").innerHTML = carrito;
    if(carrito.length == carroVacio.length){
        document.getElementById("generalPanel").innerHTML = "Tu carrito esta vacio!";
    }
}

function restaItem3(){
    if (contador[2] > 0){
    contador[2] -=1;
    document.getElementById("item3Input").innerHTML = contador[2];
    carrito.pop();
    console.log(carrito);
    }else{alert("Valor invalido");}
    document.getElementById("generalPanel").innerHTML = carrito;
    if(carrito.length == carroVacio.length){
        document.getElementById("generalPanel").innerHTML = "Tu carrito esta vacio!";
    }
}
