import { loadHabits, saveHabits, loadHistory, saveHistory } from './storage.js';
import { createHabit, incrementHabit, markCompleted, calcCompleted } from './habits.js';
import { renderHabits, renderDashboard, renderStats } from './ui.js';

const form = document.getElementById('habit-form');
const list = document.getElementById('habit-list');
const emptyState = document.getElementById('empty-state');
const header = document.getElementById('site-header');
const colorOptions = document.getElementById('color-options');
const colorInput = document.getElementById('habit-color');

let habits = loadHabits();
let history = loadHistory();

if (!Array.isArray(habits)) habits = [];

function paint(){
  habits = habits.map(h=>({ ...h, completed: calcCompleted(h) }));
  renderHabits(list, habits);
  renderDashboard(habits);
  renderStats(habits, history);
  saveHabits(habits);
  saveHistory(history);
  emptyState.style.display = habits.length ? 'none' : 'block';
}

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = document.getElementById('habit-name').value.trim();
  const category = document.getElementById('habit-category').value;
  const type = document.getElementById('habit-type').value;
  const goal = Number(document.getElementById('habit-goal').value);
  const unit = document.getElementById('habit-unit').value.trim();
  const color = colorInput.value;

  if (!name || !unit || !goal || goal < 1) return;

  const habit = createHabit({ name, category, type, goal, unit, color });
  habits = [...habits, habit];
  paint();

  form.reset();
  colorInput.value = '#e35d6a';
  document.querySelectorAll('.color-chip').forEach(c=>c.classList.remove('selected'));
  document.querySelector('.color-chip[data-color="#e35d6a"]').classList.add('selected');
});

list.addEventListener('click', (e)=>{
  const card = e.target.closest('.habit-card'); if(!card) return;
  const id = card.dataset.id; const action = e.target.dataset.action;
  if (action === 'delete') { habits = habits.filter(h=>h.id!==id); paint(); return; }
  habits = habits.map(h=> h.id!==id ? h : (action==='sum' ? incrementHabit(h) : action==='complete' ? markCompleted(h) : h));
  paint();
});

colorOptions.addEventListener('click', (e)=>{
  const chip = e.target.closest('.color-chip'); if(!chip) return;
  document.querySelectorAll('.color-chip').forEach(c=>c.classList.remove('selected'));
  chip.classList.add('selected');
  colorInput.value = chip.dataset.color;
});

window.addEventListener('scroll', ()=> header.classList.toggle('scrolled', window.scrollY > 10));
const hr = new Date().getHours();
document.getElementById('welcome-message').textContent = `${hr<12?'Buenos días':hr<19?'Buenas tardes':'Buenas noches'}, lista para un gran día`;
paint();