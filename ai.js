// ==============================
// FOCUSIA - IA ASSISTENTE PROFISSIONAL
// ==============================

// Base de conhecimento expandida
const knowledgeBase = {
  procrastinacao: {
    keywords: ['procrastinação', 'procrastinando', 'preguiça', 'desânimo', 'enrolando', 'adiar', 'deixar pra depois', 'depois eu faço', 'sem vontade'],
    analyze: (text) => ({
      level: text.includes('sempre') || text.includes('muito') ? 'alto' : 'moderado',
      suggestion: 'Use a técnica dos 2 minutos: comece com uma tarefa mínima para quebrar a inércia.'
    }),
    responses: [
      "🎯 **Análise:** Identifiquei sinais de procrastinação. Isso geralmente acontece quando tarefas parecem grandes demais.\n\n💡 **Sugestão:** Divida sua próxima tarefa em partes de no máximo 5 minutos. Comece pela menor.\n\n✨ **Motivação:** Ação gera motivação, não o contrário. Dê o primeiro passo agora!",
      "⏰ **Análise:** O adiamento constante pode estar relacionado à fadiga de decisão.\n\n💡 **Sugestão:** Use o Modo Foco por 5 minutos agora mesmo. Só isso.\n\n✨ **Motivação:** Pequenas vitórias diárias constroem grandes resultados.",
      "🧠 **Análise:** Procrastinação frequente pode ser um mecanismo de defesa contra o medo de falhar.\n\n💡 **Sugestão:** Pergunte-se: 'Qual é a menor ação que posso fazer agora?'\n\n✨ **Motivação:** Feito é melhor que perfeito. Comece imperfeito."
    ]
  },

  ansiedade: {
    keywords: ['ansiedade', 'ansioso', 'estresse', 'pressionado', 'nervoso', 'preocupado', 'angústia', 'aflito', 'tensão', 'sobrecarregado'],
    analyze: (text) => ({
      level: text.includes('muita') || text.includes('intensa') ? 'alto' : 'moderado',
      suggestion: 'Faça uma pausa de 5 minutos. Respire fundo 10 vezes antes de retomar.'
    }),
    responses: [
      "😌 **Análise:** Detectei sinais de ansiedade digital. O excesso de estímulos pode sobrecarregar o sistema nervoso.\n\n💡 **Sugestão:** Ative o Modo Foco silencioso ou faça uma pausa offline de 15 minutos.\n\n✨ **Motivação:** Você tem controle sobre sua atenção. Respire e foque no agora.",
      "🌿 **Análise:** A ansiedade muitas vezes vem da sobrecarga de informações.\n\n💡 **Sugestão:** Desative notificações não essenciais por 1 hora.\n\n✨ **Motivação:** Um dia de cada vez. Uma tarefa de cada vez.",
      "💆 **Análise:** Seu nível de estresse digital merece atenção.\n\n💡 **Sugestão:** Técnica 5-4-3-2-1: 5 coisas que vê, 4 que toca, 3 que ouve, 2 que cheira, 1 que saboreia.\n\n✨ **Motivação:** Pequenas pausas conscientes restauram sua energia."
    ]
  },

  foco: {
    keywords: ['foco', 'concentração', 'concentrar', 'produtividade', 'rendimento', 'atenção', 'distraído', 'disperso', 'perdendo foco'],
    analyze: (text) => ({
      level: text.includes('perdendo') || text.includes('difícil') ? 'comprometido' : 'moderado',
      suggestion: 'Use blocos de 25 minutos de foco seguidos de 5 de pausa ativa.'
    }),
    responses: [
      "🔍 **Análise:** Você está preocupado com sua capacidade de concentração. Isso é normal na era digital.\n\n💡 **Sugestão:** Bloqueie apps de distração por 25 minutos e use o timer do Modo Foco.\n\n✨ **Motivação:** Seu cérebro é treinável. Cada sessão de foco fortalece sua atenção.",
      "⚡ **Análise:** A falta de foco pode estar ligada à multitarefa.\n\n💡 **Sugestão:** Escolha UMA tarefa agora. Desative tudo que não for essencial.\n\n✨ **Motivação:** Foco profundo gera resultados extraordinários.",
      "🎯 **Análise:** Distrações digitais são os maiores inimigos da produtividade.\n\n💡 **Sugestão:** Coloque o celular no modo avião durante suas sessões de trabalho.\n\n✨ **Motivação:** Cada minuto de foco é um investimento em você."
    ]
  },

  sono: {
    keywords: ['sono', 'dormir', 'insônia', 'cansado', 'exausto', 'sem energia', 'noite mal dormida', 'acordei mal'],
    analyze: (text) => ({
      level: text.includes('sempre') || text.includes('toda noite') ? 'grave' : 'moderado',
      suggestion: 'Estabeleça um ritual noturno: sem telas 1 hora antes de dormir.'
    }),
    responses: [
      "🌙 **Análise:** Seu padrão de sono precisa de atenção. A qualidade do sono afeta diretamente sua produtividade.\n\n💡 **Sugestão:** Ative o filtro de luz azul do celular 2 horas antes de dormir.\n\n✨ **Motivação:** Uma boa noite de sono dobra sua capacidade cognitiva no dia seguinte.",
      "😴 **Análise:** Cansaço digital é real e acumulativo.\n\n💡 **Sugestão:** Faça uma desintoxicação digital 30 minutos antes de dormir. Leia um livro físico.\n\n✨ **Motivação:** Dormir bem é o melhor hack de produtividade que existe.",
      "🛌 **Análise:** Seu corpo está pedindo descanso de qualidade.\n\n💡 **Sugestão:** Mantenha horários regulares para dormir e acordar, mesmo nos fins de semana.\n\n✨ **Motivação:** Recuperar energia é tão importante quanto gastá-la com foco."
    ]
  },

  dependencia: {
    keywords: ['vício', 'dependência', 'instagram', 'tiktok', 'reels', 'short', 'rolagem', 'scroll', 'preso no celular', 'horas na tela', 'rede social'],
    analyze: (text) => ({
      level: text.includes('perdi a conta') || text.includes('muitas horas') ? 'alto' : 'moderado',
      suggestion: 'Defina limites diários de uso nos apps e respeite-os.'
    }),
    responses: [
      "📱 **Análise:** Identifiquei padrões de uso compulsivo de redes sociais. Você não está sozinho - isso é arquitetado para prender sua atenção.\n\n💡 **Sugestão:** Ative limites de tempo no Instagram/TikTok (ex: 30 min/dia).\n\n✨ **Motivação:** Recuperar seu tempo é recuperar sua vida. Você consegue!",
      "⚠️ **Análise:** O uso excessivo de vídeos curtos fragmenta sua capacidade de atenção.\n\n💡 **Sugestão:** Substitua 10 minutos de rolagem por uma caminhada curta.\n\n✨ **Motivação:** Pequenas mudanças de hábito geram grandes transformações.",
      "🔄 **Análise:** A dependência digital ativa os mesmos circuitos cerebrais de recompensa que outros vícios.\n\n💡 **Sugestão:** Use a técnica '20 segundos de atrito' - esconda apps problemáticos em pastas.\n\n✨ **Motivação:** Você é mais forte que o algoritmo. Retome o controle."
    ]
  },

  motivacao: {
    keywords: ['motivação', 'motivado', 'inspiração', 'sem vontade', 'desanimado', 'pra baixo', 'desmotivado'],
    analyze: (text) => ({
      level: text.includes('muito') || text.includes('totalmente') ? 'baixo' : 'médio',
      suggestion: 'Comece com a menor tarefa possível para gerar inércia positiva.'
    }),
    responses: [
      "🔥 **Análise:** Todo mundo passa por baixos de motivação. Isso é humano.\n\n💡 **Sugestão:** Comprometa-se a fazer apenas 5 minutos de uma tarefa. Só isso.\n\n✨ **Motivação:** Disciplina > motivação. E disciplina se constrói com pequenos passos.",
      "💪 **Análise:** Você está no início de um ciclo de baixa energia.\n\n💡 **Sugestão:** Reveja suas últimas 3 conquistas, por menores que sejam.\n\n✨ **Motivação:** Você já superou dias difíceis antes. Este também vai passar.",
      "🌟 **Análise:** Falta de motivação geralmente não é preguiça - é falta de clareza.\n\n💡 **Sugestão:** Escreva UMA coisa que você pode fazer hoje que melhore seu amanhã.\n\n✨ **Motivação:** Comece antes de se sentir pronto. A confiança vem com a ação."
    ]
  },

  default: {
    responses: [
      "🧠 **Análise:** Obrigado por compartilhar. Continue monitorando seus hábitos digitais.\n\n💡 **Sugestão:** Faça uma análise rápida no Dashboard para receber um plano personalizado.\n\n✨ **Motivação:** Pequenas melhorias diárias criam uma versão melhor de você.",
      "🤖 **Olá!** Sou a FocusIA, sua assistente de produtividade e bem-estar digital.\n\n💡 Que tal começar com uma análise no Dashboard? Posso te ajudar a interpretar os resultados.\n\n✨ Estou aqui para apoiar sua jornada de foco!",
      "📊 **Dica profissional:** A consistência supera a intensidade.\n\n💡 Tente usar o Modo Foco todos os dias, mesmo que por apenas 10 minutos.\n\n✨ **Motivação:** Você está no controle da sua atenção digital."
    ]
  }
};

