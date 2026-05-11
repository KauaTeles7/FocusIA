// ==============================
// STORAGE MANAGER - FOCUSIA
// ==============================

function salvarDados(score) {
  localStorage.setItem('focusia_score', score);
}

function pegarScoreAnterior() {
  return Number(localStorage.getItem('focusia_score')) || 0;
}

function salvarPlanoCompleto(score, plano) {
  const planoData = {
    score: score,
    mensagem: plano.mensagem,
    metas: plano.metas,
    data: new Date().toISOString()
  };
  
  localStorage.setItem('focusia_last_plan', JSON.stringify(planoData));
  localStorage.setItem('focusia_score', score);
  
  if (window.salvarPlanoNoContexto) {
    window.salvarPlanoNoContexto(score, planoData);
  }
}

function getStreak() {
  let streak = localStorage.getItem('focusia_streak');
  return streak ? parseInt(streak) : 0;
}

function updateStreak() {
  let streak = getStreak();
  const lastDate = localStorage.getItem('focusia_last_date');
  const today = new Date().toDateString();
  
  if (lastDate === today) return streak;
  
  if (lastDate) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (lastDate === yesterday.toDateString()) {
      streak++;
    } else {
      streak = 1;
    }
  } else {
    streak = 1;
  }
  
  localStorage.setItem('focusia_streak', streak);
  localStorage.setItem('focusia_last_date', today);
  return streak;
}