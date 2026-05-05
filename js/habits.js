export function createHabit({name,category,type,goal,unit,color}){
  return { id: crypto.randomUUID(), name, category, type, goal:Number(goal), unit, color, progress:0, completed:false };
}
export function calcCompleted(h){ return h.type==='yesno' ? h.progress>=1 : h.progress>=h.goal; }
export function incrementHabit(h){
  if(h.type==='yesno'){ const next = h.progress>=1?0:1; return {...h, progress:next, completed: next>=1}; }
  const next = Math.min(h.goal, h.progress+1);
  return {...h, progress:next, completed:next>=h.goal};
}
export function markCompleted(h){
  if(h.type==='yesno') return {...h, progress:1, completed:true};
  return {...h, progress:h.goal, completed:true};
}
export function percent(h){ const goal=h.type==='yesno'?1:Math.max(1,h.goal); return Math.min(100, Math.round((h.progress/goal)*100)); }