// Comandos rápidos
const quickCommands = {
  '/plano': () => {
    const lastPlan = localStorage.getItem('focusia_last_plan');
    if (lastPlan) {
      const plan = JSON.parse(lastPlan);
      return `📋 **Seu último plano personalizado:**\n\n${plan.mensagem}\n\n**Metas recomendadas:**\n${plan.metas.map(m => `• ${m}`).join('\n')}\n\nAtualize sua análise no Dashboard para um novo plano!`;
    }
    return `📋 **Você ainda não gerou um plano.**\n\nAcesse o Dashboard, preencha o formulário e clique em "Gerar plano inteligente". Posso te ajudar a interpretar os resultados depois!`;
  },
  '/dica': () => {
    const dicas = [
      "💡 **Dica FocusIA:** Desative notificações de apps não essenciais. Você ganha em média 45 minutos por dia.",
      "💡 **Dica FocusIA:** Use a regra 20-20-20: a cada 20 minutos, olhe para algo a 20 pés (6m) de distância por 20 segundos.",
      "💡 **Dica FocusIA:** Mantenha o celular em outra cômodo durante o trabalho. O simples ato de levantar reduz o uso.",
      "💡 **Dica FocusIA:** O tema escuro cansa menos os olhos e pode reduzir a ansiedade digital.",
      "💡 **Dica FocusIA:** Defina uma 'hora de silêncio' diária - sem telas, notificações ou barulhos.",
      "💡 **Dica FocusIA:** Agrupe tarefas similares (email, mensagens, etc.) em blocos de 30 minutos."
    ];
    return dicas[Math.floor(Math.random() * dicas.length)];
  },
  '/motivar': () => {
    const frases = [
      "✨ **Você é capaz de mais do que imagina.** Cada pequeno passo de hoje constrói a versão focada do amanhã.",
      "⚡ **Lembre-se:** Você não precisa ser perfeito, só precisa começar. A perfeição é inimiga do progresso.",
      "🔥 **Seu eu do futuro vai agradecer** pelas escolhas que você faz agora. Vamos lá!",
      "🎯 **O algoritmo quer sua atenção. Você quer seu foco.** Quem é mais forte hoje?",
      "💪 **Recaídas acontecem.** O importante não é nunca cair, mas sempre levantar. Continue!"
    ];
    return frases[Math.floor(Math.random() * frases.length)];
  },
  '/score': () => {
    const score = localStorage.getItem('focusia_score');
    if (score) {
      const scoreNum = parseInt(score);
      let feedback = '';
      if (scoreNum >= 75) feedback = 'Excelente! Seu comportamento digital é muito saudável. 🎉';
      else if (scoreNum >= 45) feedback = 'Bom. Há espaço para melhorias, mas você está no caminho certo. 📈';
      else feedback = 'Atenção. Sua dependência digital merece cuidado imediato. ⚠️';
      return `📊 **Seu Score FocusIA:** ${scoreNum}%\n\n${feedback}\n\nQuer gerar um novo plano? Acesse o Dashboard.`;
    }
    return `📊 **Você ainda não tem um score.**\n\nPreencha o formulário no Dashboard para receber sua primeira análise.`;
  },
  '/ajuda': () => {
    return `📖 **Comandos disponíveis:**\n\n• /plano - Ver seu último plano\n• /dica - Receber uma dica de produtividade\n• /motivar - Frase motivacional personalizada\n• /score - Ver sua pontuação atual\n• /ajuda - Mostrar este menu\n\n💬 Ou apenas converse comigo sobre foco, ansiedade, procrastinação, sono ou uso de celular!`;
  }
};

