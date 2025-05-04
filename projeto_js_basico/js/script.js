
function exibirMensagem() {
    const nome = document.getElementById("nome").value;
    

  
    if (nome === "" ) {
      alert("Por favor, insira um nome!");
      document.getElementById("saida3").innerHTML = "Por favor, insira um nome!";
    } else {
        const mensagem = `Olá, ${nome}! Seja bem-vindo(a) ao nosso site!`;
  
      // Exibe a mensagem no HTML
      document.getElementById("saida").innerHTML = mensagem;
  
      // Exibe a mensagem como um alerta
      alert(mensagem);
    }
  }
  