import { percent } from '../js/habits.js';

export function habitCardTemplate(h){
  const typeLabel = h.type==='yesno'?'Sí/No':h.type==='quantity'?'Cantidad':'Tiempo';
  return `
    <article class="habit-card ${h.completed?'done':''}" data-id="${h.id}">
      <div class="habit-head">
        <div>
          <h3>${h.name}</h3>
          <div><span class="badge">${h.category}</span> <span class="badge">${typeLabel}</span></div>
        </div>
        <span class="badge" style="background:${h.color}22;color:${h.color}">${percent(h)}%</span>
      </div>
      <p>Progreso: ${h.progress}/${h.type==='yesno'?1:h.goal} ${h.unit}</p>
      <div class="progress-track"><div class="progress-fill" style="width:${percent(h)}%;background:${h.color}"></div></div>
      <div class="habit-actions">
        <button class="btn-soft" data-action="sum">+ Avance</button>
        <button class="btn-primary" data-action="complete">Completar</button>
        <button class="btn-danger" data-action="delete">Eliminar</button>
      </div>
    </article>`;
}