let conversationHistory = [];
let currentContext = {
  lastScore: null,
  lastPlan: null,
  userLevel: null
};

// Carregar contexto
function loadContext() {
  const savedScore = localStorage.getItem('focusia_score');
  const savedPlan = localStorage.getItem('focusia_last_plan');
  
  if (savedScore) currentContext.lastScore = parseInt(savedScore);
  if (savedPlan) {
    currentContext.lastPlan = JSON.parse(savedPlan);
    if (currentContext.lastScore >= 75) currentContext.userLevel = 'saudável';
    else if (currentContext.lastScore >= 45) currentContext.userLevel = 'moderado';
    else currentContext.userLevel = 'crítico';
  }
}

// Salvar plano no contexto
function salvarPlanoNoContexto(score, plano) {
  currentContext.lastScore = score;
  currentContext.lastPlan = plano;
  
  if (score >= 75) currentContext.userLevel = 'saudável';
  else if (score >= 45) currentContext.userLevel = 'moderado';
  else currentContext.userLevel = 'crítico';
  
  localStorage.setItem('focusia_last_plan', JSON.stringify(plano));
}

// Detectar intenção
function detectIntent(text) {
  const lowerText = text.toLowerCase();
  
  for (const category in knowledgeBase) {
    if (category === 'default') continue;
    
    const data = knowledgeBase[category];
    for (const keyword of data.keywords) {
      if (lowerText.includes(keyword)) {
        return { category, analysis: data.analyze ? data.analyze(text) : null };
      }
    }
  }
  
  return { category: 'default', analysis: null };
}

