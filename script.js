// ==============================
// FOCUSIA - SCRIPT PRINCIPAL
// ==============================

// ---------- SISTEMA DE ABAS ----------
const menuButtons = document.querySelectorAll('.menu-btn');
const tabs = document.querySelectorAll('.tab-content');

menuButtons.forEach((button) => {
  button.addEventListener('click', () => {
    menuButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const target = button.dataset.tab;
    tabs.forEach((tab) => tab.classList.add('hidden-tab'));
    document.getElementById(target).classList.remove('hidden-tab');
  });
});

// ---------- VARIÁVEIS GLOBAIS ----------
let lastScore = 0;

// ---------- CÁLCULO DO SCORE ----------
function calcularScore(horas, concentracao, ansiedade, sono) {
  const total = horas + concentracao + ansiedade + sono;
  const maximo = 16;
  const percentual = ((maximo - total) / maximo) * 100;
  return Math.min(100, Math.max(0, Math.round(percentual)));
}

// ---------- GERAR PLANO COM IA ----------
function gerarPlano(score) {
  if (score >= 75) {
    return {
      mensagem: '🧠 **A IA identificou um comportamento saudável e estável.** Seus hábitos digitais estão equilibrados. Continue assim!',
      metas: [
        '🎯 Usar modo foco 1x por dia',
        '🌿 Pausa offline de 20 minutos',
        '🌙 Evitar celular antes de dormir'
      ]
    };
  } else if (score >= 45) {
    return {
      mensagem: '⚠️ **A IA detectou distração moderada e sinais de queda de produtividade.** Pequenos ajustes podem trazer grandes resultados.',
      metas: [
        '📱 Reduzir tempo em redes sociais',
        '⚡ 2 sessões de foco por dia',
        '😴 Dormir sem celular'
      ]
    };
  } else {
    return {
      mensagem: '🔴 **A IA identificou alto nível de dependência digital.** É hora de agir! Siga as recomendações abaixo.',
      metas: [
        '🚫 Limite rígido de redes sociais',
        '⏱️ 3 sessões de foco diárias',
        '📴 Horários sem celular',
        '🎬 Reduzir vídeos curtos'
      ]
    };
  }
}

// ---------- ATUALIZAR DASHBOARD ----------
function atualizarDashboard(score, plano, evolucao) {
  document.getElementById('score').innerHTML = `${score}%`;
  document.getElementById('progressBar').style.width = `${score}%`;
  
  let statusText = '';
  if (score >= 75) statusText = '✅ Saudável';
  else if (score >= 45) statusText = '⚠️ Moderado';
  else statusText = '🔴 Crítico';
  document.getElementById('status').innerHTML = statusText;
  
  document.getElementById('evolucao').innerHTML = `${evolucao >= 0 ? '+' : ''}${evolucao}%`;
  if (evolucao > 0) document.getElementById('evolucao').style.color = '#22c55e';
  else if (evolucao < 0) document.getElementById('evolucao').style.color = '#ef4444';
  else document.getElementById('evolucao').style.color = '#94a3b8';
  
  const streak = updateStreak();
  document.getElementById('streak').innerHTML = `${streak} ${streak === 1 ? 'dia' : 'dias'}`;
  
  document.getElementById('mensagem').innerHTML = plano.mensagem;
  const metasList = document.getElementById('dicas');
  metasList.innerHTML = '';
  plano.metas.forEach(meta => {
    const li = document.createElement('li');
    li.innerHTML = meta;
    metasList.appendChild(li);
  });
  
  const metasDiv = document.getElementById('metas');
  if (metasDiv) {
    metasDiv.innerHTML = '';
    plano.metas.forEach(meta => {
      const goalDiv = document.createElement('div');
      goalDiv.className = 'goal';
      goalDiv.innerHTML = meta;
      metasDiv.appendChild(goalDiv);
    });
  }
}

