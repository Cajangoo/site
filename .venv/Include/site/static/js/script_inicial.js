function enviarFormulario(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    const formulario = document.getElementById('meuFormulario');
    const mensagemSucesso = document.getElementById('mensagemSucesso');
  
    // Simulação de envio (exibindo mensagem de sucesso após 2 segundos)
    setTimeout(() => {
      formulario.reset(); // Limpa o formulário após simular o envio
      mensagemSucesso.style.display = 'block'; // Exibe a mensagem de sucesso
    }, 2000); // Tempo simulado de envio (2 segundos)
  }
  
  document.querySelector('form').addEventListener('submit', function(event) {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
  
    if (nome.trim() === '' || email.trim() === '') {
      event.preventDefault(); // Impede o envio do formulário se os campos estiverem vazios
      alert('Por favor, preencha todos os campos.');
    }
  });
  
  document.getElementById('tipo').addEventListener('change', function() {
    const selectedOption = this.value;
    const descricaoField = document.getElementById('descricao');
  
    if (selectedOption === '1') {
      descricaoField.placeholder = 'Descreva a falta de energia...';
    } else if (selectedOption === '2') {
      descricaoField.placeholder = 'Descreva a falha no fornecimento de energia...';
    } else {
      descricaoField.placeholder = 'Descreva o problema...';
    }
  });
  