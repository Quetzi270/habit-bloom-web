const KEY = 'habitBloomHabitsV2';
const HISTORY_KEY = 'habitBloomHistoryV1';

export function loadHabits(){
  try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; }
}
export function saveHabits(habits){ localStorage.setItem(KEY, JSON.stringify(habits)); }
export function loadHistory(){
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY)) || {}; } catch { return {}; }
}
export function saveHistory(history){ localStorage.setItem(HISTORY_KEY, JSON.stringify(history)); }