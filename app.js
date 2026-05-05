let habits = [
  { name: "Tomar agua", done: false },
  { name: "Hacer ejercicio", done: false },
  { name: "Estudiar", done: false }
];

function renderHabits() {
  const list = document.getElementById("habit-list");
  list.innerHTML = "";

  habits.forEach((habit, index) => {
    const div = document.createElement("div");
    div.className = "habit-card";

    div.innerHTML = `
      <p>${habit.name}</p>
      <button onclick="toggleHabit(${index})">
        ${habit.done ? "✅ Hecho" : "❌ Pendiente"}
      </button>
    `;

    list.appendChild(div);
  });
}

function toggleHabit(index) {
  habits[index].done = !habits[index].done;
  renderHabits();
}

function addHabit() {
  const name = prompt("Nombre del hábito:");
  if (name) {
    habits.push({ name, done: false });
    renderHabits();
  }
}

renderHabits();