// Função para criar o formulário
function criarFormulario() {
    // Crie um elemento de formulário
    var formulario = document.createElement("form");
    formulario.id = "meuFormulario"; // Defina um ID para o formulário

    // Crie e adicione campos de entrada para nome, telefone e email
    var nomeInput = criarInput("text", "nome", "Nome");
    var telefoneInput = criarInput("tel", "telefone", "Telefone");
    var emailInput = criarInput("email", "email", "E-mail");

    // Adicione os campos ao formulário
    formulario.appendChild(nomeInput);
    formulario.appendChild(telefoneInput);
    formulario.appendChild(emailInput);

    // Crie e adicione um botão de envio
    var enviarButton = document.createElement("button");
    enviarButton.type = "submit";
    enviarButton.innerText = "Enviar";
    formulario.appendChild(enviarButton);

    // Adicione o formulário ao contêiner no HTML
    document.getElementById("formulario-container").appendChild(formulario);
}

// Função auxiliar para criar campos de entrada
function criarInput(type, name, placeholder) {
    var input = document.createElement("input");
    input.type = type;
    input.name = name;
    input.placeholder = placeholder;
    return input;
}

// Chame a função para criar o formulário quando a página for carregada
window.onload = criarFormulario;