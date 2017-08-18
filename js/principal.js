var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length ; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var alturaEhValida = true;
    var pesoEhValido = true;

    if(peso <= 0 || peso > 1000){
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido!";
        pesoEhValido = false;

        paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 1000){
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        alturaEhValida = false;

        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida){
        var imc = peso / ( altura * altura);    
        tdImc.textContent = imc.toFixed(2);
    }   
}

var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click",function (event){
    
    event.preventDefault();
    console.log("Oi eu sou o botao e fui clicado");

    var form = document.querySelector("#forma-adiciona");
    var nome = form.nome.value;
    var altura = form.altura.value;
    var peso = form.peso.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var pesoTd = document.createElement("td");
    var nomeTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = (peso / (altura * altura)).toFixed(2);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);


});