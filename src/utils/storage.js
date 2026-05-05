const STORAGE_KEY = 'habit-bloom-habits';

export function loadHabits() {
  const storedHabits = window.localStorage.getItem(STORAGE_KEY);
  return storedHabits ? JSON.parse(storedHabits) : [];
}

export function saveHabits(habits) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
}