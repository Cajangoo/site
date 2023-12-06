// Exemplo básico de interatividade
document.getElementById('filtro').addEventListener('change', function() {
    const filtro = this.value;
    const denuncias = document.querySelectorAll('.denuncia');
  
    denuncias.forEach(denuncia => {
      if (denuncia.classList.contains(filtro) || filtro === 'todos') {
        denuncia.style.display = 'block';
      } else {
        denuncia.style.display = 'none';
      }
    });
  });