// Gerar resposta com contexto
function generateResponse(intent, userMessage) {
  const categoryData = knowledgeBase[intent.category];
  const responses = categoryData.responses;
  
  let response = responses[Math.floor(Math.random() * responses.length)];
  
  if (currentContext.lastScore !== null && intent.category !== 'default') {
    if (currentContext.userLevel === 'crítico' && intent.category === 'procrastinacao') {
      response += "\n\n⚠️ **Nota importante:** Seu score atual indica um padrão crítico. Considere seguir rigorosamente o plano recomendado no Dashboard.";
    } else if (currentContext.userLevel === 'saudável' && intent.category === 'foco') {
      response += "\n\n✅ **Ótimo trabalho!** Seu score está saudável. Continue mantendo esses hábitos positivos.";
    }
  }
  
  if (intent.analysis) {
    response += `\n\n📊 **Análise em tempo real:** ${intent.analysis.suggestion}`;
  }
  
  return response;
}

// Processar comandos
function processQuickCommand(command) {
  const lowerCommand = command.toLowerCase();
  
  if (quickCommands[lowerCommand]) {
    return quickCommands[lowerCommand]();
  }
  
  if (command.startsWith('/')) {
    return `❓ **Comando não reconhecido:** "${command}"\n\nDigite /ajuda para ver todos os comandos disponíveis.`;
  }
  
  return null;
}

// Função principal da IA
window.getAIResponse = function(userMessage, onComplete) {
  const quickResponse = processQuickCommand(userMessage);
  if (quickResponse) {
    if (onComplete) onComplete(quickResponse);
    return quickResponse;
  }
  
  const intent = detectIntent(userMessage);
  const response = generateResponse(intent, userMessage);
  
  conversationHistory.push({ role: 'user', content: userMessage, timestamp: new Date().toISOString() });
  conversationHistory.push({ role: 'assistant', content: response, timestamp: new Date().toISOString() });
  
  if (conversationHistory.length > 20) {
    conversationHistory = conversationHistory.slice(-20);
  }
  
  if (onComplete) onComplete(response);
  return response;
};

// Exportar funções
window.salvarPlanoNoContexto = salvarPlanoNoContexto;
window.currentContext = currentContext;

// Inicializar
loadContext();