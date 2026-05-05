import { habitCardTemplate } from '../components/habit-card.js';

export function renderHabits(listEl, habits){ listEl.innerHTML = habits.map(habitCardTemplate).join(''); }

export function renderDashboard(habits){
  const total = habits.length;
  const completed = habits.filter(h=>h.completed).length;
  const pending = Math.max(0,total-completed);
  const p = total ? Math.round((completed/total)*100) : 0;
  document.getElementById('total-count').textContent = total;
  document.getElementById('completed-count').textContent = completed;
  document.getElementById('pending-count').textContent = pending;
  document.getElementById('progress-fill').style.width = `${p}%`;
  document.getElementById('progress-label').textContent = `${p}%`;
  document.getElementById('motivation').textContent = p===100 ? 'Excelente, completaste todo hoy.' : p>=60 ? 'Vas muy bien, mantén el ritmo.' : p>0 ? 'Buen inicio, sigue avanzando.' : 'Comienza con un pequeño paso hoy.';
}

export function renderStats(habits, history){
  const today = new Date().toISOString().slice(0,10);
  history[today] = habits.length ? Math.round((habits.filter(h=>h.completed).length/habits.length)*100) : 0;
  const values = Object.entries(history).sort((a,b)=>a[0].localeCompare(b[0])).map(([,v])=>v);
  const avg = arr => arr.length ? Math.round(arr.reduce((a,b)=>a+b,0)/arr.length) : 0;
  const weekly = values.slice(-7), monthly = values.slice(-30);
  document.getElementById('weekly-average').textContent = `${avg(weekly)}%`;
  document.getElementById('monthly-average').textContent = `${avg(monthly)}%`;
  let streak=0; for(let i=values.length-1;i>=0&&values[i]>=100;i--) streak++;
  document.getElementById('streak').textContent = `${streak} días`;
}