import { Check } from 'lucide-react';

function HabitCard({ habit }) {
  const progress = habit.goal === 0 ? 0 : Math.min(100, Math.round((habit.current / habit.goal) * 100));

  return (
    <article className="habit-card">
      <div className="habit-card-header">
        <span className="habit-icon" style={{ backgroundColor: habit.color }} aria-hidden="true" />
        <div>
          <h3>{habit.name}</h3>
          <p className="muted">{habit.category}</p>
        </div>
        <button className="check-button" type="button" aria-label={`Completar ${habit.name}`}>
          <Check size={16} />
        </button>
      </div>

      <div className="habit-progress-copy">
        <span>Progreso</span>
        <strong>
          {habit.current} / {habit.goal} {habit.unit}
        </strong>
      </div>

      <div className="progress-track small">
        <div className="progress-fill" style={{ width: `${progress}%`, backgroundColor: habit.color }} />
      </div>
    </article>
  );
}

export default HabitCard;