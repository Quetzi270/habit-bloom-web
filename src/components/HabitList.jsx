import EmptyState from './EmptyState.jsx';
import HabitCard from './HabitCard.jsx';

const today = new Intl.DateTimeFormat('es', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
}).format(new Date());

function HabitList({ habits }) {
  return (
    <section id="habitos" className="habits-section" aria-labelledby="habit-list-title">
      <div className="section-heading">
        <span className="eyebrow">Mis hábitos</span>
        <h2 id="habit-list-title">Tus hábitos de hoy</h2>
        <p className="muted">{today}</p>
      </div>

      {habits.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="habit-grid">
          {habits.map((habit) => (
            <HabitCard key={habit.id} habit={habit} />
          ))}
        </div>
      )}
    </section>
  );
}

export default HabitList;