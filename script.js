const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {

  e.preventDefault();

  const horas = Number(document.getElementById('horas').value);

  const concentracao = Number(document.getElementById('concentracao').value);

  const ansiedade = Number(document.getElementById('ansiedade').value);

  const sono = Number(document.getElementById('sono').value);

  const resultado = document.getElementById('resultado');

  const score = document.getElementById('score');

  const status = document.getElementById('status');

  const mensagem = document.getElementById('mensagem');

  const dicas = document.getElementById('dicas');

  const bar = document.getElementById('bar');

  const produtividade = document.getElementById('produtividade');

  const bemestar = document.getElementById('bemestar');

  const dependencia = document.getElementById('dependencia');

  dicas.innerHTML = '';

  const pontuacao =
    horas +
    concentracao +
    ansiedade +
    sono;

  let scoreFinal = 100 - (pontuacao * 6);

  if (scoreFinal < 0) {
    scoreFinal = 0;
  }

  let produtividadeValor = scoreFinal - 10;

  if (produtividadeValor < 0) {
    produtividadeValor = 0;
  }

  produtividade.textContent = `${produtividadeValor}%`;

  bemestar.textContent = `${scoreFinal}%`;

  dependencia.textContent = `${100 - scoreFinal}%`;

  score.textContent = `${scoreFinal}%`;

  let texto = '';

  let lista = [];

  if (pontuacao <= 6) {

    status.textContent = 'Saudável';

    status.style.background = 'rgba(34,197,94,0.15)';

    status.style.color = '#4ade80';

    bar.style.width = '30%';

    bar.style.background = '#22c55e';

    texto =
      'A IA identificou um comportamento digital equilibrado, demonstrando baixo impacto emocional e boa estabilidade de atenção durante as atividades diárias.';

    lista = [
      'Continue mantendo equilíbrio entre lazer e produtividade.',
      'Realize pausas durante uso prolongado das redes sociais.',
      'Mantenha hábitos saudáveis de sono e foco.'
    ];

  }

  else if (pontuacao <= 11) {

    status.textContent = 'Moderado';

    status.style.background = 'rgba(245,158,11,0.15)';

    status.style.color = '#fbbf24';

    bar.style.width = '65%';

    bar.style.background = '#f59e0b';

    texto =
      'O sistema detectou sinais moderados de distração digital e possíveis impactos emocionais associados ao uso frequente das redes sociais.';

    lista = [
      'Evite utilizar redes sociais antes de dormir.',
      'Defina limites de tempo para aplicativos.',
      'Desative notificações excessivas.',
      'Pratique períodos offline diariamente.'
    ];

  }

  else {

    status.textContent = 'Alto risco';

    status.style.background = 'rgba(239,68,68,0.15)';

    status.style.color = '#f87171';

    bar.style.width = '100%';

    bar.style.background = '#ef4444';

    texto =
      'A IA identificou padrões elevados de dependência digital, dificuldade de concentração e sinais de desgaste emocional relacionados ao uso excessivo das plataformas digitais.';

    lista = [
      'Reduza gradualmente o tempo de tela.',
      'Crie horários sem acesso ao celular.',
      'Priorize sono e atividades offline.',
      'Evite consumo excessivo de vídeos curtos.',
      'Busque equilíbrio entre ambiente digital e vida social presencial.'
    ];

  }

  mensagem.textContent = texto;

  lista.forEach((dica) => {

    const item = document.createElement('li');

    item.textContent = dica;

    dicas.appendChild(item);

  });

  resultado.classList.remove('hidden');

  resultado.scrollIntoView({
    behavior: 'smooth'
  });

});