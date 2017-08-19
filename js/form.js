var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click",function (event){
    
    event.preventDefault();
    console.log("Oi eu sou o botao e fui clicado");

    var form = document.querySelector("#forma-adiciona");
    var paciente = obtemInformacoesDoForm(form);
    
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
    imcTd.textContent = calcularImc(peso, altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);


});

function obtemInformacoesDoForm (form){
    var paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
    return paciente;
}