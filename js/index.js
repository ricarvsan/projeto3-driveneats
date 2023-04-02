const nome = ""; 
const endereço = "";
let prato = "";
let valor_prato = 0;
let bebida = "";
let valor_bebida = 0;
let sobremesa = "";
let valor_sobremesa = 0;

function selecionaPrato(item) {    
    const btnSelecionado = document.querySelector(".pratos .selecionado");

    if(btnSelecionado) {
        const removecheck = document.querySelector('.pratos .selecionado ion-icon');
        removecheck.classList.add("notcheck");
        btnSelecionado.classList.remove("selecionado");
    }

    const selecionado = item;

    selecionado.classList.toggle("selecionado");
    const addcheck = document.querySelector(".pratos .selecionado .notcheck");
    addcheck.classList.remove("notcheck");
}

function selecionaBebida(item) {
    const btnSelecionado = document.querySelector(".bebidas .selecionado");

    if(btnSelecionado) {
        const removecheck = document.querySelector('.bebidas .selecionado ion-icon');
        removecheck.classList.add("notcheck");
        btnSelecionado.classList.remove("selecionado");
    }

    const selecionado = item;

    selecionado.classList.toggle("selecionado");
    const addcheck = document.querySelector(".bebidas .selecionado .notcheck");
    addcheck.classList.remove("notcheck");
}

function selecionaSobremesa(item) {
    const btnSelecionado = document.querySelector(".sobremesas .selecionado");

    if(btnSelecionado) {
        const removecheck = document.querySelector('.sobremesas .selecionado ion-icon');
        removecheck.classList.add("notcheck");
        btnSelecionado.classList.remove("selecionado");
    }

    const selecionado = item;

    selecionado.classList.toggle("selecionado");
    const addcheck = document.querySelector(".sobremesas .selecionado .notcheck");
    addcheck.classList.remove("notcheck");
}

// ativar botao
/* const btn = document.querySelector(".fechapedido");
    btn.disabled = false; */

// recebe nome e endereço nas variaveis globais
/* function nomeEnd(){
    const nome = prompt("Por gentileza, digite o seu nome:");
    const endereço = prompt("Por gentileza, digite seu endereço:");
} */