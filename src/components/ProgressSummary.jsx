import { BarChart3, Target } from 'lucide-react';

function ProgressSummary({ habits }) {
  const total = habits.length;
  const completed = habits.filter((habit) => habit.completed).length;
  const pending = total - completed;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <aside id="progreso" className="surface-card progress-summary">
      <div className="section-heading compact">
        <span className="eyebrow">Resumen</span>
        <h2>Resumen del día</h2>
      </div>

      <div className="progress-circle" style={{ '--progress': `${percentage * 3.6}deg` }}>
        <div>
          <strong>{percentage}%</strong>
          <span>completado</span>
        </div>
      </div>

      <div className="summary-list">
        <article>
          <span className="summary-icon completed"><Target size={16} /></span>
          <div>
            <span>Completados</span>
            <strong>{completed}</strong>
          </div>
        </article>
        <article>
          <span className="summary-icon pending"><BarChart3 size={16} /></span>
          <div>
            <span>Pendientes</span>
            <strong>{pending}</strong>
          </div>
        </article>
        <article>
          <span className="summary-icon total"><BarChart3 size={16} /></span>
          <div>
            <span>Total</span>
            <strong>{total}</strong>
          </div>
        </article>
      </div>
    </aside>
  );
}

export default ProgressSummary;