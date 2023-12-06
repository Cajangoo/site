function signup(event) {
    event.preventDefault();
    
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    
    // Aqui você pode adicionar lógica para armazenar os dados de cadastro (em um banco de dados, localStorage, etc.)
    
    alert('Cadastro realizado com sucesso!');
    document.getElementById('signupForm').reset();
  }
  
  function login(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Aqui você pode adicionar lógica para verificar o login (comparar com dados cadastrados)
    // Exemplo de verificação simples:
    if (username === 'usuario' && password === 'senha') {
      alert('Login bem-sucedido!');
      document.getElementById('loginForm').reset();
    } else {
      alert('Usuário ou senha incorretos.');
    }
  }
  
  function toggleForm(event) {
    event.preventDefault();
    
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
  }

  var parametro = "cadastro";
  var url = "https://www.complainhere.com/cadastro" + parametro;
  
  function navegarParaUrl() {
    window.location.href = url;
  }
  
