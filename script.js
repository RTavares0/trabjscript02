// Fase 1
function validarFase1() {
  const nome = document.getElementById("nome").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmaSenha = document.getElementById("confirma-senha").value;

  const errosFase1 = document.getElementById("erros-fase1");
  errosFase1.innerHTML = "";

  const regexNumeros = /^\d+$/;

  if (!regexNumeros.test(cpf) || cpf.length !== 11) {
    errosFase1.innerHTML += "<p>O CPF deve ter obrigatoriamente 11 dígitos numéricos.</p>";
  }


  if (senha !== confirmaSenha) {
    errosFase1.innerHTML += "<p>As senhas não coincidem.</p>";
  }

  if (errosFase1.innerHTML === "") {
    document.getElementById("form-fase1").style.display = "none";
    document.getElementById("form-fase2").style.display = "block";

    document.getElementById("nome-resp").textContent = nome;
    document.getElementById("cpf-resp").textContent = cpf;
  }
}

// Fase 2
function validarFase2() {
  const profissao = document.getElementById("profissao").value;
  const estado = document.getElementById("estado").value;
  const anosExperiencia = document.getElementById("anos-experiencia").value;
  const errosFase2 = document.getElementById("erros-fase2");

  errosFase2.innerHTML = "";

  if (estado === "") {
    errosFase2.innerHTML += "<p>Selecione um estado válido.</p>";
  }

  if (errosFase2.innerHTML === "") {
    document.getElementById("form-fase2").style.display = "none";
    document.getElementById("form-fase3").style.display = "block";

    document.getElementById("profissao-resp").textContent = profissao;
    document.getElementById("estado-resp").textContent = estado;
    document.getElementById("anos-experiencia-resp").textContent = anosExperiencia;
  }
}

// Fase 3
function enviarDados() {
  const dados = {
    nome: document.getElementById("nome").value,
    cpf: document.getElementById("cpf").value,
    profissao: document.getElementById("profissao").value,
    estado: document.getElementById("estado").value,
    anosExperiencia: document.getElementById("anos-experiencia").value,
  };

  console.log(dados);
}
