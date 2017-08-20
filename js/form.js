var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click",function (event){
    
    event.preventDefault();
    console.log("Oi eu sou o botao e fui clicado");

    var form = document.querySelector("#forma-adiciona");
    var paciente = obtemInformacoesDoForm(form);
    
    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        
        return;
    }

    adicionaPacienteNaTabela(paciente);

    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    form.reset();

});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

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
    if(paciente.nome.length == 0)
        erros.push("O Nome deve ser preenchido");
    if(!validaPeso(paciente.peso))
        erros.push("Peso é inválido");
    if(!validaAltura(paciente.altura)) 
        erros.push("Altura é inválida");
    if(paciente.gordura.length == 0)
        erros.push("A Gordura deve ser preenchida");
    if(paciente.peso.length == 0)
        erros.push("O Peso deve ser preenchido");
    if(paciente.altura.length == 0)
        erros.push("A Altura deve ser preenchida");
    
    return erros;
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}