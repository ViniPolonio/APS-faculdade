document.addEventListener('DOMContentLoaded', function() {
    const botaoCalcularMedia = document.getElementById('calcularMedia');
    const divResultados = document.getElementById('resultados');
  
    botaoCalcularMedia.addEventListener('click', function() {
      const nomeDoAluno = document.getElementById('nomeDoAluno').value.trim();
      let notas = obterNotas();
      
      if (nomeDoAluno === '') {
        alert('Por favor, insira o nome do aluno.');
        return;
      }
      
      if (validarNotas(notas)) {
        let media = calcularMedia(notas);
        divResultados.textContent = `${nomeDoAluno}: Média das notas: ${media}`;
        divResultados.textContent += (media >= 70) ? ' - Aprovado' : ' - Reprovado';
      } else {
        divResultados.textContent = 'Insira notas válidas (0-100).';
      }
    });
  
    document.getElementById('limparValores').addEventListener('click', function() {
      divResultados.textContent = '';
    });
  });
  
  function obterNotas() {
    return [
      parseFloat(document.getElementById('primeiraNota').value),
      parseFloat(document.getElementById('segundaNota').value),
      parseFloat(document.getElementById('terceiraNota').value)
    ];
  }
  
  function validarNotas(notas) {
    return notas.every(nota => !isNaN(nota) && nota >= 0 && nota <= 100);
  }
  
  function calcularMedia(notas) {
    return (notas.reduce((acumulador, nota) => acumulador + nota, 0) / notas.length).toFixed(2);
  }
  