// ---------- SUBMISSÃO DO FORMULÁRIO ----------
const form = document.getElementById('formulario');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const horas = parseInt(document.getElementById('horas').value);
    const concentracao = parseInt(document.getElementById('concentracao').value);
    const ansiedade = parseInt(document.getElementById('ansiedade').value);
    const sono = parseInt(document.getElementById('sono').value);
    
    const novoScore = calcularScore(horas, concentracao, ansiedade, sono);
    const scoreAnterior = pegarScoreAnterior();
    const evolucao = novoScore - scoreAnterior;
    
    const plano = gerarPlano(novoScore);
    
    atualizarDashboard(novoScore, plano, evolucao);
    salvarPlanoCompleto(novoScore, plano);
    
    lastScore = novoScore;
    
    const notificacao = document.createElement('div');
    notificacao.style.position = 'fixed';
    notificacao.style.bottom = '20px';
    notificacao.style.right = '20px';
    notificacao.style.backgroundColor = '#0f172a';
    notificacao.style.border = '1px solid #3b82f6';
    notificacao.style.borderRadius = '12px';
    notificacao.style.padding = '12px 20px';
    notificacao.style.zIndex = '1000';
    notificacao.style.animation = 'fadeIn 0.3s ease';
    notificacao.innerHTML = `✅ Plano gerado! Seu score é ${novoScore}%`;
    document.body.appendChild(notificacao);
    setTimeout(() => notificacao.remove(), 3000);
  });
}

// ---------- TIMER POMODORO ----------
let timerInterval;
let timeLeft = 25 * 60;
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateTimerDisplay() {
  if (timerDisplay) timerDisplay.textContent = formatTime(timeLeft);
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      isRunning = false;
      const streak = getStreak();
      alert('🎉 Parabéns! Sessão de foco concluída!');
      const notif = document.createElement('div');
      notif.style.position = 'fixed';
      notif.style.bottom = '20px';
      notif.style.right = '20px';
      notif.style.backgroundColor = '#22c55e';
      notif.style.color = '#fff';
      notif.style.borderRadius = '12px';
      notif.style.padding = '12px 20px';
      notif.style.zIndex = '1000';
      notif.innerHTML = '🎯 Sessão concluída! Descanso merecido!';
      document.body.appendChild(notif);
      setTimeout(() => notif.remove(), 3000);
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  timeLeft = 25 * 60;
  updateTimerDisplay();
}

if (startBtn) startBtn.addEventListener('click', startTimer);
if (pauseBtn) pauseBtn.addEventListener('click', pauseTimer);
if (resetBtn) resetBtn.addEventListener('click', resetTimer);

updateTimerDisplay();

// ---------- CHAT IA PROFISSIONAL ----------
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatBox = document.getElementById('chatBox');

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

function addMessage(type, text, isSystem = false) {
  const message = document.createElement('div');
  message.classList.add(type === 'ai' ? 'ai-message' : 'user-message');
  
  let formattedText = text;
  if (type === 'ai') {
    formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formattedText = formattedText.replace(/\n/g, '<br>');
  }
  
  message.innerHTML = `
    <div>${formattedText}</div>
    <div class="message-time">${getCurrentTime()}</div>
  `;
  
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function showTyping() {
  const typing = document.createElement('div');
  typing.classList.add('ai-message');
  typing.id = 'typing';
  typing.innerHTML = '🤖 FocusIA está analisando...';
  chatBox.appendChild(typing);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTyping() {
  const typing = document.getElementById('typing');
  if (typing) typing.remove();
}

function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;
  
  addMessage('user', text);
  userInput.value = '';
  
  showTyping();
  
  if (window.getAIResponse) {
    window.getAIResponse(text, (response) => {
      removeTyping();
      addMessage('ai', response);
    });
  } else {
    setTimeout(() => {
      removeTyping();
      addMessage('ai', '🤖 Estou aqui para ajudar! Por favor, recarregue a página se os problemas persistirem.');
    }, 500);
  }
}

if (sendBtn) sendBtn.addEventListener('click', sendMessage);
if (userInput) userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

function showWelcomeMessage() {
  setTimeout(() => {
    const savedScore = localStorage.getItem('focusia_score');
    if (savedScore && parseInt(savedScore) > 0) {
      addMessage('ai', `👋 **Bem-vindo de volta!**\n\nSeu último score foi ${savedScore}%. Quer ver seu plano atualizado? Digite /plano ou me fale como está seu foco hoje.`);
    } else {
      addMessage('ai', `👋 **Olá! Sou a FocusIA**, sua assistente de produtividade e bem-estar digital.\n\n💬 **Você pode:**\n• Conversar sobre procrastinação, ansiedade, foco, sono ou uso de celular\n• Digitar **/ajuda** para ver todos os comandos\n• Fazer uma análise no Dashboard para receber um plano personalizado\n\nComo posso ajudar você hoje?`);
    }
  }, 300);
}

if (chatBox) showWelcomeMessage();

// ---------- INICIALIZAÇÃO ----------
const savedScore = localStorage.getItem('focusia_score');
if (savedScore) {
  const oldPlan = gerarPlano(parseInt(savedScore));
  const oldScore = pegarScoreAnterior();
  atualizarDashboard(parseInt(savedScore), oldPlan, 0);
}