var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click",function (event){
    
    event.preventDefault();
    console.log("Oi eu sou o botao e fui clicado");

    var form = document.querySelector("#forma-adiciona");
    var paciente = obtemInformacoesDoForm(form);
    
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        var mensagemErro = document.querySelector("#mensagem-erro"); 
        mensagemErro.textContent = erros;
        return;
    }

    
    //adiciona o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();

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

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(!validaPeso(paciente.peso))
        erros.push("Peso é inválido");

    if(!validaAltura(paciente.altura)) 
        erros.push("Altura é inválido");
    
    return erros;
}