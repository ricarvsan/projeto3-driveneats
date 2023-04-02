let nome = ""; 
let endereço = "";
let prato = "";
let valorprato = "";
let valorpratonumber = 0;
let bebida = "";
let valorbebida = "";
let valorbebidanumber = 0;
let sobremesa = "";
let valorsobremesa = "";
let valorsobremesanumber = 0;
let msgwhats = "";
let total = 0;

function selecionaPrato(item) {    
    const btnSelecionado = document.querySelector(".pratos .selecionado");

    if(btnSelecionado) {
        const removecheck = document.querySelector('.pratos .selecionado ion-icon');
        removecheck.classList.add("notcheck");
        btnSelecionado.classList.remove("selecionado");
    }

    const selecionado = item;

    selecionado.classList.add("selecionado");

    pratoselec = document.querySelector(".pratos .selecionado .nome_prato");
    prato = pratoselec.innerHTML;
    pratoselec = document.querySelector(".pratos .selecionado .valor_prato");
    valorprato = pratoselec.innerHTML;

    let ajuste = valorprato.replace("R$ ", "");;
    ajuste = ajuste.replace(",", ".");
    valorpratonumber = Number(ajuste);
    total = valorpratonumber + valorbebidanumber + valorsobremesanumber;
    //console.log(total.toFixed(2).replace(".", ","));

    const addcheck = document.querySelector(".pratos .selecionado .notcheck");
    addcheck.classList.remove("notcheck");

    if(prato && bebida && sobremesa) {
        const btn = document.querySelector(".fechapedido");
        btn.disabled = false;
        btn.innerHTML = "Fechar pedido"

        const foot = document.querySelector(".footer");
        foot.classList.add("continuar");      
    }
    
}

function selecionaBebida(item) {    
    const btnSelecionado = document.querySelector(".bebidas .selecionado");

    if(btnSelecionado) {
        const removecheck = document.querySelector('.bebidas .selecionado ion-icon');
        removecheck.classList.add("notcheck");
        btnSelecionado.classList.remove("selecionado");
    }

    const selecionado = item;

    selecionado.classList.add("selecionado");

    pratoselec = document.querySelector(".bebidas .selecionado .nome_bebida");
    bebida = pratoselec.innerHTML;
    pratoselec = document.querySelector(".bebidas .selecionado .valor_bebida");
    valorbebida = pratoselec.innerHTML;

    let ajuste = valorbebida.replace("R$ ", "");;
    ajuste = ajuste.replace(",", ".");
    valorbebidanumber = Number(ajuste);
    total = valorpratonumber + valorbebidanumber + valorsobremesanumber;

    const addcheck = document.querySelector(".bebidas .selecionado .notcheck");
    addcheck.classList.remove("notcheck");

    if(prato && bebida && sobremesa) {
        const btn = document.querySelector(".fechapedido");
        btn.disabled = false;
        btn.innerHTML = "Fechar pedido"

        const foot = document.querySelector(".footer");
        foot.classList.add("continuar");      
    }
}

function selecionaSobremesa(item) {    
    const btnSelecionado = document.querySelector(".sobremesas .selecionado");

    if(btnSelecionado) {
        const removecheck = document.querySelector('.sobremesas .selecionado ion-icon');
        removecheck.classList.add("notcheck");
        btnSelecionado.classList.remove("selecionado");
    }

    const selecionado = item;

    selecionado.classList.add("selecionado");

    pratoselec = document.querySelector(".sobremesas .selecionado .nome_sobremesa");
    sobremesa = pratoselec.innerHTML;
    pratoselec = document.querySelector(".sobremesas .selecionado .valor_sobremesa");
    valorsobremesa = pratoselec.innerHTML;

    let ajuste = valorsobremesa.replace("R$ ", "");;
    ajuste = ajuste.replace(",", ".");
    valorsobremesanumber = Number(ajuste);
    total = valorpratonumber + valorbebidanumber + valorsobremesanumber;


    const addcheck = document.querySelector(".sobremesas .selecionado .notcheck");
    addcheck.classList.remove("notcheck");

    if(prato && bebida && sobremesa) {
        const btn = document.querySelector(".fechapedido");
        btn.disabled = false;
        btn.innerHTML = "Fechar pedido"

        const foot = document.querySelector(".footer");
        foot.classList.add("continuar");      
    }
}

function confirma(){
    let conf = document.querySelector(".confirmapedido");
    conf.classList.remove("escondido");

    conf = document.querySelector(".p1");
    conf.innerHTML = prato;

    conf = document.querySelector(".b1");
    conf.innerHTML = bebida;

    conf = document.querySelector(".s1");
    conf.innerHTML = sobremesa;

    conf = document.querySelector(".vp1");
    conf.innerHTML = valorprato.replace("R$ ", "");

    conf = document.querySelector(".vb1");
    conf.innerHTML = valorbebida.replace("R$ ", "");

    conf = document.querySelector(".vs1");
    conf.innerHTML = valorsobremesa.replace("R$ ", "");

    conf = document.querySelector(".total");
    conf.innerHTML = `R$ ${total.toFixed(2).replace(".", ",")}`;
}

function btncancelar(){
    const canc = document.querySelector(".confirmapedido");
    canc.classList.add("escondido")
}

function enviarwhats(){
    nome = prompt("Por gentileza, digite o seu nome:");
    endereço = prompt("Por gentileza, digite seu endereço:");
    const link = document.querySelector(".linkwhats");
    msgwhats = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${total.toFixed(2).replace(".", ",")}\n\nNome: ${nome}\nEndereço: ${endereço}`
    link.href = `https://wa.me/5541999198730?text=${encodeURIComponent(msgwhats)}`;
} 